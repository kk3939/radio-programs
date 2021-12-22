import React from "react";
import { Box, Center, Flex, Input, Button, Text } from "@chakra-ui/react";
// login
const Index: React.VFC = () => {
  return (
    <>
      <Box pos="relative">
        <Box h="400px" w="100%" pos="absolute" top="150px" left="0">
          <Flex align="center" justifyContent="center">
            <Box
              bg="white"
              h="480px"
              w="40%"
              borderRadius="25px"
              pt={10}
              pr={10}
              pl={10}
              boxShadow="lg"
            >
              <Center h="100px" fontSize="3xl" color="cyan.900" p={5}>
                Log in to your account.
              </Center>
              <Box pl={16} pr={16} pt={2} pb={2}>
                <Box p={4}>
                  <Input placeholder="mail" />
                </Box>
                <Box p={4}>
                  <Input placeholder="password" />
                </Box>
              </Box>
              <Box p={1}>
                <Flex align="center" justifyContent="center">
                  <Button colorScheme="blue" size="lg">
                    Sign In
                  </Button>
                </Flex>
              </Box>
              <Text fontSize="sm" align="right" pl={16} pr={16} pt={10}>
                You do not have any account?
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Index;
