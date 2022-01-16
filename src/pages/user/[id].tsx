import React from "react";
import { UserDoc, UserProps } from "../../types/global";
import { Box, Center, Divider } from "@chakra-ui/react";
import Footer from "../../components/Common/Footer/Footer";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Common/Layouts/Layout";
import IconButtonsMenu from "../../components/userIdPage/IconButtonsMenu";
import HeightSpacer from "../../components/Common/Layouts/HeightSpacer";
import UserNameText from "../../components/userIdPage/UserNameText";
import Radios from "../../components/userIdPage/radios/Radios";
import { setLoginUserState } from "../../functions/firestore/authentication";
import { initialState } from "../../redux/slice";
import { fetchUserDocs } from "../../functions/firestore/fetchUserDoc";
import { Text } from "../../components/Common/Text/Text";
import Image from "../../components/Common/Image/Image";
import { returnPhotoUrl } from "../../functions/validation";

const UserPage: React.VFC<UserProps> = (userProps) => {
  // カスタムフックでAuthからstateをset
  setLoginUserState(userProps);

  return (
    <>
      <Layout>
        <HeightSpacer spacePixel="100px" />
        <Center>
          <Box
            align="center"
            justifyContent="center"
            bg="white"
            w={{ base: "90%", md: "70%" }}
            borderRadius="25px"
            p={{ base: 2, sm: 5 }}
            boxShadow="lg"
          >
            <Center flexDirection="column" pos="relative">
              <IconButtonsMenu userProps={userProps} />
              <Image
                borderRadius="full"
                boxSize="100px"
                src={returnPhotoUrl(userProps.photoUrl)}
                alt="user"
              />
              <UserNameText userProps={userProps} />
              <Divider mb={5} />
              <Box pl={{ base: 2, md: 10 }} pr={{ base: 2, md: 10 }} w="100%">
                <Center flexDirection="column" w="100%">
                  <Text
                    pt={2}
                    pb={2}
                    color="blackAlpha.700"
                    fontSize={{ base: "xs", md: "sm" }}
                    text="my listening radio programs are following...."
                  />
                  <Radios userProps={userProps} />
                </Center>
              </Box>
            </Center>
          </Box>
        </Center>
        <HeightSpacer spacePixel="250px" />
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
  if (id === undefined || Array.isArray(id)) {
    return {
      props: initialState,
    };
  }
  const userProps: UserDoc = await fetchUserDocs(id);

  return {
    props: userProps,
  };
};
