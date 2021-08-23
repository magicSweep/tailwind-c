import React from "react";
//import { action } from "@storybook/addon-actions";
import Tag, { TagProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Tag,
  title: "Components/Tag",
  decorators: [
    (story: any) => (
      <div
        style={{
          width: "500px",
          margin: "auto",
          paddingTop: "30px",
          backgroundColor: "white",
        }}
      >
        {story()}
      </div>
    ),
  ],
  excludeStories: /.*Data$/,
};

const Template: Story<TagProps> = (args) => <Tag {...args}>На работе</Tag>;

export const Widget = Template.bind({});
Widget.args = {
  color: "info",
};

export const Label = Template.bind({});
Label.args = {
  color: "disabled",
  as: "lable",
  htmlFor: "123qwer",
};
