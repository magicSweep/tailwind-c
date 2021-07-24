import React from "react";
import { Story } from "@storybook/react";
import HeroTitle, { HeroTitleProps } from ".";

export default {
  component: HeroTitle,
  title: "Components/HeroTitle",
  decorators: [],
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const Template: Story<HeroTitleProps> = (args) => (
  <div className="w-full h-full pt-14 flex justify-center items-center">
    <div
      className="relative w-96 h-96 shadow"
      /*  position="relative" width="400px" height="500px" boxShadow={1} */
    >
      <HeroTitle {...args}>Welcome, friend...</HeroTitle>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tailwindTop: "-top-6",
  tailwindBgColor: "bg-paper",
  //boxShadow: 1,
  //padding: "10px 20px",

  /* component: "h3",
  variant: "body1",
  color: "textPrimary",
  align: "center", */
};

/*
export const Disabled = Template.bind({});
Disabled.args = {
    tailwindTop: "-20px",
  tailwindBgColor: "bg-paper",

   top: "-20px",
  borderRadius: "4px",
  bgcolor: "background.paper",
  boxShadow: 1,
  padding: "10px 20px",

  component: "h3",
  variant: "body1",
  color: "textSecondary",
  align: "center", 
};

export const Error = Template.bind({});
Error.args = {
  top: "-20px",
  borderRadius: "4px",
  bgcolor: "background.paper",
  boxShadow:
    "rgba(255, 65, 65, 0.2) 0px 2px 1px -1px, rgba(255, 64, 64, 0.14) 0px 1px 1px 0px, rgba(255, 64, 64, 0.12) 0px 1px 3px 0px",
  padding: "10px 20px",

  component: "h3",
  variant: "body1",
  color: "error",
  align: "center",
};*/

/* export const CustomChildren = () => {
  const props = {
    top: "-20px",
    borderRadius: "4px",
    bgcolor: "background.paper",
    boxShadow: 1,
    padding: "10px 20px",
    isCustom: true,
    //component: "h3",
    //variant: "body1",
    //color: "textPrimary",
    //align: "center",
    width: "80%",
  };

  return (
    <Box
      width="100%"
      height="70%"
      pt="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="relative" width="400px" height="500px" boxShadow={1}>
        <HeroTitle {...(props as any)}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Welcome, friend.</Typography>
            <IconButton>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </HeroTitle>
      </Box>
    </Box>
  );
};
 */
