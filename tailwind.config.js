/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'primary' : "#FAB100",
        'primaryShadow' : "rgba(50, 157, 255, 0.24)",
        'secondary' : "rgba(18, 18, 18, 0.6)",
        'light' : "#f4f7fd",
      },
      screens: {
        'xl' : "1153px",
      },
    },
  },
  plugins: [],
}
