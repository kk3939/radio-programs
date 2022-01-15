import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Image from "../Common/Image/Image";
import { Text } from "../Common/Text/Text";

const ServiceDescription: React.VFC = () => {
  return (
    <>
      <Center
        align="center"
        bg="blackAlpha.50"
        p={{ base: 10, sm: 20 }}
        flexWrap="wrap"
      >
        <Image
          borderRadius="50px"
          src="/profile2.png"
          boxSize="400px"
          alt="sample user page UI"
        />
        <Box
          p={{
            base: "5px",
            sm: "5px",
          }}
        >
          <Text
            color="white"
            fontSize={{ base: "2xl", sm: "4xl" }}
            pt={10}
            pr={10}
            pb={10}
            pl={10}
            text="Your profile displays your radios."
          />
          <Text
            color="white"
            fontSize={{ base: "md", sm: "lg" }}
            pr={5}
            pl={5}
            text="You can share what you like with URL."
          />
          <Text
            color="white"
            fontSize={{ base: "md", sm: "lg" }}
            pr={5}
            pl={5}
            text="About login method, we prepare only with google."
          />
          <Text
            color="white"
            fontSize={{ base: "md", sm: "lg" }}
            pr={5}
            pl={5}
            text="If you have any questions and requests, please mail this app
          mantainer(kyo51310@gmail.com)."
          />
        </Box>
      </Center>
    </>
  );
};

export default ServiceDescription;
