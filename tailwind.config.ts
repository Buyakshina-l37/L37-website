import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          base: '#0A0F1A',
          80: 'rgba(10, 15, 26, 0.8)',
          70: 'rgba(10, 15, 26, 0.7)',
          60: 'rgba(10, 15, 26, 0.6)',
          50: 'rgba(10, 15, 26, 0.5)',
          30: 'rgba(10, 15, 26, 0.3)',
          20: 'rgba(10, 15, 26, 0.2)',
          5:  'rgba(10, 15, 26, 0.05)',
        },
        primary: {
          base: '#2473F2',
        },
        light: {
          base: '#F5F7FC',
          50: 'rgba(245, 247, 252, 0.5)',
          30: 'rgba(245, 247, 252, 0.3)',
          strong: '#DBE5FC',
        },
        gradient: {
          dark: '#0E1322',
        },
        status: {
          error: '#BE0000',
        },
      },
      fontFamily: {
        denim: ['Denim TRIAL', 'sans-serif'],
        'denim-wd': ['Denim WD', 'sans-serif'],
      },
      fontSize: {
        'display-hero':    ['64px', { lineHeight: '1.05', letterSpacing: '-0.64px' }],
        'display-numbers': ['80px', { lineHeight: '1.05', letterSpacing: '-0.8px' }],
        'h1':              ['48px', { lineHeight: '1.15', letterSpacing: '0px' }],
        'h2':              ['36px', { lineHeight: '1.15', letterSpacing: '-0.36px' }],
        'h3':              ['32px', { lineHeight: '1.20', letterSpacing: '0px' }],
        'h4':              ['24px', { lineHeight: '1.25', letterSpacing: '0px' }],
        'body-lg':         ['20px', { lineHeight: '1.40', letterSpacing: '0px' }],
        'body-md':         ['18px', { lineHeight: '1.40', letterSpacing: '0px' }],
        'body-sm':         ['16px', { lineHeight: '1.40', letterSpacing: '0px' }],
        'caption-xs':      ['11px', { lineHeight: '1.40', letterSpacing: '0.55px' }],
        'caption-sm':      ['12px', { lineHeight: '1.40', letterSpacing: '0.36px' }],
      },
      borderRadius: {
        'sm':   '4px',
        'md':   '16px',
        'lg':   '24px',
        'xl':   '32px',
        'full': '100px',
      },
      spacing: {
        '4':   '4px',
        '8':   '8px',
        '12':  '12px',
        '16':  '16px',
        '24':  '24px',
        '32':  '32px',
        '40':  '40px',
        '48':  '48px',
        '64':  '64px',
        '80':  '80px',
        '96':  '96px',
        '140': '140px',
      },
      boxShadow: {
        'card-light':    '0px 20px 48px -8px rgba(0, 11, 223, 0.06)',
        'card-partner':  '0px 40px 48px -8px rgba(0, 11, 223, 0.06)',
        'services':      '0px 20px 40px rgba(0, 43, 148, 0.08)',
        'button':        '0px 6px 4px 0px rgba(0, 0, 0, 0.03)',
        'nav':           '0px 28px 44px 0px rgba(58, 105, 181, 0.06)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, #FFFFFF 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0E1322 0%, #0E1322 100%)',
        'gradient-text-highlight': 'var(--gradient-text-highlight)',
      },
    },
  },
  plugins: [],
}

export default config
