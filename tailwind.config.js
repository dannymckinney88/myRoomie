const plugin = require("tailwindcss/plugin")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-su": "url('/src/assets/signup-bg.jpg')",
      },
    },
    screens: {

      sm: "640px",
      md: "768px",
      lg: "1024px",

      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
