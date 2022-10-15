/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 28,
      '3xl': 32
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7cBa',
        200: '#c4c4cc',
        100: '#e1e1e6'
      },
      cyan: {
        500: '#81d8f7',
        300: '#9Be1fb'
      }
    },
    extend: {}
  },
  plugins: []
}
