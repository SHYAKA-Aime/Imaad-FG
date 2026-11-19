/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030508',
          900: '#05070B',
          800: '#090D16',
          700: '#0E1422',
        },
        gold: {
          200: '#F9E8B2',
          300: '#F3D98B',
          400: '#E5C158',
          500: '#C9A24D',
          600: '#A68032',
          700: '#8F6B24',
        },
        sapphire: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#1E6BFF',
          600: '#1D4ED8',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.32em',
      }
    },
  },
  plugins: [],
}
