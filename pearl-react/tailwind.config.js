/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pearl-bg': '#FAFBFF',
        'pearl-surface': 'rgba(255,255,255,0.62)',
        'pearl-border': 'rgba(200,210,230,0.55)',
        'pearl-text': '#2B3547',
        'pearl-muted': '#6B7280',
        'accent-iridescent': '#9AB3FF',
        'accent-iridescent-200': '#D6DBFF',
        'line-soft': 'rgba(140,160,210,0.45)',
      },
      backgroundColor: {
        'pearl-bg': '#FAFBFF',
        'pearl-surface': 'rgba(255,255,255,0.62)',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #cbcad3 50%, #9AB3FF 100%)', // subtle for hero bg
      },
      textColor: {
        'pearl-text': '#2B3547',
        'pearl-muted': '#6B7280',
        'accent-iridescent': '#9AB3FF',
      },
      borderColor: {
        'pearl-border': 'rgba(200,210,230,0.55)',
        'line-soft': 'rgba(140,160,210,0.45)',
      },
      boxShadow: {
        'pearl-soft': '0 20px 40px rgba(138,160,220,0.10)',
        'pearl-orb': '0 0 0 20px rgba(154,179,255,0.2)',
      },
      borderRadius: {
        'xl-4': '24px',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
