import React from 'react';

interface ColorSwatchProps {
  color: string;
  name: string;
  hex: string;
  note?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name, hex, note }) => (
  <div className="text-center border border-[var(--lumiere-gold)] rounded-xl overflow-hidden">
    <div 
      className="h-24 w-full"
      style={{ backgroundColor: color }}
    />
    <div className="p-4 bg-white">
      <div className="font-heading font-bold text-[var(--lumiere-navy)] mb-1">
        {name}
      </div>
      <div className="font-mono text-sm text-[var(--lumiere-navy)] opacity-70 mb-1">
        {hex}
      </div>
      {note && (
        <small className="text-gray-500 text-xs">{note}</small>
      )}
    </div>
  </div>
);

export const ColorPaletteSection: React.FC = () => {
  const colors = [
    { color: '#FAF8F3', name: 'Ivory White', hex: '#FAF8F3' },
    { color: '#22304A', name: 'Parisian Navy', hex: '#22304A' },
    { color: '#C6A664', name: 'Antique Gold', hex: '#C6A664', note: 'Borders & accents only' },
    { color: '#7C3048', name: 'Burgundy', hex: '#7C3048' },
    { color: '#A6B89A', name: 'Sage Green', hex: '#A6B89A' },
    { color: '#E5E2DD', name: 'Dove Grey', hex: '#E5E2DD' }
  ];

  return (
    <section data-section="color-palette" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Color Palette
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <ColorSwatch key={index} {...color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};