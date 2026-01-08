import type { Meta, StoryObj } from '@storybook/react';
import { PatternsSection } from './PatternsSection';

const meta: Meta<typeof PatternsSection> = {
  title: 'Patterns/Overview',
  component: PatternsSection,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof PatternsSection>;

export const Default: Story = {};

