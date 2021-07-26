import * as webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { resolve } from "path";

export const getTsLoader = () => {
  return {
    test: /\.tsx?$/,
    //exclude: /(node_modules\/(?!(MY-MODULE|ANOTHER-ONE)\/).*|bower_components)/,
    //exclude: /(node_modules|bower_components)/,
    include: [
      resolve(process.cwd(), "src"),
      resolve(process.cwd(), "node_modules", "test-npm-lib--ts-types"),
    ],
    use: {
      loader: "ts-loader",
      /* options: {
        presets: [
          [
            "@babel/preset-env",
            {
              // Needed for tree shaking 
              // Babel do not transpile modules to commonJs 
              modules: false,
            },
          ],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          "@babel/proposal-class-properties",
          "@babel/plugin-transform-runtime",
        ],
      }, */
    },
  };
};

export const getBabelLoader = () => {
  return {
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      /* options: {
        presets: [
          [
            "@babel/preset-env",
            {
              // Needed for tree shaking 
              // Babel do not transpile modules to commonJs 
              modules: false,
            },
          ],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          "@babel/proposal-class-properties",
          "@babel/plugin-transform-runtime",
        ],
      }, */
    },
  };
};

export const getCssLoader = (dev: boolean) => {
  const styleLoader = {
    loader: dev ? "style-loader" : MiniCssExtractPlugin.loader,
  };

  const cssLoader = {
    loader: "css-loader",
    /* options: {
      sourceMap: dev,
      modules: true,
    }, */
  };

  const postCssLoader = {
    loader: "postcss-loader",
    /* options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env",
            /* {
                    // Options
                  }, /
          ],
        ],
      },
    }, */
  };

  const use = [styleLoader, cssLoader, postCssLoader];

  return {
    test: /\.css$/i,
    use,
  };
};

export const getSassLoader = (dev: boolean) => {
  const styleLoader = {
    loader: dev ? "style-loader" : MiniCssExtractPlugin.loader,
  };

  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: dev,
      modules: true,
    },
  };

  const sassLoader = {
    loader: "sass-loader",
    options: {
      // Prefer `dart-sass`
      implementation: require("sass"),
      sassOptions: {
        sourceMap: dev,
        fiber: false,
      },
    },
  };

  let use = [];

  if (dev) {
    use = [styleLoader, cssLoader, sassLoader];
  } else {
    const postCssLoader = {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              /* {
                      // Options
                    }, */
            ],
          ],
        },
      },
    };
    use = [styleLoader, cssLoader, postCssLoader, sassLoader];
  }

  return {
    test: /\.s[ac]ss$/i,
    use,
  };
};

export const getImageLoader = () => {
  return {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,

    type: "asset/resource",

    generator: {
      filename: "static/image/[hash][ext][query]",
    },
  };
};

export const getSvgLoader = () => {
  return {
    test: /\.(svg)$/i,

    type: "asset/resource",

    generator: {
      filename: "static/image/[hash][ext][query]",
    },
  };
};

export const getFontLoader = () => {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,

    type: "asset/resource",
    generator: {
      filename: "static/font/[hash][ext][query]",
    },
  };
};
