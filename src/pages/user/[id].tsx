import React from "react";
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { UserDoc } from "../../types/global";
import { Flex, Box, Center, Divider, Image, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Layout";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const UserPage: React.VFC<UserDoc> = (userProps) => {
  const returnPhotoUrl = (arg: UserDoc): string | undefined => {
    if (arg.photoUrl === null) {
      return undefined;
    }
    return arg.photoUrl;
  };

  const returnUserName = (arg: UserDoc): string => {
    if (arg.name === null) {
      return "This user's name isn't setup.";
    }
    return arg.name;
  };
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  return (
    <>
      <Layout>
        <Box h="100px" />
        <Center>
          <Box
            align="center"
            justifyContent="center"
            bg="white"
            w="70%"
            borderRadius="25px"
            p={10}
            boxShadow="lg"
          >
            <Center flexDirection="column">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={returnPhotoUrl(userProps)}
                alt="user"
              />
              <Text fontSize="lg" fontWeight="bold" p={3}>
                {returnUserName(userProps)}
              </Text>
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
                    your listening radio programs are following....
                  </Text>
                  <Box w="100%" p={4}>
                    <Center>
                      <Box pl={10} pr={10}>
                        <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                          <Flex justifyContent="center" h="100%" align="center">
                            <Text>emoji</Text>
                          </Flex>
                        </Box>
                      </Box>
                      <Text fontSize="2xl" fontWeight="bold">
                        三四郎のオールナイトニッポン0
                      </Text>
                    </Center>
                  </Box>
                  <Box w="100%" p={4}>
                    <Center>
                      <Box pl={10} pr={10}>
                        <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                          <Flex justifyContent="center" h="100%" align="center">
                            <Text>emoji</Text>
                          </Flex>
                        </Box>
                      </Box>
                      <Text fontSize="2xl" fontWeight="bold">
                        三四郎のオールナイトニッポン0
                      </Text>
                    </Center>
                  </Box>
                  <Box w="100%" p={4}>
                    <Center>
                      <Box pl={10} pr={10}>
                        <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                          <Flex justifyContent="center" h="100%" align="center">
                            <Text>emoji</Text>
                          </Flex>
                        </Box>
                      </Box>
                      <Text fontSize="2xl" fontWeight="bold">
                        三四郎のオールナイトニッポン0
                      </Text>
                    </Center>
                  </Box>
                </Center>
              </Box>
            </Center>
          </Box>
        </Center>
        <Box h="250px" />
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
