/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '8': '0.5rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
      },
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'red': '#ff4d4d',
        'black': '#262626',
        'white': '#fff',
        'raven:': '#747C8B',
        'seashell': '#FFF8F2',
        'gray': '#f5f5f5',
        'blue': '#3385ff',
      },
      minHeight: {
        '200': '12.5rem',
        '300': '18.75rem',
        '512': '32rem',
      },
      maxHeight: {
        '128': '8rem', // 128px
        '200': '12.5rem', // 200px
        '280': '17.5rem', // 280px
        '300': '18.75rem', // 300px 
        '320' : '20rem', // 320px
        '384': '24rem', // 384px
        '400': '25rem', // 400px
        '512': '32rem', // 512px
        '640': '40rem', // 640px
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem', //16px
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'red': '#ff4d4d',
      'black': '#262626',
      'white': '#fff',
      'raven:': '#747C8B',
      'seashell': '#FFF8F2',
      'blue': '#3385ff',
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [],
}

