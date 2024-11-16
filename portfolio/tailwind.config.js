/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // HTML dosyanız
    "./src/**/*.{js,jsx,ts,tsx}",  // JS, JSX, TS, ve TSX dosyalarınız
    "./src/**/*.{html,css}",   // HTML ve CSS dosyalarınız (eğer var ise)
  ],
  
  theme: {
    extend: {
      fontFamily:{
        yeseva:['"Yeseva One"','serif'],
        playfair:['"Playfair"','serif'],
        nunito:['"Nunito"','serif'],
      },
    },
  },
  plugins: [],
}

