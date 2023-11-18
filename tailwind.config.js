/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'notion-bg': '#F3F4F6'
      },
      fontFamily: {
        'pretendard': ['var(--font-pretendard)', 'sans-serif']
      },
      screens: {
        'custom-lg' : '992px',
        'max-lg': {'max': '992px'},
        'max-md': {'max': '767px'}
      },
      container: (theme) => ({
        center: true,
        padding: '1rem',
        screens : {
          'custom-lg' : '970px'
        },
      }),
      spacing: {
        '252': '252px'
      },
      width: {
        '2/3': '66.6666%',
        '3/5': '60%'
      }
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.border-t-0': {
          borderTopWidth: '0',
        },
        '.border-b-0': {
          borderBottomWidth: '0',
        },
        // ...다른 사용자 정의 유틸리티가 필요하면 여기에 추가합니다.
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ]
}