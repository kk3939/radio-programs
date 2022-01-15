import { Box, Image } from "@chakra-ui/react";
import React from "react";

const DescriptionImage: React.VFC = () => {
  return (
    <>
      <Image
        borderRadius="50px"
        src="/profile2.png"
        boxSize="400px"
        alt="sample user page UI"
      />
    </>
  );
};

export default DescriptionImage;
