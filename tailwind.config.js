/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
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
		'mxl' : "1440px"
      },
	  boxShadow: {
        '3xl': ' 0 50px 9px 5000px rgb(0, 0, 0, 0.5)',
      },
	  backgroundImage: {
        gradientPrimary: "linear-gradient(-45deg, #333, #FAB100, #FAB000, #333)",
        gradientBlue: "linear-gradient(-45deg, #333, rgba(50, 157, 255, 1), rgba(50, 157, 255, 1), #333)",
		skeleton : " linear-gradient(90deg, rgba(220, 220, 220, .2), rgba(255, 255, 255, .8), rgba(220, 220, 220, .9), rgba(255, 255, 255, .8))"
      },
    },
  },
  plugins: [],
}
