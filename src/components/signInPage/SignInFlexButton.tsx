import { Center, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {
  onClick: () => void;
};

const SignInFlexButton: React.VFC<Props> = ({ onClick }) => {
  return (
    <Center
      align="center"
      flexDirection="column"
      p={2}
      role="button"
      aria-pressed="false"
      tabIndex={0}
      aria-label="signIn"
      onClick={onClick}
    >
      <Icon as={FcGoogle} w={20} h={20} mb={2} />
      <Text
        color="gray.400"
        fontSize={{ base: "xs", md: "md" }}
        fontWeight="bold"
      >
        Sign in with Google
      </Text>
    </Center>
  );
};

export default SignInFlexButton;
