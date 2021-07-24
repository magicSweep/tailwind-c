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

export const Success = Template.bind({});
Success.args = {
  ...defaultProps,
  fileList: [{ name: "super.jpg" }] as any,
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  error: true,
  helperText: "А где фота?",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  disabled: true,
  error: true,
  helperText: "А где фота?",
};
