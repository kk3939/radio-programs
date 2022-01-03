import { Center, Icon, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../functions/authentication";

const SignInFlexButton: React.VFC = () => {
  const router = useRouter();
  const toast = useToast();
  return (
    <Center
      align="center"
      flexDirection="column"
      p={2}
      role="button"
      aria-pressed="false"
      tabIndex={0}
      aria-label="signIn"
      onClick={() => {
        signInWithGoogle(router, toast);
      }}
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