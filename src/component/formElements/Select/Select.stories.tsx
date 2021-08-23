import { useState, useRef } from "react";
import { Story, Meta } from "@storybook/react";
import Select, { SelectProps } from ".";

export default {
  title: "Form_Elements/Select",
  component: Select,
  decorators: [
    (story: any) => (
      <div
        style={{
          width: "400px",
          margin: "auto",
          paddingTop: "50px",
          backgroundColor: "white",
        }}
      >
        {story()}
      </div>
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

const options = [
  { value: "1", label: "Земля" },
  { value: "2", label: "Море" },
  { value: "3", label: "Вода" },
];

const Template: Story<SelectProps> = (args) => {
  const [index, setIndex] = useState("2");

  const onChange = (event: any) => {
    console.log("ON CHANGE");
    console.log(event.currentTarget);

    setIndex(event.currentTarget.value);
  };

  return (
    <Select {...args} value={index} options={options} onChange={onChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "123id",
  label: "Вы откуда?:",
  placeholder: "Make some stuff",
  name: "fuck",
  errors: [],
  helperText: [],
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  id: "123id",
  label: "Вы откуда?:",
  placeholder: "Make some stuff",
  name: "fuck",
  errors: ["What is that?..", "HAAhh?"],
  helperText: [],
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  id: "123id",
  label: "Вы откуда?:",
  placeholder: "Make some stuff",
  name: "fuck",
  errors: [],
  helperText: ["Very well.", "Not bad"],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "123id",
  label: "Вы откуда?:",
  placeholder: "Make some stuff",
  name: "fuck",
  errors: ["What is that?..", "HAAhh?"],
  helperText: ["Very well.", "Not bad"],
  disabled: true,
};
