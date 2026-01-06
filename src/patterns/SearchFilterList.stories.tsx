import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LumiereModal } from '@/components/lumiere/LumiereModal';
import { LumiereButton } from '@/components/lumiere/LumiereButton';
import { SearchFilterList, type SearchListItem } from './SearchFilterList';

const meta: Meta<typeof SearchFilterList> = {
  title: 'Patterns/Screens/Search + Filter List',
  component: SearchFilterList,
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: `import { SearchFilterList } from 'lumiere-design-system';

const items = [
  { id: '1', title: 'Parisian Linen Shirt', subtitle: 'Lightweight and refined', meta: '$48', tags: ['Apparel', 'New'] },
  { id: '2', title: 'Antique Gold Bracelet', subtitle: 'Minimal and elegant', meta: '$120', tags: ['Accessories'] },
];

export function SearchPage() {
  return (
    <SearchFilterList
      title="Search"
      items={items}
      onSelectItem={(item) => {
        // open details drawer/modal
      }}
    />
  );
}
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchFilterList>;

const demoItems: SearchListItem[] = [
  { id: '1', title: 'Parisian Linen Shirt', subtitle: 'Lightweight and refined', meta: '$48', tags: ['Apparel', 'New'] },
  { id: '2', title: 'Antique Gold Bracelet', subtitle: 'Minimal and elegant', meta: '$120', tags: ['Accessories'] },
  { id: '3', title: 'Sage Travel Journal', subtitle: 'For daily notes', meta: '$18', tags: ['Stationery', 'Gift'] },
  { id: '4', title: 'Ivory Ceramic Mug', subtitle: 'Classic café style', meta: '$22', tags: [] },
  { id: '5', title: 'Burgundy Wool Scarf', subtitle: 'Warm, soft, timeless', meta: '$64', tags: ['Apparel', 'Gift'] },
];

export const Default: Story = {
  args: {
    title: 'Search',
    items: demoItems,
  },
  render: (args) => {
    const [selected, setSelected] = useState<SearchListItem | null>(null);
    return (
      <>
        <SearchFilterList
          {...args}
          onSelectItem={(item) => setSelected(item)}
        />

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
              {selected.subtitle ? <p className="text-sm text-foreground/80">{selected.subtitle}</p> : null}
              {selected.meta ? <p className="text-sm text-foreground/70">{selected.meta}</p> : null}
              {selected.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span key={t} className="text-xs font-body px-2 py-1 rounded-full bg-[var(--lumiere-grey)] text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </LumiereModal>
      </>
    );
  },
};

