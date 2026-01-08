import React from 'react';
import { Controls, Description, Primary, Source, Stories, Title } from '@storybook/blocks';

// Note: do NOT use preview hooks (e.g. `useParameter` from `@storybook/preview-api`) here.
// Storybook restricts preview hooks to decorators and story functions.
const DEFAULT = {
  variants: [
    'Primary / Secondary / Tertiary',
    'Sizes (sm / md / lg)',
    'States (disabled / loading)',
  ],
  designTokensUsed: [
    'Colors: token.color.primary',
    'Spacing: token.spacing.md',
    'Typography: token.font.body',
  ],
  accessibility: [
    'Keyboard: Tab / Enter / Space',
    'ARIA: aria-label when needed',
    'Focus: visible focus ring',
  ],
  responsiveBehavior: [
    'Mobile: full width below 640px',
    'Tablet: reduced padding',
  ],
  relatedComponents: [],
};

function List({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function DocsScaffoldPage() {
  return (
    <>
      <Title />

      <h2>Overview</h2>
      <Description />

      <h2>Basic Usage</h2>
      <Source />

      <h2>Props</h2>
      <Controls />

      <h2>Variants</h2>
      <List items={DEFAULT.variants} />

      <h2>Examples</h2>
      <Primary />
      <Stories />

      <h2>Design Tokens Used</h2>
      <List items={DEFAULT.designTokensUsed} />

      <h2>Accessibility</h2>
      <List items={DEFAULT.accessibility} />

      <h2>Responsive Behavior</h2>
      <List items={DEFAULT.responsiveBehavior} />

      <h2>Composition</h2>
      <p>How it works with other components.</p>

      <h2>API Reference</h2>
      <p>Detailed prop explanations (see Props table above).</p>

      <h2>Related Components</h2>
      <p>Add related components here.</p>
    </>
  );
}

