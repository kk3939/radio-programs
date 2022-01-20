/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NormalButtonProps } from "../../../types/global";
import { default as ImageComponent } from "./Image";
import Layout from "../Layouts/Layout";

export default {
  title: "Common/Image",
} as ComponentMeta<React.VFC<NormalButtonProps>>;

export const Image: ComponentStory<typeof ImageComponent> = (args) => {
  return (
    <>
      <Layout>
        {/* contents */}
        <ImageComponent {...args} />
      </Layout>
    </>
  );
};
