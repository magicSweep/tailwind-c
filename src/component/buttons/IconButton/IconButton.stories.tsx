import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import IconButton, { IconButtonProps } from ".";
import SearchIcon from "../../icons/SearchIcon";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
};

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Transparent = Template.bind({});
Transparent.args = {
  color: "transparent",
  children: <SearchIcon width={32} height={32} color="secondary" />,
};

export const Colored = Template.bind({});
Colored.args = {
  color: "primary",
  children: <SearchIcon width={32} height={32} color="white" />,
};
