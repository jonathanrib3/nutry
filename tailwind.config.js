/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "nutry-primary": "#9900cc",
        "nutry-secondary": "#ad02e6",
      },
    },
  },
  plugins: [],
  fontFamily: {
    Roboto: ["Roboto, sans-serif"],
  },
};
