import React, { useState } from "react";
import ThemeProvider from "./../../src/theme/ThemeProvider";
import ThemeSwitcher from "./../../src/component/ThemeSwitcher";

const Layout = ({ children }) => {
  return (
    <div className="bg-paper min-h-full">
      <div
        className={`
            rounded-lg
            px-2 py-4
            fixed bottom-12 left-0
            bg-secondary
        `}
      >
        <ThemeSwitcher />
      </div>
      {children}
    </div>
  );
};

const MaterialThemeProvider = (storyFn) => {
  /* const [darkState, setDarkState] = useState(false);

  const theme = createTheme(darkState);

  const handleThemeChange = () => {
    setDarkState((prevDarkState) => !prevDarkState);
  }; */

  return (
    <ThemeProvider>
      <Layout>{storyFn()}</Layout>
    </ThemeProvider>
  );
};
export default MaterialThemeProvider;
