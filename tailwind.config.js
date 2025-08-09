/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // slate-800
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // slate-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // slate-800
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // slate-100
          foreground: 'var(--color-muted-foreground)', // slate-500
        },
        
        // Border and Input
        border: 'var(--color-border)', // slate-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // blue-800
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-800
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // cyan-500
          foreground: 'var(--color-secondary-foreground)', // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-500
          foreground: 'var(--color-accent-foreground)', // white
        },
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // emerald-500
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        
        // Text Colors
        'text-primary': 'var(--color-text-primary)', // gray-800
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        
        // Neural Network Colors
        'neural-node': 'var(--color-neural-node)', // blue-800
        'neural-connection': 'var(--color-neural-connection)', // cyan-500
        'neural-pulse': 'var(--color-neural-pulse)', // orange-500
        
        // Moroccan Pattern Colors
        'pattern-primary': 'var(--color-pattern-primary)', // orange-500
        'pattern-secondary': 'var(--color-pattern-secondary)', // red-600
        'pattern-accent': 'var(--color-pattern-accent)', // blue-800
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'subheading': ['Inter', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'cta': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'headline': '700',
        'subheading': '600',
        'body': '400',
        'body-semibold': '600',
        'cta': '600',
        'mono': '400',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'intelligent': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'intelligent-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'neural': '0 8px 32px rgba(30, 58, 138, 0.12)',
        'moroccan': '0 8px 32px rgba(249, 115, 22, 0.12)',
      },
      animation: {
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'connection-flow': 'connection-flow 2s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'connection-flow': {
          '0%': { 'stroke-dashoffset': '10' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}