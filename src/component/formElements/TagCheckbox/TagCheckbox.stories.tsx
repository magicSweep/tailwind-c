import React from "react";
//import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import TagCheckbox, { TagCheckboxProps } from ".";

export default {
  component: TagCheckbox,
  title: "Form_Elements/TagCheckbox",
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

const Template: Story<TagCheckboxProps> = (args) => <TagCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "на природе",
  color: "secondary",
  id: "checkbox1234",
  checked: false,
  onChange: (event: any) =>
    console.log("change", event.target.value, event.target.checked),
  name: "tags",
  value: "checkbox1234",
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  children: "НА ПРИРОДЕ",
  color: "secondary",
  id: "checkbox1234",
  checked: true,
  onChange: (event: any) => console.log("change"),
  name: "checkbox-input",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "На природе",
  id: "checkbox1234",
  color: "secondary",
  checked: false,
  onChange: (event: any) => console.log("change"),
  name: "checkbox-input",
  disabled: true,
};
