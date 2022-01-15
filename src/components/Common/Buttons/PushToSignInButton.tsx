import { Button } from "@chakra-ui/react";
import React from "react";
import { ButtonProps } from "../../../types/global";

const PushToSignInButton: React.VFC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      fontSize="lg"
      border="1px"
      color="cyan.700"
      borderRadius="25px"
      size="lg"
      onClick={onClick}
    >
      Start Radio programs
    </Button>
  );
};

export default PushToSignInButton;
