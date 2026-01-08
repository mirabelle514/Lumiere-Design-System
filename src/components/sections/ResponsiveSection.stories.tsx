import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveSection } from './ResponsiveSection';

const meta: Meta<typeof ResponsiveSection> = {
  title: 'Patterns/Responsive',
  component: ResponsiveSection,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ResponsiveSection>;

export const Default: Story = {};

