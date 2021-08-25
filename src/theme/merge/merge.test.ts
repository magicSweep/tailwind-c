import { merge, mergeConfig } from "./merge";

const config = {
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
    variants: {
      borderStyle: ["focus-within", "focus", "hover"],
      extend: {},
    },
    plugins: [
      /* require("@tailwindcss/forms") */
    ],
  },
};

const res = {
  darkMode: false,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        progress: "progress 3s ease 0s infinite normal none running",
        progress1: "progress 3s ease 0s infinite normal none running",
        ripple: "ripple .6s linear",
        ripple1: "ripple .6s linear",
      },
      borderColor: {
        body: "var(--color-text)",
        "btn-hover": "var(--color-btn-hover)",
        disabled: "var(--color-disabled)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        title: "var(--color-title)",
        warning: "var(--color-warning)",
        white: "var(--color-white)",
      },
      colors: {
        body: "var(--color-text)",
        "btn-hover": "var(--color-btn-hover)",
        disabled: "var(--color-disabled)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        paper: "var(--color-paper)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        title: "var(--color-title)",
        warning: "var(--color-warning)",
        white: "var(--color-white)",
      },
      fill: {
        body: "var(--color-text)",
        "btn-hover": "var(--color-btn-hover)",
        disabled: "var(--color-disabled)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        title: "var(--color-title)",
        warning: "var(--color-warning)",
        white: "var(--color-white)",
      },
      keyframes: {
        progress: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
        progress1: { "0%": { left: "-30%" }, "100%": { left: "100%" } },
        ripple: { "100%": { opacity: 0, transform: "scale(2)" } },
        ripple1: { "100%": { opacity: 0, transform: "scale(2)" } },
      },
      maxHeight: { "101": "calc(100% - 32px)", "201": "calc(100% - 32px)" },
      maxWidth: { "101": "calc(100% - 32px)", "201": "calc(100% - 32px)" },
      minHeight: { "36": "9rem", "5": "1.25rem", "6": "1.25rem", "83": "9rem" },
      minWidth: { "2": "18rem", "72": "18rem" },
      textColor: {
        body: "var(--color-text)",
        disabled: "var(--color-disabled)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        title: "var(--color-title)",
        warning: "var(--color-warning)",
        white: "var(--color-white)",
      },
    },
    plugins: [],
    variants: {
      borderColor: ["focus-within", "focus", "hover"],
      borderStyle: ["focus-within", "focus", "hover"],
      borderWidth: ["focus-within", "focus", "hover"],
      extend: {},
    },
  },
};

describe("merge", () => {
  test("", () => {
    const res = merge(config);

    expect(res).toEqual(res);
  });
});
