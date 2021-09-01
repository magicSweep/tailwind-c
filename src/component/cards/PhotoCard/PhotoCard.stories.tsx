import { Story, ComponentMeta } from "@storybook/react";

import PhotoCard, { PhotoCardProps } from ".";

export default {
  title: "Card/PhotoCard",
  component: PhotoCard,
  decorators: [
    (Story) => (
      <div className="flex flex-auto justify-around items-center p-8">
        <Story />
      </div>
    ),
  ],
  /* argTypes: {
    backgroundColor: { control: 'color' },
  }, */
} as ComponentMeta<typeof PhotoCard>;

export const Default = () => {
  return (
    <>
      <PhotoCard title="июль 2021" yearsOld={2} />
    </>
  );
};
