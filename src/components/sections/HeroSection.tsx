import React from 'react';
import { LumiereButton } from '../lumiere/LumiereButton';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleGetStarted = () => {
    // Scroll to the usage guidelines section for getting started info
    scrollToSection('usage-guidelines');
  };

  const handleViewComponents = () => {
    // Scroll to the component showcase section
    scrollToSection('component-showcase');
  };

  return (
    <section className="text-center pt-32 pb-20 px-6 bg-gradient-to-br from-[var(--lumiere-ivory)] to-[var(--lumiere-grey)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--lumiere-navy)] mb-4">
          Lumière
        </h1>
        <p className="font-accent text-2xl text-[var(--lumiere-navy)] mb-4 italic">
          Design System for The Wednesday Projects
        </p>
        <p className="text-lg text-[var(--lumiere-navy)] opacity-80 mb-8 max-w-2xl mx-auto">
          Experience elegant French-inspired design with our comprehensive component library. 
          Built for modern web applications with attention to detail and sophisticated aesthetics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LumiereButton 
            variant="primary" 
            size="lg"
            onClick={handleGetStarted}
          >
            Get Started
          </LumiereButton>
          <LumiereButton 
            variant="secondary" 
            size="lg"
            onClick={handleViewComponents}
          >
            View Components
          </LumiereButton>
        </div>
      </div>
    </section>
  );
};
