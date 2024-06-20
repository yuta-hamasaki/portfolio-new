/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'loop-scroll': 'loop-scroll 15s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        }
      }     
    },
  },
  plugins: [],
}
