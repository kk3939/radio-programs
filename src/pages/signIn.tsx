import React from "react";
import { Box, Center, useToast } from "@chakra-ui/react";
import Layout from "../components/Common/Layout";
import LoginText from "../components/signInPage/LoginText";
import SignInFlexButton from "../components/signInPage/SignInFlexButton";
import PushToIndexButton from "../components/signInPage/PushToIndexButton";
import { signInWithGoogle } from "../functions/authentication";
import { useRouter } from "next/router";

const SignIn: React.VFC = () => {
  const router = useRouter();
  const toast = useToast();
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
              <SignInFlexButton
                onClick={() => signInWithGoogle(router, toast)}
              />
              <PushToIndexButton onClick={() => router.push("/")} />
            </Center>
          </Box>
        </Center>
      </Layout>
    </>
  );
};

export default SignIn;
