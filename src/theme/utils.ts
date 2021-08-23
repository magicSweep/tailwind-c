import { themes, mapTheme } from "./themes";
import { ThemeType } from "./types";

export const applyTheme = (theme: ThemeType): void => {
  if (typeof window === "undefined") return;

  const themeObject = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }
    //@ts-ignore
    root.style.setProperty(property, themeObject[property]);
  });
};

export function mergeDeep(target: any, source: any) {
  const isObject = (obj: any) => obj && typeof obj === "object";

  if (!isObject(target) || !isObject(source)) {
    throw new Error("Target and source must be an object...");
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

let keys: string[] = [];

export function merge(ourConfig: any, mainConfig: any, currKey?: string) {
  const isObject = (obj: any) => obj && typeof obj === "object";

  if (!isObject(ourConfig) || !isObject(mainConfig)) {
    throw new Error("Target and source must be an object...");
  }

  if (currKey) keys.push(currKey);

  Object.keys(mainConfig).forEach((key) => {
    const ourConfigValue = ourConfig[key];
    const mainConfigValue = mainConfig[key];

    if (!isObject(mainConfigValue) || Array.isArray(mainConfigValue)) {
      if (ourConfigValue !== undefined)
        throw new Error(
          `Possible overriding key - ${
            keys.length === 0 ? key : keys.join(".") + "." + key
          } | value - ${ourConfigValue}`
        );
      else ourConfig[key] = mainConfigValue;
    } else {
      if (ourConfigValue === undefined) ourConfig[key] = mainConfigValue;
      else
        ourConfig[key] = merge(
          Object.assign({}, ourConfigValue),
          mainConfigValue,
          key
        );
    }

    /*  if (Array.isArray(ourConfigValue) && Array.isArray(mainConfigValue)) {
        ourConfig[key] = ourConfigValue.concat(mainConfigValue);
      } else if (isObject(ourConfigValue) && isObject(mainConfigValue)) {
        ourConfig[key] = mergeDeep(Object.assign({}, ourConfigValue), mainConfigValue);
      } else {
        ourConfig[key] = mainConfigValue;
      } */
  });

  keys = [];

  return ourConfig;
}
