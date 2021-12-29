import { Text, Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { UserProps } from "../../../types/global";
import ButtonsInRadio from "./Buttons";
import RadioText from "./RadioText";

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
      <Box w="100%" p={4} borderRadius="40px" m={4}>
        <Center align="center">
          <Box pl={10} pr={10}>
            <Box boxSize="80px" borderRadius="30px" bg="blue.50">
              <Flex justifyContent="center" h="100%" align="center">
                <Text fontSize="4xl">📻</Text>
              </Flex>
            </Box>
          </Box>
          <RadioText radio={radio} i={i} userProps={userProps} />
          <ButtonsInRadio userProps={userProps} i={i} />
        </Center>
      </Box>
    </>
  );
};

export default Radio;
