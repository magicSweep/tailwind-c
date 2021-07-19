import { createContext } from "react";

export const ThemeContext = createContext({
  themeName: "dark",
  toggleTheme: () => {},
});
