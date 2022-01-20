/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { Text as TextComponent } from "./Text";
import { useState } from "react";

export default {
  title: "Common/Text",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const Text: ComponentStory<typeof TextComponent> = (arg) => {
  return (
    <>
      <TextComponent {...arg} />
    </>
  );
};

Text.args = {
  fontSize: "2xl",
  color: "black",
  text: "text",
  pt: 2,
  pr: 2,
  pl: 2,
  pb: 2,
};
