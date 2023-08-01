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
      colors: {
        dark: "#3A5487",
        light: "#F1F3F6",
        primaryLight: "#A49EA5",
        primary: "#5C8AE6",
        primaryDark: "#8C7358",
      },
      boxShadow: {
        resume: '12px 12px 24px #5078c8, -12px -12px 24px #689cff',
        hamburger: '12px -12px 18px #5884dd,-12px 12px 18px #6090ef;'
      }
    },
  },
  plugins: [],
}
