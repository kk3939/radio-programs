import { Text, Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { UserProps } from "../../../types/global";
import ButtonsInRadio from "./Buttons";

type Props = {
  userProps: UserProps;
  i: number;
  radio: {
    index: number;
    name: string;
  };
};

const Radio: React.VFC<Props> = ({ userProps, i, radio }) => {
  return (
    <>
      <Box w="100%" p={4} boxShadow="sm" bg="gray.50" borderRadius="40px">
        <Center align="center">
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
          <ButtonsInRadio userProps={userProps} i={i} />
        </Center>
      </Box>
    </>
  );
};

export default Radio;
