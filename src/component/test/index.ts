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

const mergeConfig = (ourConfig: any, mainConfig: any) => {
  const { extend: ourExtend, variants: ourVariants } = ourConfig.theme;

  const { extend: mainExtend, variants: mainVariants } = mainConfig.theme;

  const extend = merge(ourExtend, mainExtend);

  const variants = merge(ourVariants, mainVariants);

  ourConfig.extend = extend;
  ourConfig.variants = extend;

  return ourConfig;
};

const colors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  disabled: "var(--color-disabled)",
  white: "var(--color-white)",
  error: "var(--color-error)",
  info: "var(--color-info)",
  warning: "var(--color-warning)",
  success: "var(--color-success)",
  body: "var(--color-text)",
  title: "var(--color-title)",
};

const config = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  //purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          disabled: "var(--color-disabled)", */
        ...colors,
        paper: "var(--color-paper)",
        //"btn-hover": "var(--color-btn-hover)"
      },
      textColor: {
        //title: "var(--color-title)",
        //body: "var(--color-body)",
        ...colors,
        /* disabled: "var(--color-disabled)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)", */
      },
      borderColor: {
        ...colors,
      },
      fill: {
        ...colors,
      },
      keyframes: {
        ripple: {
          "100%": { transform: "scale(2)", opacity: 0 },
        },
        progress: {
          "0%": {
            left: "-30%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      animation: {
        ripple: "ripple .6s linear",
        progress: "progress 3s ease 0s infinite normal none running",
      },
      minHeight: {
        5: "1.25rem",
        36: "9rem",
      },
      minWidth: {
        72: "18rem",
      },
      maxWidth: {
        101: "calc(100% - 32px)",
      },
      maxHeight: {
        101: "calc(100% - 32px)",
      },
    },
    variants: {
      borderColor: ["focus-within", "focus", "hover"],
      borderWidth: ["focus-within", "focus", "hover"],
      extend: {},
    },
    plugins: [
      /* require("@tailwindcss/forms") */
    ],
  },
};
