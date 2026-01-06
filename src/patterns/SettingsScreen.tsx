import React, { useMemo, useState } from 'react';
import { LumiereButton } from '@/components/lumiere/LumiereButton';
import { LumiereCard, LumiereCardContent, LumiereCardHeader, LumiereCardTitle } from '@/components/lumiere/LumiereCard';
import { LumiereToggle } from '@/components/lumiere/LumiereToggle';

export interface SettingsToggleItem {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}

export interface SettingsScreenValues {
  toggles: Record<string, boolean>;
}

export interface SettingsScreenProps {
  title?: string;
  sections?: Array<{
    title: string;
    items: SettingsToggleItem[];
  }>;
  onSave?: (values: SettingsScreenValues) => void | Promise<void>;
  onSignOut?: () => void;
  onDeleteAccount?: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  title = 'Settings',
  sections,
  onSave,
  onSignOut,
  onDeleteAccount,
}) => {
  const initialToggles = useMemo(() => {
    const defaults: Record<string, boolean> = {};
    (sections ?? []).forEach((section) => {
      section.items.forEach((item) => {
        defaults[item.id] = item.defaultChecked ?? false;
      });
    });
    return defaults;
  }, [sections]);

  const [toggles, setToggles] = useState<Record<string, boolean>>(initialToggles);
  const [isSaving, setIsSaving] = useState(false);

  const builtSections =
    sections ??
    [
      {
        title: 'Preferences',
        items: [
          { id: 'notifications', label: 'Notifications', description: 'Receive product updates and release notes.', defaultChecked: true },
          { id: 'marketing', label: 'Marketing emails', description: 'Occasional announcements and tips.', defaultChecked: false },
        ],
      },
      {
        title: 'Security',
        items: [
          { id: 'biometrics', label: 'Biometric unlock', description: 'Use device biometrics when available.', defaultChecked: true },
          { id: 'session', label: 'Remember this device', description: 'Stay signed in on this device.', defaultChecked: true },
        ],
      },
    ];

  const handleSave = async () => {
    if (!onSave) return;
    setIsSaving(true);
    try {
      await onSave({ toggles });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start">
        <div>
          <h2 className="font-heading text-3xl text-foreground">{title}</h2>
          <p className="text-sm font-body text-foreground/70 mt-1">
            Update your preferences and security settings.
          </p>
        </div>
        {onSave ? (
          <LumiereButton variant="secondary" size="sm" disabled={isSaving} onClick={handleSave}>
            {isSaving ? 'Saving…' : 'Save'}
          </LumiereButton>
        ) : null}
      </div>

      {builtSections.map((section) => (
        <LumiereCard key={section.title} variant="standard">
          <LumiereCardHeader className="mb-0 pb-4 border-b border-[var(--lumiere-gold)]/20">
            <LumiereCardTitle className="w-full text-left">{section.title}</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent className="divide-y divide-[var(--lumiere-gold)]/20">
            {section.items.map((item) => (
              <div key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-4 py-4">
                <div className="min-w-0 space-y-1">
                  <div className="font-heading text-base text-foreground leading-tight">
                    {item.label}
                  </div>
                  {item.description ? (
                    <div className="text-sm font-body text-foreground/70 leading-snug">
                      {item.description}
                    </div>
                  ) : null}
                </div>
                <LumiereToggle
                  variant="switch"
                  pressed={!!toggles[item.id]}
                  aria-label={item.label}
                  onClick={() => setToggles((t) => ({ ...t, [item.id]: !t[item.id] }))}
                />
              </div>
            ))}
          </LumiereCardContent>
        </LumiereCard>
      ))}

      {(onSignOut || onDeleteAccount) && (
        <LumiereCard variant="standard" className="border-destructive/30">
          <LumiereCardHeader className="mb-0 pb-4 border-b border-[var(--lumiere-gold)]/20">
            <LumiereCardTitle className="w-full text-left text-destructive">Account</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent className="pt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="text-sm font-body text-foreground/70">
              Manage your session and account access.
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {onSignOut ? (
                <LumiereButton variant="secondary" size="sm" onClick={onSignOut}>
                  Sign out
                </LumiereButton>
              ) : null}
              {onDeleteAccount ? (
                <LumiereButton variant="destructive" size="sm" onClick={onDeleteAccount}>
                  Delete account
                </LumiereButton>
              ) : null}
            </div>
          </LumiereCardContent>
        </LumiereCard>
      )}
    </div>
  );
};

