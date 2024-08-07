/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ["Poppins", 'sans-serif'],
        oswald : ["Oswald", 'sans-serif'],
        inknut : ["Inknut Antiqua", 'serif']
      }, 
      colors : {
        bgColor100 : '#0D1F2D',
        bgColor200 : '#1d2e3d',
        primary : '#0D6E6E',
        primary2 : '#4a9d9c',
      }
    },
  },
  plugins: [],
}

