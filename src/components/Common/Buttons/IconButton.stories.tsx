/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import {
  CloseIconButton,
  EditIconButton,
  DeleteIconButton,
  AddIconButton,
  SaveIconButton,
  LogoutIconButton,
} from "./IconButton";

export default {
  title: "Common/IconButton",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

const onClickArgs = {
  onClick: () => alert("onClick!"),
};

export const Closeiconbutton: ComponentStory<typeof CloseIconButton> = (
  args
) => <CloseIconButton {...args} />;

Closeiconbutton.args = onClickArgs;

export const Editiconbutton: ComponentStory<typeof EditIconButton> = (args) => (
  <EditIconButton {...args} />
);

Editiconbutton.args = onClickArgs;

export const Deleteiconbutton: ComponentStory<typeof DeleteIconButton> = (
  args
) => <DeleteIconButton {...args} />;

Deleteiconbutton.args = onClickArgs;

export const Addiconbutton: ComponentStory<typeof AddIconButton> = (args) => (
  <AddIconButton {...args} />
);

Addiconbutton.args = onClickArgs;

export const Saveiconbutton: ComponentStory<typeof SaveIconButton> = (args) => (
  <SaveIconButton {...args} />
);

Saveiconbutton.args = onClickArgs;

export const Logouticonbutton: ComponentStory<typeof LogoutIconButton> = (
  args
) => <LogoutIconButton {...args} />;

Logouticonbutton.args = onClickArgs;
