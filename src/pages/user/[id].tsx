import React, { useEffect } from "react";
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { UserDoc, UserState } from "../../types/global";
import { Flex, Box, Center, Divider, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Layout";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { userSlice } from "../../redux/slice";
import EditIcons from "../../components/userIdPage/EditIcons";
import HandmadeSpacer from "../../components/Spacer";
import ProfileImage from "../../components/userIdPage/ProfileImage";
import UserNameText from "../../components/userIdPage/UserNameText";
import Radios from "../../components/userIdPage/Radios";

const UserPage: React.VFC<UserDoc> = (userProps) => {
  const dispatch = useDispatch();
  const userState: UserState = useSelector((state: RootState) => state.user);
  const isEdit: boolean = useSelector((state: RootState) => state.user.isEdit);

  useEffect(() => {
    // オブザーバーで監視しているため、初期化状態→authセットアップ完了で2回dispatchされる場合がある。
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docData: UserDoc = {
          id: user.uid,
          photoUrl: user.photoURL,
          name: user.displayName,
          radios: [],
        };
        dispatch(
          userSlice.actions.setUser({
            ...docData,
            isEdit: false,
          })
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <HandmadeSpacer spacePixel="100px" />
        <Center>
          <Box
            align="center"
            justifyContent="center"
            bg="white"
            w="70%"
            borderRadius="25px"
            p={5}
            boxShadow="lg"
          >
            <Center flexDirection="column" pos="relative">
              <EditIcons userProps={userProps} />
              <ProfileImage userProps={userProps} />
              <UserNameText userProps={userProps} />
              <Divider mb={5} />
              <Box pl={10} pr={10} w="100%">
                <Center flexDirection="column" w="100%">
                  <Text
                    pt={2}
                    pb={2}
                    color="blackAlpha.700"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    my listening radio programs are following....
                  </Text>
                  <Radios userProps={userProps} />
                </Center>
              </Box>
            </Center>
          </Box>
        </Center>
        <HandmadeSpacer spacePixel="250px" />
        <Footer />
      </Layout>
    </>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  if (context.params === undefined) {
    return {
      props: {},
    };
  }

  const params = context.params;
  const id = params.id;
  const fetchUserDocs = async () => {
    const initialState: UserDoc = {
      name: "",
      photoUrl: "",
      id: "",
      radios: [],
    };
    if (id === undefined || Array.isArray(id)) {
      return initialState;
    }
    const converter = () => ({
      toFirestore: (data: UserDoc) => data,
      fromFirestore: (
        snapshot: QueryDocumentSnapshot<DocumentData>
      ): UserDoc => {
        const data = snapshot.data();
        return {
          id: data.id,
          name: data.name,
          photoUrl: data.photoUrl,
          radios: data.radios,
        };
      },
    });

    const userDocRef: DocumentReference<UserDoc> = doc(
      db,
      "users",
      id
    ).withConverter(converter());
    const userDocSnap: DocumentSnapshot<UserDoc> = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const data: UserDoc = userDocSnap.data();
      return data;
      // eslint-disable-next-line no-else-return
    } else {
      return initialState;
    }
  };

  const userProps: UserDoc = await fetchUserDocs();

  return {
    props: userProps,
  };
};
