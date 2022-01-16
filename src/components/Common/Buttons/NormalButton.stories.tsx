/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta, Meta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { WhiteButton, GrayButton, SignInButton } from "./NormalButton";

export default {
  title: "Common/Button",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const WhitebuttonStory: ComponentStory<typeof WhiteButton> = (args) => (
  <WhiteButton {...args} />
);

WhitebuttonStory.args = {
  onClick: () => alert("onClick!"),
  text: "test Text",
};
