import { Story } from "@storybook/react";
import React, { useState, useRef } from "react";
//import { action } from "@storybook/addon-actions";
import AdaptiveImage, { AdaptiveImageProps } from ".";
import image3 from "./../../../static/ladki.jpg";
//import { useResizeObserver } from "./hook";

const photo = {
  base64:
    "/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAfADIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYAAwcCBP/EAC0QAAEDAgQDBwUBAAAAAAAAAAEAAgMEEQUSITEGFJEVIjJBQlNhE1JUgZKC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHhs0R2lYf8AQXedn3N6rGxV1INxPJ/SsGIVlrczJ1Qa+ZYxvI0ftcGrpwdZo/6WTTz1bS3NUvdmF9HK2mpqqpjfL9VwYze7jqgbeL3NquVEb2yR5u8AbojgtXQ0eHtiNQxtjsTskQPnfFkiORvydVTJh8viMjdflBp/a1B+VH1UWV8k/wB1vVRA4RcEU3rmcV6W8FUAGrnFH43iytDkC/JwbQvAs5wI2QnGMMGD0zmUxMl+8+/kE7km2m6XpRzEldT1IvKGE3G1kCJK/S40vsvbhrKScOZUylj/AEoXUPOfJ5NJAVbnEkfCA72XB7wUQgTPt4iog//Z",
  src: image3,
  srcSet: image3,
  //sizes="(max-aspect-ratio: 16/10) 100vw, 160vh"
  //isActive: true,
  photoAspectRatio: 1.6,
};

export default {
  component: AdaptiveImage,
  title: "Image/AdaptiveImage",
  /*  decorators: [
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
  ], */
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const Template: Story<AdaptiveImageProps> = (args) => {
  const wrapperRef: any = useRef();

  //const { resized } = useResizeObserver(wrapperRef);

  return (
    <div
      className="flex items-center bg-secondary overflow-hidden relative m-auto"
      style={{ width: "700px", height: "800px" }}
      /*  width="50vw"
      height="70vh" */
      //@ts-ignore
      ref={wrapperRef}
    >
      <AdaptiveImage
        {...args}
        /* resized={resized} */ wrapperRef={wrapperRef}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  zoom: 1,
  ...photo,
};

export const OnlyBase64 = Template.bind({});
OnlyBase64.args = {
  zoom: 1,
  ...photo,
  src: "https:google.com/hello.jpg",
  srcSet: "",
  onClick: () => console.log("Click"),
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  zoom: 1.5,
  ...photo,
};

//https://i.ytimg.com/vi/ryA85Ywy7g4/maxresdefault.jpg
export const FromInet = Template.bind({});
FromInet.args = {
  zoom: 1,
  ...photo,
  src: "https://i.ytimg.com/vi/ryA85Ywy7g4/maxresdefault.jpg",
  srcSet: "",
  onClick: () => console.log("Click"),
};

export const Test = () => {
  return (
    <img
      style={{ width: "500px", height: "auto" }}
      src="data:image/jpeg;base64, /9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAfADIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYAAwcCBP/EAC0QAAEDAgQDBwUBAAAAAAAAAAEAAgMEEQUSITEGFJEVIjJBQlNhE1JUgZKC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHhs0R2lYf8AQXedn3N6rGxV1INxPJ/SsGIVlrczJ1Qa+ZYxvI0ftcGrpwdZo/6WTTz1bS3NUvdmF9HK2mpqqpjfL9VwYze7jqgbeL3NquVEb2yR5u8AbojgtXQ0eHtiNQxtjsTskQPnfFkiORvydVTJh8viMjdflBp/a1B+VH1UWV8k/wB1vVRA4RcEU3rmcV6W8FUAGrnFH43iytDkC/JwbQvAs5wI2QnGMMGD0zmUxMl+8+/kE7km2m6XpRzEldT1IvKGE3G1kCJK/S40vsvbhrKScOZUylj/AEoXUPOfJ5NJAVbnEkfCA72XB7wUQgTPt4iog//Z"
    />
  );
};
