import React, { forwardRef } from 'react';
import { cn } from './utils.js';

// Define spacing sizes
type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// Base props interface
interface BaseSpacingProps {
  /** The spacing size to display */
  size?: SpacingSize;
  /** Whether to show all spacing sizes */
  showAll?: boolean;
  /** Whether to show guidelines */
  showGuidelines?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML div attributes
export interface LumiereSpacingProps extends BaseSpacingProps, React.HTMLAttributes<HTMLDivElement> {}

// Spacing data structure
interface SpacingData {
  size: SpacingSize;
  pixels: string;
  usage: string;
  className: string;
}

// All spacing values
const SPACING_VALUES: SpacingData[] = [
  { size: 'xs', pixels: '4px', usage: 'Icon padding, small gaps', className: 'w-1 h-1' },
  { size: 'sm', pixels: '8px', usage: 'Button padding, form spacing', className: 'w-2 h-2' },
  { size: 'md', pixels: '16px', usage: 'Card padding, section gaps', className: 'w-4 h-4' },
  { size: 'lg', pixels: '24px', usage: 'Page margins, large spacing', className: 'w-6 h-6' },
  { size: 'xl', pixels: '32px', usage: 'Section padding, hero spacing', className: 'w-8 h-8' },
  { size: '2xl', pixels: '48px', usage: 'Major section breaks', className: 'w-12 h-12' },
  { size: '3xl', pixels: '64px', usage: 'Page-level spacing', className: 'w-16 h-16' }
];

// Base styles that apply to all spacing components
const BASE_SPACING_STYLES = 'space-y-4';

// Spacing example styles
const SPACING_EXAMPLE_STYLES = 'flex items-center gap-4 p-4 border border-border rounded-lg';

// Spacing visual styles
const SPACING_VISUAL_STYLES = 'flex items-center gap-2';

// Spacing box styles
const SPACING_BOX_STYLES = 'bg-foreground';

// Spacing info styles
const SPACING_INFO_STYLES = 'flex-1 text-sm text-foreground/80';

// Spacing size styles
const SPACING_SIZE_STYLES = 'font-heading font-bold text-foreground';

// Spacing pixels styles
const SPACING_PIXELS_STYLES = 'text-sm text-foreground/70';

// Guidelines styles
const GUIDELINES_STYLES = 'grid grid-cols-1 md:grid-cols-2 gap-6';

// Guidelines card styles
const GUIDELINES_CARD_STYLES = 'p-4 bg-muted rounded-lg';

// Guidelines title styles
const GUIDELINES_TITLE_STYLES = 'font-heading text-lg text-foreground mb-2';

// Guidelines list styles
const GUIDELINES_LIST_STYLES = 'text-sm text-foreground/80 space-y-1';

/**
 * Gets spacing by size
 * @param size - The spacing size to get
 * @returns Spacing data for the specified size
 */
const getSpacingBySize = (size: SpacingSize): SpacingData | undefined => {
  return SPACING_VALUES.find(spacing => spacing.size === size);
};

/**
 * Gets all spacing values
 * @returns Array of all spacing values
 */
const getAllSpacing = (): SpacingData[] => {
  return SPACING_VALUES;
};

/**
 * Builds the spacing classes based on the component props
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildSpacingClasses = (className?: string): string => {
  return cn(BASE_SPACING_STYLES, className);
};

/**
 * SpacingExample Component
 * 
 * A sub-component that displays a single spacing example with visual representation
 * and usage information.
 */
interface SpacingExampleProps {
  spacing: SpacingData;
}

const SpacingExample: React.FC<SpacingExampleProps> = ({ spacing }) => (
  <div className={SPACING_EXAMPLE_STYLES}>
    <div className={SPACING_VISUAL_STYLES}>
      <div className={cn(SPACING_BOX_STYLES, spacing.className)} />
      <div>
        <div className={SPACING_SIZE_STYLES}>{spacing.size.toUpperCase()}</div>
        <div className={SPACING_PIXELS_STYLES}>{spacing.pixels}</div>
      </div>
    </div>
    <div className={SPACING_INFO_STYLES}>
      {spacing.usage}
    </div>
  </div>
);

/**
 * LumiereSpacing Component
 * 
 * A design system spacing component that showcases the Lumiere spacing system
 * with visual representations and usage guidelines. This component provides
 * comprehensive spacing demonstrations for consistent layouts.
 * 
 * **Key Features:**
 * - **Visual spacing examples**: Clear visual representation of each spacing value
 * - **Usage guidelines**: Practical examples of when to use each spacing size
 * - **Mobile-first approach**: Touch target and content spacing guidelines
 * - **Design system consistency**: Uses Lumiere color tokens and typography
 * - **Accessibility**: Proper labeling and screen reader support
 * 
 * **Usage Examples:**
 * ```tsx
 * // Display all spacing values
 * <LumiereSpacing />
 * 
 * // Display specific spacing size
 * <LumiereSpacing size="md" />
 * 
 * // With guidelines
 * <LumiereSpacing 
 *   showGuidelines 
 *   className="border rounded-lg p-6"
 * />
 * 
 * // Show all with guidelines
 * <LumiereSpacing 
 *   showAll 
 *   showGuidelines 
 * />
 * ```
 * 
 * **Spacing System:**
 * - **XS (4px)**: Icon padding, small gaps
 * - **SM (8px)**: Button padding, form spacing
 * - **MD (16px)**: Card padding, section gaps
 * - **LG (24px)**: Page margins, large spacing
 * - **XL (32px)**: Section padding, hero spacing
 * - **2XL (48px)**: Major section breaks
 * - **3XL (64px)**: Page-level spacing
 * 
 * **Mobile Guidelines:**
 * - Minimum 44px for primary actions
 * - 32px for secondary actions
 * - 8px spacing between touch elements
 * - 16px margins from screen edges
 */
export const LumiereSpacing = forwardRef<HTMLDivElement, LumiereSpacingProps>(
  ({ 
    className, 
    size, 
    showAll = true, 
    showGuidelines = false, 
    ...props 
  }, ref) => {
    // Get the appropriate spacing data
    const spacingData = size ? getSpacingBySize(size) : null;
    const allSpacing = getAllSpacing();
    
    // Build the spacing classes
    const spacingClasses = buildSpacingClasses(className);

    return (
      <div
        ref={ref}
        className={spacingClasses}
        {...props}
      >
        {/* Spacing Examples */}
        {showAll ? (
          // Show all spacing values
          allSpacing.map((spacing, index) => (
            <SpacingExample key={index} spacing={spacing} />
          ))
        ) : (
          // Show specific spacing size
          spacingData && <SpacingExample spacing={spacingData} />
        )}

        {/* Guidelines */}
        {showGuidelines && (
          <div className={GUIDELINES_STYLES}>
            <div className={GUIDELINES_CARD_STYLES}>
              <h4 className={GUIDELINES_TITLE_STYLES}>Mobile Touch Targets</h4>
              <ul className={GUIDELINES_LIST_STYLES}>
                <li>Minimum 44px for primary actions</li>
                <li>32px for secondary actions</li>
                <li>8px spacing between touch elements</li>
                <li>16px margins from screen edges</li>
              </ul>
            </div>
            <div className={GUIDELINES_CARD_STYLES}>
              <h4 className={GUIDELINES_TITLE_STYLES}>Content Spacing</h4>
              <ul className={GUIDELINES_LIST_STYLES}>
                <li>24px between major sections</li>
                <li>16px between related elements</li>
                <li>8px between form fields</li>
                <li>4px for inline element spacing</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereSpacing.displayName = 'LumiereSpacing'; 