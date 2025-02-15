/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
                  customFont: ['doto', "serif"],
              // Add more custom font families as needed
          },
          colors: {
              'agrimDark': '#cf6c15',
              'agrim': '#E67817',
              'agrimLight': '#EB9345',
              'agrimdarkgreen': '#2F4C39',
              'darkness': '#191919',
              'greyness': '#808080',
              'lightness': '#E5E5E5'
          },
  },
  plugins: [],
}
}

