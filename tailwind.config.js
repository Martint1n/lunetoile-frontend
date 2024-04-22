/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js'
],
  theme: {
    extend: {},
    colors: {
      darkBlue: 'rgb(12, 12, 17)',
      gold: 'rgb(222, 183, 93)',
      white: '#FFFFFF',
      lightGrey: 'rgb(125, 127, 129)'
    }
  },
  plugins: [],
}

