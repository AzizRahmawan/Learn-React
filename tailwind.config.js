import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,jsx}',
    './node_modules/preline/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#467F8C',
        secondary: '#D98841',
        danger: '#EA3125',
        success: '#26EB77',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
    plugin(function({addUtilities}){
      const newUtilities = {
        '.btn-primary': {
          '@apply bg-primary text-white font-bold py-2 px-4 rounded-full': {},
        },
      }
      addUtilities(newUtilities, ['responsive','hover'])
    }),
    
  ],
}

