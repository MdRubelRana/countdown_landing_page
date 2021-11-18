module.exports = {
  mode: '',
  purge: [
    './public/**/*.{html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'left-image': "url('/assets/img/food1.png')",
        'right-image': "url('/assets/img/food2.png')",
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'xxsm': { 'min': '360px', 'max': '479px' },
        'xsm': { 'min': '480px', 'max': '639px' },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
