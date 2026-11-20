/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      },
      colors : {
        baseColor : "#2B2E44",
        baseHover : "#3f425d",
        sectionBg : "#f1f5f9",
        boxShadow : "rgba(85, 91, 133, 0.1) 0px 4px 30px",
        lightGray : "#eaedf7",
        widgetbg     : "rgb(241, 243, 249)" ,
        footerbg : "rgb(218, 220, 229)"
      }

    },
  },
  plugins: [],
}