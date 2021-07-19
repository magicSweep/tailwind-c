const colors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  disabled: "var(--color-disabled)",
  white: "var(--color-white)",
};

module.exports = {
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
      },
      textColor: {
        title: "var(--color-title)",
        body: "var(--color-body)",
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
      },
      animation: {
        ripple: "ripple .6s linear",
      },
      minHeight: {
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
      extend: {},
    },
    plugins: [],
  },
};
