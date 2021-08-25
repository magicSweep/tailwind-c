# React base components styled with Tailwind

## Build

- /src/theme/merge - files for tailwind config it must be es5 compatible, that's why it compiles separate of main compilation and then copy to dist folder

## Usage

- we need project ready to use react and tailwind

- in tsconfig.json and in webpack ts-loader(bable-loader) add path to tailwind-c directory

```javascript
    {
        "include": ["src", "node_modules/tailwind-c"]
    }

    {
        test: /\.tsx?$/,
        include: [
            resolve(process.cwd(), "src"),
            resolve(process.cwd(), "node_modules", "tailwind-c"),
        ],
        use: {}
    }
```

- merge tailwind config and add tailwind-c directory to purge - in tailwind.config.js

```javascript
const { merge } = require("tailwind-c/src/theme/merge.js");

const config = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-c/**/*.{js,jsx,ts,tsx}",
  ],
  //purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    variants: {},
    plugins: [
      /* require("@tailwindcss/forms") */
    ],
  },
};

const finalConfig = merge(config);

module.exports = finalConfig;
```

- import styles(utils.css, animation.css, other.css) - in styles/index.css

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import "tailwind-c/src/styles/utils.css";

@import "./global.css";

@import "tailwind-c/src/styles/animation.css";
@import "tailwind-c/src/styles/other.css";
```

- in Storybook adjust webpack babel-loader include config option:

```javascript
const path = require("path");

module.exports = {
  // ..other config
  webpackFinal: async (config, { configType }) => {
    config.module.rules.forEach((rule) => {
      if (
        rule &&
        rule.test &&
        rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString()
      ) {
        rule.include.push(
          path.resolve(process.cwd(), "../../../lib/tailwind-components/src"),
          path.resolve(process.cwd(), "node_modules", "tailwind-c")
        );
      }
    });

    return config;
  },
};
```
