import React from "react";
//import { action } from "@storybook/addon-actions";
import Spinner from ".";
import Modal from "../../portals/Modal/CenteredModal";

export default {
  component: Spinner,
  title: "Progress/Spinner",
  /* decorators: [
    (story: any) => (
      <div
        style={{
          width: "300px",
          margin: "auto",
          paddingTop: "30px",
          backgroundColor: "white",
        }}
      >
        {story()}
      </div>
    ),
  ], */
  excludeStories: /.*Data$/,
};

const Template = (args: any) => <Spinner {...args} />;

export const Default = Template.bind({});

export const Loadable = () => {
  return (
    <Modal show={true} type="slider" onClose={() => {}}>
      <Spinner />
    </Modal>
  );
};

/* (Default as any).args = {
  variant: "rect",
}; */
