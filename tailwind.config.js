module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#191919',
          200: '#101010',
          300: '#090909',
        },
        grey: {
          100: '#b4b5b8',
          200: '#514f4f',
        },
        green: {
          100: '#323c33',
        },
        beige: '#eee9e4',
      },
    },
    fontFamily: {
      apparelDisplay: 'ApparelDisplay',
      apparelLight: 'ApparelLight',
      ilisarniq: 'Ilisarniq',
      rareBird: 'RareBird',
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '30px',
      '2xl': '48px',
      '3xl': '48px',
      '4xl': '58px',
      '5xl': '70px',
      '10xl': '140px',
    },
  },
  variants: {},
  plugins: [],
};
