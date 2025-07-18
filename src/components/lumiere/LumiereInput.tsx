import React, { forwardRef, useId } from 'react';
import { cn } from './utils.js';

// Base props interface
interface BaseInputProps {
  /** Error message to display below the input */
  error?: string;
  /** Label text to display above the input */
  label?: string;
  /** Whether the field is required (adds asterisk to label) */
  required?: boolean;
  /** Helper text to display below the input */
  helperText?: string;
  /** Additional CSS classes */
  className?: string;
}

// Extend with proper HTML input attributes
export interface LumiereInputProps extends BaseInputProps, React.InputHTMLAttributes<HTMLInputElement> {
  /** Description for screen readers */
  'aria-describedby'?: string;
}

// Base styles that apply to all inputs
const BASE_INPUT_STYLES = 'flex h-10 w-full rounded-md border border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground';

// Focus state styles
const FOCUS_STYLES = 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

// Disabled state styles
const DISABLED_STYLES = 'disabled:cursor-not-allowed disabled:opacity-50';

// Read-only state styles
const READONLY_STYLES = 'read-only:bg-muted read-only:cursor-default';

// Error state styles
const ERROR_STYLES = 'border-destructive focus:ring-destructive';

// Label styles
const LABEL_STYLES = 'block px-2 text-sm font-medium text-foreground';

// Required asterisk styles
const REQUIRED_ASTERISK_STYLES = 'text-destructive ml-1';

// Helper text styles
const HELPER_TEXT_STYLES = 'block px-2 text-sm font-body text-foreground';

// Error text styles
const ERROR_TEXT_STYLES = 'block px-2 text-sm font-body text-destructive';

/**
 * Builds the input classes based on the component props
 * @param error - Whether there's an error
 * @param className - Additional CSS classes
 * @returns The combined className string
 */
const buildInputClasses = (
  error?: string,
  className?: string
): string => {
  return cn(
    BASE_INPUT_STYLES,
    FOCUS_STYLES,
    DISABLED_STYLES,
    READONLY_STYLES,
    error && ERROR_STYLES,
    className
  );
};

/**
 * Builds the helper/error text classes
 * @param isError - Whether this is an error message
 * @returns The appropriate className string
 */
const buildTextClasses = (isError: boolean): string => {
  return cn(
    HELPER_TEXT_STYLES,
    isError && ERROR_TEXT_STYLES,
    !isError && 'text-muted-foreground'
  );
};

/**
 * Generates unique IDs for accessibility
 * @param baseId - Base ID to use
 * @returns Object with generated IDs
 */
const generateIds = (baseId: string) => ({
  inputId: baseId,
  labelId: `label-${baseId}`,
  helperTextId: `helper-${baseId}`,
  errorId: `error-${baseId}`
});

/**
 * LumiereInput Component
 * 
 * A design system input component that provides consistent styling for form inputs
 * with French-inspired design language. This component offers comprehensive form
 * input functionality with full accessibility support.
 * 
 * **Key Features:**
 * - **Type-safe props**: Full TypeScript support with proper HTML input attributes
 * - **Accessibility**: Complete ARIA support and screen reader compatibility
 * - **Error handling**: Visual error states with proper messaging
 * - **Form integration**: Works seamlessly with form libraries
 * - **Design system consistency**: Uses Lumiere color tokens and typography
 * - **Auto-generated IDs**: Unique IDs for accessibility (no ID conflicts)
 * 
 * **Usage Examples:**
 * ```tsx
 * // Basic input with label
 * <LumiereInput
 *   label="Full Name"
 *   placeholder="Enter your name"
 *   required
 * />
 * 
 * // Input with error state
 * <LumiereInput
 *   label="Email Address"
 *   type="email"
 *   error="Please enter a valid email address"
 *   helperText="We'll never share your email"
 * />
 * 
 * // Disabled input
 * <LumiereInput
 *   label="Username"
 *   value="john_doe"
 *   disabled
 * />
 * 
 * // Input with custom styling
 * <LumiereInput
 *   label="Custom Input"
 *   className="border-2 border-primary"
 * />
 * ```
 * 
 * **Accessibility Features:**
 * - Proper label association with `htmlFor` and `id`
 * - ARIA attributes for error states (`aria-invalid`, `aria-describedby`)
 * - Screen reader announcements for errors (`role="alert"`)
 * - Required field indicators with `aria-required`
 * - Focus management with visible focus rings
 */
export const LumiereInput = forwardRef<HTMLInputElement, LumiereInputProps>(
  ({ 
    className, 
    error, 
    label, 
    required, 
    helperText, 
    id, 
    'aria-describedby': ariaDescribedby, 
    ...props 
  }, ref) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const inputId = id || generatedId;
    const { labelId, helperTextId, errorId } = generateIds(inputId);
    
    // Combine aria-describedby with our IDs
    const describedBy = [
      ariaDescribedby,
      helperText && !error && helperTextId,
      error && errorId
    ].filter(Boolean).join(' ');

    // Build the input classes
    const inputClasses = buildInputClasses(error, className);

    return (
      <div className="space-y-2">
        {/* Label with optional required asterisk */}
        {label && (
          <label 
            id={labelId}
            htmlFor={inputId}
            className={LABEL_STYLES}
          >
            {label}
            {required && (
              <span 
                className={REQUIRED_ASTERISK_STYLES}
                aria-label="required"
              >
                *
              </span>
            )}
          </label>
        )}
        
        {/* Input field with conditional error styling */}
        <input
          id={inputId}
          ref={ref}
          aria-labelledby={label ? labelId : undefined}
          aria-describedby={describedBy || undefined}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required}
          className={inputClasses}
          {...props}
        />
        
        {/* Helper text or error message display */}
        {(error || helperText) && (
          <p 
            id={error ? errorId : helperTextId}
            className={buildTextClasses(!!error)}
            role={error ? 'alert' : undefined}
            aria-live={error ? 'polite' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

// Set display name for better debugging
LumiereInput.displayName = 'LumiereInput';