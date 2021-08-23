import { useState } from "react";
//import { useThemeUI } from "@theme-ui/core";
//import Button from "../../component/Button";
import "./../../styles/index.css";
import Button from "../../component/buttons/Button";

import { CloseIcon } from "test-npm-lib--ts-types";

const App = () => {
  //const { theme, colorMode }: any = useThemeUI();

  //const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      className={`
        lg:container
       
        bg-paper
        h-screen
    `}
    >
      <div className="w-screen h-30 p-8 flex flex-wrap flex-auto items-center justify-around">
        <CloseIcon width={100} height={100} />

        <Button size="sm" variant="contained">
          Hello btn
        </Button>
      </div>
    </div>
  );
};

export default App;
