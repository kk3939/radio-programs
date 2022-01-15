import { Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { WhiteButton } from "../Common/Buttons/NormalButton";
import { Text } from "../Common/Text/Text";

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
          text="Share your radios."
        />
        <Center align="center" w="100%" h="200px">
          <WhiteButton
            text="start radio programs"
            onClick={() => router.push("/signIn")}
          />
        </Center>
      </Center>
    </>
  );
};

export default ServiceTop;
