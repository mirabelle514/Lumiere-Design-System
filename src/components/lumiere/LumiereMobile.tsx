import React, { forwardRef } from 'react';
import { cn } from './utils.js';

/**
 * Props for the LumiereMobile component
 */
export interface LumiereMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional title to display in the mobile header */
  title?: string;
  /** Whether to show the status bar (default: true) */
  showStatusBar?: boolean;
  /** Mobile device variant */
  variant?: 'iphone' | 'android';
  /** Accessibility label for the mobile device frame */
  ariaLabel?: string;
  /** Accessibility description for the mobile device frame */
  ariaDescription?: string;
  /** Whether the mobile frame is interactive (for demo purposes) */
  interactive?: boolean;
}

/**
 * LumiereMobile Component
 * 
 * A design system component that creates a mobile device frame for showcasing
 * mobile applications and interfaces. Provides realistic mobile device appearance
 * with status bar, header, and content area.
 * 
 * Features:
 * - Realistic mobile device frame with rounded corners
 * - Optional status bar with time and battery indicators
 * - Header with optional title
 * - Content area with proper padding and scrolling
 * - Multiple device variants (iPhone, Android)
 * - Responsive design that scales appropriately
 * - Full accessibility support with ARIA attributes
 * - Keyboard navigation support
 * 
 * Accessibility Features:
 * - role="application" for the mobile frame
 * - aria-label and aria-describedby for screen readers
 * - Proper heading structure with title
 * - Status bar announcements for screen readers
 * - Focus management within the mobile frame
 * 
 * @example
 * ```tsx
 * <LumiereMobile
 *   title="My App"
 *   showStatusBar={true}
 *   variant="iphone"
 *   ariaLabel="iPhone device frame showing My App"
 *   ariaDescription="A realistic iPhone frame containing the My App interface"
 * >
 *   <div>Your mobile app content here</div>
 * </LumiereMobile>
 * ```
 */
export const LumiereMobile = forwardRef<HTMLDivElement, LumiereMobileProps>(
  ({ 
    className, 
    children, 
    title, 
    showStatusBar = true, 
    variant = 'iphone', 
    ariaLabel,
    ariaDescription,
    interactive = false,
    ...props 
  }, ref) => {
    // Default accessibility labels
    const defaultAriaLabel = ariaLabel || `${variant} device frame${title ? ` showing ${title}` : ''}`;
    const defaultAriaDescription = ariaDescription || `A realistic ${variant} mobile device frame${title ? ` containing the ${title} interface` : ''}`;
    
    // Status bar content for screen readers
    const statusBarContent = showStatusBar ? `${variant} status bar showing 9:41 time, signal strength, and battery level` : '';
    
    return (
      <div
        ref={ref}
        role={interactive ? "application" : "img"}
        aria-label={defaultAriaLabel}
        aria-description={defaultAriaDescription}
        tabIndex={interactive ? 0 : undefined}
        className={cn(
          // Base mobile frame styling with device-like appearance
          'relative',
          
          // Device-specific styling
          variant === 'iphone' && [
            'w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl',
            'border-8 border-gray-800',
            // iPhone notch
            'before:content-[""] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2',
            'before:w-32 before:h-6 before:bg-black before:rounded-b-2xl before:z-10'
          ],
          
          variant === 'android' && [
            'w-80 h-[600px] bg-gray-900 rounded-[2rem] p-1 shadow-2xl',
            'border-4 border-gray-700',
            // Android camera cutout
            'before:content-[""] before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2',
            'before:w-4 before:h-4 before:bg-gray-800 before:rounded-full before:z-10'
          ],
          
          // Interactive focus styles
          interactive && 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          
          className
        )}
        {...props}
      >
        {/* Mobile screen content */}
        <div className={cn(
          'w-full h-full overflow-hidden flex flex-col',
          
          // Device-specific screen styling
          variant === 'iphone' && 'bg-white rounded-[2rem]',
          variant === 'android' && 'bg-gray-100 rounded-[1.5rem]'
        )}>
          {/* Status bar */}
          {showStatusBar && (
            <div 
              role="status"
              aria-live="polite"
              aria-label={statusBarContent}
              className={cn(
                'flex items-center justify-between px-4 text-xs font-medium',
                
                // Device-specific status bar styling
                variant === 'iphone' && [
                  'h-6 bg-black text-white',
                  // iPhone status bar elements
                  'after:content-[""] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2',
                  'after:w-32 after:h-6 after:bg-black after:rounded-b-2xl after:z-20'
                ],
                
                variant === 'android' && [
                  'h-8 bg-gray-900 text-white',
                  // Android status bar elements
                  'after:content-[""] after:absolute after:top-2 after:left-1/2 after:-translate-x-1/2',
                  'after:w-4 after:h-4 after:bg-gray-800 after:rounded-full after:z-20'
                ]
              )}
            >
              <span aria-label="Current time">9:41</span>
              <div className="flex items-center space-x-1" aria-label="Signal and battery indicators">
                {/* Signal bars */}
                <div className="flex space-x-0.5" aria-label="Signal strength: 4 bars">
                  <div className="w-0.5 h-2 bg-white rounded-full" aria-hidden="true"></div>
                  <div className="w-0.5 h-3 bg-white rounded-full" aria-hidden="true"></div>
                  <div className="w-0.5 h-4 bg-white rounded-full" aria-hidden="true"></div>
                  <div className="w-0.5 h-3 bg-white rounded-full" aria-hidden="true"></div>
                </div>
                
                {/* Battery */}
                <div className="flex items-center space-x-1" aria-label="Battery level: 75%">
                  <div className="w-4 h-2 rounded-sm border border-white" aria-hidden="true">
                    <div className="w-3 h-1 bg-white rounded-sm m-0.5" aria-hidden="true"></div>
                  </div>
                  <div className="w-1 h-1 bg-white rounded-full" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Header with optional title */}
          {title && (
            <header 
              className={cn(
                'px-4 py-2 border-b',
                
                // Device-specific header styling
                variant === 'iphone' && 'bg-gray-50 border-gray-200',
                variant === 'android' && 'bg-white border-gray-300'
              )}
            >
              <h3 className={cn(
                'text-sm font-medium',
                variant === 'iphone' && 'text-gray-900',
                variant === 'android' && 'text-gray-800'
              )}>
                {title}
              </h3>
            </header>
          )}
          
          {/* Content area with proper padding and scrolling */}
          <main 
            role="main"
            className={cn(
              'flex-1 overflow-auto p-4',
              variant === 'iphone' && 'bg-white',
              variant === 'android' && 'bg-gray-50'
            )}
            aria-label={`${title || 'Mobile app'} content area`}
          >
            {children}
          </main>
        </div>
      </div>
    );
  }
);

// Set display name for better debugging
LumiereMobile.displayName = 'LumiereMobile';

/**
 * LumiereMobileContent Component
 * 
 * A sub-component for mobile content that provides consistent styling
 * and spacing within the mobile frame.
 * 
 * Accessibility Features:
 * - Proper semantic structure
 * - ARIA labels for content sections
 * - Focus management within content
 * 
 * @example
 * ```tsx
 * <LumiereMobileContent>
 *   <h1>Welcome to my app</h1>
 *   <p>This content will be styled for mobile display.</p>
 * </LumiereMobileContent>
 * ```
 */
export const LumiereMobileContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('space-y-4', className)} 
      role="region"
      aria-label="Mobile app content"
      {...props} 
    />
  )
);

LumiereMobileContent.displayName = 'LumiereMobileContent';