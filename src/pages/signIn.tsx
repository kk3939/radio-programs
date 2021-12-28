import React from "react";
import { Box, Center, Button, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { UserDoc } from "../types/global";
import Layout from "../components/Layout";

const SignIn: React.VFC = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const signInWithGoogle = (): void => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user: User = result.user;
        const docData: UserDoc = {
          id: user.uid,
          photoUrl: user.photoURL,
          name: user.displayName,
          radios: [
            {
              index: 0,
              name: "三四郎のオールナイトニッポン0",
            },
          ],
        };
        await setDoc(doc(db, "users", user.uid), docData);
        router.push(`/user/${user.uid}`);
      })
      .catch((error) => {
        console.log(error);
        router.push("/");
      });
  };
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
                      signInWithGoogle();
                    }}
                  />
                </Center>
                <Center>
                  <Text
                    color="gray.400"
                    role="button"
                    onClick={() => {
                      signInWithGoogle();
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
