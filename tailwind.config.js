/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'dark': '#363A3F',
        'light_dark': '#4E5257',
        'g_gray': '#EBE8E8',
        'green': '#13ce66',
       
      },
    },
  },
  plugins: [],
}