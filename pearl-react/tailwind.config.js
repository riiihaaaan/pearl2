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
          background: '#f8f3f0',
          surface: '#e8e4e1',
          border: '#c9c3bb',
          primary: '#2c2a28',
          secondary: '#5a5a58',
        },
        accent: {
          blue: '#8a9aff',
          light: '#b3b8ff',
          gradient: {
            start: '#fff9f5',
            mid: '#c0b0ff',
            end: '#9fbbf5',
          },
          highlight: '#d4d0ff',
        },
        ui: {
          success: '#b7d9a8',
          warning: '#f5daa7',
          danger: '#e6a4a4',
        },
      },
      backgroundColor: {
        'pearl-bg': '#f8f3f0',
        'pearl-surface': '#e8e4e1',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, #fff9f5 0%, #c0b0ff 50%, #9fbbf5 100%)',
      },
      textColor: {
        'pearl-primary': '#2c2a28',
        'pearl-secondary': '#5a5a58',
        'accent-blue': '#8a9aff',
      },
      borderColor: {
        'pearl-border': '#c9c3bb',
      },
    },
  },
  plugins: [],
}
