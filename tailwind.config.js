/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgFooter': '#141b23',
      'fontColor': '#ffffff',
      'bgHeader': '#f5f5fa',
      'bgButton': '#34d399'
    },
    extend: {},
  },
  plugins: [],
}

