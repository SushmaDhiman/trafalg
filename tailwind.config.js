/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html","./src/**/*.js"],
  theme: {
    extend: {
      // theme-color
      colors: {
        'black': '#233348',
        'blue': '#458FF6',
        'dark': '#1F1534',
        'gray': '#7D7987',
      },
      // font-family
      fontFamily: {
        mulish: ['Mulish, sans-serif'],
       },
    },
  },
  plugins: [],
}

