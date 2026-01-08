# Lumiere Design System - Accessibility Guide

## Overview

The Lumiere Design System is built with **full ADA (Americans with Disabilities Act) compliance** in mind. All components include proper ARIA attributes, keyboard navigation, and screen reader support.

## Accessibility Features

### **Core Principles**

- **Semantic HTML** - Proper use of HTML elements
- **ARIA Attributes** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG AA compliant colors
- **Screen Reader Support** - Comprehensive ARIA labels

## Component Accessibility

### **LumiereInput**

```tsx
<LumiereInput
  label="Email Address"
  required={true}
  error="Please enter a valid email"
  helperText="We'll never share your email"
  aria-describedby="email-help"
/>
```

**Accessibility Features:**

- `aria-labelledby` - Links to label
- `aria-describedby` - Links to helper text/error
- `aria-invalid` - Indicates error state
- `aria-required` - Indicates required field
- `role="alert"` - Error messages for screen readers
- `aria-live="polite"` - Dynamic error updates
- Required asterisk with `aria-label="required"`

### **LumiereButton**

```tsx
<LumiereButton
  variant="primary"
  aria-label="Submit form"
  aria-describedby="submit-help"
>
  Submit
</LumiereButton>
```

**Accessibility Features:**

- `aria-label` - Screen reader description
- `aria-expanded` - For dropdown buttons
- `aria-pressed` - For toggle buttons
- `aria-controls` - For buttons controlling other elements
- `aria-disabled` - Disabled state
- Focus ring indicators
- Keyboard activation

### **LumiereToggle**

```tsx
<LumiereToggle
  pressed={isEnabled}
  aria-label="Enable notifications"
  aria-describedby="notifications-help"
>
  Notifications
</LumiereToggle>
```

**Accessibility Features:**

- `role="switch"` - Proper semantic role
- `aria-pressed` - Current state
- `aria-label` - Screen reader description
- `aria-describedby` - Additional context
- `data-state` - Visual state indicator

### **LumiereModal**

```tsx
<LumiereModal
  isOpen={isOpen}
  onClose={handleClose}
  title="Confirm Action"
  aria-describedby="modal-description"
>
  <p>Are you sure?</p>
</LumiereModal>
```

**Accessibility Features:**

- `role="dialog"` - Proper semantic role
- `aria-modal="true"` - Modal behavior
- `aria-labelledby` - Links to title
- `aria-describedby` - Links to description
- Escape key to close
- Focus trap within modal
- Body scroll prevention
- Backdrop click to close

### **LumiereTabBar**

```tsx
<LumiereTabBar
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  aria-label="Navigation tabs"
/>
```

**Accessibility Features:**

- `role="tablist"` - Proper semantic role
- `aria-orientation` - Horizontal/vertical
- `role="tab"` - Individual tab roles
- `aria-selected` - Active tab state
- `aria-disabled` - Disabled tab state
- Keyboard navigation (Arrow keys, Home, End)

### **LumiereMobile**

```tsx
<LumiereMobile
  variant="iphone"
  title="My App"
  ariaLabel="iPhone device frame showing My App"
  ariaDescription="A realistic iPhone frame containing the My App interface"
  interactive={true}
>
  <div>Your mobile app content here</div>
</LumiereMobile>
```

**Accessibility Features:**

- `role="application"` or `role="img"` - Proper semantic role
- `aria-label` - Screen reader description of device frame
- `aria-describedby` - Links to status bar, header, and content
- `aria-live="polite"` - Status bar announcements
- Unique IDs for all sections (status, header, content)
- Proper heading structure with title
- Status bar with time, signal, and battery indicators
- Focus management for interactive mode
- Keyboard navigation support

## Visual Accessibility

### **Focus Indicators**

All interactive elements have visible focus indicators:

```css
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
```

### **Color Contrast**

- **Text contrast**: WCAG AA compliant (4.5:1 minimum)
- **Large text**: WCAG AA compliant (3:1 minimum)
- **UI components**: High contrast borders and backgrounds

### **Required Field Indicators**

- **Visual**: Red asterisk (*)
- **Screen reader**: `aria-label="required"`
- **Semantic**: `aria-required="true"`

## Keyboard Navigation

### **Standard Navigation**

- **Tab**: Move between interactive elements
- **Shift + Tab**: Move backwards
- **Enter/Space**: Activate buttons and links
- **Arrow keys**: Navigate within components (tabs, selects)

### **Modal Navigation**

- **Escape**: Close modal
- **Tab**: Focus trap within modal
- **Shift + Tab**: Reverse focus trap

### **Form Navigation**

- **Tab**: Move between form fields
- **Enter**: Submit forms
- **Arrow keys**: Navigate radio buttons, checkboxes

## Screen Reader Support

### **ARIA Labels**

```tsx
// Descriptive labels
aria-label="Submit form"

// Contextual descriptions
aria-describedby="email-help"

// State indicators
aria-invalid="true"
aria-required="true"
aria-pressed="true"
```

### **Live Regions**

```tsx
// Dynamic content updates
aria-live="polite"  // Non-intrusive updates
role="alert"        // Important announcements
```

### **Semantic Roles**

```tsx
role="button"       // Interactive buttons
role="switch"       // Toggle controls
role="dialog"       // Modal dialogs
role="tablist"      // Tab navigation
role="tab"          // Individual tabs
```

## Testing Accessibility

### **Manual Testing**

1. **Keyboard navigation** - Tab through all interactive elements
2. **Screen reader testing** - Use NVDA, JAWS, or VoiceOver
3. **Color contrast** - Use browser dev tools or contrast checkers
4. **Focus indicators** - Ensure all elements have visible focus

### **Automated Testing**

```bash
# Install axe-core for automated testing
npm install @axe-core/react

# Run accessibility tests
npm run test:a11y
```

### **Browser Dev Tools**

- **Chrome**: Lighthouse accessibility audit
- **Firefox**: Accessibility inspector
- **Safari**: Web inspector accessibility panel

## Resources

### **Standards**

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [ADA Compliance](https://www.ada.gov/)

### **Tools**

- [axe-core](https://github.com/dequelabs/axe-core) - Automated testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast

### **Screen Readers**

- **Windows**: NVDA (free), JAWS (paid)
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca (free)

## Compliance Checklist

### **Level A (Basic)**

- [x] Semantic HTML structure
- [x] Alternative text for images
- [x] Form labels and controls
- [x] Keyboard navigation
- [x] No keyboard traps

### **Level AA (Enhanced)**

- [x] Color contrast (4.5:1)
- [x] Focus indicators
- [x] Error identification
- [x] Status messages
- [x] Page titles

### **Level AAA (Advanced)**

- [x] Enhanced color contrast (7:1)
- [x] Context-sensitive help
- [x] Error prevention
- [x] Enhanced navigation

The Lumiere Design System meets **WCAG 2.1 AA standards** and is fully compliant with ADA requirements.
