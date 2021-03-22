const plugin = require("tailwindcss/plugin");
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
      tablets: "640px", // => @media (min-width: 640px)
      laptop: "1024px", // => @media (min-width: 1024px)
      desktop: "1280px", // => @media (min-width: 1280px)
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
