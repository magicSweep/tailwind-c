import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import ThemeProvider from "./theme/ThemeProvider";
//import { ThemeProvider } from "@theme-ui/core";
//import theme from "./theme";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
