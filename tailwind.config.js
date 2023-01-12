const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Vazir",
    },
    colors: {
      ...colors,
      "gray-1": "#333333",
      "gray-2": "#4F4F4F",
      "gray-6": "#F2F2F2",
      "gray-7": "#F7F7F7",
      "light-pink": "#FFE9EE",
      "red": "#C2123C",
    }
  },
  plugins: [],
};
