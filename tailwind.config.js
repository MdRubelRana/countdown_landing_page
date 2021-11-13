module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.{html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
