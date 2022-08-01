module.exports = {
  content: [
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'] 
      },
      fontSize: {
        '2xs': '.50rem',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px'
      },
      container: {
        padding: {
          'lg': '4rem',
          'xl': '2rem',
          '2xl': '6rem'
        },
      },
    },
  },
  plugins: [],
}
