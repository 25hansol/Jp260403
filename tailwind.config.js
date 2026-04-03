/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-dark': '#059669',
        'primary-light': '#d1fae5',
      },
    },
  },
  plugins: [],
}