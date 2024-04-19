/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#f9bf29",
        glass: "rgba(255, 255, 255, 0.45)",
        transparentDark: "rgba(0, 0, 0, 0.7)"
      }
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "1099px",
    },
  },
  plugins: [],
}
