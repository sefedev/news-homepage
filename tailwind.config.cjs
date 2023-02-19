/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      zinc: "#a1a1aa",
      orange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      grayishBlue: "hsl(233, 8%, 79%)",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
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
