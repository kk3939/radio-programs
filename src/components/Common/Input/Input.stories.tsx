/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { default as InputComponent } from "./Input";
import Layout from "../Layouts/Layout";
import { useState } from "react";

export default {
  title: "Common/Input",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const Input: ComponentStory<typeof InputComponent> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <>
      <InputComponent
        placeholder="placeholder test"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
};
