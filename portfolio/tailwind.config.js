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
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' }, // Daha yumuşak çıkış
        },
      },
      animation: {
        smoothBounce: 'smoothBounce 5s ease-in-out infinite', // 5 saniye sürecek ve sonsuz döngü olacak
      },
    },
  },
  plugins: [],
}

