import React from "react";
import { Story, Meta } from "@storybook/react";

import BaseField, { FieldProps } from ".";
import FieldWrapper from "../FieldWrapper";
import Input from "./../Input";
//import Select from "./../Select/Select";
import ArrowIcon from "../../icons/ArrowIcon";

export default {
  title: "Form_Elements/BaseField",
  component: BaseField,
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

const Template: Story<FieldProps> = (args) => <BaseField {...args} />;

const defaultProps: FieldProps = {
  type: "text",
  id: "id123",
  label: "Ваше имя:",
  //placeholder: "Олимпиада Скуричива",
  name: "name",
  error: false,
  disabled: false,
  //helperText={"Дерьмовое печенье..."}
};

export const TextField = Template.bind({});
TextField.args = {
  ...defaultProps,
  placeholder: "Олимпиада Скуричива",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  ...defaultProps,
  type: "password",
  label: "Ваш пароль:",
  name: "password",
  placeholder: "************",
};

export const DateField = Template.bind({});
DateField.args = {
  ...defaultProps,
  type: "date",
  label: "Дата события:",
  name: "date",
  helperText: "Прекрасная дата",
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  error: true,
  helperText: "Хреновое имя...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultProps,
  disabled: true,
  helperText: "Хреновое имя...",
};
