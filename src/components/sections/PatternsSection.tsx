import React, { useMemo, useState } from 'react';
import { AuthSignInCard } from '@/patterns/AuthSignInCard';
import { SettingsScreen } from '@/patterns/SettingsScreen';
import { SearchFilterList, type SearchListItem } from '@/patterns/SearchFilterList';
import { LumiereModal } from '@/components/lumiere/LumiereModal';
import { LumiereButton } from '@/components/lumiere/LumiereButton';

export const PatternsSection: React.FC = () => {
  const [selected, setSelected] = useState<SearchListItem | null>(null);

  const demoItems = useMemo<SearchListItem[]>(
    () => [
      { id: '1', title: 'Parisian Linen Shirt', subtitle: 'Lightweight and refined', meta: '$48', tags: ['Apparel', 'New'] },
      { id: '2', title: 'Antique Gold Bracelet', subtitle: 'Minimal and elegant', meta: '$120', tags: ['Accessories'] },
      { id: '3', title: 'Sage Travel Journal', subtitle: 'For daily notes', meta: '$18', tags: ['Stationery', 'Gift'] },
      { id: '4', title: 'Ivory Ceramic Mug', subtitle: 'Classic café style', meta: '$22', tags: [] },
      { id: '5', title: 'Burgundy Wool Scarf', subtitle: 'Warm, soft, timeless', meta: '$64', tags: ['Apparel', 'Gift'] },
    ],
    []
  );

  return (
    <section data-section="patterns" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-2">
            Patterns
          </h2>
          <p className="text-[var(--lumiere-navy)] opacity-80 mb-8">
            Reusable compositions built from Lumière components. These are copy-ready building blocks for real screens.
          </p>

          <div data-section="pattern-auth" className="scroll-mt-28">
            <AuthSignInCard
              onSubmit={async () => {
                // Demo: no-op
              }}
              onForgotPassword={() => {
                // Demo: no-op
              }}
            />
          </div>

          <div className="my-12 border-t border-[var(--lumiere-gold)]/30" />
          
          <div data-section="pattern-settings" className="scroll-mt-28 max-w-2xl mx-auto">
            <SettingsScreen
              onSave={async () => {
                // Demo: no-op
              }}
              onSignOut={() => {
                // Demo: no-op
              }}
              onDeleteAccount={() => {
                // Demo: no-op
              }}
            />
          </div>

          <div className="my-12 border-t border-[var(--lumiere-gold)]/30" />

          <div data-section="pattern-search" className="scroll-mt-28 max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="font-heading text-3xl text-foreground">Search and Filter</h2>
              <p className="text-sm font-body text-foreground/70 mt-1">
                Search and filter a list of items. This pattern is designed for mobile-first list screens.
              </p>
            </div>

            <SearchFilterList
              title="Search"
              showHeader={false}
              items={demoItems}
              onSelectItem={(item) => setSelected(item)}
            />
          </div>
        </div>
      </div>

      <LumiereModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? 'Details'}
        footer={
          <div className="flex justify-end gap-3">
            <LumiereButton variant="secondary" size="sm" onClick={() => setSelected(null)}>
              Close
            </LumiereButton>
          </div>
        }
      >
        {selected ? (
          <div className="space-y-3">
            {selected.subtitle ? (
              <p className="text-sm text-foreground/80">{selected.subtitle}</p>
            ) : null}
            {selected.meta ? <p className="text-sm text-foreground/70">{selected.meta}</p> : null}
            {selected.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-body px-2 py-1 rounded-full bg-[var(--lumiere-grey)] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </LumiereModal>
    </section>
  );
};

