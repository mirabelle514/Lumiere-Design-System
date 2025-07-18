import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'lumiere-ivory',
      values: [
        {
          name: 'lumiere-ivory',
          value: '#FAF8F3',
        },
        {
          name: 'lumiere-navy',
          value: '#22304A',
        },
        {
          name: 'lumiere-grey',
          value: '#E5E2DD',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
        largeDesktop: {
          name: 'Large Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    docs: {
      theme: {
        base: 'light',
        colorPrimary: '#22304A',
        colorSecondary: '#C6A664',
        appBg: '#FAF8F3',
        appContentBg: '#FFFFFF',
        appBorderColor: '#C6A664',
        textColor: '#22304A',
        textInverseColor: '#FFFFFF',
        barTextColor: '#22304A',
        barSelectedColor: '#C6A664',
        barBg: '#FAF8F3',
        inputBg: '#FFFFFF',
        inputBorder: '#C6A664',
        inputTextColor: '#22304A',
        inputBorderRadius: 8,
        brandTitle: 'Lumière Design System',
        brandUrl: 'https://thewednesdayprojects.com',
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: 'US', title: 'English' },
          { value: 'fr', right: 'FR', title: 'Français' },
        ],
      },
    },
  },
};

export default preview;