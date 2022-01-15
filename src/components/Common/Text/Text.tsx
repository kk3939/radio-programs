import React from "react";
import { Text as ChakraText } from "@chakra-ui/react";
import { TextProps } from "../../../types/global";

export const Text: React.VFC<TextProps> = ({
  fontSize,
  color,
  text,
  pt,
  pr,
  pb,
  pl,
}) => {
  return (
    <ChakraText
      fontSize={fontSize}
      color={color}
      fontWeight="bold"
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      {text}
    </ChakraText>
  );
};
