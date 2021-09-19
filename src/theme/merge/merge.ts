import { merge as mergeDeep } from "./helper";
const pathToConfig = "./../../tailwind.config";
const mainConf = require(pathToConfig);

export const merge = (config: any) => {
  return mergeConfig(config, mainConf);
};

/* export const mergePlugins = (
  targetPlugins?: any[],
  tailwindCPlugins?: any[]
) => {
  if(targetPlugins === undefined){

  }
}; */

export const mergeConfig = (targetConfig: any, tailwindCConfig: any) => {
  const {
    theme: targetTheme,
    variants: targetVariants,
    plugins: targetPlugins,
  } = targetConfig;

  const {
    theme: tailwindCTheme,
    variants: tailwindCVariants,
    plugins: tailwindCPlugins,
  } = tailwindCConfig;

  const theme = mergeDeep(targetTheme, tailwindCTheme);

  const variants = mergeDeep(targetVariants, tailwindCVariants);

  //const plugins = mergePlugins(targetPlugins, tailwindCPlugins);

  targetConfig.theme = theme;
  targetConfig.variants = variants;
  //targetConfig.plugins = plugins;

  return targetConfig;
};

/* export const mergeConfig = (otherConfig: any, tailwindCConfig: any) => {
  const { extend: ourExtend, variants: ourVariants } = otherConfig.theme;

  const { extend: mainExtend, variants: mainVariants } = tailwindCConfig.theme;

  const extend = mergeDeep(ourExtend, mainExtend);

  const variants = mergeDeep(ourVariants, mainVariants);

  otherConfig.theme.extend = extend;
  otherConfig.theme.variants = variants;

  return otherConfig;
}; */

const res = {
  darkMode: false,
  plugins: [],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-c/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        progress1: "progress 3s ease 0s infinite normal none running",
        ripple1: "ripple .6s linear",
      },
      borderColor: { "btn-hover": "var(--color-btn-hover)" },
      colors: { "btn-hover": "var(--color-btn-hover)" },
      fill: { "btn-hover": "var(--color-btn-hover)" },
      height: { "310": "310px", "330": "330px", "345": "345px" },
      keyframes: {
        progress1: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
        ripple1: { "100%": { opacity: 0, transform: "scale(2)" } },
      },
      maxHeight: { "201": "calc(100% - 32px)" },
      maxWidth: { "1140": "1140px", "201": "calc(100% - 32px)" },
      minHeight: { "6": "1.25rem", "70": "70px", "83": "9rem" },
      minWidth: { "2": "18rem" },
      width: { "500": "500px" },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-within", "focus", "hover"],
      borderWidth: ["focus-within", "focus", "hover"],
      margin: ["first"],
      padding: ["last"],
    },
  },
};
