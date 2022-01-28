const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        heading: '"Be Vietnam Pro", serif',
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
