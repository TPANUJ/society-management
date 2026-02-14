/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
        'glow-dark': '0 0 20px rgba(0, 245, 255, 0.2), 0 0 40px rgba(168, 85, 247, 0.15)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
