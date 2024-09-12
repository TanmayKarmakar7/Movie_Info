/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        myFont : ["Poetsen One", "sans-serif"],
        primaryFont: ["Poppins", "sans-serif"],
      }, 
      boxShadow: {
        'myShadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
    },
  },
  plugins: [],
}