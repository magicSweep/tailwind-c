//import { action } from "@storybook/addon-actions";
import { Slider, useSlider } from ".";
import { Story } from "@storybook/react";
import { IconButton, Button, PlusIcon, MinusIcon } from "../..";

export default {
  component: Slider,
  title: "Components/Slider",
  decorators: [
    (story: any) => <div className="w-600 m-auto pt-16">{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const Template: Story<any> = (args) => {
  const { setIndex, ...props } = useSlider(5);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mr-3">
        <IconButton
          onClick={() => setIndex((index) => (index > 0 ? index - 1 : 0))}
          color="transparent"
        >
          <MinusIcon width={24} height={24} className="fill-primary" />
        </IconButton>
      </div>
      <Slider {...props} />
      <div className="ml-3">
        <IconButton
          onClick={() => setIndex((index) => (index < 5 - 1 ? index + 1 : 4))}
          color="transparent"
        >
          <PlusIcon width={24} height={24} className="fill-primary" />
        </IconButton>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

/* export const Disabled = Template.bind({});
Disabled.args = {}; */
