/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(58 130 193)',
        gray: '#EFF4FB',
        anchor: 'rgb(65 129 225)',
        stroke: '#E2E8F0',
        lightGray: '#f3f3f3',
        darkGray: '#444',
      },
    },
  },
  plugins: [],
};
