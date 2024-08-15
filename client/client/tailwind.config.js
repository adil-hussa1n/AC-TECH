/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       tertiary: "#54D6BB",
        secondary: "#2c698d",
        middeep: "#c7417b",
        primary: "#272643",
        navy: "#1f306e",
        purpile: "#bae8e8",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
}
