import React from "react";
import { Text } from "@chakra-ui/react";

const TopRadioText: React.VFC = () => {
  return (
    <Text
      pt={2}
      pb={2}
      color="blackAlpha.700"
      fontWeight="bold"
      fontSize={{ base: "xs", md: "sm" }}
    >
      my listening radio programs are following....
    </Text>
  );
};

export default TopRadioText;
