import * as path from "path";
import * as webpack from "webpack";
import Webpack, { IWebpackConfig } from "./src/webpack";

const entry = "./src/index.tsx";
const pathToOutputDir = path.resolve(__dirname, "dist");
const pathToHtmlTemplate = path.resolve(__dirname, "./src/template.html");

const wConfig: IWebpackConfig = {
  typescript: true,
  react: true,
  /* use preact over react */
  // we must add to tsconfig.json  "jsxImportSource": "preact",
  preact: false,
  scss: false,
  isSsr: false,
  withSsr: false,
  isAnalyze: process.env.NODE_WEBPACK_ANALYZE === "analyze",
};

const webpackHelper = new Webpack(
  wConfig,
  entry,
  pathToOutputDir,
  pathToHtmlTemplate
);

const config = webpackHelper.makeConfig();

//console.log(JSON.stringify(config));

export default config;
