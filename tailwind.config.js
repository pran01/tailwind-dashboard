/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        fgcolor: "#2c3034",
        "fgcolor-active": "#34383c",
        fontclr: "#7f7f7f",
        "fontclr-active": "#bbbbbd",
        "iconclr-active": "#f66673",
        bgcolor: "#23242b",
        borderclr: "#5d4192",
      },
    },
  },
  plugins: [],
};
