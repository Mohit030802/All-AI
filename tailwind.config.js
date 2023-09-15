/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': 'url("/src/assets/bg.jpg")',
        'no-hero':'url("/src/assets/bg1.jpg")'
      }
    },
  },
  plugins: [],
}