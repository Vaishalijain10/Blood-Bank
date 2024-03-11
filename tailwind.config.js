/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D04848",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
