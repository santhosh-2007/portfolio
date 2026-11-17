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
        background: {
          DEFAULT: '#080808',
          darker: '#040404',
          card: '#0f0f13',
          cardHover: '#16161e',
          glass: 'rgba(15, 15, 23, 0.7)',
        },
        accent: {
          purple: {
            DEFAULT: '#8b5cf6',
            light: '#a78bfa',
            dark: '#6d28d9',
            glow: '#9333ea'
          },
          blue: {
            DEFAULT: '#00f0ff',
            light: '#38bdf8',
            dark: '#0284c7',
            glow: '#00d2ff'
          }
        },
        surface: {
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(139, 92, 246, 0.3)',
          borderActive: 'rgba(0, 240, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
        'glow-mixed': '0 0 30px -5px rgba(139, 92, 246, 0.3), 0 0 30px -5px rgba(0, 240, 255, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
