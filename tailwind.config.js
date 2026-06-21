/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow':  'spin 9s linear infinite',
        'float':      'float 3s ease-in-out infinite',
        'glow':       'glow 2.5s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'bounce-slow':'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(239,68,68,0.3)' },
          '50%':       { boxShadow: '0 0 55px rgba(239,68,68,0.55)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':       { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
