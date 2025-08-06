# DocsLayout

## Overview

The DocsLayout component provides a structured layout optimized for documentation pages. It features a sticky header, optional sidebars for navigation and table of contents, and a footer, creating a consistent and navigable documentation experience.

## Basic Usage

```vue
<template>
  <DocsLayout>
    <template #header>
      <div class="font-bold text-xl">Documentation
        <a href="#" class="text-primary-600 dark:text-primary-400">Home</a>
          <a href="#" class="text-primary-600 dark:text-primary-400">Components</a>
          <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
      </div>
    </template>

    <template #left-bar>
      <div class="font-semibold">Navigation
        <a href="#" class="block text-primary-600 dark:text-primary-400">Getting Started</a>
          <a href="#" class="block">Installation</a>
          <a href="#" class="block">Usage</a>
          <a href="#" class="block">Components</a>
      </div>
    </template>

    <div class="prose dark:prose-invert">
      <h1>Documentation Title</h1>
      <p>This is the main content area of the documentation page.</p>
    </div>
    
    <template #right-bar>
      <div class="font-semibold">On This Page
        <a href="#" class="block">Introduction</a>
          <a href="#" class="block">Getting Started</a>
          <a href="#" class="block">Configuration</a>
      </div>
    </template>

    <template #footer>
      <div class="text-center text-sm text-base-500 dark:text-base-400">
        © 2023 Component Library. All rights reserved.
      </div>
    </template>
  </DocsLayout>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"fullwidth" \| "margined"` | `"margined"` | Controls the layout width - "margined" adds max-width constraints, while "fullwidth" uses the entire viewport width. |

## Slots

| Name | Description |
|------|-------------|
| `default` | The main content area of the documentation page. |
| `header` | Content for the sticky top navigation bar. |
| `left-bar` | Content for the left sidebar, typically used for navigation. |
| `right-bar` | Content for the right sidebar, typically used for table of contents or additional information. |
| `footer` | Content for the page footer. If not provided, the footer is not displayed. |

## Margined Layout (Default)

```vue
<template>
  <DocsLayout>
    <template #header>
      <div class="font-bold">Margined Layout (Default)</div>
    </template>

    <template #left-bar>
      <div>Left Sidebar</div>
    </template>

    <div>
      Main Content Area (Maximum width constrained)
    </div>

    <template #right-bar>
      <div>Right Sidebar</div>
    </template>
  </DocsLayout>
</template>
```

## Full Width Layout

```vue
<template>
  <DocsLayout variant="fullwidth">
    <template #header>
      <div class="font-bold">Full Width Layout</div>
    </template>

    <template #left-bar>
      <div>Left Sidebar</div>
    </template>

    <div>
      Main Content Area (Full viewport width)
    </div>

    <template #right-bar>
      <div>Right Sidebar</div>
    </template>
  </DocsLayout>
</template>
```

## Layout Behavior

The DocsLayout component has the following responsive behavior:

- **Mobile (< 1024px)**: Only the header and main content are visible. Sidebars are hidden.
- **Large screens (≥ 1024px)**: The left sidebar becomes visible alongside the main content.
- **Extra large screens (≥ 1280px)**: Both left and right sidebars are visible.

This progressive disclosure ensures good readability on all devices while showing additional navigation on larger screens where space permits.

## Best Practices

- Use the left sidebar for primary navigation through different sections of documentation
- Use the right sidebar for table of contents or contextual information related to the current page
- Place important global navigation in the header for access on all screen sizes
- Consider using the Prose component for text content in the main area to ensure proper typography
- For API documentation or reference materials, the "margined" variant provides better readability
- For visual documentation with examples, consider using the "fullwidth" variant to maximize space

## Accessibility Considerations

- The header is properly positioned with `z-index` to ensure it's accessible when scrolling
- The layout uses semantic HTML elements (`header`, `aside`, `main`, `footer`) for proper document structure
- Sticky positioning ensures that navigation remains accessible throughout the page
- The component ensures proper color contrast between text and background colors
- Sidebars are responsive and don't interfere with content readability on smaller screens

## Examples

### API Documentation Layout

```vue
<template>
  <DocsLayout>
    <template #header>
      <div class="font-bold text-xl">API Reference
        <a href="#" class="text-primary-600 dark:text-primary-400">Guide</a>
          <a href="#" class="text-primary-600 dark:text-primary-400 font-medium">API</a>
          <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
      </div>
    </template>

    <template #left-bar>
      <!-- Navigation structure with sections -->
    </template>

    <div class="prose dark:prose-invert max-w-none">
      <!-- Main documentation content -->
      <h1>API Reference</h1>
      <p>Welcome to the API reference documentation...</p>
    </div>

    <template #right-bar>
      <!-- Table of contents for current page -->
    </template>

    <template #footer>
      <!-- Footer with copyright and links -->
    </template>
  </DocsLayout>
</template>
```

### Component Showcase Layout

```vue
<template>
  <DocsLayout variant="fullwidth">
    <template #header>
      <!-- Header with component library title and theme toggles -->
    </template>

    <template #left-bar>
      <!-- Component navigation -->
    </template>

    <div>
      <!-- Component showcase with examples -->
      <h1 class="text-2xl font-bold mb-6">Card Component</h1>
      <!-- Various component examples -->
    </div>

    <template #right-bar>
      <!-- Component API reference -->
    </template>
  </DocsLayout>
</template>
```
