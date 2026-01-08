import React, { useState, useEffect } from 'react';
import { ChevronUp, Palette, Type, Feather, Ruler, Layers, Smartphone, Monitor, Zap, Eye, BookOpen, Grid, Github, Figma } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector<HTMLElement>(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'color-palette', icon: <Palette size={16} />, label: 'Colors' },
    { id: 'typography', icon: <Type size={16} />, label: 'Typography' },
    { id: 'iconography', icon: <Feather size={16} />, label: 'Icons' },
    { id: 'spacing', icon: <Ruler size={16} />, label: 'Spacing' },
    { id: 'component-showcase', icon: <Layers size={16} />, label: 'Components' },
    { id: 'patterns', icon: <Grid size={16} />, label: 'Patterns' },
    { id: 'mobile-patterns', icon: <Smartphone size={16} />, label: 'Mobile Patterns' },
    { id: 'mobile-example', icon: <Smartphone size={16} />, label: 'Mobile Example' },
    { id: 'responsive', icon: <Monitor size={16} />, label: 'Responsive' },
    { id: 'animation', icon: <Zap size={16} />, label: 'Animation' },
    { id: 'accessibility', icon: <Eye size={16} />, label: 'A11y' },
    { id: 'usage-guidelines', icon: <BookOpen size={16} />, label: 'Guidelines' }
  ];

  const externalLinks = [
    {
      id: 'github',
      icon: <Github size={16} />,
      label: 'GitHub',
      url: 'https://github.com/mirabelle514/Lumiere-Design-System'
    },
    {
      id: 'storybook',
      icon: <BookOpen size={16} />,
      label: 'Storybook',
      url: 'https://687bba4d795507daa442f549-cgildnerdh.chromatic.com/'
    },
    {
      id: 'figma',
      icon: <Figma size={16} />,
      label: 'Figma',
      url: 'https://www.figma.com/design/b02EQ9Wv4eYica3NA9JHNk/Cover-w-coming-up?node-id=0-1&t=ARHvWe8okuVZl7Nu-1'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {/* External Links */}
      <div className="flex flex-col gap-2">
        {externalLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              `bg-[var(--lumiere-navy)] text-white p-3 rounded-full
              shadow-[var(--shadow-soft)] hover:bg-[#2a3a56] 
              transition-all duration-300 hover:scale-110
              flex items-center justify-center group relative`
            )}
            title={link.label}
          >
            {link.icon}
            <span className="absolute right-full mr-3 px-2 py-1 bg-[var(--lumiere-navy)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Navigation Menu Toggle */}
      <div className="relative">
        {/* Expanded Navigation Menu */}
        <div className={cn(
          `absolute bottom-full right-0 mb-3 transition-all duration-300 origin-bottom-right`,
          isExpanded
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        )}>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)] min-w-[200px]">
            <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsExpanded(false);
                  }}
                  className={cn(
                    `flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
                    text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-sage)]/30
                    transition-all duration-200 text-sm font-medium
                    hover:translate-x-1`
                  )}
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            `bg-[var(--lumiere-burgundy)] text-white p-4 rounded-full
            shadow-[var(--shadow-soft)] hover:bg-[#8a3651] 
            transition-all duration-300 hover:scale-110
            flex items-center justify-center relative group`,
            isExpanded && 'bg-[#8a3651] scale-110'
          )}
          title="Navigation Menu"
        >
          <div className={cn(
            'transition-transform duration-300',
            isExpanded ? 'rotate-45' : 'rotate-0'
          )}>
            <Grid size={20} />
          </div>
          <span className="absolute right-full mr-3 px-2 py-1 bg-[var(--lumiere-burgundy)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Menu
          </span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          `bg-[var(--lumiere-sage)] text-[var(--lumiere-navy)] p-4 rounded-full
          shadow-[var(--shadow-soft)] hover:bg-[#94a688] 
          transition-all duration-300 hover:scale-110 hover:-translate-y-1
          flex items-center justify-center group relative`
        )}
        title="Back to top"
      >
        <ChevronUp size={20} />
        <span className="absolute right-full mr-3 px-2 py-1 bg-[var(--lumiere-sage)] text-[var(--lumiere-navy)] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Top
        </span>
      </button>
    </div>
  );
};