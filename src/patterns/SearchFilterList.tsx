import React, { useMemo, useState } from 'react';
import { LumiereButton } from '@/components/lumiere/LumiereButton';
import { LumiereCard, LumiereCardContent, LumiereCardHeader, LumiereCardTitle } from '@/components/lumiere/LumiereCard';
import { LumiereInput } from '@/components/lumiere/LumiereInput';
import { LumiereModal } from '@/components/lumiere/LumiereModal';
import { LumiereToggle } from '@/components/lumiere/LumiereToggle';

export interface SearchListItem {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  tags?: string[];
}

export interface SearchFilterListProps {
  title?: string;
  items: SearchListItem[];
  onSelectItem?: (item: SearchListItem) => void;
  /** Hide the internal card header (useful if you want to render it outside the component) */
  showHeader?: boolean;
}

export const SearchFilterList: React.FC<SearchFilterListProps> = ({
  title = 'Search',
  items,
  onSelectItem,
  showHeader = true,
}) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [onlyTagged, setOnlyTagged] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => (i.tags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.subtitle ?? '').toLowerCase().includes(q) ||
        (item.meta ?? '').toLowerCase().includes(q);

      const hasTags = (item.tags ?? []).length > 0;
      const matchesOnlyTagged = !onlyTagged || hasTags;
      const matchesSelectedTag = !selectedTag || (item.tags ?? []).includes(selectedTag);

      return matchesQuery && matchesOnlyTagged && matchesSelectedTag;
    });
  }, [items, onlyTagged, query, selectedTag]);

  return (
    <div className="max-w-3xl mx-auto">
      <LumiereCard variant="standard">
        {showHeader ? (
          <LumiereCardHeader>
            <LumiereCardTitle>{title}</LumiereCardTitle>
            <p className="text-sm font-body text-foreground/70">
              Search and filter a list of items. This pattern is designed for mobile-first list screens.
            </p>
          </LumiereCardHeader>
        ) : null}

        <LumiereCardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
            <div className="flex-1">
              <LumiereInput
                label=" "
                placeholder="Search items…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <LumiereButton variant="secondary" size="sm" onClick={() => setShowFilters(true)}>
              Filters
            </LumiereButton>
          </div>

          <div className="text-sm font-body text-foreground/70">
            Showing <span className="font-heading text-foreground">{filtered.length}</span> of{' '}
            <span className="font-heading text-foreground">{items.length}</span>
          </div>

          <div className="space-y-2">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectItem?.(item)}
                className="w-full text-left p-4 rounded-xl border border-[var(--lumiere-gold)]/30 hover:border-[var(--lumiere-gold)] transition-colors bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-heading text-base text-foreground truncate">{item.title}</div>
                    {item.subtitle ? (
                      <div className="text-sm font-body text-foreground/70 mt-1 truncate">{item.subtitle}</div>
                    ) : null}
                  </div>
                  {item.meta ? (
                    <div className="text-xs font-body text-foreground/60 shrink-0">{item.meta}</div>
                  ) : null}
                </div>

                {item.tags && item.tags.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body px-2 py-1 rounded-full bg-[var(--lumiere-grey)] text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </button>
            ))}

            {filtered.length === 0 ? (
              <div className="text-sm font-body text-foreground/70 border border-[var(--lumiere-gold)]/30 rounded-xl p-4 bg-[var(--lumiere-ivory)]">
                No results. Try adjusting your search or filters.
              </div>
            ) : null}
          </div>
        </LumiereCardContent>
      </LumiereCard>

      <LumiereModal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        title="Filters"
        footer={
          <div className="flex justify-end gap-3">
            <LumiereButton variant="secondary" size="sm" onClick={() => setShowFilters(false)}>
              Done
            </LumiereButton>
          </div>
        }
      >
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-heading text-base text-foreground">Only tagged items</div>
              <div className="text-sm font-body text-foreground/70 mt-1">
                Hide items that have no tags.
              </div>
            </div>
            <LumiereToggle
              variant="switch"
              pressed={onlyTagged}
              aria-label="Only tagged items"
              onClick={() => setOnlyTagged((v) => !v)}
            />
          </div>

          {availableTags.length ? (
            <div className="space-y-3">
              <div className="font-heading text-base text-foreground">Tag</div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className={[
                    'px-3 py-1.5 rounded-full text-sm font-body border transition-colors',
                    !selectedTag
                      ? 'bg-[var(--lumiere-navy)] text-white border-[var(--lumiere-navy)]'
                      : 'bg-white text-foreground border-[var(--lumiere-gold)] hover:bg-[var(--lumiere-grey)]',
                  ].join(' ')}
                >
                  All
                </button>
                {availableTags.map((tag) => {
                  const isActive = tag === selectedTag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={[
                        'px-3 py-1.5 rounded-full text-sm font-body border transition-colors',
                        isActive
                          ? 'bg-[var(--lumiere-navy)] text-white border-[var(--lumiere-navy)]'
                          : 'bg-white text-foreground border-[var(--lumiere-gold)] hover:bg-[var(--lumiere-grey)]',
                      ].join(' ')}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </LumiereModal>
    </div>
  );
};

