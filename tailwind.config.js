/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        accent: "#CE9745",
        lightGray: "#D9D9D9",
        dark: "#121616",
      },
    },
  },

  plugins: [],
}
