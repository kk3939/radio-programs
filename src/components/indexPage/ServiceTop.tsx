import { Text, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

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
          <Button
            fontSize="lg"
            border="1px"
            color="cyan.700"
            borderRadius="25px"
            size="lg"
            onClick={() => {
              router.push("/signIn");
            }}
          >
            Start Radio programs
          </Button>
        </Center>
      </Center>
    </>
  );
};

export default ServiceTop;
