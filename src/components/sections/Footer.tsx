import React from 'react';

const GITHUB_URL = 'https://github.com/mirabelle514/Lumiere-Design-System';
const STORYBOOK_URL = 'https://687bba4d795507daa442f549-cgildnerdh.chromatic.com/';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[var(--lumiere-navy)]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[var(--lumiere-ivory)] mb-4">
          Design System for {' '}
          <a
            href="https://thewednesdaycollective.com"
            className="text-[var(--lumiere-gold)] underline underline-offset-4 hover:opacity-90"
          >The Wednesday Collective
          </a> | copyright © {new Date().getFullYear()} Mirabelle | Powered by my love for Wednesday 
        </p>
        <p className="text-sm text-[var(--lumiere-ivory)]">
          <a
            href={STORYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lumiere-gold)] underline underline-offset-4 hover:opacity-90"
          >
            Storybook
          </a>
          {' '}|{' '}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lumiere-gold)] underline underline-offset-4 hover:opacity-90"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
