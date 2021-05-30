module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // it's generally impossible to cover every single viewport size
      // i picked these two as they're reasonably representative of different screen widths
      // the small one allows for down to first generation Galaxy Fold outer screen size to work (theoretically)
      // the desktop one just ensures the UI behaves nicely when between the mobile and desktop breakpoints
      mobile: "280px",
      desktop: "690px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
