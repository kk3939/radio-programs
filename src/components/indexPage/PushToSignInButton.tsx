import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  onclick: () => void;
};

const PushToSignInButton: React.VFC<Props> = ({ onclick }) => {
  return (
    <Button
      fontSize="lg"
      border="1px"
      color="cyan.700"
      borderRadius="25px"
      size="lg"
      onClick={onclick}
    >
      Start Radio programs
    </Button>
  );
};

export default PushToSignInButton;
