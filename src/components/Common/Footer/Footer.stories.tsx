/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { default as FooterComponent } from "./Footer";
import Layout from "../Layouts/Layout";

export default {
  title: "Common/Footer",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const Footer: ComponentStory<typeof FooterComponent> = (args) => {
  return (
    <>
      <Layout>
        {/* contents */}
        <FooterComponent {...args} />
      </Layout>
    </>
  );
};
