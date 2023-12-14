/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'fae2bd': '#FAE2BD',
      },
      textColor: {
        'efa': '#EFAA82',
      },
    },
  },
  plugins: [],
}