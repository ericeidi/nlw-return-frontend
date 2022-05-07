module.exports = {
  content: [
    "./src/**/*.tsx",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
