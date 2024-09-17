const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.jsx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {},
    darkMode: "class",
    colors: {
      darkBlue: 'rgb(12, 12, 17)',
      midBlue: '#16203B',
      gold: 'rgb(222, 183, 93)',
      white: '#FFFFFF',
      lightGrey: 'rgb(125, 127, 129)'
    },
  },
  plugins: [
    nextui({
      themes: {
      dark: {
        colors: {
          background: "#0C0C11",
          primary: {
            50: "#fff",
            DEFAULT: "#000",
            foreground: "#fff",
          },
          focus: "#fff",
        },
      },
    },
  }),
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
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}