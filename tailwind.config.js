/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};
