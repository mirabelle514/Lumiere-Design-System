import type { Meta, StoryObj } from '@storybook/react';
import { MobileSection } from './MobileSection';

const meta: Meta<typeof MobileSection> = {
  title: 'Patterns/Mobile Patterns',
  component: MobileSection,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof MobileSection>;

export const Default: Story = {};

