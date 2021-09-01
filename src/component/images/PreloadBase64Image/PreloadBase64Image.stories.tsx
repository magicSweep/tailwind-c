import { useState } from "react";
import { Story } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import PreloadBase64Image, { PreloadBase64ImageProps } from ".";
//import Button from "@material-ui/core/Button";
import image3 from "./../../../static/13.jpg";
import Button from "../../buttons/Button";

export default {
  component: PreloadBase64Image,
  title: "Image/PreloadBase64Image",
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
  alt: "Super image",
  index: 0,
  //sizes="(max-aspect-ratio: 16/10) 100vw, 160vh"
  //isActive: true,
  //aspectRatio: 1.6,
};

const style = document.createElement("style");
document.head.appendChild(style); // must append before you can access sheet property

style.setAttribute("data-index", "HELLOO!!!!!!!!");

const sheet = style.sheet as CSSStyleSheet;
sheet.insertRule("#blanc { color: white }", 0);

console.log("-------STYLE SHEET", style, sheet, "insertRule" in sheet);

const Template: Story<PreloadBase64ImageProps> = (args) => {
  return <PreloadBase64Image {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...photo,
  //width: "600",
  height: "375px",
};

export const OnlyBase64 = Template.bind({});
OnlyBase64.args = {
  ...photo,
  src: "",
  srcSet: "",
  width: "600px",
  height: "375px",
};

export const Test = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)}>Show photo</Button>

      {show && <PreloadBase64Image {...photo} height="375px" />}
    </>
  );
};
