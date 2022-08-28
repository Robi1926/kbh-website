/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      background: "#18181b",
      overskrift: "#047857",
      tekst: "#FFFFFF",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
