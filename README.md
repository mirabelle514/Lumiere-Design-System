# Design System for [The Wednesday Collectives](https://thewednesdaycollective.com/)

## Overview

Lumière is a comprehensive design system built specifically for mobile applications, featuring sophisticated French-inspired aesthetics. It combines elegant typography, a carefully curated color palette, and thoughtfully designed components to create beautiful, accessible user interfaces.

### Key Features

- **Mobile-First**: Optimized for touch interfaces and small screens
- **French-Inspired Design**: Elegant color palette and typography
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios
- **Responsive**: Seamless experience across all device sizes
- **Performance**: Built with Vite for optimal loading speeds
- **Developer-Friendly**: TypeScript support with comprehensive prop types

## Design Tokens

### Color Palette

```css
--lumiere-ivory: #FAF8F3     /* Primary background */
--lumiere-navy: #22304A      /* Primary text & actions */
--lumiere-gold: #C6A664      /* Borders & accents only */
--lumiere-burgundy: #7C3048  /* Secondary actions */
--lumiere-sage: #A6B89A      /* Success states */
--lumiere-grey: #E5E2DD      /* Secondary backgrounds */
```

### Typography

- **Headings**: Playfair Display (Elegant serif for titles)
- **Body Text**: Open Sans (Clean, readable sans-serif)
- **Accent Text**: Open Sans Italic (Subtle emphasis)

### Spacing System

Based on an 8px grid: `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lumiere-design-system.git

# Navigate to the project directory
cd lumiere-design-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Using Components

```tsx
import { LumiereButton, LumiereCard } from './components/lumiere';

function App() {
  return (
    <div>
      <LumiereButton variant="primary" size="lg">
        Get Started
      </LumiereButton>
      
      <LumiereCard variant="featured">
        <h3>Welcome to Lumière</h3>
        <p>Experience elegant French-inspired design</p>
      </LumiereCard>
    </div>
  );
}
```

## Components

### Core Components

- **LumiereButton** - Primary, secondary, and tertiary button variants
- **LumiereCard** - Standard and featured card layouts
- **LumiereInput** - Form inputs with elegant styling
- **LumiereModal** - Accessible modal dialogs
- **LumiereTabBar** - Mobile-optimized navigation
- **LumiereToggle** - Custom toggle switches

### Mobile Patterns

- **Search & Filter** - Mobile-optimized search interfaces
- **List Items** - Touch-friendly list components
- **Card Grids** - Responsive card layouts
- **Action Sheets** - Bottom sheet interactions
- **Bottom Navigation** - Tab-based navigation

## Mobile-First Approach

### Responsive Breakpoints

- **Mobile**: 320px - 768px (Single column, touch-optimized)
- **Tablet**: 768px - 1024px (Two column, adaptive)
- **Desktop**: 1024px+ (Multi-column, hover states)

### Touch Targets

- **Primary Actions**: 44px minimum
- **Secondary Actions**: 32px minimum
- **Spacing**: 8px minimum between touch elements

## Accessibility

### Standards Compliance

- **WCAG 2.1 AA** compliant
- **Color Contrast**: All text meets minimum contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML with ARIA labels
- **Touch Accessibility**: Proper touch target sizes

### Testing

- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader compatibility testing

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```jsx
src/
├── components/
│   ├── lumiere/           # Core design system components
│   ├── navigation/        # Navigation components
│   └── sections/          # Documentation sections
├── styles/
│   └── lumiere.css        # Design system CSS variables
└── lib/
    └── utils.ts           # Utility functions
```

## Documentation

Visit our [live documentation](https://your-username.github.io/lumiere-design-system) to explore:

- **Color Palette** - Complete color system with usage guidelines
- **Typography** - Font hierarchy and text styling
- **Components** - Interactive component examples
- **Mobile Patterns** - Common mobile UI patterns
- **Responsive Design** - Breakpoint system and layouts
- **Accessibility** - A11y standards and testing guidelines

## Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Typography**: [Google Fonts](https://fonts.google.com/) for Playfair Display and Open Sans
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **Build Tool**: [Vite](https://vitejs.dev/) for fast development and building
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

## Support

- **Documentation**: [Live Demo](https://your-username.github.io/lumiere-design-system)
- **Issues**: [GitHub Issues](https://github.com/your-username/lumiere-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/lumiere-design-system/discussions)

## Available Commands

- `npm run chromatic` - Full build and publish
- `npm run chromatic:test` - Test mode (exits cleanly even with changes)
- `npm run chromatic:publish` - Auto-accept changes and publish

## What Chromatic Provides

1. **Visual Testing** - Automatic screenshot capture of all your stories
2. **Visual Regression Testing** - Compare screenshots between builds
3. **Cross-browser Testing** - Test across different browsers
4. **Documentation** - Beautiful online Storybook
5. **Collaboration** - Share with your team
6. **Review Process** - Visual diffs for code reviews

## GitHub Integration & Chromatic

Since my project is linked to GitHub, [Chromatic](https://www.chromatic.com/builds?appId=687a614558f8de72c52bf829) will automatically report results there.

[Storybook](https://687bba4d795507daa442f549-cgildnerdh.chromatic.com/?path=/docs/lumiere-lumiereanimation--docs)