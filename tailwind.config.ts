import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1512px',
      },
    },
    extend: {
      backgroundImage: {
        headerBg: "url('../public/images/BG.webp')",
        gradientBg: 'linear-gradient(180deg, #FFFFFF 50%, #FFCD29 50%, #FFCD29 100%)',
        mobileGradientBg: 'linear-gradient(180deg, #FFFFFF 25%, #FFCD29 25%, #FFCD29 100%)',
      },
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: '#DA1A5F',
        secondary: '#871635',
        accent: '#8DBF3F',
        baseLight: '#FFFFFF',
        baseLight100: '#FFFFFF',
        baseDark100: '#0E2C3A',
        baseDark20: '#CFD5D8',
        baseDark10: '#E7EAEB',
        lightRed100: '#DA1A5F',
        darkRed100: '#871635',
        green100: '#8DBF3F',
        yellow100: '#FFCD29',
        yellow60: '#FFE17F',
      },
      fontSize: {
        h1: ['72px', { lineHeight: '79.2px' }],
        h2: ['48px', { lineHeight: '52.8px' }],
        h3: ['32px', { lineHeight: '35.2px' }],
        h4: ['24px', { lineHeight: '28.8px' }],
        h5: ['22px', { lineHeight: '34.1px' }],
        p: ['22px', { lineHeight: '1.55' }],
        small: ['14px', { lineHeight: '21.7px' }],
      },
      fontFamily: {
        literata: ['var(--font-literata)'],
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      boxShadow: {
        cardShadow: '0px 0px 40px 0px rgba(14, 44, 58, 0.12)', // Added custom card shadow
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
