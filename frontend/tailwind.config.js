/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'a4-width': '210mm',
        'a4-height': '297mm',
      },
      fontSize:{
        'tiny' : '10px',
        'stiny' : '9px',
      },
      lineHeight:{
        'extra-b': '45px',
      }
    },
  },
  plugins: [],
}
