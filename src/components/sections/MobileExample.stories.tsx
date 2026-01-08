import type { Meta, StoryObj } from '@storybook/react';
import { MobileExample } from './MobileExample';

const meta: Meta<typeof MobileExample> = {
  title: 'Patterns/Mobile Example',
  component: MobileExample,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof MobileExample>;

export const Default: Story = {};

