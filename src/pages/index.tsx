import React from "react";
import Link from "next/link";
import { Center, Text } from "@chakra-ui/react";

const Index: React.VFC = () => {
  return (
    <>
      <Link href="/signIn">
        <Center>
          <Text color="white">login</Text>
        </Center>
      </Link>
    </>
  );
};

export default Index;
