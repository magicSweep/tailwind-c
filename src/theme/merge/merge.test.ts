import { mergeConfig } from "./merge";

const tailwindCConfig = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  //purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "btn-hover": "var(--color-btn-hover)",
      },
      borderColor: {
        "btn-hover": "var(--color-btn-hover)",
      },
      fill: {
        "btn-hover": "var(--color-btn-hover)",
      },
      keyframes: {
        ripple1: {
          "100%": { transform: "scale(2)", opacity: 0 },
        },
        progress1: {
          "0%": {
            left: "-30%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      animation: {
        ripple1: "ripple .6s linear",
        progress1: "progress 3s ease 0s infinite normal none running",
      },
      minHeight: {
        6: "1.25rem",
        83: "9rem",
      },
      minWidth: {
        2: "18rem",
      },
      maxWidth: {
        201: "calc(100% - 32px)",
      },
      maxHeight: {
        201: "calc(100% - 32px)",
      },
    },
  },
  variants: {
    //margin: ["responsive", "hover", "first"],
    extend: {
      margin: ["first"],
      borderColor: ["focus-within", "focus", "hover"],
      borderWidth: ["focus-within", "focus", "hover"],
    },
  },
  plugins: [
    /* require("@tailwindcss/forms") */
  ],
};

const targetConfig = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-c/**/*.{js,jsx,ts,tsx}",
  ],
  //purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        330: "330px",
        345: "345px",
        310: "310px",
      },
      width: {
        500: "500px",
      },
      maxWidth: {
        1140: "1140px",
      },
      minHeight: {
        70: "70px",
      },
    },
  },
  variants: {
    extend: {
      padding: ["last"],
    },
  },
  plugins: [
    /* require("@tailwindcss/forms") */
  ],
};

describe("mergeConfig", () => {
  test("", () => {
    const res = mergeConfig(targetConfig, tailwindCConfig);

    expect(res).toEqual("hello");
  });
});
