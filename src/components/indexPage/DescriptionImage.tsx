import { Box, Image } from "@chakra-ui/react";
import React from "react";

const DescriptionImage: React.VFC = () => {
  return (
    <>
      <Box p={10} bg="white" borderRadius="50px">
        <Image
          src="/profile2.png"
          loading="lazy"
          width="353px"
          height="363px"
        />
      </Box>
    </>
  );
};

export default DescriptionImage;
