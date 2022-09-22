/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: 'true',
    },
    fontFamily: {
      poppins: 'Poppins',
      openSans:  'Open Sans',
    },
    colors: {
      veryPaleCyan: 'hsl(193, 100%, 96%)',
      veryDarkCyan: ' hsl(192, 100%, 9%)',
      grayishBlue: 'hsl(208, 11%, 55%)',
      pink: 'hsl(322, 100%, 66%)',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}
