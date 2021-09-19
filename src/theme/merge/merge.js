"use strict";
exports.__esModule = true;
exports.mergeConfig = exports.merge = void 0;
var helper_1 = require("./helper");
var pathToConfig = "./../../tailwind.config";
var mainConf = require(pathToConfig);
var merge = function (config) {
    return exports.mergeConfig(config, mainConf);
};
exports.merge = merge;
/* export const mergePlugins = (
  targetPlugins?: any[],
  tailwindCPlugins?: any[]
) => {
  if(targetPlugins === undefined){

  }
}; */
var mergeConfig = function (targetConfig, tailwindCConfig) {
    var targetTheme = targetConfig.theme, targetVariants = targetConfig.variants, targetPlugins = targetConfig.plugins;
    var tailwindCTheme = tailwindCConfig.theme, tailwindCVariants = tailwindCConfig.variants, tailwindCPlugins = tailwindCConfig.plugins;
    var theme = helper_1.merge(targetTheme, tailwindCTheme);
    var variants = helper_1.merge(targetVariants, tailwindCVariants);
    //const plugins = mergePlugins(targetPlugins, tailwindCPlugins);
    targetConfig.theme = theme;
    targetConfig.variants = variants;
    //targetConfig.plugins = plugins;
    return targetConfig;
};
exports.mergeConfig = mergeConfig;
/* export const mergeConfig = (otherConfig: any, tailwindCConfig: any) => {
  const { extend: ourExtend, variants: ourVariants } = otherConfig.theme;

  const { extend: mainExtend, variants: mainVariants } = tailwindCConfig.theme;

  const extend = mergeDeep(ourExtend, mainExtend);

  const variants = mergeDeep(ourVariants, mainVariants);

  otherConfig.theme.extend = extend;
  otherConfig.theme.variants = variants;

  return otherConfig;
}; */
var res = {
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
                ripple1: "ripple .6s linear"
            },
            borderColor: { "btn-hover": "var(--color-btn-hover)" },
            colors: { "btn-hover": "var(--color-btn-hover)" },
            fill: { "btn-hover": "var(--color-btn-hover)" },
            height: { "310": "310px", "330": "330px", "345": "345px" },
            keyframes: {
                progress1: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
                ripple1: { "100%": { opacity: 0, transform: "scale(2)" } }
            },
            maxHeight: { "201": "calc(100% - 32px)" },
            maxWidth: { "1140": "1140px", "201": "calc(100% - 32px)" },
            minHeight: { "6": "1.25rem", "70": "70px", "83": "9rem" },
            minWidth: { "2": "18rem" },
            width: { "500": "500px" }
        }
    },
    variants: {
        extend: {
            borderColor: ["focus-within", "focus", "hover"],
            borderWidth: ["focus-within", "focus", "hover"],
            margin: ["first"],
            padding: ["last"]
        }
    }
};
