/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          hmr: '#1A9A93',
          dark: '#11635F',
          darker: '#0B423F',
          light: '#28B8B0',
          glow: 'rgba(26, 154, 147, 0.4)',
        },
        leaf: {
          green: '#4C8B2B',
          dark: '#3A6B21',
          light: '#62B038',
        },
        saffron: {
          gold: '#E3A72F',
          light: '#F5BE4D',
          dark: '#B8821B',
          glow: 'rgba(227, 167, 47, 0.4)',
        },
        charcoal: {
          950: '#0B0B0B',
          900: '#141414',
          800: '#1D1D1D',
          700: '#282828',
          600: '#3A3A3A',
        },
        offwhite: {
          DEFAULT: '#FAF6EE',
          muted: '#E6E0D2',
          card: '#1F1E1B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseWarm: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
