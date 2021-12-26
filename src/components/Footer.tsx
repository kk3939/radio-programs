import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer: React.VFC = () => {
  return (
    <Box h="200px" bg="gray.700" p={10} mt={16}>
      <Flex align="center" justifyContent="center" h="100%">
        <Text color="white">kyosuke kubo, All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
