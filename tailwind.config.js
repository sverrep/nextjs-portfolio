/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
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
      fontSize: {
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
        hamburger: '12px -12px 18px #5884dd,-12px 12px 18px #6090ef',
        card: '#FF7F50 0 15px 40px -20px',
        carouselCard: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      },
      backgroundImage: {
        card: "linear-gradient(to right bottom, rgb(255, 228, 196 ) 60%, rgb(255, 231, 222) 88%)"
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
  plugins: [
    require('tailwind-scrollbar'),
  ],
});
