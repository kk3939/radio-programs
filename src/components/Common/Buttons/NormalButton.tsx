import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { NormalButtonProps } from "../../../types/global";
import { FcGoogle } from "react-icons/fc";

/**
 * This component is Button whose background color is white and text color cyan.
 * @param onClick click function
 * @returns Button ReactElement
 */
export const WhiteButton: React.VFC<NormalButtonProps> = ({
  onClick,
  text,
}) => {
  return (
    <Button
      fontSize="lg"
      border="1px"
      color="cyan.700"
      borderRadius="25px"
      size="lg"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

/**
 * This component is Button whose background color is gray and text color white.
 * @param onClick click function
 * @param text text inside button
 * @returns Button ReactElement
 */
export const GrayButton: React.VFC<NormalButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      colorScheme="blackAlpha"
      color="white"
      mt={10}
      mb={10}
      size="sm"
      fontWeight="bold"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

/**
 * This component is SignIn Button. It is composed whith Google icon and text;
 * @param onClick click function
 * @param text text inside button
 * @returns Button ReactElement
 */
export const SignInButton: React.VFC<NormalButtonProps> = ({
  onClick,
  text,
}) => {
  return (
    <button onClick={onClick}>
      <Icon as={FcGoogle} w={20} h={20} mb={2} />
      <Text
        color="gray.400"
        fontSize={{ base: "xs", md: "md" }}
        fontWeight="bold"
      >
        {text}
      </Text>
    </button>
  );
};
