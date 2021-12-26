import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer: React.VFC = () => {
  return (
    <Box
      bg="gray.700"
      p={10}
      mt={16}
      pos="absolute"
      bottom={0}
      w="100%"
      h="150px"
    >
      <Flex align="center" justifyContent="center" h="100%">
        <Text color="white">kyosuke kubo, All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
