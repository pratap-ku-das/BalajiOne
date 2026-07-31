/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070D22',
        primary: {
          DEFAULT: '#D4AF37',
          dark: '#B89228',
          light: '#F3C623',
        },
        navy: {
          DEFAULT: '#0B1938',
          dark: '#071126',
          light: '#132854',
        },
        secondary: {
          DEFAULT: '#0B1938',
          dark: '#071126',
          light: '#162C5B',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#AA8214',
          light: '#FFE066',
        },
        success: '#10B981',
        card: 'rgba(15, 25, 55, 0.45)',
        'card-hover': 'rgba(20, 35, 75, 0.75)',
        'secondary-text': '#94A3B8',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Manrope', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 30px -5px rgba(212, 175, 55, 0.4)',
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.5)',
        'glow-navy': '0 0 35px -5px rgba(11, 25, 56, 0.8)',
        'glow-cyan': '0 0 30px -5px rgba(245, 158, 11, 0.4)',
        'glow-purple': '0 0 30px -5px rgba(212, 175, 55, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
