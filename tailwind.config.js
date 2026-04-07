/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Raleway"', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFAF6',
          100: '#F8F2EA',
          200: '#F0E6D6',
          300: '#E8D9C2',
        },
        gold: {
          300: '#D4AF7A',
          400: '#C9A05A',
          500: '#B8893A',
          600: '#9A7030',
        },
        blush: {
          100: '#F5ECE8',
          200: '#EDDED8',
          300: '#E0C8BE',
        },
        charcoal: {
          700: '#3A3530',
          800: '#2A2520',
          900: '#1A1510',
        },
      },
    },
  },
  plugins: [],
}
