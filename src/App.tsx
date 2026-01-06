
import React from 'react';
import './App.css';
import { TopNavigation } from './components/navigation/TopNavigation';
import { HeroSection } from './components/sections/HeroSection';
import { ColorPaletteSection } from './components/sections/ColorPaletteSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingSection } from './components/sections/SpacingSection';
import { IconographySection } from './components/sections/IconographySection';
import { ComponentShowcase } from './components/sections/ComponentShowcase';
import { MobileExample } from './components/sections/MobileExample';
import { MobilePatterns } from './components/sections/MobilePatterns';
import { ResponsiveSection } from './components/sections/ResponsiveSection';
import { AnimationSection } from './components/sections/AnimationSection';
import { AccessibilitySection } from './components/sections/AccessibilitySection';
import { TokensSection } from './components/sections/TokensSection';
import { UsageGuidelines } from './components/sections/UsageGuidelines';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] font-body">
      <TopNavigation />
      <HeroSection />
      <ColorPaletteSection />
      <TypographySection />
      <SpacingSection />
      <TokensSection />
      <IconographySection />
      <ComponentShowcase />
      <MobileExample />
      <MobilePatterns />
      <ResponsiveSection />
      <AnimationSection />
      <AccessibilitySection />
      <UsageGuidelines />
      <Footer />
    </div>
  );
}

export default App;
