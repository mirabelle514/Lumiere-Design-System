import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, Github, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ThemeMode = 'light' | 'dark';
const THEME_STORAGE_KEY = 'lumiere-theme';

type NavTabId = 'core' | 'components' | 'patterns' | 'guidelines';
const NAV_TAB_STORAGE_KEY = 'lumiere-nav-tab';

const GITHUB_URL = 'https://github.com/mirabelle514/Lumiere-Design-System';
const STORYBOOK_URL = 'https://687bba4d795507daa442f549-cgildnerdh.chromatic.com/';

export const TopNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeTab, setActiveTab] = useState<NavTabId>('core');

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    // Back-compat: older builds stored `navy` for the dark theme.
    const nextTheme: ThemeMode = stored === 'dark' || stored === 'navy' ? 'dark' : 'light';
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem(NAV_TAB_STORAGE_KEY);
    // Back-compat with older tab ids.
    const normalized =
      stored === 'foundations'
        ? 'core'
        : stored === 'templates' || stored === 'examples'
          ? 'patterns'
          : stored === 'docs' || stored === 'guidelines'
            ? 'guidelines'
            : stored;

    const nextTab: NavTabId =
      normalized === 'components' ||
      normalized === 'patterns' ||
      normalized === 'guidelines'
        ? normalized
        : 'core';
    setActiveTab(nextTab);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(NAV_TAB_STORAGE_KEY, activeTab);
  }, [activeTab]);

  const navTabs = useMemo(() => {
    const core = [
      { section: 'color-palette', label: 'Colors' },
      { section: 'typography', label: 'Typography' },
      { section: 'spacing', label: 'Spacing' },
      { section: 'tokens', label: 'Tokens' },
      { section: 'iconography', label: 'Iconography' },
    ];

    const components = [{ section: 'component-showcase', label: 'Components' }];

    const patterns = [
      { section: 'patterns', label: 'Overview' },
      { section: 'pattern-auth', label: 'Auth / Sign In' },
      { section: 'pattern-settings', label: 'Settings' },
      { section: 'pattern-search', label: 'Search + Filter List' },
      { section: 'mobile-example', label: 'Mobile Example' },
      { section: 'mobile-patterns', label: 'Mobile Patterns' },
      { section: 'responsive', label: 'Responsive' },
    ];

    const guidelines = [
      { section: 'accessibility', label: 'Accessibility' },
      { section: 'usage-guidelines', label: 'Guidelines' },
    ];

    return [
      { id: 'core' as const, label: 'Core', links: core },
      { id: 'components' as const, label: 'Components', links: components },
      { id: 'patterns' as const, label: 'Patterns', links: patterns },
      { id: 'guidelines' as const, label: 'Guidelines', links: guidelines },
    ];
  }, []);

  const activeLinks = useMemo(() => {
    const found = navTabs.find((t) => t.id === activeTab);
    return found?.links ?? navTabs[0].links;
  }, [activeTab, navTabs]);

  const scrollToSection = (section: string) => {
    const element = document.querySelector<HTMLElement>(`[data-section="${section}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const brandColor = theme === 'dark' ? 'var(--lumiere-gold)' : 'var(--lumiere-burgundy)';
  const tabButtonClassName = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm font-body transition-colors whitespace-nowrap',
      isActive
        ? theme === 'dark'
          ? 'bg-[var(--lumiere-gold)] text-[var(--lumiere-navy)]'
          : 'bg-[var(--lumiere-navy)] text-white'
        : 'text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20'
    );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--app-bg)]/95 backdrop-blur-md border-b border-[var(--lumiere-gold)]/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left"
          aria-label="Scroll to top"
        >
          <span className="font-heading text-xl font-bold" style={{ color: brandColor }}>
            Lumiere
          </span>
        </button>
        
        <div className="hidden md:flex flex-1 justify-end">
          <div className="w-full max-w-[52rem]">
            <div className="flex items-center justify-between gap-4">
              <div
                className="inline-flex rounded-xl border border-[var(--lumiere-gold)]/50 p-1 bg-[var(--app-bg)]/60"
                role="tablist"
                aria-label="Navigation categories"
              >
                {navTabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={tabButtonClassName(isActive)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={STORYBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors whitespace-nowrap"
                  aria-label="Open Storybook in a new tab"
                >
                  <BookOpen className="h-4 w-4" />
                  Storybook
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors whitespace-nowrap"
                  aria-label="Open GitHub repository in a new tab"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <button
                  type="button"
                  onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                  className="px-3 py-1.5 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors whitespace-nowrap"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <ul className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
              {activeLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className={cn(
                      'px-3 py-1.5 rounded-full border border-[var(--lumiere-gold)]/30',
                      'text-[var(--nav-muted)] text-sm hover:text-[var(--nav-text)] hover:border-[var(--lumiere-gold)]',
                      'transition-colors font-body'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-[var(--nav-text)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--app-bg)] border-t border-[var(--lumiere-gold)]/30">
          <div className="px-6 py-4 space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={STORYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors inline-flex items-center gap-2"
                aria-label="Open Storybook in a new tab"
              >
                <BookOpen className="h-4 w-4" />
                Storybook
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors inline-flex items-center gap-2"
                aria-label="Open GitHub repository in a new tab"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <button
                type="button"
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors"
              >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>

            <div
              className="flex gap-2 overflow-x-auto rounded-xl border border-[var(--lumiere-gold)]/50 p-1 bg-[var(--app-bg)]/60"
              role="tablist"
              aria-label="Navigation categories"
            >
              {navTabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-body transition-colors whitespace-nowrap',
                      isActive
                        ? theme === 'dark'
                          ? 'bg-[var(--lumiere-gold)] text-[var(--lumiere-navy)]'
                          : 'bg-[var(--lumiere-navy)] text-white'
                        : 'text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20'
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <ul className="space-y-3">
              {activeLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-lg border border-[var(--lumiere-gold)]/30',
                      'text-[var(--nav-muted)] text-sm hover:text-[var(--nav-text)] hover:border-[var(--lumiere-gold)]',
                      'transition-colors font-body'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
