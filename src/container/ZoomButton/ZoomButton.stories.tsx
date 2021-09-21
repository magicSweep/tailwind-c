//import { action } from "@storybook/addon-actions";
import { ZoomButton } from ".";
import { Story } from "@storybook/react";

export default {
  component: ZoomButton,
  title: "Components/ZoomButton",
  decorators: [
    (story: any) => (
      <>
        <div className="w-600 bg-blue-400 m-auto pt-16">{story()}</div>
        <div className="w-screen h-screen bg-yellow-200"></div>
      </>
    ),
  ],
  excludeStories: /.*Data$/,
};

const Template: Story<any> = (args) => (
  <ZoomButton
    steps={3}
    onZoomIn={() => console.log("ZOOM IN")}
    onZoomOut={() => console.log("ZOOM OUT")}
  />
);

export const Default = Template.bind({});
Default.args = {};

/* export const Disabled = Template.bind({});
Disabled.args = {}; */
