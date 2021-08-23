import { useEffect, useState } from "react";
import { applyTheme } from "../utils";
import { ThemeContext } from "./ThemeContext";
import { ThemeType } from "./../types";

/* const setCSSVariables = (theme: any) => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
}; */

/* paper: "var(--color-paper)",
},
textColor: {
  title: "var(--color-title)",
  body: "var(--color-body)", */

let init = false;

applyTheme("light");

export default ({ children }: any) => {
  console.log("---------RENDER 1");

  const [themeName, setThemeName] = useState<ThemeType>("light");
  //@ts-ignore
  //const [itheme, setTheme] = useState(theme[themeName]);

  console.log("---------RENDER 2");

  const toggleTheme = () => {
    if (themeName === "dark") {
      //setTheme(theme.light);
      setThemeName("light");
    } else {
      //setTheme(theme.dark);
      setThemeName("dark");
    }
  };

  useEffect(() => {
    if (init === false) {
      init = true;
      return;
    }
    applyTheme(themeName);
  }, [themeName]);

  console.log("---------RENDER 3");

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
