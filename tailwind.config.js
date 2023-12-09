/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-bg':'#F4F5F7',
        'color-verde':'#007764',
      },
      screens: {
        'lg': '1260px',
        '2xl': '1630px',
      },
    },
  },
  plugins: [],
}