import React from "react";
import { Story, Meta } from "@storybook/react";

import Textarea, { TextareaProps } from ".";
import FieldWrapper from "../FieldWrapper";
import Input from "./../Input";
//import Select from "./../Select/Select";
import ArrowIcon from "../../icons/ArrowIcon";

export default {
  title: "Form_Elements/Textarea",
  component: Textarea,
  decorators: [
    (story: any) => (
      <div className="w-1/2 m-auto pt-11 bg-paper">{story()}</div>
    ),
  ],
  argTypes: {
    type: {
      type: { name: "string" },
      control: {
        type: "text",
      },
    },
    /* id: "id123",
  label: "Ваше имя:",
  name: "name",
  error: false,
  disabled: false, */
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

const defaultProps: TextareaProps = {
  id: "id123",
  label: "Расскажи как это было:",
  //placeholder: "Олимпиада Скуричива",
  name: "desc",
  disabled: false,
  //helperText={"Дерьмовое печенье..."}
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  placeholder: "Жили были дед да баба...",
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  placeholder: "Жили были дед да баба...",
  errors: ["Ну расскажи..."],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  placeholder: "Жили были дед да баба...",
  errors: ["Ну расскажи..."],
  disabled: true,
};
