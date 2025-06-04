/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F0E20',
        'secondary': '#004236',
        'accent': '#23B930',
      },
      fontFamily: {
        'primary': ['Sporten Personal Use'],
        'secondary': ['Roboto']
      }
    },
  },
  plugins: [],
}

