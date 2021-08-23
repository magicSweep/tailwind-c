import { Story } from "@storybook/react";
import AddEditPhotoFormWidget, { AddEditPhotoFormWidgetProps } from ".";

export default {
  component: AddEditPhotoFormWidget,
  title: "Forms/AddEditPhotoFormWidget",
  decorators: [],
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

/* title,
  onSubmit,
  onClose,
  onChange,
  uploadLoading,
  photoSrc,
  formErrors,
  formState, */

const Template: Story<AddEditPhotoFormWidgetProps> = (args) => (
  <AddEditPhotoFormWidget {...args} />
);

const defaultProps = {
  title: "Добавьте новое фото",
  onSubmit: () => console.log("Submit"),
  onChange: () => console.log("onChange"),
  onClose: () => console.log("onClose"),
  uploadLoading: false,
  formErrors: {},
  formState: {
    date: "",
    desc: "",
  },
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Loading = Template.bind({});
Loading.args = {
  ...defaultProps,
  uploadLoading: true,
};
