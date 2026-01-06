import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

export const ResponsiveSection: React.FC = () => {
  return (
    <section id="responsive" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Responsive Breakpoints
          </h2>
          
          <div className="mb-8">
            <p className="text-[var(--lumiere-navy)] opacity-80 mb-4">
              Our mobile-first approach ensures optimal experiences across all device sizes. 
              The design system prioritizes mobile interfaces while scaling beautifully to larger screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Mobile */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[var(--lumiere-navy)] rounded-2xl">
                  <Smartphone className="text-white" size={32} />
                </div>
              </div>
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)] mb-2">Mobile</h3>
              <div className="text-sm text-[var(--lumiere-navy)] opacity-80 mb-4">
                320px - 768px
              </div>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg text-left">
                <ul className="text-sm space-y-1">
                  <li>• Single column layout</li>
                  <li>• Stack navigation</li>
                  <li>• Full-width components</li>
                  <li>• Touch-optimized spacing</li>
                  <li>• Bottom navigation</li>
                </ul>
              </div>
            </div>

            {/* Tablet */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[var(--lumiere-sage)] rounded-2xl">
                  <Tablet className="text-[var(--lumiere-navy)]" size={32} />
                </div>
              </div>
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)] mb-2">Tablet</h3>
              <div className="text-sm text-[var(--lumiere-navy)] opacity-80 mb-4">
                768px - 1024px
              </div>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg text-left">
                <ul className="text-sm space-y-1">
                  <li>• Two column layout</li>
                  <li>• Side navigation option</li>
                  <li>• Adaptive components</li>
                  <li>• Increased spacing</li>
                  <li>• Modal dialogs</li>
                </ul>
              </div>
            </div>

            {/* Desktop */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[var(--lumiere-burgundy)] rounded-2xl">
                  <Monitor className="text-white" size={32} />
                </div>
              </div>
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)] mb-2">Desktop</h3>
              <div className="text-sm text-[var(--lumiere-navy)] opacity-80 mb-4">
                1024px+
              </div>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg text-left">
                <ul className="text-sm space-y-1">
                  <li>• Multi-column layout</li>
                  <li>• Persistent navigation</li>
                  <li>• Hover interactions</li>
                  <li>• Maximum content width</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Responsive Examples */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Responsive Component Examples</h3>
            
            {/* Button Groups */}
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-3">Button Groups</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Mobile (Stacked)</div>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <div className="h-12 bg-[var(--lumiere-navy)] rounded-lg"></div>
                    <div className="h-12 bg-white border-2 border-[var(--lumiere-gold)] rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Desktop (Inline)</div>
                  <div className="flex gap-2 max-w-md">
                    <div className="h-12 flex-1 bg-[var(--lumiere-navy)] rounded-lg"></div>
                    <div className="h-12 flex-1 bg-white border-2 border-[var(--lumiere-gold)] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-3">Navigation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Mobile Bottom Nav</div>
                  <div className="bg-[var(--lumiere-navy)] rounded-lg p-3">
                    <div className="flex justify-around">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-6 h-6 bg-white rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Desktop Side Nav</div>
                  <div className="flex gap-2">
                    <div className="w-16 bg-[var(--lumiere-navy)] rounded-lg p-2">
                      <div className="space-y-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-4 h-4 bg-white rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 h-16 bg-white border border-[var(--lumiere-gold)] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[var(--lumiere-ivory)] border border-[var(--lumiere-gold)] rounded-lg">
            <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Implementation Guidelines</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--lumiere-navy)] opacity-80">
              <div>
                <strong>Mobile-First Approach:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Design for smallest screen first</li>
                  <li>• Progressive enhancement</li>
                  <li>• Touch-first interactions</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div>
                <strong>Flexible Layouts:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• CSS Grid and Flexbox</li>
                  <li>• Relative units (rem, %)</li>
                  <li>• Container queries</li>
                  <li>• Fluid typography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};