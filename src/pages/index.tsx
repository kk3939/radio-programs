import React from "react";
import Link from "next/link";
import { Center, Text } from "@chakra-ui/react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Index: React.VFC = () => {
  const signOutAction = () => {
    signOut(auth)
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Link href="/signIn">
        <Center>
          <Text color="white">login</Text>
        </Center>
      </Link>
      <Center>
        <Text color="white" role="button" onClick={() => signOutAction()}>
          logout
        </Text>
      </Center>
    </>
  );
};

export default Index;
