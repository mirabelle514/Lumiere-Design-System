import React, { forwardRef } from 'react';
import { cn } from './utils.js';
import { 
  Home, User, Settings, Search, Heart, Star, 
  ShoppingCart, Bell, Mail, Phone, Camera, Map,
  Plus, Minus, X, Check,
  Menu, Filter, Share, Download, Upload, Edit,
  LucideIcon
} from 'lucide-react';

// Define icon categories
type IconCategory = 'navigation' | 'action' | 'content' | 'media';

// Define icon sizes
type IconSize = 'sm' | 'md' | 'lg' | 'xl';

// Base props interface
interface BaseIconographyProps {
  /** The category of icons to display */
  category?: IconCategory;
  /** Size of the icons */
  size?: IconSize;
  /** Whether to show icon names */
  showNames?: boolean;
  /** Whether to show guidelines */
  showGuidelines?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML div attributes
export interface LumiereIconographyProps extends BaseIconographyProps, React.HTMLAttributes<HTMLDivElement> {}

// Type-safe icon size mappings
const ICON_SIZES: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
} as const;

// Icon data structure
interface IconData {
  icon: LucideIcon;
  name: string;
  category: IconCategory;
}

// All available icons
const ALL_ICONS: IconData[] = [
  // Navigation icons
  { icon: Home, name: 'Home', category: 'navigation' },
  { icon: User, name: 'Profile', category: 'navigation' },
  { icon: Settings, name: 'Settings', category: 'navigation' },
  { icon: Search, name: 'Search', category: 'navigation' },
  { icon: Menu, name: 'Menu', category: 'navigation' },
  { icon: Filter, name: 'Filter', category: 'navigation' },
  
  // Action icons
  { icon: Plus, name: 'Add', category: 'action' },
  { icon: Minus, name: 'Remove', category: 'action' },
  { icon: Edit, name: 'Edit', category: 'action' },
  { icon: X, name: 'Close', category: 'action' },
  { icon: Check, name: 'Confirm', category: 'action' },
  { icon: Share, name: 'Share', category: 'action' },
  
  // Content icons
  { icon: Heart, name: 'Favorite', category: 'content' },
  { icon: Star, name: 'Rating', category: 'content' },
  { icon: ShoppingCart, name: 'Cart', category: 'content' },
  { icon: Bell, name: 'Notifications', category: 'content' },
  { icon: Mail, name: 'Messages', category: 'content' },
  { icon: Phone, name: 'Call', category: 'content' },
  
  // Media icons
  { icon: Camera, name: 'Camera', category: 'media' },
  { icon: Download, name: 'Download', category: 'media' },
  { icon: Upload, name: 'Upload', category: 'media' },
  { icon: Map, name: 'Location', category: 'media' }
];

// Base styles that apply to all iconography components
const BASE_ICONOGRAPHY_STYLES = 'space-y-6';

// Icon grid styles
const ICON_GRID_STYLES = 'grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4';

// Icon item styles
const ICON_ITEM_STYLES = 'flex flex-col items-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors';

// Icon styles
const ICON_STYLES = 'text-foreground mb-2';

// Icon name styles
const ICON_NAME_STYLES = 'text-xs text-foreground text-center';

// Guidelines styles
const GUIDELINES_STYLES = 'mt-8 p-4 bg-muted rounded-lg';

// Guidelines title styles
const GUIDELINES_TITLE_STYLES = 'font-heading text-lg text-foreground mb-2';

// Guidelines list styles
const GUIDELINES_LIST_STYLES = 'text-sm text-foreground/80 space-y-1';

/**
 * Gets icons by category
 * @param category - The icon category to filter by
 * @returns Array of icons in the specified category
 */
const getIconsByCategory = (category: IconCategory): IconData[] => {
  return ALL_ICONS.filter(icon => icon.category === category);
};

/**
 * Gets all icons if no category is specified
 * @param category - Optional category filter
 * @returns Array of icons
 */
const getIcons = (category?: IconCategory): IconData[] => {
  if (!category) return ALL_ICONS;
  return getIconsByCategory(category);
};

/**
 * Builds the iconography classes based on the component props
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildIconographyClasses = (className?: string): string => {
  return cn(BASE_ICONOGRAPHY_STYLES, className);
};

/**
 * LumiereIconography Component
 * 
 * A design system iconography component that showcases the Lumiere icon system
 * using Lucide React icons. This component provides a comprehensive display
 * of available icons with proper categorization and guidelines.
 * 
 * **Key Features:**
 * - **Categorized icons**: Navigation, action, content, and media icons
 * - **Flexible sizing**: Multiple icon sizes with consistent scaling
 * - **Interactive display**: Hover effects and proper touch targets
 * - **Accessibility**: Proper labeling and screen reader support
 * - **Design system consistency**: Uses Lumiere color tokens and spacing
 * 
 * **Usage Examples:**
 * ```tsx
 * // Display all icons
 * <LumiereIconography />
 * 
 * // Display only navigation icons
 * <LumiereIconography category="navigation" />
 * 
 * // Large icons with names
 * <LumiereIconography 
 *   category="action" 
 *   size="lg" 
 *   showNames 
 * />
 * 
 * // With guidelines
 * <LumiereIconography 
 *   showGuidelines 
 *   className="border rounded-lg p-6"
 * />
 * ```
 * 
 * **Icon Categories:**
 * - **Navigation**: Home, Profile, Settings, Search, Menu, Filter
 * - **Action**: Add, Remove, Edit, Close, Confirm, Share
 * - **Content**: Favorite, Rating, Cart, Notifications, Messages, Call
 * - **Media**: Camera, Download, Upload, Location
 * 
 * **Icon Guidelines:**
 * - Use 20px icons for standard UI elements
 * - Use 24px icons for primary actions and navigation
 * - Maintain 44px minimum touch target for mobile
 * - Use consistent stroke width (2px) across all icons
 */
export const LumiereIconography = forwardRef<HTMLDivElement, LumiereIconographyProps>(
  ({ 
    className, 
    category, 
    size = 'md', 
    showNames = true, 
    showGuidelines = false, 
    ...props 
  }, ref) => {
    // Get the appropriate icons
    const icons = getIcons(category);
    
    // Get the icon size in pixels
    const iconSize = ICON_SIZES[size];
    
    // Build the iconography classes
    const iconographyClasses = buildIconographyClasses(className);

    return (
      <div
        ref={ref}
        className={iconographyClasses}
        {...props}
      >
        {/* Icon Grid */}
        <div className={ICON_GRID_STYLES}>
          {icons.map((iconData, index) => {
            const IconComponent = iconData.icon;
            return (
              <div key={index} className={ICON_ITEM_STYLES}>
                <div className={ICON_STYLES}>
                  <IconComponent size={iconSize} />
                </div>
                {showNames && (
                  <span className={ICON_NAME_STYLES}>
                    {iconData.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Guidelines */}
        {showGuidelines && (
          <div className={GUIDELINES_STYLES}>
            <h4 className={GUIDELINES_TITLE_STYLES}>Icon Guidelines</h4>
            <ul className={GUIDELINES_LIST_STYLES}>
              <li>Use 20px icons for standard UI elements</li>
              <li>Use 24px icons for primary actions and navigation</li>
              <li>Maintain 44px minimum touch target for mobile</li>
              <li>Use consistent stroke width (2px) across all icons</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereIconography.displayName = 'LumiereIconography'; 