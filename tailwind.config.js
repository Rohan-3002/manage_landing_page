/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // brightBlue: "hsl(248, 100%, 50%)",
        brightBlue: "hsl(248, 86%, 57%)",
        roseGray: "hsl(248, 22%, 50%)",
        brightBlueLight: "hsl(248, 79%, 61%)",
        blueSupLight: "hsl(249, 40%, 80%)",
        lime: "hsl(68, 100%, 50%)",
        lightLime: "hsl(68, 39%, 97%)",
        darkestBlue: "hsl(248, 100%, 13%)",
        darkGrayishLime: "hsl(68, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
