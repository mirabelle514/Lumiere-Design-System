import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TopNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#color-palette', label: 'Colors' },
    { href: '#typography', label: 'Typography' },
    { href: '#component-showcase', label: 'Components' },
    { href: '#spacing', label: 'Spacing' },
    { href: '#mobile-patterns', label: 'Patterns' },
    { href: '#animation', label: 'Animation' },
    { href: '#accessibility', label: 'Accessibility' },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--lumiere-ivory)]/95 backdrop-blur-md border-b border-[var(--lumiere-gold)]/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-heading text-xl font-bold text-[var(--lumiere-burgundy)]">
          Lumiere
        </div>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-[var(--lumiere-navy)]/70 text-sm hover:text-[var(--lumiere-navy)]",
                  "transition-colors font-body"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[var(--lumiere-navy)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--lumiere-grey)] border-t border-[var(--lumiere-gold)]/30">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-[var(--lumiere-navy)]/70 text-sm hover:text-[var(--lumiere-navy)]",
                    "transition-colors block w-full text-left font-body"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
