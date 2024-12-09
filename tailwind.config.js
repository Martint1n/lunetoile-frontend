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
      colors: {
        darkBlue: 'rgb(12, 12, 17)',
        midBlue: '#16203B',
        gold: 'rgb(222, 183, 93)',
        lightGrey: 'rgb(125, 127, 129)',
      },
      maxWidth: {
        'screen-xl': '1440px',
      },
      height: {
        'screen-90': '90vh',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    nextui(),
    require('@tailwindcss/aspect-ratio'),
  ],
}