import React, { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider/ThemeContext";

export default () => {
  const { toggleTheme, themeName } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle theme</button>;
};
