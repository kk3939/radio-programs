import { Center } from "@chakra-ui/react";
import React from "react";
import Image from "../Common/Image/Image";
import DescriptionText from "./DescriptionTexts";

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
        <DescriptionText />
      </Center>
    </>
  );
};

export default ServiceDescription;
