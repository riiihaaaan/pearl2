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
        'pearl-100': '#f6f8ff',
        'pearl-200': '#eef2ff',
        'accent-blue-400': '#7f9be0',
        'accent-blue-500': '#6176b8',
        'muted-600': '#6b7280',
      },
      backgroundColor: {
        'pearl-bg': '#FAFBFF',
        'pearl-surface': 'rgba(255,255,255,0.62)',
        'pearl-100': '#f6f8ff',
        'pearl-200': '#eef2ff',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #cbcad3 50%, #9AB3FF 100%)', // subtle for hero bg
        'pearl-glow': 'radial-gradient(circle at center, rgba(118,127,206,0.08) 0%, transparent 70%)', // soft radial for pearl glow utility
      },
      textColor: {
        'pearl-text': '#2B3547',
        'pearl-muted': '#6B7280',
        'accent-iridescent': '#9AB3FF',
        'accent-blue-400': '#7f9be0',
        'accent-blue-500': '#6176b8',
        'muted-600': '#6b7280',
      },
      borderColor: {
        'pearl-border': 'rgba(200,210,230,0.55)',
        'line-soft': 'rgba(140,160,210,0.45)',
        'accent-blue-400': '#7f9be0',
        'accent-blue-500': '#6176b8',
      },
      boxShadow: {
        'pearl-soft': '0 20px 40px rgba(138,160,220,0.10)',
        'pearl-orb': '0 0 0 20px rgba(154,179,255,0.2)',
        'pearl-glow': '0 20px 40px rgba(118,127,206,0.08)',
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
