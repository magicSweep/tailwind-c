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
        345: "345px",
        200: "200px",
      },
      maxHeight: {
        101: "calc(100% - 32px)",
      },
      width: {
        345: "345px",
        600: "600px",
      },
      height: {
        194: "194px",
      },
      margin: {
        "-full": "-100%",
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
};

module.exports = config;
