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
      },
      fontSize: {
        'baseText': '18px',
        'heroDesktop': '100px',
        'heroTablet': '64px',
        'heroMobile': '40px',
        'sectionDesktop': '48px',
        'sectionMobile': '32px',
      },
      backgroundImage: {
        'heroBg': "url('/src/img/heroBg.svg')",
        'heroBg2': "url('/src/img/heroBg2.svg')",
        'featuresBg': "url('/src/img/featuresBg.svg')",
        'iconQuote': "url('/src/img/icon-quotes.svg')",
        'startedBg': "url('/src/img/startedBg.svg')",
        'navMenu': "url('/src/img/navMenu.svg')"
      },
      minWidth: {
        'featuresIcon': '72px'
      },
      maxWidth: {
        'avatars': '62px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
