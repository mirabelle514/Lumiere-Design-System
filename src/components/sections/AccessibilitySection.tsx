import React from 'react';

import { Eye, Volume2 } from 'lucide-react';

export const AccessibilitySection: React.FC = () => {
  return (
    <section id="accessibility" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Accessibility Standards
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Color Contrast */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Color Contrast</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[var(--lumiere-navy)] text-white rounded-lg">
                  <span>Navy on White</span>
                  <span className="text-sm">AAA (7.8:1)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[var(--lumiere-burgundy)] text-white rounded-lg">
                  <span>Burgundy on White</span>
                  <span className="text-sm">AA (4.9:1)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[var(--lumiere-sage)] text-[var(--lumiere-navy)] rounded-lg">
                  <span>Navy on Sage</span>
                  <span className="text-sm">AA (4.2:1)</span>
                </div>
              </div>
            </div>

            {/* Touch Targets */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Touch Targets</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[var(--lumiere-navy)] rounded-lg flex items-center justify-center">
                    <Eye className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-heading text-sm">Primary Actions</div>
                    <div className="text-xs opacity-70">44px minimum</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[var(--lumiere-sage)] rounded-lg flex items-center justify-center">
                    <Volume2 className="text-[var(--lumiere-navy)]" size={16} />
                  </div>
                  <div>
                    <div className="font-heading text-sm">Secondary Actions</div>
                    <div className="text-xs opacity-70">32px minimum</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Accessibility Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Screen Readers</h4>
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1">
                <li>• Semantic HTML structure</li>
                <li>• ARIA labels and roles</li>
                <li>• Descriptive alt text</li>
                <li>• Focus management</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Motor Impairments</h4>
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1">
                <li>• Large touch targets</li>
                <li>• Adequate spacing</li>
                <li>• Voice control support</li>
                <li>• Switch navigation</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Visual Impairments</h4>
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1">
                <li>• High contrast ratios</li>
                <li>• Scalable text</li>
                <li>• Color-blind friendly</li>
                <li>• Focus indicators</li>
              </ul>
            </div>
          </div>

          {/* Testing Tools */}
          <div className="p-4 bg-[var(--lumiere-ivory)] border border-[var(--lumiere-gold)] rounded-lg">
            <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-3">Accessibility Testing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--lumiere-navy)] opacity-80">
              <div>
                <strong>Automated Testing:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• axe-core for React</li>
                  <li>• Lighthouse accessibility audit</li>
                  <li>• WAVE browser extension</li>
                </ul>
              </div>
              <div>
                <strong>Manual Testing:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Keyboard navigation</li>
                  <li>• Screen reader testing</li>
                  <li>• Color contrast validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};