/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        darkBlue:{
          bg:"hsl(207, 26%, 17%)",
          el:"hsl(209, 23%, 22%)",
          tx:"hsl(200, 15%, 8%)"
        },
        darkGray:{
          50:"hsl(0, 0%, 98%)",
          100:"hsl(0, 0%, 52%)",
          150:"hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
}
