import { merge as mergeDeep } from "./utils";
// const mainConf = require("./../../tailwind.config");
const pathToConfig = "./../tailwind.config";
const mainConf = require(pathToConfig);

export const merge = (config: any) => {
  return mergeConfig(config, mainConf);
};

export const mergeConfig = (ourConfig: any, mainConfig: any) => {
  const { extend: ourExtend, variants: ourVariants } = ourConfig.theme;

  const { extend: mainExtend, variants: mainVariants } = mainConfig.theme;

  const extend = mergeDeep(ourExtend, mainExtend);

  const variants = mergeDeep(ourVariants, mainVariants);

  ourConfig.theme.extend = extend;
  ourConfig.theme.variants = variants;

  return ourConfig;
};
