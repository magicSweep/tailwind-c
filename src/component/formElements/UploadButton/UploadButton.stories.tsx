import React from "react";
import { Story, Meta } from "@storybook/react";
import UploadButton, { IUploadButtonProps } from ".";
import PlusIcon from "../../icons/PlusIcon";
import ArrowIcon from "../../icons/ArrowIcon";

export default {
  title: "Form_Elements/UploadButton",
  component: UploadButton,
  decorators: [
    (story: any) => <div className="w-96 m-auto pt-12 bg-paper">{story()}</div>,
  ],
  argTypes: {
    type: {
      type: { name: "string" },
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<IUploadButtonProps> = (args) => (
  <UploadButton {...args} />
);

const defaultProps = {
  id: "14id",
  label: "Добавить фото",
  name: "photoFile",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  errors: ["А где фота?"],
  helperText: [],
};

export const Success = Template.bind({});
Success.args = {
  ...defaultProps,
  errors: [],
  helperText: ["А, слушай, молодец."],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  disabled: true,
  errors: ["А где фота?"],
  helperText: ["А где фота?"],
};
