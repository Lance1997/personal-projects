const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-brand-primary)",
        secondary: "var(--color-brand-secondary)",
        accent: "var(--color-text-accent)",
        "shape-primary": "var(--color-shapes-primary)",
        "shape-secondary": "var(--color-shapes-secondary)",
      },
      fontFamily: {
        sans: ["Noto Sans", defaultTheme.fontFamily.sans],
        headers: ["Montserrat", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
