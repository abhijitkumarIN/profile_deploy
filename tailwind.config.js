const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'dark': '#94a3b8',
      'bg-dark': '#1e293b',
      'light-theme':'#cdcfd48f',
      'primary-color':'#2196f3'
     
    },
  },
  darkMode:"class",
  plugins: [],
});