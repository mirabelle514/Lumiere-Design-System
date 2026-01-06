import React, { useState } from 'react';
import { LumiereButton } from '../lumiere/LumiereButton';

import { Play, Pause } from 'lucide-react';

export const AnimationSection: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <section id="animation" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Animation & Motion
          </h2>
          
          <div className="mb-8">
            <p className="text-[var(--lumiere-navy)] opacity-80 mb-4">
              Subtle animations enhance user experience by providing visual feedback and creating smooth transitions. 
              Our animation system follows mobile-first principles with performance optimization.
            </p>
          </div>

          {/* Animation Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Micro-interactions */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Micro-interactions</h3>
              <div className="bg-[var(--lumiere-grey)] p-6 rounded-lg space-y-4">
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Button Hover</div>
                  <LumiereButton 
                    variant="primary" 
                    className="transform transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                  >
                    Hover Me
                  </LumiereButton>
                </div>
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Card Interaction</div>
                  <div className="w-full h-20 bg-[var(--lumiere-sage)] rounded-lg transform transition-all duration-300 hover:scale-102 hover:shadow-lg cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Loading States</h3>
              <div className="bg-[var(--lumiere-grey)] p-6 rounded-lg space-y-4">
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Pulse Loading</div>
                  <div className="w-full h-4 bg-[var(--lumiere-sage)] rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="text-sm text-[var(--lumiere-navy)] opacity-70 mb-2">Skeleton Screen</div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-4 bg-[var(--lumiere-sage)] rounded animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-[var(--lumiere-sage)] rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Animation Playground */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Animation Playground</h3>
              <LumiereButton 
                variant="secondary" 
                size="sm"
                onClick={toggleAnimation}
              >
                {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                {isAnimating ? 'Pause' : 'Play'}
              </LumiereButton>
            </div>
            <div className="bg-[var(--lumiere-grey)] p-8 rounded-lg">
              <div className="flex justify-center">
                <div 
                  className={`w-16 h-16 bg-[var(--lumiere-navy)] rounded-full transition-all duration-1000 ${
                    isAnimating ? 'transform translate-x-32 rotate-180 scale-125' : ''
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Animation Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-3">Duration Guidelines</h4>
              <div className="space-y-2 text-sm text-[var(--lumiere-navy)] opacity-80">
                <div className="flex justify-between">
                  <span>Micro-interactions</span>
                  <span>100-200ms</span>
                </div>
                <div className="flex justify-between">
                  <span>UI transitions</span>
                  <span>200-300ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Page transitions</span>
                  <span>300-500ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Complex animations</span>
                  <span>500-800ms</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-[var(--lumiere-grey)] rounded-lg">
              <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-3">Easing Functions</h4>
              <div className="space-y-2 text-sm text-[var(--lumiere-navy)] opacity-80">
                <div className="flex justify-between">
                  <span>Linear</span>
                  <span>Loading indicators</span>
                </div>
                <div className="flex justify-between">
                  <span>Ease-out</span>
                  <span>Entrances</span>
                </div>
                <div className="flex justify-between">
                  <span>Ease-in</span>
                  <span>Exits</span>
                </div>
                <div className="flex justify-between">
                  <span>Ease-in-out</span>
                  <span>Transitions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[var(--lumiere-ivory)] border border-[var(--lumiere-gold)] rounded-lg">
            <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Performance Considerations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--lumiere-navy)] opacity-80">
              <div>
                <strong>Mobile Optimization:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Use transform and opacity for smooth animations</li>
                  <li>• Avoid animating layout properties</li>
                  <li>• Respect prefers-reduced-motion</li>
                  <li>• Test on low-end devices</li>
                </ul>
              </div>
              <div>
                <strong>Best Practices:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Use CSS transforms over position changes</li>
                  <li>• Implement will-change property carefully</li>
                  <li>• Debounce scroll-based animations</li>
                  <li>• Provide animation controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};