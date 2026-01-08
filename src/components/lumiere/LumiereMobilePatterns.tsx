import React, { forwardRef, useState } from 'react';
import { cn } from './utils.js';
import { Search, Filter, MoreVertical, ChevronRight, Star, Heart } from 'lucide-react';

// Define mobile pattern types
type MobilePatternType = 'search' | 'list' | 'card-grid' | 'action-sheet' | 'bottom-navigation';

// Base props interface
interface BaseMobilePatternsProps {
  /** The type of mobile pattern to display */
  type?: MobilePatternType;
  /** Whether to show all patterns */
  showAll?: boolean;
  /** Whether to show guidelines */
  showGuidelines?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML div attributes
export interface LumiereMobilePatternsProps extends BaseMobilePatternsProps, React.HTMLAttributes<HTMLDivElement> {}

// Base styles that apply to all mobile patterns components
const BASE_MOBILE_PATTERNS_STYLES = 'space-y-6';

// Pattern container styles
const PATTERN_CONTAINER_STYLES = 'space-y-4';

// Pattern title styles
const PATTERN_TITLE_STYLES = 'font-heading text-xl text-foreground';

// Pattern demo styles
const PATTERN_DEMO_STYLES = 'bg-muted p-4 rounded-lg';

// Search pattern styles
const SEARCH_PATTERN_STYLES = 'flex gap-2';

// Search input styles
const SEARCH_INPUT_STYLES = 'flex-1 relative';

// Search icon styles
const SEARCH_ICON_STYLES = 'absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50';

// Search input field styles
const SEARCH_INPUT_FIELD_STYLES = 'w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground';

// Filter button styles
const FILTER_BUTTON_STYLES = 'p-3 bg-foreground text-background rounded-lg';

// List item styles
const LIST_ITEM_STYLES = 'flex items-center justify-between p-3 bg-background rounded-lg border border-border';

// List item content styles
const LIST_ITEM_CONTENT_STYLES = 'flex items-center gap-3';

// List item avatar styles
const LIST_ITEM_AVATAR_STYLES = 'w-10 h-10 bg-muted-foreground/20 rounded-full';

// List item text styles
const LIST_ITEM_TEXT_STYLES = 'font-heading text-sm text-foreground';

// List item subtitle styles
const LIST_ITEM_SUBTITLE_STYLES = 'text-xs text-foreground/70';

// Card grid styles
const CARD_GRID_STYLES = 'grid grid-cols-2 gap-3';

// Card styles
const CARD_STYLES = 'bg-background rounded-lg p-3 border border-border';

// Card image styles
const CARD_IMAGE_STYLES = 'w-full h-20 bg-muted-foreground/20 rounded-lg mb-2';

// Action sheet styles
const ACTION_SHEET_STYLES = 'bg-background rounded-t-2xl p-4 border border-border';

// Action sheet handle styles
const ACTION_SHEET_HANDLE_STYLES = 'w-12 h-1 bg-border rounded-full mx-auto mb-4';

// Action sheet button styles
const ACTION_SHEET_BUTTON_STYLES = 'w-full p-3 text-left text-foreground hover:bg-muted rounded-lg';

// Bottom navigation styles
const BOTTOM_NAV_STYLES = 'bg-background rounded-lg p-4 border border-border';

// Bottom nav container styles
const BOTTOM_NAV_CONTAINER_STYLES = 'flex justify-around';

// Bottom nav item styles
const BOTTOM_NAV_ITEM_STYLES = 'flex flex-col items-center p-2 rounded-lg';

// Bottom nav item active styles
const BOTTOM_NAV_ITEM_ACTIVE_STYLES = 'text-foreground';

// Bottom nav item inactive styles
const BOTTOM_NAV_ITEM_INACTIVE_STYLES = 'text-foreground/50';

// Bottom nav label styles
const BOTTOM_NAV_LABEL_STYLES = 'text-xs mt-1';

// Guidelines styles
const GUIDELINES_STYLES = 'mt-8 p-4 bg-muted rounded-lg';

// Guidelines title styles
const GUIDELINES_TITLE_STYLES = 'font-heading text-lg text-foreground mb-2';

// Guidelines grid styles
const GUIDELINES_GRID_STYLES = 'grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground/80';

/**
 * Builds the mobile patterns classes based on the component props
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildMobilePatternsClasses = (className?: string): string => {
  return cn(BASE_MOBILE_PATTERNS_STYLES, className);
};

/**
 * Search Pattern Component
 */
const SearchPattern: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={PATTERN_CONTAINER_STYLES}>
      <h3 className={PATTERN_TITLE_STYLES}>Search & Filter</h3>
      <div className={PATTERN_DEMO_STYLES}>
        <div className={SEARCH_PATTERN_STYLES}>
          <div className={SEARCH_INPUT_STYLES}>
            <Search className={SEARCH_ICON_STYLES} size={16} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={SEARCH_INPUT_FIELD_STYLES}
            />
          </div>
          <button className={FILTER_BUTTON_STYLES}>
            <Filter size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * List Pattern Component
 */
const ListPattern: React.FC = () => {
  return (
    <div className={PATTERN_CONTAINER_STYLES}>
      <h3 className={PATTERN_TITLE_STYLES}>List Items</h3>
      <div className={PATTERN_DEMO_STYLES}>
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className={LIST_ITEM_STYLES}>
              <div className={LIST_ITEM_CONTENT_STYLES}>
                <div className={LIST_ITEM_AVATAR_STYLES} />
                <div>
                  <div className={LIST_ITEM_TEXT_STYLES}>List Item {item}</div>
                  <div className={LIST_ITEM_SUBTITLE_STYLES}>Subtitle text</div>
                </div>
              </div>
              <ChevronRight size={16} className="text-foreground/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Card Grid Pattern Component
 */
const CardGridPattern: React.FC = () => {
  return (
    <div className={PATTERN_CONTAINER_STYLES}>
      <h3 className={PATTERN_TITLE_STYLES}>Card Grid</h3>
      <div className={PATTERN_DEMO_STYLES}>
        <div className={CARD_GRID_STYLES}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={CARD_STYLES}>
              <div className={CARD_IMAGE_STYLES} />
              <div className={LIST_ITEM_TEXT_STYLES}>Card {item}</div>
              <div className={LIST_ITEM_SUBTITLE_STYLES}>Description</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Action Sheet Pattern Component
 */
const ActionSheetPattern: React.FC = () => {
  return (
    <div className={PATTERN_CONTAINER_STYLES}>
      <h3 className={PATTERN_TITLE_STYLES}>Action Sheet</h3>
      <div className={PATTERN_DEMO_STYLES}>
        <div className={ACTION_SHEET_STYLES}>
          <div className={ACTION_SHEET_HANDLE_STYLES} />
          <div className="space-y-2">
            <button className={ACTION_SHEET_BUTTON_STYLES}>
              Share
            </button>
            <button className={ACTION_SHEET_BUTTON_STYLES}>
              Edit
            </button>
            <button className={cn(ACTION_SHEET_BUTTON_STYLES, 'text-destructive')}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Bottom Navigation Pattern Component
 */
const BottomNavigationPattern: React.FC = () => {
  return (
    <div className={PATTERN_CONTAINER_STYLES}>
      <h3 className={PATTERN_TITLE_STYLES}>Bottom Navigation</h3>
      <div className={PATTERN_DEMO_STYLES}>
        <div className={BOTTOM_NAV_STYLES}>
          <div className={BOTTOM_NAV_CONTAINER_STYLES}>
            {[
              { icon: <Search size={20} />, label: 'Discover', active: true },
              { icon: <Heart size={20} />, label: 'Favorites', active: false },
              { icon: <Star size={20} />, label: 'Reviews', active: false },
              { icon: <MoreVertical size={20} />, label: 'More', active: false }
            ].map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  BOTTOM_NAV_ITEM_STYLES,
                  item.active ? BOTTOM_NAV_ITEM_ACTIVE_STYLES : BOTTOM_NAV_ITEM_INACTIVE_STYLES
                )}
              >
                {item.icon}
                <span className={BOTTOM_NAV_LABEL_STYLES}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * LumiereMobilePatterns Component
 * 
 * A design system mobile patterns component that showcases common mobile UI patterns
 * used in the Lumiere design system. This component provides interactive examples
 * of mobile-first design patterns with accessibility considerations.
 * 
 * **Key Features:**
 * - **Multiple pattern types**: Search, list, card grid, action sheet, bottom navigation
 * - **Interactive examples**: Functional pattern demonstrations
 * - **Mobile-first design**: Optimized for touch interactions
 * - **Accessibility**: Proper touch targets and screen reader support
 * - **Design system consistency**: Uses Lumiere color tokens and spacing
 * 
 * **Usage Examples:**
 * ```tsx
 * // Display all mobile patterns
 * <LumiereMobilePatterns />
 * 
 * // Display specific pattern
 * <LumiereMobilePatterns type="search" />
 * 
 * // With guidelines
 * <LumiereMobilePatterns 
 *   showGuidelines 
 *   className="border rounded-lg p-6"
 * />
 * 
 * // Show specific patterns
 * <LumiereMobilePatterns 
 *   type="list" 
 *   showGuidelines={false}
 * />
 * ```
 * 
 * **Mobile Pattern Types:**
 * - **Search**: Search input with filter button
 * - **List**: List items with avatars and chevrons
 * - **Card Grid**: 2-column card layout
 * - **Action Sheet**: Bottom sheet with action buttons
 * - **Bottom Navigation**: Tab bar navigation
 * 
 * **Mobile Guidelines:**
 * - Use swipe gestures for navigation
 * - Implement pull-to-refresh
 * - Add haptic feedback for actions
 * - Prioritize content hierarchy
 * - Use progressive disclosure
 */
export const LumiereMobilePatterns = forwardRef<HTMLDivElement, LumiereMobilePatternsProps>(
  ({ 
    className, 
    type, 
    showAll = true, 
    showGuidelines = false, 
    ...props 
  }, ref) => {
    // Build the mobile patterns classes
    const mobilePatternsClasses = buildMobilePatternsClasses(className);

    return (
      <div
        ref={ref}
        className={mobilePatternsClasses}
        {...props}
      >
        {/* Show specific pattern or all patterns */}
        {showAll ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SearchPattern />
            <ListPattern />
            <CardGridPattern />
            <ActionSheetPattern />
            <div className="lg:col-span-2">
              <BottomNavigationPattern />
            </div>
          </div>
        ) : (
          <>
            {type === 'search' && <SearchPattern />}
            {type === 'list' && <ListPattern />}
            {type === 'card-grid' && <CardGridPattern />}
            {type === 'action-sheet' && <ActionSheetPattern />}
            {type === 'bottom-navigation' && <BottomNavigationPattern />}
          </>
        )}

        {/* Guidelines */}
        {showGuidelines && (
          <div className={GUIDELINES_STYLES}>
            <h4 className={GUIDELINES_TITLE_STYLES}>Mobile Pattern Guidelines</h4>
            <div className={GUIDELINES_GRID_STYLES}>
              <div>
                <strong>Touch Interactions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Use swipe gestures for navigation</li>
                  <li>Implement pull-to-refresh</li>
                  <li>Add haptic feedback for actions</li>
                </ul>
              </div>
              <div>
                <strong>Content Organization:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Prioritize content hierarchy</li>
                  <li>Use progressive disclosure</li>
                  <li>Implement infinite scroll for lists</li>
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
LumiereMobilePatterns.displayName = 'LumiereMobilePatterns'; 