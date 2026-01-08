import React from 'react';

interface GuidelineItemProps {
  title: string;
  description: string;
}

const GuidelineItem: React.FC<GuidelineItemProps> = ({ title, description }) => (
  <div>
    <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">
      {title}
    </h4>
    <p className="text-[var(--lumiere-navy)] opacity-80">
      {description}
    </p>
  </div>
);

export const UsageGuidelines: React.FC = () => {
  const guidelines = [
    {
      title: 'Getting Started',
      description: 'Import the Lumière CSS variables and components into your React project. All components are built with TypeScript and include proper prop types for development safety.'
    },
    {
      title: 'Accessibility',
      description: 'All components meet WCAG 2.1 AA standards with proper contrast ratios and keyboard navigation support.'
    },
    {
      title: 'Spacing',
      description: 'Use the 8px grid system: 4px, 8px, 16px, 24px, 32px for consistent spacing throughout the interface.'
    },
    {
      title: 'Colors',
      description: 'Use Parisian Navy for primary text and White for text on dark backgrounds. Antique Gold is ONLY for thin borders and decorative elements - never for text. Use Burgundy or Navy for hover states and accents.'
    },
    {
      title: 'Typography',
      description: 'Playfair Display for headings creates elegance, Open Sans ensures readability for body text, and Open Sans Italic provides subtle emphasis for accent elements.'
    },
    {
      title: 'Component Usage',
      description: 'Each component accepts standard HTML props plus custom variants. Use the variant prop to switch between different styles, and className for additional customization.'
    }
  ];

  return (
    <section data-section="usage-guidelines" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <GuidelineItem key={index} {...guideline} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};