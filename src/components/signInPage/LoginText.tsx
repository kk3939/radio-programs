import React from "react";
import { Text } from "../Common/Text/Text";

const LoginText: React.VFC = () => {
  return (
    <Text
      fontsize="2xl"
      color="black"
      pt={10}
      pr={2}
      pl={2}
      pb={10}
      text="Log in to your account."
    />
  );
};

export default LoginText;
