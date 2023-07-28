/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        main : '#b0a49c',
        verde: '#182c1e',
        dorado: '#978060',
      }
    },
    fontFamily: {
      nav: ['var(--font-amiri)'],
    },
  },
  plugins: [],
}

