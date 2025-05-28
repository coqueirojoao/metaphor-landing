// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        merriweather: ["var(--font-merriweather)", "serif"],
        dancing: ["var(--font-dancing-script)", "cursive"],
      },
    },
  },
  plugins: [],
}
