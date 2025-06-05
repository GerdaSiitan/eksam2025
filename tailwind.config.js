/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFBF1',
        'secondary': '#D45115',
        'accent': '#23B930',
      },
      fontFamily: {
        'primary': ['Atelia'],
        'secondary': ['Roboto']
      }
    },
  },
  plugins: [],
}

