import React, { useMemo, useState } from 'react';
import { LumiereButton } from '@/components/lumiere/LumiereButton';
import { LumiereCard, LumiereCardContent, LumiereCardHeader, LumiereCardTitle } from '@/components/lumiere/LumiereCard';
import { LumiereInput } from '@/components/lumiere/LumiereInput';
import { LumiereToggle } from '@/components/lumiere/LumiereToggle';

export interface AuthSignInCardValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthSignInCardProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  defaultValues?: Partial<AuthSignInCardValues>;
  isSubmitting?: boolean;
  errorMessage?: string;
  onSubmit: (values: AuthSignInCardValues) => void | Promise<void>;
  onForgotPassword?: () => void;
}

export const AuthSignInCard: React.FC<AuthSignInCardProps> = ({
  title = 'Sign in',
  subtitle = 'Welcome back',
  submitLabel = 'Sign in',
  defaultValues,
  isSubmitting = false,
  errorMessage,
  onSubmit,
  onForgotPassword,
}) => {
  const initial = useMemo<AuthSignInCardValues>(
    () => ({
      email: defaultValues?.email ?? '',
      password: defaultValues?.password ?? '',
      rememberMe: defaultValues?.rememberMe ?? true,
    }),
    [defaultValues]
  );

  const [values, setValues] = useState<AuthSignInCardValues>(initial);
  const [localError, setLocalError] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(undefined);

    if (!values.email.trim() || !values.password.trim()) {
      setLocalError('Please enter your email and password.');
      return;
    }

    await onSubmit(values);
  };

  const mergedError = errorMessage ?? localError;

  return (
    <LumiereCard variant="standard" className="max-w-md mx-auto">
      <LumiereCardHeader>
        <LumiereCardTitle className="text-2xl">{title}</LumiereCardTitle>
        <p className="text-sm text-foreground/70 font-body">{subtitle}</p>
      </LumiereCardHeader>

      <LumiereCardContent className="space-y-4">
        {mergedError ? (
          <div className="text-sm font-body text-destructive bg-destructive/10 border border-destructive/30 rounded-lg p-3">
            {mergedError}
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <LumiereInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            autoComplete="email"
          />

          <LumiereInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setValues((v) => ({ ...v, rememberMe: !v.rememberMe }))}
              className="inline-flex items-center gap-3 text-sm font-body text-foreground/80"
            >
              <LumiereToggle
                variant="switch"
                pressed={values.rememberMe}
                aria-label="Remember me"
              />
              Remember me
            </button>

            {onForgotPassword ? (
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm font-body text-foreground/80 underline underline-offset-4 hover:text-foreground"
              >
                Forgot password
              </button>
            ) : null}
          </div>

          <LumiereButton
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            type="submit"
            aria-label="Submit sign in"
          >
            {isSubmitting ? 'Signing in…' : submitLabel}
          </LumiereButton>
        </form>
      </LumiereCardContent>
    </LumiereCard>
  );
};

