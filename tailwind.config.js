/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        macondo: ['Dancing-Script', 'cursive']
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(-8deg)' },
          '70%': { transform: 'rotate(14deg)' },
          '80%': { transform: 'rotate(-4deg)' },
          '90%': { transform: 'rotate(14deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      boxShadow: {
        'top-shadow': '0 -10px 20px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

