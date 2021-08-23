import { Story, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from ".";
import PlusIcon from "../../icons/PlusIcon";
import ArrowIcon from "../../icons/ArrowIcon";

export default {
  title: "Buttons/Button",
  component: Button,
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
} as ComponentMeta<typeof Button>;

export const Variants = () => {
  return (
    <>
      <Button color="secondary" variant="contained">
        Contained кнопка
      </Button>
      <Button color="secondary" size="sm" variant="outlined">
        outlined кнопка
      </Button>
      <Button variant="text" size="lg">
        text кнопка
      </Button>
    </>
  );
};

export const WithIcons = () => {
  return (
    <>
      <Button
        startIcon={
          <PlusIcon width={16} height={16} className={`fill-secondary`} />
        }
        color="secondary"
        size="lg"
        variant="text"
      >
        Добавить файл
      </Button>

      <Button
        endIcon={
          <ArrowIcon
            direction="right"
            width={10}
            height={10}
            className={`fill-white`}
          />
        }
        size="xs"
        variant="contained"
      >
        Вперед
      </Button>

      <Button
        startIcon={
          <PlusIcon width={16} height={16} className={`fill-secondary`} />
        }
        endIcon={
          <ArrowIcon
            direction="right"
            width={10}
            height={10}
            className={`fill-secondary`}
          />
        }
        color="secondary"
        size="sm"
        variant="outlined"
      >
        Добавить какой-то из файлов
      </Button>
    </>
  );
};

export const Disabled = () => {
  return (
    <>
      <Button disabled color="secondary" variant="contained">
        Contained кнопка
      </Button>
      <Button disabled color="secondary" variant="outlined">
        outlined кнопка
      </Button>
      <Button disabled variant="text">
        text кнопка
      </Button>
      <Button
        startIcon={
          <PlusIcon width={16} height={16} className={`fill-disabled`} />
        }
        endIcon={
          <ArrowIcon
            direction="right"
            width={10}
            height={10}
            className={`fill-disabled`}
          />
        }
        color="secondary"
        size="lg"
        variant="outlined"
        disabled
      >
        Добавить какой-то из файлов
      </Button>
    </>
  );
};
