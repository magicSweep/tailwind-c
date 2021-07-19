import { themes, mapTheme } from "./themes";

export const applyTheme = (theme: ThemeType): void => {
  const themeObject = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }
    //@ts-ignore
    root.style.setProperty(property, themeObject[property]);
  });
};
