/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Barlow'],
      lg: ['Bellefair'],
      md: ['Barlow Condensed'],
    },
    extend: {
      colors: {
        'light-blue': '#D0D6F9;',
        'dark-blue': '#0B0D17;',
      },
    },
  },
  plugins: [],
};
