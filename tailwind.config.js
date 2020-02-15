module.exports = {
  theme: {
    fontFamily: {
      body: ['\'Montserrat\'', 'sans-serif']
    },
    screens: {
      'xs': {'max': '575px'},
      'sm': {'max': '767px'},
      'sm-only': {'min': '576px', 'max': '767px'},
      'md': {'max': '992px'},
      'md-only': {'min': '768px', 'max': '992px'},
      'lg': {'max': '1200'},
      'lg-only': {'min': '993px', 'max': '1200px'},
      'xl': {'min': '1201px'},
    },
    extend: {
      colors: {
        'theme-blue': {
          100: '#E7F9FC',
          200: '#C4EFF9',
          300: '#A1E6F5',
          400: '#5AD3ED',
          500: '#13C0E5',
          600: '#11ADCE',
          700: '#0B7389',
          800: '#095667',
          900: '#063A45',
        },
        'theme-green': {
          100: '#F4FAEF',
          200: '#E3F2D7',
          300: '#D3EBBE',
          400: '#B1DB8E',
          500: '#90CC5D',
          600: '#82B854',
          700: '#567A38',
          800: '#415C2A',
          900: '#2B3D1C',
        },
        'theme-red': {
          100: '#FCEDED',
          200: '#F9D2D2',
          300: '#F5B7B6',
          400: '#ED8180',
          500: '#E54B49',
          600: '#CE4442',
          700: '#892D2C',
          800: '#672221',
          900: '#451716',
        },
      }
    }
  }
}
