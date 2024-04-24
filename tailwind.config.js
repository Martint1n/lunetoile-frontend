const { TbBackground } = require('react-icons/tb')

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
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(12, 12, 17) white ', 
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'white'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(12, 12, 17)',
            borderRadius: '20px',
            border: '1px solid white'
          }
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

