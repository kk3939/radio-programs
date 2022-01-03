import { Center } from "@chakra-ui/react";
import React from "react";
import DescriptionImage from "./DescriptionImage";
import DescriptionText from "./DescriptionText";

const ServiceDescription: React.VFC = () => {
  return (
    <>
      <Center
        align="center"
        bg="blackAlpha.50"
        p={{ base: 10, sm: 20 }}
        flexWrap="wrap"
      >
        <DescriptionImage />
        <DescriptionText />
      </Center>
    </>
  );
};

export default ServiceDescription;
