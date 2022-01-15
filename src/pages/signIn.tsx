import React from "react";
import { Box, Center, useToast } from "@chakra-ui/react";
import Layout from "../components/Common/Layouts/Layout";
import { Text } from "../components/Common/Text/Text";
import {
  GrayButton,
  SignInButton,
} from "../components/Common/Buttons/NormalButton";
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
            <Text
              fontSize="2xl"
              color="black"
              pt={10}
              pr={2}
              pl={2}
              pb={10}
              text="Log in to your account."
            />
            <Center align="center" flexDirection="column">
              <SignInButton
                onClick={() => signInWithGoogle(router, toast)}
                text="SignIn with Google"
              />
              <GrayButton
                onClick={() => router.push("/")}
                text="radio programsとは？"
              />
            </Center>
          </Box>
        </Center>
      </Layout>
    </>
  );
};

export default SignIn;
