/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-teal': '#5a8184',        // Primary color resembling teal
        'c-gray': '#d8ddde',        // Secondary color resembling gray
        'c-green': '#88bbac',       // Accent color resembling green
        'c-dark-gray': '#605e5c',  // Dark accent color resembling dark green
        'c-yellow': '#dad998',      // Neutral color resembling yellow
        'c-light-gray': '#eeeded',  // Light gray color
        'c-dark-blue': '#124236',    // Dark blue color
        'c-light-teal':  '#a7c7c9',
        'c-dark-teal' : '##0a2b2a',
        'c-dark-grayish' : '#485558',
        
      },
    },
  },
  plugins: [],
}
