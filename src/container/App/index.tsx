import { useState } from "react";
//import { useThemeUI } from "@theme-ui/core";
//import Button from "../../component/Button";
import "./../../styles/global.css";
import Button from "../../component/buttons/Button";

const App = () => {
  //const { theme, colorMode }: any = useThemeUI();

  //const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      className={`
        lg:container
        px-8
        py-8
        bg-paper
        h-screen
    `}
    >
      <div className="w-screen h-30 p-8 flex flex-wrap flex-auto items-center justify-around">
        <Button size="small" variant="contained">
          Маленькая кнопка
        </Button>

        <Button
          size="medium"
          variant="outlined"
          as="a"
          href="https://google.com"
        >
          Средняя кнопка
        </Button>

        <Button size="large" variant="text">
          Огромная кнопка
        </Button>

        <Button size="large" variant="contained" disabled>
          Занятая кнопка
        </Button>

        {/*  <Button
          startIcon={<PlusIcon width={16} height={16} color="secondary" />}
          color="secondary"
          size="medium"
          variant="text"
        >
          Добавить файл
        </Button>

        <Button
          endIcon={
            <ArrowIcon direction="right" width={10} height={10} color="white" />
          }
          size="small"
          variant="contained"
        >
          Искать
        </Button>

        <IconButton color="transparent">
          <SearchIcon width={32} height={32} color="secondary" />
        </IconButton> */}
      </div>
    </div>
  );
};

export default App;
