import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ThemeMode = 'light' | 'navy';
const THEME_STORAGE_KEY = 'lumiere-theme';

type NavTabId = 'core' | 'components' | 'patterns' | 'guidelines';
const NAV_TAB_STORAGE_KEY = 'lumiere-nav-tab';

export const TopNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeTab, setActiveTab] = useState<NavTabId>('core');

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextTheme: ThemeMode = stored === 'navy' ? 'navy' : 'light';
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
      { href: '#color-palette', label: 'Colors' },
      { href: '#typography', label: 'Typography' },
      { href: '#spacing', label: 'Spacing' },
      { href: '#tokens', label: 'Tokens' },
      { href: '#iconography', label: 'Iconography' },
    ];

    const components = [{ href: '#component-showcase', label: 'Components' }];

    const patterns = [
      { href: '#patterns', label: 'Overview' },
      { href: '#pattern-auth', label: 'Auth / Sign In' },
      { href: '#pattern-settings', label: 'Settings' },
      { href: '#pattern-search', label: 'Search + Filter List' },
      { href: '#mobile-example', label: 'Mobile Example' },
      { href: '#mobile-patterns', label: 'Mobile Patterns' },
      { href: '#responsive', label: 'Responsive' },
    ];

    const guidelines = [
      { href: '#accessibility', label: 'Accessibility' },
      { href: '#usage-guidelines', label: 'Guidelines' },
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

  const brandColor = theme === 'navy' ? 'var(--lumiere-gold)' : 'var(--lumiere-burgundy)';
  const tabButtonClassName = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm font-body transition-colors whitespace-nowrap',
      isActive
        ? theme === 'navy'
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

              <button
                type="button"
                onClick={() => setTheme((t) => (t === 'navy' ? 'light' : 'navy'))}
                className="px-3 py-1.5 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors whitespace-nowrap"
                aria-label={theme === 'navy' ? 'Switch to light mode' : 'Switch to navy mode'}
              >
                {theme === 'navy' ? 'Light mode' : 'Navy mode'}
              </button>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <ul className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
              {activeLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
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
              <button
                type="button"
                onClick={() => setTheme((t) => (t === 'navy' ? 'light' : 'navy'))}
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--nav-text)] hover:bg-[var(--lumiere-grey)]/20 transition-colors"
              >
                {theme === 'navy' ? 'Light mode' : 'Navy mode'}
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
                        ? theme === 'navy'
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
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
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
