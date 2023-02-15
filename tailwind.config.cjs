/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      SoftOrange: "hsl(35, 77%, 62%)",
      SoftRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      GrayishBlue: "hsl(233, 8%, 79%)",
      DarkGrayishBlue: "hsl(236, 13%, 42%)",
      VeryDarkBlue: "hsl(240, 100%, 5%)",
    },
    fontFamily: {
      fontOuter: "Outfit, sans-serif",
    },
    screens: {
      sm: { max: "480px" },
      md: { max: "678px" },
    },
    extend: {},
  },
  plugins: [],
};
