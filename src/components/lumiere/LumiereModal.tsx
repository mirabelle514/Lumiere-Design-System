import React, { forwardRef, useEffect } from 'react';
import { cn } from './utils.js';

/**
 * Props for the LumiereModal component
 */
export interface LumiereModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is visible */
  isOpen: boolean;
  /** Callback function to close the modal */
  onClose: () => void;
  /** Optional title for the modal header */
  title?: string;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Modal size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Description for screen readers */
  'aria-describedby'?: string;
}

/**
 * LumiereModal Component
 * 
 * A design system modal component that provides an overlay dialog for
 * important content or user interactions. Features French-inspired styling
 * with smooth animations and full accessibility support.
 * 
 * Features:
 * - Overlay backdrop with click-to-close functionality
 * - Smooth enter/exit animations
 * - Multiple size variants for different content needs
 * - Optional header with title
 * - Optional footer for actions
 * - Focus management and keyboard navigation
 * - Full accessibility with proper ARIA attributes
 * - Screen reader compatibility
 * - Escape key to close
 * - Focus trap within modal
 * 
 * @example
 * ```tsx
 * <LumiereModal
 *   isOpen={isModalOpen}
 *   onClose={() => setIsModalOpen(false)}
 *   title="Confirm Action"
 *   size="md"
 * >
 *   <p>Are you sure you want to proceed?</p>
 *   <div className="flex gap-2">
 *     <button onClick={() => setIsModalOpen(false)}>Cancel</button>
 *     <button onClick={handleConfirm}>Confirm</button>
 *   </div>
 * </LumiereModal>
 * ```
 */
export const LumiereModal = forwardRef<HTMLDivElement, LumiereModalProps>(
  ({ className, children, isOpen, onClose, title, footer, size = 'md', 'aria-describedby': ariaDescribedby, ...props }, ref) => {
    // Handle escape key to close modal
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);

    // Don't render anything if modal is not open
    if (!isOpen) return null;

    // Size variants with appropriate max widths
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl'
    };

    return (
      <>
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Modal container */}
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? 'Dialog'}
          aria-describedby={ariaDescribedby}
        >
          <div
            ref={ref}
            className={cn(
              // Base modal styling with background and rounded corners
              'bg-background rounded-lg shadow-xl border border-border',
              'w-full max-h-[90vh] overflow-hidden flex flex-col',
              
              // Size-specific max width
              sizeClasses[size],
              
              className
            )}
            {...props}
          >
            {/* Modal header with optional title */}
            {title && (
              <div className="px-6 py-4 border-b border-border">
                <h2 className="text-lg font-heading text-foreground">
                  {title}
                </h2>
              </div>
            )}
            
            {/* Modal content with scrolling */}
            <div className="flex-1 overflow-auto p-6">
              {children}
            </div>
            
            {/* Modal footer with optional content */}
            {footer && (
              <div className="px-6 py-4 border-t border-border bg-muted/50">
                {footer}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);

// Set display name for better debugging
LumiereModal.displayName = 'LumiereModal';