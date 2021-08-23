import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";
import { getPlugins, getDevPlugins, getProdPlugins } from "./plugins";
import {
  getBabelLoader,
  getCssLoader,
  getTsLoader,
  getFontLoader,
  getImageLoader,
  getSassLoader,
  getSvgLoader,
} from "./loaders";
import { getOptimization } from "./optimization";
import nodeExternals from "webpack-node-externals";

export interface IWebpackConfig {
  typescript: boolean;
  react: boolean;
  preact: boolean;
  scss: boolean;
  isAnalyze: boolean;
  // do we use ssr in our build
  withSsr: boolean;
  // is it render ssr version
  isSsr: boolean;
}

class Webpack {
  dev: boolean;
  entry: string;
  pathToOutputDir: string;
  pathToHtmlTemplate: string;
  config: IWebpackConfig;
  //output: webpack.Configuration["output"];
  //resolve: webpack.Configuration["resolve"];

  constructor(
    config: IWebpackConfig,
    entry: string,
    pathToOutputDir: string,
    pathToHtmlTemplate: string
  ) {
    this.dev = process.env.NODE_ENV !== "production";
    this.entry = entry;
    this.pathToOutputDir = pathToOutputDir;
    this.pathToHtmlTemplate = pathToHtmlTemplate;
    this.config = config;
  }

  makeOutput = (): webpack.Configuration["output"] => {
    return {
      path: this.pathToOutputDir,
      filename:
        this.dev || this.config.isSsr
          ? "main.bundle.js"
          : "[name].[contenthash:12].js",
      publicPath: "/",
    };
  };

  makeResolve = (): webpack.Configuration["resolve"] => {
    const resolve: webpack.Configuration["resolve"] = {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    };

    if (this.config.preact) {
      resolve.alias = {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        //"react-render-to-string": "preact-render-to-string",
        //'react-ssr-prepass': 'preact-ssr-prepass'
        // Must be below test-utils
      };
    }

    return resolve;
  };

  makeLoaders = (): webpack.Configuration["module"] => {
    //const babelLoader = getBabelLoader();
    const tsLoader = getTsLoader();
    const fontLoader = getFontLoader();
    const imageLoader = getImageLoader();
    //const sassLoader = getSassLoader(this.dev);
    const svgLoader = getSvgLoader();
    const cssLoader = getCssLoader(this.dev);

    return {
      rules: [
        tsLoader,
        fontLoader,
        imageLoader,
        cssLoader,
        //sassLoader,
        svgLoader,
      ],
    };
  };

  makePlugins = (): webpack.Configuration["plugins"] => {
    const plugins = getPlugins(
      this.dev,
      this.pathToHtmlTemplate,
      this.config.isAnalyze,
      this.config.isSsr
    );
    const devPlugins = getDevPlugins();
    const prodPlugins = getProdPlugins(this.config.isSsr, this.config.withSsr);

    const result = this.dev
      ? plugins.concat(devPlugins)
      : plugins.concat(prodPlugins);

    return result;
  };

  makeConfig = () => {
    const config: webpack.Configuration = {};

    config.mode = this.dev ? "development" : "production";

    config.entry = this.entry;

    config.output = this.makeOutput();

    config.resolve = this.makeResolve();

    config.module = this.makeLoaders();

    if (this.config.isSsr) {
      config.externalsPresets = { node: true }; // in order to ignore built-in modules like path, fs, etc.
      //@ts-ignore
      config.externals = [nodeExternals()];
    }

    if (this.dev) {
      config.devtool = "inline-source-map";

      //@ts-ignore
      config.devServer = {
        //contentBase: this.pathToOutputDir,
        static: {
          directory: this.pathToOutputDir,
          staticOptions: {},
          // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
          // Can be:
          // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
          publicPath: "/",
          // Can be:
          // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
          serveIndex: true,
          // Can be:
          // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
          watch: false,
        },
        open: true,
        compress: true,
        hot: true,
        //compress: true,
        // host: "0.0.0.0" - If you want your server to be accessible externally
        host: "local-ip",
        port: "auto",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
        },
      };
    } /* else {
      config.optimization = getOptimization();
    } */

    if (!this.dev && !this.config.isSsr) {
      config.optimization = getOptimization();
    }

    config.plugins = this.makePlugins();

    return config;
  };
}

export default Webpack;
