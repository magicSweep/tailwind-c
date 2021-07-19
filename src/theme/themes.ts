export const themes: Themes = {
  light: {
    primary: "#7986cb", //#303f9f
    secondary: "#ff4081",
    paper: "#fff",
    white: "#fff",
    disabled: "rgba(0, 0, 0, 0.38)",
    textTitle: "rgba(0, 0, 0, 0.87)",
    textBody: "rgba(0, 0, 0, 0.54)",
  },
  dark: {
    primary: "#7986cb", //#7986cb #3f51b5
    secondary: "#c51162",
    paper: "#303030", //#303030 #424242
    white: "rgba(255, 255, 255, 0.87)",
    disabled: "rgba(255, 255, 255, 0.5)",
    textTitle: "rgba(255, 255, 255, 0.87)",
    textBody: "rgba(255, 255, 255, 0.7)",
  },
};

export const mapTheme = (themeVariables: ThemeVars) => ({
  "--color-primary": themeVariables.primary,
  "--color-secondary": themeVariables.secondary,
  "--color-paper": themeVariables.paper,
  "--color-title": themeVariables.textTitle,
  "--color-body": themeVariables.textBody,
  "--color-disabled": themeVariables.disabled,
  "--color-white": themeVariables.white,
});
