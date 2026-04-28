/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Aphrodite', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        aphrodite: ['Aphrodite', 'cursive'],
      },
      colors: {
        cream: {
          50: '#FDFAF6',
          100: '#F8F2EA',
          200: '#F0E6D6',
          300: '#E8D9C2',
        },
        gold: {
          300: '#E8B568',
          400: '#E8B568',
          500: '#E8B568',
          600: '#E8B568',
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
      keyframes: {
        'slide-in-right': {
          from: { transform: 'translateX(48px)', opacity: '0' },
          to:   { transform: 'translateX(0)',    opacity: '1' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-48px)', opacity: '0' },
          to:   { transform: 'translateX(0)',      opacity: '1' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.55s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'slide-in-left':  'slide-in-left  0.55s cubic-bezier(0.25,0.46,0.45,0.94) both',
      },
    },
  },
  plugins: [],
}
