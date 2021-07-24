import React, { useState, useRef } from "react";
import { Story, Meta } from "@storybook/react";
import Select /* { IButtonProps } */ from ".";

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

const Template: Story<any> = (args) => {
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
  error: false,
  helperText: "",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "123id",
  label: "Вы откуда?:",
  placeholder: "Make some stuff",
  name: "fuck",
  error: false,
  helperText: "",
  disabled: true,
};
