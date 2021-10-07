module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkGreen': '#002529',
        'sacramentoGreen': '#012F34',
        'jungleGreen': '#004047',
        'midnightGreen': '#014E56',
        'policeBlue': '#2C6269',
        'raptureBlue': '#79C8C7',
        'lightCoral': '#F67E7E',
        'white': '#ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
