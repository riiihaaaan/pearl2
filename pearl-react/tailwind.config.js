/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          bg: '#fefdfb', // soft off-white background
          surface: 'rgba(255, 255, 255, 0.75)', // translucent card surface
          'border-soft': 'rgba(255, 255, 255, 0.4)', // soft border
          'text-primary': '#405364', // updated primary for readability
          'text-secondary': '#647b8a', // soft blue-gray
          accent: '#a09edd', // iridescent blue-lavender
          'accent-soft': '#c2c7e4',
          'gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #cbcad3 25%, #a09edd 50%, #8b94b7 100%)', // pearl orb gradient
          shadow: '0 8px 32px rgba(0, 0, 0, 0.1)', // soft wide drop shadow
        },
      },
      backgroundColor: {
        'pearl-bg': '#fefdfb',
        'pearl-surface': 'rgba(255, 255, 255, 0.75)',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #cbcad3 50%, #a09edd 100%)', // subtle for hero bg
      },
      textColor: {
        'pearl-text-primary': '#405364',
        'pearl-text-secondary': '#647b8a',
        'pearl-accent': '#a09edd',
      },
      borderColor: {
        'pearl-border-soft': 'rgba(255, 255, 255, 0.4)',
      },
      boxShadow: {
        'pearl-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // modern friendly sans
      },
    },
  },
  plugins: [],
}
