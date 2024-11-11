const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': ['61px', '74px'],
        'h2': ['45px', '55px'],
        'h3': ['30px', '36px'],
        'body-l': ['18px', '28px'],
        'body-m': ['16px', '22px'],
        'body-s': ['14px', '18px'],
      },
    },
    colors: {
      darkBlue: 'rgb(12, 12, 17)',
      midBlue: '#16203B',
      gold: 'rgb(222, 183, 93)',
      white: '#FFFFFF',
      black: '#000000',
      lightGrey: 'rgb(125, 127, 129)',
      transparent: 'transparent',
    },
  },
  plugins: [
    nextui(),
    require('@tailwindcss/aspect-ratio'),
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
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}