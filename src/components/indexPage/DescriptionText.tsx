import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DescriptionText: React.VFC = () => {
  return (
    <>
      <Box
        p={{
          base: "5px",
          sm: "5px",
        }}
      >
        <Text
          color="white"
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          p={10}
        >
          Your profile displays your radios.
        </Text>
        <NormalTextComponent text="You can share what you like with URL." />
        <NormalTextComponent text="About login method, we prepare only with google." />
        <NormalTextComponent text="You can share what you like with URL." />
        <NormalTextComponent
          text="If you have any questions and requests, please mail this app
          mantainer(kyo51310@gmail.com)."
        />
      </Box>
    </>
  );
};

export default DescriptionText;

type TextProps = {
  text: string;
};

const NormalTextComponent: React.VFC<TextProps> = ({ text }) => {
  return (
    <Text
      color="white"
      fontSize={{ base: "md", sm: "lg" }}
      fontWeight="bold"
      pr={5}
      pl={5}
    >
      {text}
    </Text>
  );
};
