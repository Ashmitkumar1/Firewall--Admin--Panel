/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray-neon-p": "#F7F8FA",
        "sea-green-p": "#0FC6C2",
        "text-gray": "#C8C9CB",
      },
      boxShadow: {
        '3xl': '0px 0px 5px 1px rgba(210,210,210,0.5)',
      }
    },
  },
  plugins: [],
}