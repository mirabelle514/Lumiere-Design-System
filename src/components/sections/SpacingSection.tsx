import React from 'react';

interface SpacingExampleProps {
  size: string;
  pixels: string;
  usage: string;
  className: string;
}

const SpacingExample: React.FC<SpacingExampleProps> = ({ size, pixels, usage, className }) => (
  <div className="flex items-center gap-4 p-4 border border-[var(--lumiere-gold)] rounded-lg">
    <div className="flex items-center gap-2">
      <div className={`bg-[var(--lumiere-navy)] ${className}`}></div>
      <div>
        <div className="font-heading font-bold text-[var(--lumiere-navy)]">{size}</div>
        <div className="text-sm text-[var(--lumiere-navy)] opacity-70">{pixels}</div>
      </div>
    </div>
    <div className="flex-1 text-sm text-[var(--lumiere-navy)] opacity-80">
      {usage}
    </div>
  </div>
);

export const SpacingSection: React.FC = () => {
  const spacingValues = [
    { size: 'XS', pixels: '4px', usage: 'Icon padding, small gaps', className: 'w-1 h-1' },
    { size: 'SM', pixels: '8px', usage: 'Button padding, form spacing', className: 'w-2 h-2' },
    { size: 'MD', pixels: '16px', usage: 'Card padding, section gaps', className: 'w-4 h-4' },
    { size: 'LG', pixels: '24px', usage: 'Page margins, large spacing', className: 'w-6 h-6' },
    { size: 'XL', pixels: '32px', usage: 'Section padding, hero spacing', className: 'w-8 h-8' },
    { size: '2XL', pixels: '48px', usage: 'Major section breaks', className: 'w-12 h-12' },
    { size: '3XL', pixels: '64px', usage: 'Page-level spacing', className: 'w-16 h-16' }
  ];

  return (
    <section id="spacing" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Spacing System
          </h2>
          
          <div className="mb-6">
            <p className="text-[var(--lumiere-navy)] opacity-80 mb-4">
              Our spacing system follows an 8px grid for consistent layouts and improved visual rhythm. 
              This ensures proper touch targets and comfortable reading experiences on mobile devices.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {spacingValues.map((spacing, index) => (
              <SpacingExample key={index} {...spacing} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Mobile Touch Targets</h4>
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1">
                <li>• Minimum 44px for primary actions</li>
                <li>• 32px for secondary actions</li>
                <li>• 8px spacing between touch elements</li>
                <li>• 16px margins from screen edges</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Content Spacing</h4>
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1">
                <li>• 24px between major sections</li>
                <li>• 16px between related elements</li>
                <li>• 8px between form fields</li>
                <li>• 4px for inline element spacing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};