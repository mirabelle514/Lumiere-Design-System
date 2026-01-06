import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SettingsScreen } from './SettingsScreen';

const meta: Meta<typeof SettingsScreen> = {
  title: 'Patterns/Screens/Settings',
  component: SettingsScreen,
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: `import { SettingsScreen } from 'lumiere-design-system';

export function SettingsPage() {
  return (
    <SettingsScreen
      onSave={async ({ toggles }) => {
        // persist settings
      }}
      onSignOut={() => {
        // sign out user
      }}
      onDeleteAccount={() => {
        // show confirmation and delete
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
type Story = StoryObj<typeof SettingsScreen>;

export const Default: Story = {
  args: {
    onSave: async (values) => {
      // eslint-disable-next-line no-console
      console.log('save', values);
    },
    onSignOut: () => {
      // eslint-disable-next-line no-console
      console.log('sign out');
    },
    onDeleteAccount: () => {
      // eslint-disable-next-line no-console
      console.log('delete account');
    },
  },
};

