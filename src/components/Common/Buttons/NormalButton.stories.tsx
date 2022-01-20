/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta, Meta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { WhiteButton, GrayButton, SignInButton } from "./NormalButton";

export default {
  title: "Common/NormalButton",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const Whitebutton: ComponentStory<typeof WhiteButton> = (args) => (
  <WhiteButton {...args} />
);

Whitebutton.args = {
  onClick: () => alert("onClick!"),
  text: "test Text",
};

export const Graybutton: ComponentStory<typeof GrayButton> = (args) => (
  <GrayButton {...args} />
);

Graybutton.args = {
  onClick: () => alert("onClick!"),
  text: "test Text",
};

export const SignInbutton: ComponentStory<typeof SignInButton> = (args) => (
  <SignInButton {...args} />
);

SignInbutton.args = {
  onClick: () => alert("onClick!"),
  text: "test Text",
};
