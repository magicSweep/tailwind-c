type ThemeType = "dark" | "light";

interface ThemeVars {
  primary: string;
  secondary: string;
  paper: string;
  disabled: string;
  title: string;
  body: string;
  white: string;
  error: string;
  info: string;
  warning: string;
  success: string;
}

interface Themes {
  dark: ThemeVars;
  light: ThemeVars;
}
