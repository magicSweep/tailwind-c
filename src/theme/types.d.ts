type ThemeType = "dark" | "light";

interface ThemeVars {
  primary: string;
  secondary: string;
  paper: string;
  disabled: string;
  textTitle: string;
  textBody: string;
  white: string;
}

interface Themes {
  dark: ThemeVars;
  light: ThemeVars;
}
