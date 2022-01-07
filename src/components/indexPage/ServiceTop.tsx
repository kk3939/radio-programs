import { Text, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import PushToSignInButton from "./PushToSignInButton";

const ServiceTop: React.VFC = () => {
  const router = useRouter();
  return (
    <>
      <Center p={5} align="center" flexDirection="column" minH="100vh">
        <Text
          fontSize={{
            base: "8xl",
            md: "8xl",
            lg: "9xl",
          }}
          color="white"
          fontWeight="bold"
        >
          Share your radios.
        </Text>
        <Center align="center" w="100%" h="200px">
          <PushToSignInButton onclick={() => router.push("/signIn")} />
        </Center>
      </Center>
    </>
  );
};

export default ServiceTop;
