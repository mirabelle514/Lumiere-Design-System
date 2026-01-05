import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[var(--lumiere-grey)] border-t border-[var(--lumiere-gold)]/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-heading text-xl font-bold text-[var(--lumiere-burgundy)] mb-2">
          Lumiere
        </div>
        <p className="text-sm text-[var(--lumiere-navy)]/70 mb-4">
          Design System for The Wednesday Projects
        </p>
        <p className="text-xs text-[var(--lumiere-navy)]/50">
          Part of The Wednesday Collective / built by Mirabelle with love for all pets
        </p>
      </div>
    </footer>
  );
};
