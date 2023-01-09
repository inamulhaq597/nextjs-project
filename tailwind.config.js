/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "#F3603C",
        secondery: "#242D52",
        lightgray: "#FFF0EC",
        primerylight: "#FFEFEB",
        primeryfooter:"#1D1E25"
      }
      
    },
  },
  plugins: [],
}
