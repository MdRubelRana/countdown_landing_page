module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    '*.html',
    '*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'left-image': "url('../assets/img/food1.png')",
        'right-image': "url('../assets/img/food2.png')",
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
