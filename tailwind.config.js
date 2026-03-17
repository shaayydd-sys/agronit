/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1A2517',
        sage: '#ACC8A2',
        gold: '#E9C984',
        white: '#FFFFFF',
        cream: '#F5F2EB',
        ink: '#111111',
      },
      fontFamily: {
        garamond: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        widest: '0.1em',
        ultra: '0.12em'
      }
    },
  },
  plugins: [],
}
