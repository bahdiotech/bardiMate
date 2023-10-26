/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './src/**/*.{js,jsx,ts,tsx','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'other': {'min': '200px', 'max': '840px'},
        'res880': {'min': '840px'},
      },
      colors: {
        darkbg: '#1E293B',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
