import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const PushToIndexButton: React.VFC = () => {
  const router = useRouter();
  return (
    <Button
      colorScheme="blackAlpha"
      color="white"
      mt={10}
      mb={10}
      size="sm"
      fontWeight="bold"
      onClick={() => router.push("/")}
    >
      Radio Programsとは？
    </Button>
  );
};

export default PushToIndexButton;
