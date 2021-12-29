import React from "react";
import { Box, Center, Button, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Layout from "../components/Layout";
import { signInWithGoogle } from "../functions/authentication";
import { useRouter } from "next/router";

const SignIn: React.VFC = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Box h="150px" />
        <Center>
          <Box
            bg="white"
            h="400px"
            w="30%"
            borderRadius="25px"
            pt={10}
            pr={10}
            pl={10}
            boxShadow="lg"
          >
            <Center
              h="100px"
              fontSize="3xl"
              color="black"
              p={5}
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
                    onClick={() => {
                      signInWithGoogle(router);
                    }}
                  />
                </Center>
                <Center>
                  <Text
                    color="gray.400"
                    role="button"
                    onClick={() => {
                      signInWithGoogle(router);
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
