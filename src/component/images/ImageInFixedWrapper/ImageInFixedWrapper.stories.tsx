import React from "react";
import { action } from "@storybook/addon-actions";
import ImageInFixedWrapper, { ImageInFixedWrapperProps } from ".";
import image3 from "./../../../static/ladki.jpg";
import { Story, Meta } from "@storybook/react";

export default {
  component: ImageInFixedWrapper,
  title: "Image/ImageInFixedWrapper",
  decorators: [
    (story: any) => (
      <div
        style={{
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const photo = {
  base64:
    "/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAfADIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYAAwcCBP/EAC0QAAEDAgQDBwUBAAAAAAAAAAEAAgMEEQUSITEGFJEVIjJBQlNhE1JUgZKC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHhs0R2lYf8AQXedn3N6rGxV1INxPJ/SsGIVlrczJ1Qa+ZYxvI0ftcGrpwdZo/6WTTz1bS3NUvdmF9HK2mpqqpjfL9VwYze7jqgbeL3NquVEb2yR5u8AbojgtXQ0eHtiNQxtjsTskQPnfFkiORvydVTJh8viMjdflBp/a1B+VH1UWV8k/wB1vVRA4RcEU3rmcV6W8FUAGrnFH43iytDkC/JwbQvAs5wI2QnGMMGD0zmUxMl+8+/kE7km2m6XpRzEldT1IvKGE3G1kCJK/S40vsvbhrKScOZUylj/AEoXUPOfJ5NJAVbnEkfCA72XB7wUQgTPt4iog//Z",
  src: image3,
  srcSet: image3,
  //sizes="(max-aspect-ratio: 16/10) 100vw, 160vh"
  //isActive: true,
  aspectRatio: 1.6,
};

const Template: Story<ImageInFixedWrapperProps> = (args) => (
  <div
    className="bg-black flex justify-center items-center"
    style={{ width: args.width, height: args.height }}
  >
    <ImageInFixedWrapper {...args} />
  </div>
);

/* const baseArgs = {
  wrapperAspectRatio: 1.75,
  wrapperWidth: 700,
  wrapperHeight: 400,
  isActive: true,
  alt: "alt",
}; */

export const Default = Template.bind({});
(Default as any).args = {
  ...photo,
  width: "320px",
  height: "180px",
};

export const OnlyBase64 = Template.bind({});
(OnlyBase64 as any).args = {
  ...photo,
  src: "",
  srcSet: "",
  width: "180px",
  height: "320px",
};
