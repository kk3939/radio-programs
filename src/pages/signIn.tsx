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
            w={{ base: "90%", sm: "70%", md: "50%", lg: "35%", xl: "30%" }}
            borderRadius="25px"
            pt={10}
            pl={10}
            pr={10}
            pb={20}
            boxShadow="lg"
          >
            <Center
              h="100px"
              fontSize={{ base: "2xl" }}
              color="black"
              p={2}
              fontWeight="bold"
            >
              Log in to your account.
            </Center>
            <Center>
              <SimpleGrid columns={1} spacing={2} pr={8} pl={8} pt={2} pb={2}>
                <Center>
                  <Icon
                    role="button"
                    as={FcGoogle}
                    w={16}
                    h={16}
                    aria-pressed="false"
                    tabIndex={0}
                    aria-label="signIn"
                    onClick={() => {
                      signInWithGoogle(router, toast);
                    }}
                  />
                </Center>
                <Center>
                  <Text
                    color="gray.400"
                    role="button"
                    aria-pressed="false"
                    tabIndex={0}
                    aria-label="signIn"
                    onClick={() => {
                      signInWithGoogle(router, toast);
                    }}
                  >
                    Sign in with Google
                  </Text>
                </Center>
                <Button
                  colorScheme="blackAlpha"
                  mt={5}
                  color="white"
                  size="sm"
                  fontWeight="bold"
                  onClick={() => router.push("/")}
                >
                  Radio Programsとは？
                </Button>
              </SimpleGrid>
            </Center>
          </Box>
        </Center>
      </Layout>
    </>
  );
};

export default SignIn;
