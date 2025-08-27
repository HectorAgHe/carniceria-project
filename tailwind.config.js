/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-red':'#be3121',
        'my-grey':'#2C3E50',
        'my-yellow':'#FFE864'
      }
    },
  },
  plugins: [],
}
