export const themes: Themes = {
  light: {
    primary: "#1976d2", // "#7986cb", //#303f9f
    secondary: "rgb(220, 0, 78)", //"#ff4081",
    paper: "#fff",
    white: "#fff",
    disabled: "rgba(0, 0, 0, 0.38)",
    title: "rgba(0, 0, 0, 0.87)",
    body: "rgba(0, 0, 0, 0.54)",
    error: "#f44336",
    info: "#2196f3",
    warning: "#ff9800",
    success: "#4caf50",
  },
  dark: {
    primary: "#1976d2", //#7986cb #3f51b5
    secondary: "rgb(220, 0, 78)", //"#c51162",
    paper: "#303030", //#303030 #424242
    white: "rgba(255, 255, 255, 0.87)",
    disabled: "rgba(255, 255, 255, 0.5)",
    title: "rgba(255, 255, 255, 0.87)",
    body: "rgba(255, 255, 255, 0.7)",
    error: "#f44336",
    info: "#2196f3",
    warning: "#ff9800",
    success: "#4caf50",
  },
};

export const mapTheme = (themeVariables: ThemeVars) => ({
  "--color-primary": themeVariables.primary,
  "--color-secondary": themeVariables.secondary,
  "--color-paper": themeVariables.paper,
  "--color-title": themeVariables.title,
  "--color-text": themeVariables.body,
  "--color-disabled": themeVariables.disabled,
  "--color-white": themeVariables.white,
  "--color-error": themeVariables.error,
  "--color-info": themeVariables.info,
  "--color-warning": themeVariables.warning,
  "--color-success": themeVariables.success,
});
