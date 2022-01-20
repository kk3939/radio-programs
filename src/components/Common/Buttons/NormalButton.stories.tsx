/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { WhiteButton, GrayButton, SignInButton } from "./NormalButton";

export default {
  title: "Common/NormalButton",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

const normalButtonArgs = {
  onClick: () => alert("onClick!"),
  text: "test Text",
};

export const Whitebutton: ComponentStory<typeof WhiteButton> = (args) => (
  <WhiteButton {...args} />
);

Whitebutton.args = normalButtonArgs;

export const Graybutton: ComponentStory<typeof GrayButton> = (args) => (
  <GrayButton {...args} />
);

Graybutton.args = normalButtonArgs;

export const SignInbutton: ComponentStory<typeof SignInButton> = (args) => (
  <SignInButton {...args} />
);

SignInbutton.args = normalButtonArgs;
