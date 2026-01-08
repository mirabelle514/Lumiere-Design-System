import React from 'react';

interface TypographyItemProps {
  className: string;
  text: string;
  description: string;
}

const TypographyItem: React.FC<TypographyItemProps> = ({ className, text, description }) => (
  <div className="p-4 border-l-4 border-[var(--lumiere-gold)] bg-[var(--lumiere-grey)] rounded-r-lg">
    <div className={className}>{text}</div>
    <small className="text-gray-600 mt-2 block">{description}</small>
  </div>
);

export const TypographySection: React.FC = () => {
  const typographyItems = [
    {
      className: 'font-heading text-3xl font-bold text-[var(--lumiere-navy)]',
      text: 'Heading 1 - Playfair Display Bold',
      description: '32pt, Bold - For main titles and hero text'
    },
    {
      className: 'font-heading text-2xl font-bold text-[var(--lumiere-navy)]',
      text: 'Heading 2 - Playfair Display Bold',
      description: '24pt, Bold - For section titles'
    },
    {
      className: 'font-heading text-lg text-[var(--lumiere-navy)]',
      text: 'Heading 3 - Playfair Display Regular',
      description: '18pt, Regular - For subsections'
    },
    {
      className: 'font-body text-base text-[var(--lumiere-navy)]',
      text: 'Body Text - Open Sans Regular',
      description: '16pt, Regular - For general content and descriptions'
    },
    {
      className: 'font-body text-xs text-[var(--lumiere-navy)]',
      text: 'Caption Text - Open Sans Regular',
      description: '12pt, Regular - For small text and labels'
    },
    {
      className: 'font-accent text-xl italic text-[var(--lumiere-navy)]',
      text: 'Accent Text - Open Sans Italic',
      description: '20pt, Italic - For elegant emphasis and subtle decorative elements'
    }
  ];

  return (
    <section data-section="typography" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Typography
          </h2>
          <div className="space-y-6">
            {typographyItems.map((item, index) => (
              <TypographyItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};