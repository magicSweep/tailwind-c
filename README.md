# React base components styled with Tailwind

## Build

- /src/theme/merge - files for tailwind config it must be es5 compatible, that's why it compiles separate of main compilation and then copy to dist folder

## Usage

- we need project ready to use react and tailwind

- merge tailwind config and add tailwind-c directory to purge - in tailwind.config.js

```javascript
const { merge } = require("tailwind-c/dist/theme/merge.js");

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

@import "tailwind-c/dist/styles/utils.css";

@import "./global.css";

@import "tailwind-c/dist/styles/animation.css";
@import "tailwind-c/dist/styles/other.css";
```
