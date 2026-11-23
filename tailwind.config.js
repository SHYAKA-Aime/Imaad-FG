/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0E1B2E',
          900: '#111F38',
          800: '#162744',
          700: '#1E3256',
        },
        ivory: {
          50: '#F8F6F2',
          100: '#F1EDE5',
          200: '#E5DFD3',
          300: '#D4CCC0',
        },
        obsidian: {
          950: '#0E1B2E',
          900: '#111F38',
          800: '#162744',
          700: '#1E3256',
        },
        gold: {
          200: '#E4D2A3',
          300: '#D3BA7C',
          400: '#C1A258',
          500: '#C1A258',
          600: '#A58842',
          700: '#8A6F32',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.26em',
      },
    },
  },
  plugins: [],
};
