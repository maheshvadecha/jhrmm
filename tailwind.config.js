/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-russian' : '#000818',
      },
      fontSize: {
      xsm: '0.6rem',
      base: '1rem',
      xl: '1.25rem',
    },
    },
  },
  plugins: [],
}
