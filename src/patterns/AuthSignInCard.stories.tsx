import type { Meta, StoryObj } from '@storybook/react';
import { AuthSignInCard } from './AuthSignInCard';

const meta: Meta<typeof AuthSignInCard> = {
  title: 'Patterns/Auth/Sign In Card',
  component: AuthSignInCard,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `import { AuthSignInCard } from 'lumiere-design-system';

export function SignIn() {
  return (
    <AuthSignInCard
      title="Sign in"
      subtitle="Welcome back"
      onSubmit={async ({ email, password, rememberMe }) => {
        // call your auth API here
      }}
      onForgotPassword={() => {
        // navigate to reset password
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
type Story = StoryObj<typeof AuthSignInCard>;

export const Default: Story = {
  args: {
    title: 'Sign in',
    subtitle: 'Welcome back to Lumière',
    onSubmit: async (values) => {
      // Storybook demo: no-op
      // eslint-disable-next-line no-console
      console.log('submit', values);
    },
    onForgotPassword: () => {
      // eslint-disable-next-line no-console
      console.log('forgot password');
    },
  },
};

