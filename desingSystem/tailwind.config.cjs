/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
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
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7cBa',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-500': '#9Be1fb'

    },
    extend: {},
  },
  plugins: [],
}
