import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  onClick: () => void;
};

const PushToIndexButton: React.VFC<Props> = ({ onClick }) => {
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
      Radio Programsとは？
    </Button>
  );
};

export default PushToIndexButton;
