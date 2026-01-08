import React, { useMemo, useState } from 'react';
import { lumiereTokens } from '@lumiere/tokens';

type TokenGroupKey = keyof typeof lumiereTokens;

function downloadTextFile(filename: string, contents: string, mimeType: string) {
  const blob = new Blob([contents], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  // Allow the click to start before revoking.
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function buildTokensJs() {
  return `export const lumiereTokens = ${JSON.stringify(lumiereTokens, null, 2)};\n`;
}

function buildTokensJson() {
  return `${JSON.stringify(lumiereTokens, null, 2)}\n`;
}

function buildTokensCss() {
  const entries = Object.entries(lumiereTokens.lumiere ?? {});
  const cssVars = entries
    .map(([key, value]) => `  --lumiere-${key}: ${value};`)
    .join('\n');
  return `:root {\n${cssVars}\n}\n`;
}

export const TokensSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<TokenGroupKey>('lumiere');

  const groupKeys = useMemo(() => Object.keys(lumiereTokens) as TokenGroupKey[], []);
  const activeEntries = useMemo(() => {
    const group = lumiereTokens[activeGroup] as Record<string, unknown>;
    return Object.entries(group ?? {});
  }, [activeGroup]);

  return (
    <section data-section="tokens" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <div className="border-b-2 border-[var(--lumiere-gold)] pb-4 mb-8 text-center">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-4">
              Design Tokens
            </h2>
            <p className="text-sm text-[var(--lumiere-navy)]/70 max-w-2xl mx-auto">
              These are the source values used to power colors, typography, and spacing across the Lumière system.
              You can browse them below or download a copy.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-grey)] transition-colors"
                onClick={() => downloadTextFile('lumiere.tokens.js', buildTokensJs(), 'text/javascript')}
              >
                Download tokens.js
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-grey)] transition-colors"
                onClick={() => downloadTextFile('lumiere.tokens.json', buildTokensJson(), 'application/json')}
              >
                Download tokens.json
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-[var(--lumiere-gold)] text-sm font-body text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-grey)] transition-colors"
                onClick={() => downloadTextFile('lumiere.tokens.css', buildTokensCss(), 'text/css')}
              >
                Download tokens.css
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {groupKeys.map((key) => {
              const isActive = key === activeGroup;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveGroup(key)}
                  className={[
                    'px-3 py-1.5 rounded-full text-sm font-body transition-colors border',
                    isActive
                      ? 'bg-[var(--lumiere-navy)] text-white border-[var(--lumiere-navy)]'
                      : 'bg-white text-[var(--lumiere-navy)] border-[var(--lumiere-gold)] hover:bg-[var(--lumiere-grey)]',
                  ].join(' ')}
                >
                  {key}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeEntries.map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-3 p-4 border border-[var(--lumiere-gold)]/40 rounded-xl bg-[var(--lumiere-ivory)]"
              >
                <div className="min-w-0">
                  <div className="font-mono text-sm text-[var(--lumiere-navy)] truncate">
                    {k}
                  </div>
                  <div className="text-xs text-[var(--lumiere-navy)]/60 mt-1 break-all">
                    {String(v)}
                  </div>
                </div>

                {activeGroup === 'lumiere' && typeof v === 'string' ? (
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="font-mono text-xs text-[var(--lumiere-navy)]/70">
                      {v}
                    </div>
                    <div
                      className="h-8 w-8 rounded-lg border border-[var(--lumiere-gold)]"
                      style={{ backgroundColor: v }}
                      aria-label={`Color swatch for ${k}`}
                      title={`${k}: ${v}`}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

