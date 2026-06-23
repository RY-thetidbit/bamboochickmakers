import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Brand palette
        brand: {
          DEFAULT: '#8B5E3C',
          50: '#F6EFE8',
          100: '#EBDBCB',
          200: '#D9BD9E',
          300: '#C49E72',
          400: '#A87B4F',
          500: '#8B5E3C',
          600: '#714B30',
          700: '#573A25',
          800: '#3D2919',
          900: '#27190F',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          50: '#FDFCF8',
          100: '#F7F2E8',
          200: '#EFE6D2',
          300: '#E4D4B5',
        },
        leaf: {
          DEFAULT: '#2E7D32',
          50: '#E8F3E9',
          100: '#C7E2C9',
          500: '#2E7D32',
          600: '#256628',
          700: '#1B4D1E',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1DA851',
        },
        ink: '#1F2937',
        primary: {
          DEFAULT: '#8B5E3C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F7F2E8',
          foreground: '#1F2937',
        },
        accent: {
          DEFAULT: '#2E7D32',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F4',
          foreground: '#6B7280',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(31, 41, 55, 0.12)',
        card: '0 8px 40px -12px rgba(31, 41, 55, 0.18)',
        glow: '0 8px 30px -6px rgba(139, 94, 60, 0.35)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
