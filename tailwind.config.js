module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "280px",
      desktop: "660px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
