import React from "react";
import { UserDoc, UserProps } from "../../types/global";
import { Box, Center, Divider, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Layout";
import EditIcons from "../../components/userIdPage/EditIcons";
import HeightSpacer from "../../components/HeightSpacer";
import ProfileImage from "../../components/userIdPage/ProfileImage";
import UserNameText from "../../components/userIdPage/UserNameText";
import Radios from "../../components/userIdPage/radios/Radios";
import { setLoginUserState } from "../../functions/setLoginUserState";
import { initialState } from "../../redux/slice";
import { fetchUserDocs } from "../../functions/fetchUserDoc";

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
              <EditIcons userProps={userProps} />
              <ProfileImage userProps={userProps} />
              <UserNameText userProps={userProps} />
              <Divider mb={5} />
              <Box pl={{ base: 2, md: 10 }} pr={{ base: 2, md: 10 }} w="100%">
                <Center flexDirection="column" w="100%">
                  <Text
                    pt={2}
                    pb={2}
                    color="blackAlpha.700"
                    fontWeight="bold"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    my listening radio programs are following....
                  </Text>
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
