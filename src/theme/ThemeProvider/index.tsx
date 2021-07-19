import React, { useEffect, useState } from "react";
import { applyTheme } from "../utils";
import { ThemeContext } from "./ThemeContext";

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
  const [themeName, setThemeName] = useState<ThemeType>("light");
  //@ts-ignore
  //const [itheme, setTheme] = useState(theme[themeName]);

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

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
