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
      <Box w="100%" p={2} borderRadius="40px" m={4}>
        <Center align="center">
          <Box pl={{ base: 2, sm: 10 }} pr={{ base: 2, sm: 10 }}>
            <Box
              boxSize={{ base: "60px", md: "80px" }}
              borderRadius={{ base: "23px", md: "30px" }}
              bg="blue.50"
            >
              <Flex justifyContent="center" h="100%" align="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }}>📻</Text>
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
