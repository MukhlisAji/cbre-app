const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-teal': '#5a8184',
        'c-weldon-blue': '#7B9A9D',
        'c-gray': '#d8ddde',
        'c-green': '#88bbac',
        'c-dark-gray': '#605e5c',
        'c-yellow': '#dad998',
        'c-light-gray': '#eeeded',
        'c-dark-blue': '#124236',
        'c-light-teal': '#a7c7c9',
        'c-dark-teal': '#0a2b2a',
        'c-dark-grayish': '#485558',
        'c-light-grayish': '#7A8A98',
        sky: {
          500: '#0ea5e9',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
});
