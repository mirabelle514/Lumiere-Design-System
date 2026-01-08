import type { Meta, StoryObj } from '@storybook/react';
import { LumiereShowcase } from './LumiereShowcase';

const meta: Meta<typeof LumiereShowcase> = {
  title: 'Lumiere/LumiereShowcase',
  component: LumiereShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showColorPalette: {
      control: { type: 'boolean' },
    },
    showTypography: {
      control: { type: 'boolean' },
    },
    showButtons: {
      control: { type: 'boolean' },
    },
    showFormElements: {
      control: { type: 'boolean' },
    },
    showCards: {
      control: { type: 'boolean' },
    },
    showTabBar: {
      control: { type: 'boolean' },
    },
    showContactForm: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteShowcase: Story = {
  args: {
    showColorPalette: true,
    showTypography: true,
    showButtons: true,
    showFormElements: true,
    showCards: true,
    showTabBar: true,
    showContactForm: true,
  },
};

export const ColorsOnly: Story = {
  args: {
    showColorPalette: true,
    showTypography: false,
    showButtons: false,
    showFormElements: false,
    showCards: false,
    showTabBar: false,
    showContactForm: false,
  },
};

export const TypographyOnly: Story = {
  args: {
    showColorPalette: false,
    showTypography: true,
    showButtons: false,
    showFormElements: false,
    showCards: false,
    showTabBar: false,
    showContactForm: false,
  },
};

export const ComponentsOnly: Story = {
  args: {
    showColorPalette: false,
    showTypography: false,
    showButtons: true,
    showFormElements: true,
    showCards: true,
    showTabBar: true,
    showContactForm: false,
  },
}; 