import React from "react";
import {
  Box,
  Center,
  Button,
  Text,
  Icon,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import Layout from "../components/Common/Layout";
import LoginText from "../components/signInPage/LoginText";
import SignInFlexButton from "../components/signInPage/SignInFlexButton";
import PushToIndexButton from "../components/signInPage/PushToIndexButton";

const SignIn: React.VFC = () => {
  return (
    <>
      <Layout>
        <Center align="center" flexDirection="column" minH="100vh">
          <Box
            bg="white"
            w={{ base: "90%", sm: "70%", md: "60%", lg: "50%", xl: "30%" }}
            borderRadius="25px"
            p={5}
            boxShadow="lg"
          >
            <LoginText />
            <Center align="center" flexDirection="column">
              <SignInFlexButton />
              <PushToIndexButton />
            </Center>
          </Box>
        </Center>
      </Layout>
    </>
  );
};

export default SignIn;
