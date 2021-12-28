import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { UserProps } from "../../types/global";

type Props = {
  userProps: UserProps;
};

const Radios: React.VFC<Props> = ({ userProps }) => {
  return (
    <>
      {userProps.radios.map((radio, i) => (
        <Box w="100%" p={4} key={i}>
          <Center>
            <Box pl={10} pr={10}>
              <Box boxSize="80px" borderRadius="25px" bg="cyan.200">
                <Flex justifyContent="center" h="100%" align="center">
                  <Text>emoji</Text>
                </Flex>
              </Box>
            </Box>
            <Text fontSize="2xl" fontWeight="bold">
              {radio.name}
            </Text>
          </Center>
        </Box>
      ))}
    </>
  );
};

export default Radios;
