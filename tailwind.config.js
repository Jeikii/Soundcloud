/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lucida Grande',
          'Lucida Sans Unicode',
          'Lucida Sans',
          'Garuda',
          'Verdana',
          'Tahoma',
          'sans-serif',
        ],
        interstates: ['Interstate', 'Lucida Grande', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
