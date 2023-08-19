/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grot: ['var(--font-grot)', ...fontFamily.sans],
      },
      fontSize:{
        smallHeader: ['3rem', '1']
      },
      colors: {
        dark: "#3A5487",
        light: "#F1F3F6",
        primaryLight: "#D6BC9E",
        primary: "#5C8AE6",
        primaryDark: "#C63F7B",
      },
      boxShadow: {
        resume: '12px 12px 24px #5078c8, -12px -12px 24px #689cff',
        hamburger: '12px -12px 18px #5884dd,-12px 12px 18px #6090ef;',
        cardDark: '4px -4px 10px #ae376c, -4px 4px 10px #de478a',
        card: '#FF7F50 0 15px 40px -20px;'
      },
      dropShadow: {
        stroke: '-1px -1px 0 #689cff, 1px -1px 0 #689cff, -1px 1px 0 #689cff, 1px 1px 0 #689cff;'
      },
      backgroundImage: {
        card: "linear-gradient(to right bottom, rgb(255, 228, 196 ) 60%, rgb(255, 231, 222) 88%);"
      },

      keyframes: {
        cardBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        cardBounce: 'cardBounce 3s infinite',
      }
    },
  },
  plugins: [],
}
