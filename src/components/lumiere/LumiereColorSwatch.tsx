import React, { forwardRef } from 'react';
import { cn } from './utils.js';

/**
 * Props for the LumiereColorSwatch component
 */
export interface LumiereColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Human-readable color name (e.g., "Ivory White") */
  name: string;
  /** Hex color code (e.g., "#FAF8F3") */
  hex: string;
  /** Optional usage description or guidance */
  note?: string;
  /** Optional custom styles for the color area */
  swatchStyle?: React.CSSProperties;
  /** If true, removes the card border and shadow (default: false) */
  noBorder?: boolean;
}

/**
 * LumiereColorSwatch Component
 * 
 * A design system component for displaying color swatches with metadata.
 * Used for documenting and showcasing the Lumiere color palette.
 * 
 * Features:
 * - Displays a colored rectangle with the specified hex color
 * - Shows color name, hex code, and usage notes
 * - Supports different styling variations (rectangular, rounded)
 * - Can be used with or without borders for different presentation styles
 * 
 * @example
 * ```tsx
 * <LumiereColorSwatch
 *   name="Ivory White"
 *   hex="#FAF8F3"
 *   note="Primary background color"
 * />
 * ```
 */
export const LumiereColorSwatch = forwardRef<HTMLDivElement, LumiereColorSwatchProps>(
  ({ className, name, hex, note, swatchStyle, noBorder = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Conditional styling: if noBorder is true, show minimal styling
          // otherwise show full card styling with border, shadow, and rounded corners
          noBorder 
            ? 'text-center' 
            : 'overflow-hidden text-center rounded-lg border border-primary shadow-card',
          className
        )}
        {...props}
      >
        {/* Color Display Area */}
        <div 
          className={cn(
            // For circular swatches (noBorder + borderRadius: 50%), use fixed dimensions
            // For all other swatches, use full width with standard height
            noBorder && swatchStyle?.borderRadius === '50%' 
              ? 'w-24 h-24 mx-auto' 
              : 'w-full h-24'
          )}
          style={{
            backgroundColor: hex, // Apply the hex color as background
            ...swatchStyle // Allow custom styling (borderRadius, etc.)
          }}
        />
        
        {/* Information Section - Hidden for circular swatches */}
        {!(noBorder && swatchStyle?.borderRadius === '50%') && (
          <div className="p-3 bg-card">
            <div className="font-heading text-sm text-foreground">{name}</div>
            <div className="text-xs text-muted-foreground font-body">{hex}</div>
            {note && (
              <small className="text-muted-foreground font-body">{note}</small>
            )}
          </div>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereColorSwatch.displayName = 'LumiereColorSwatch';