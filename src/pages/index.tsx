import React from "react";
import { Box, Center, Flex, Input, Button } from "@chakra-ui/react";

const Index: React.VFC = () => {
  return (
    <>
      <Box pos="relative">
        <Box w="100%" h="300px" bg="green.400">
          <Center h="130px" fontSize="6xl" color="white">
            Radio Programs
          </Center>
        </Box>
        <Box h="400px" w="100%" pos="absolute" top="150px" left="0">
          <Flex align="center" justifyContent="center">
            {/* mobile対応したかったらwの%を変更 */}
            <Box bg="white" h="480px" w="40%" borderRadius="25px" p={5}>
              <Center h="100px" fontSize="2xl">
                ログイン
              </Center>
              <Box p={4}>
                <Input placeholder="mail" />
              </Box>
              <Box p={4}>
                <Input placeholder="password" />
              </Box>
              <Box p={4}>
                <Flex align="center" justifyContent="center">
                  <Button colorScheme="blue">Sign In</Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Index;
