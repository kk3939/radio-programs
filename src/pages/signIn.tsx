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
import { FcGoogle } from "react-icons/fc";
import Layout from "../components/Layout";
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
            <Center
              h="100px"
              fontSize="2xl"
              color="black"
              p={2}
              fontWeight="bold"
            >
              Log in to your account.
            </Center>
            <Center align="center" flexDirection="column">
              <Center
                align="center"
                flexDirection="column"
                p={2}
                role="button"
                aria-pressed="false"
                tabIndex={0}
                aria-label="signIn"
                onClick={() => {
                  signInWithGoogle(router, toast);
                }}
              >
                <Icon as={FcGoogle} w={20} h={20} mb={2} />
                <Text
                  color="gray.400"
                  fontSize={{ base: "xs", md: "md" }}
                  fontWeight="bold"
                >
                  Sign in with Google
                </Text>
              </Center>
              <Button
                colorScheme="blackAlpha"
                color="white"
                mt={10}
                mb={10}
                size="sm"
                fontWeight="bold"
                onClick={() => router.push("/")}
              >
                Radio Programsとは？
              </Button>
            </Center>
          </Box>
        </Center>
      </Layout>
    </>
  );
};

export default SignIn;
