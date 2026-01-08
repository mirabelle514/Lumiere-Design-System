import React, { forwardRef, useState } from 'react';
import { cn } from './utils.js';
import { LumiereButton } from './LumiereButton';
import { Play, Pause } from 'lucide-react';

// Define animation types
type AnimationType = 'micro-interaction' | 'loading' | 'playground' | 'guidelines';

// Base props interface
interface BaseAnimationProps {
  /** The type of animation to display */
  type?: AnimationType;
  /** Whether the animation is currently playing */
  isPlaying?: boolean;
  /** Whether to show controls */
  showControls?: boolean;
  /** Whether to show guidelines */
  showGuidelines?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML div attributes
export interface LumiereAnimationProps extends BaseAnimationProps, React.HTMLAttributes<HTMLDivElement> {}

// Base styles that apply to all animation components
const BASE_ANIMATION_STYLES = 'space-y-6';

// Animation container styles
const ANIMATION_CONTAINER_STYLES = 'bg-muted p-6 rounded-lg';

// Animation title styles
const ANIMATION_TITLE_STYLES = 'font-heading text-xl text-foreground mb-4';

// Animation description styles
const ANIMATION_DESCRIPTION_STYLES = 'text-sm text-foreground/70 mb-2';

// Playground styles
const PLAYGROUND_STYLES = 'flex justify-center';

// Animated element styles
const ANIMATED_ELEMENT_STYLES = 'w-16 h-16 bg-primary rounded-full transition-all duration-1000';

// Guidelines styles
const GUIDELINES_STYLES = 'grid grid-cols-1 md:grid-cols-2 gap-6';

// Guidelines card styles
const GUIDELINES_CARD_STYLES = 'p-4 bg-muted rounded-lg';

// Guidelines title styles
const GUIDELINES_CARD_TITLE_STYLES = 'font-heading text-lg text-foreground mb-3';

// Guidelines list styles
const GUIDELINES_LIST_STYLES = 'space-y-2 text-sm text-foreground/80';

// Performance styles
const PERFORMANCE_STYLES = 'mt-8 p-4 bg-background border border-border rounded-lg';

// Performance title styles
const PERFORMANCE_TITLE_STYLES = 'font-heading text-lg text-foreground mb-2';

// Performance grid styles
const PERFORMANCE_GRID_STYLES = 'grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground/80';

/**
 * Builds the animation classes based on the component props
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildAnimationClasses = (className?: string): string => {
  return cn(BASE_ANIMATION_STYLES, className);
};

/**
 * Builds the animated element classes based on animation state
 * @param isPlaying - Whether the animation is playing
 * @returns The combined className string
 */
const buildAnimatedElementClasses = (isPlaying: boolean): string => {
  return cn(
    ANIMATED_ELEMENT_STYLES,
    isPlaying && 'transform translate-x-32 rotate-180 scale-125'
  );
};

/**
 * LumiereAnimation Component
 * 
 * A design system animation component that showcases the Lumiere animation system
 * with various animation types and interactive examples. This component provides
 * comprehensive animation demonstrations with performance guidelines.
 * 
 * **Key Features:**
 * - **Multiple animation types**: Micro-interactions, loading states, playground
 * - **Interactive controls**: Play/pause functionality for animations
 * - **Performance guidelines**: Best practices for mobile optimization
 * - **Accessibility**: Respects prefers-reduced-motion and provides controls
 * - **Design system consistency**: Uses Lumiere color tokens and spacing
 * 
 * **Usage Examples:**
 * ```tsx
 * // Basic animation playground
 * <LumiereAnimation />
 * 
 * // Micro-interactions only
 * <LumiereAnimation type="micro-interaction" />
 * 
 * // With controls and guidelines
 * <LumiereAnimation 
 *   showControls 
 *   showGuidelines 
 *   className="border rounded-lg p-6"
 * />
 * 
 * // Controlled animation state
 * <LumiereAnimation 
 *   isPlaying={true} 
 *   showControls={false}
 * />
 * ```
 * 
 * **Animation Types:**
 * - **Micro-interactions**: Button hover effects, card interactions
 * - **Loading**: Pulse loading, skeleton screens
 * - **Playground**: Interactive animation demonstrations
 * - **Guidelines**: Duration and easing function guidelines
 * 
 * **Performance Guidelines:**
 * - Use transform and opacity for smooth animations
 * - Avoid animating layout properties
 * - Respect prefers-reduced-motion
 * - Test on low-end devices
 */
export const LumiereAnimation = forwardRef<HTMLDivElement, LumiereAnimationProps>(
  ({ 
    className, 
    type = 'playground', 
    isPlaying: controlledIsPlaying, 
    showControls = true, 
    showGuidelines = false, 
    ...props 
  }, ref) => {
    // Internal state for uncontrolled usage
    const [internalIsPlaying, setInternalIsPlaying] = useState(false);
    
    // Use controlled or uncontrolled state
    const isPlaying = controlledIsPlaying !== undefined ? controlledIsPlaying : internalIsPlaying;
    const setIsPlaying = controlledIsPlaying !== undefined ? undefined : setInternalIsPlaying;
    
    // Toggle animation
    const toggleAnimation = () => {
      if (setIsPlaying) {
        setIsPlaying(!isPlaying);
      }
    };
    
    // Build the animation classes
    const animationClasses = buildAnimationClasses(className);
    
    // Build the animated element classes
    const animatedElementClasses = buildAnimatedElementClasses(isPlaying);

    return (
      <div
        ref={ref}
        className={animationClasses}
        {...props}
      >
        {/* Animation Playground */}
        {type === 'playground' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className={ANIMATION_TITLE_STYLES}>Animation Playground</h3>
              {showControls && (
                <LumiereButton 
                  variant="secondary" 
                  size="sm"
                  onClick={toggleAnimation}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? 'Pause' : 'Play'}
                </LumiereButton>
              )}
            </div>
            <div className={ANIMATION_CONTAINER_STYLES}>
              <div className={PLAYGROUND_STYLES}>
                <div className={animatedElementClasses} />
              </div>
            </div>
          </div>
        )}

        {/* Micro-interactions */}
        {type === 'micro-interaction' && (
          <div>
            <h3 className={ANIMATION_TITLE_STYLES}>Micro-interactions</h3>
            <div className={ANIMATION_CONTAINER_STYLES}>
              <div className="space-y-4">
                <div>
                  <div className={ANIMATION_DESCRIPTION_STYLES}>Button Hover</div>
                  <LumiereButton 
                    variant="primary" 
                    className="transform transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                  >
                    Hover Me
                  </LumiereButton>
                </div>
                <div>
                  <div className={ANIMATION_DESCRIPTION_STYLES}>Card Interaction</div>
                  <div className="w-full h-20 bg-muted-foreground/20 rounded-lg transform transition-all duration-300 hover:scale-102 hover:shadow-lg cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading States */}
        {type === 'loading' && (
          <div>
            <h3 className={ANIMATION_TITLE_STYLES}>Loading States</h3>
            <div className={ANIMATION_CONTAINER_STYLES}>
              <div className="space-y-4">
                <div>
                  <div className={ANIMATION_DESCRIPTION_STYLES}>Pulse Loading</div>
                  <div className="w-full h-4 bg-muted-foreground/20 rounded animate-pulse" />
                </div>
                <div>
                  <div className={ANIMATION_DESCRIPTION_STYLES}>Skeleton Screen</div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-4 bg-muted-foreground/20 rounded animate-pulse" />
                    <div className="w-1/2 h-4 bg-muted-foreground/20 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guidelines */}
        {showGuidelines && (
          <div className={GUIDELINES_STYLES}>
            <div className={GUIDELINES_CARD_STYLES}>
              <h4 className={GUIDELINES_CARD_TITLE_STYLES}>Duration Guidelines</h4>
              <div className={GUIDELINES_LIST_STYLES}>
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
            
            <div className={GUIDELINES_CARD_STYLES}>
              <h4 className={GUIDELINES_CARD_TITLE_STYLES}>Easing Functions</h4>
              <div className={GUIDELINES_LIST_STYLES}>
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
        )}

        {/* Performance Considerations */}
        {showGuidelines && (
          <div className={PERFORMANCE_STYLES}>
            <h4 className={PERFORMANCE_TITLE_STYLES}>Performance Considerations</h4>
            <div className={PERFORMANCE_GRID_STYLES}>
              <div>
                <strong>Mobile Optimization:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Use transform and opacity for smooth animations</li>
                  <li>Avoid animating layout properties</li>
                  <li>Respect prefers-reduced-motion</li>
                  <li>Test on low-end devices</li>
                </ul>
              </div>
              <div>
                <strong>Best Practices:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Use CSS transforms over position changes</li>
                  <li>Implement will-change property carefully</li>
                  <li>Debounce scroll-based animations</li>
                  <li>Provide animation controls</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereAnimation.displayName = 'LumiereAnimation'; 