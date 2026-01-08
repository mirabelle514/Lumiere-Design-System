/** @type {import('tailwindcss').Config} */
let tailwindAnimatePlugin;
try {
  // Optional dependency in some environments (e.g. when this config is reused from a subpackage).
  tailwindAnimatePlugin = require('tailwindcss-animate');
} catch (e) {
  tailwindAnimatePlugin = null;
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lumiere-ivory': '#FAF8F3',
        'lumiere-navy': '#22304A',
        'lumiere-gold': '#C6A664',
        'lumiere-burgundy': '#7C3048',
        'lumiere-sage': '#A6B89A',
        'lumiere-grey': '#E5E2DD',
        // shadcn/ui color tokens
        border: '#E5E2DD',
        input: '#E5E2DD',
        ring: '#C6A664',
        background: '#FAF8F3',
        foreground: '#22304A',
        primary: {
          DEFAULT: '#22304A',
          foreground: '#FAF8F3',
        },
        secondary: {
          DEFAULT: '#FAF8F3',
          foreground: '#22304A',
        },
        destructive: {
          DEFAULT: '#7C3048',
          foreground: '#FAF8F3',
        },
        muted: {
          DEFAULT: '#E5E2DD',
          foreground: '#22304A',
        },
        accent: {
          DEFAULT: '#C6A664',
          foreground: '#22304A',
        },
        popover: {
          DEFAULT: '#FAF8F3',
          foreground: '#22304A',
        },
        card: {
          DEFAULT: '#FAF8F3',
          foreground: '#22304A',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
        'accent': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-3': ['1.125rem', { lineHeight: '1.4', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'accent': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'button': '24px',
        'card': '16px',
        'input': '8px',
      },
      boxShadow: {
        'soft': '0px 2px 8px rgba(34, 48, 74, 0.12)',
        'gold': '0px 4px 16px rgba(198, 166, 100, 0.1)',
        'card': '0px 4px 16px rgba(198, 166, 100, 0.1)',
      },
    },
  },
  plugins: [tailwindAnimatePlugin].filter(Boolean),
};
