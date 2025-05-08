# DocsLayout

## Overview

The DocsLayout component provides a structured layout optimized for documentation pages. It features a sticky header, optional sidebars for navigation and table of contents, and a footer, creating a consistent and navigable documentation experience.

## Basic Usage

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="border rounded-lg overflow-hidden h-96 bg-white dark:bg-base-950">
    <DocsLayout>
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="font-bold text-xl">Documentation</div>
          <div class="flex gap-4">
            <a href="#" class="text-primary-600 dark:text-primary-400">Home</a>
            <a href="#" class="text-primary-600 dark:text-primary-400">Components</a>
            <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
          </div>
        </div>
      </template>
      
      <template #left-bar>
        <div class="space-y-4">
          <div class="font-semibold">Navigation</div>
          <div class="space-y-2">
            <a href="#" class="block text-primary-600 dark:text-primary-400">Getting Started</a>
            <a href="#" class="block">Installation</a>
            <a href="#" class="block">Usage</a>
            <a href="#" class="block">Components</a>
          </div>
        </div>
      </template>
      
      <div class="prose dark:prose-invert">
        <h1>Documentation Title</h1>
        <p>This is the main content area of the documentation page.</p>
      </div>
      
      <template #right-bar>
        <div class="space-y-4">
          <div class="font-semibold">On This Page</div>
          <div class="space-y-2 text-sm">
            <a href="#" class="block">Introduction</a>
            <a href="#" class="block">Getting Started</a>
            <a href="#" class="block">Configuration</a>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="text-center text-sm text-base-500 dark:text-base-400">
          © 2023 Component Library. All rights reserved.
        </div>
      </template>
    </DocsLayout>
  </div>
</div>

```vue
<DocsLayout>
  <template #header>
    <div class="flex items-center justify-between w-full">
      <div class="font-bold text-xl">Documentation</div>
      <div class="flex gap-4">
        <a href="#" class="text-primary-600 dark:text-primary-400">Home</a>
        <a href="#" class="text-primary-600 dark:text-primary-400">Components</a>
        <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
      </div>
    </div>
  </template>
  
  <template #left-bar>
    <div class="space-y-4">
      <div class="font-semibold">Navigation</div>
      <div class="space-y-2">
        <a href="#" class="block text-primary-600 dark:text-primary-400">Getting Started</a>
        <a href="#" class="block">Installation</a>
        <a href="#" class="block">Usage</a>
        <a href="#" class="block">Components</a>
      </div>
    </div>
  </template>
  
  <div class="prose dark:prose-invert">
    <h1>Documentation Title</h1>
    <p>This is the main content area of the documentation page.</p>
  </div>
  
  <template #right-bar>
    <div class="space-y-4">
      <div class="font-semibold">On This Page</div>
      <div class="space-y-2 text-sm">
        <a href="#" class="block">Introduction</a>
        <a href="#" class="block">Getting Started</a>
        <a href="#" class="block">Configuration</a>
      </div>
    </div>
  </template>
  
  <template #footer>
    <div class="text-center text-sm text-base-500 dark:text-base-400">
      © 2023 Component Library. All rights reserved.
    </div>
  </template>
</DocsLayout>
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

## Variants/Options

### Margined Layout (Default)

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="border rounded-lg overflow-hidden h-72 bg-white dark:bg-base-950">
    <DocsLayout>
      <template #header>
        <div class="font-bold">Margined Layout (Default)</div>
      </template>
      
      <template #left-bar>
        <div class="text-sm">Left Sidebar</div>
      </template>
      
      <div class="p-4 bg-base-100 dark:bg-base-900 rounded h-full flex items-center justify-center">
        <div class="text-center">
          <div class="font-semibold mb-2">Main Content Area</div>
          <div class="text-sm text-base-500">Maximum width constrained</div>
        </div>
      </div>
      
      <template #right-bar>
        <div class="text-sm">Right Sidebar</div>
      </template>
    </DocsLayout>
  </div>
</div>

```vue
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
```

### Full Width Layout

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="border rounded-lg overflow-hidden h-72 bg-white dark:bg-base-950">
    <DocsLayout variant="fullwidth">
      <template #header>
        <div class="font-bold">Full Width Layout</div>
      </template>
      
      <template #left-bar>
        <div class="text-sm">Left Sidebar</div>
      </template>
      
      <div class="p-4 bg-base-100 dark:bg-base-900 rounded h-full flex items-center justify-center">
        <div class="text-center">
          <div class="font-semibold mb-2">Main Content Area</div>
          <div class="text-sm text-base-500">Full viewport width</div>
        </div>
      </div>
      
      <template #right-bar>
        <div class="text-sm">Right Sidebar</div>
      </template>
    </DocsLayout>
  </div>
</div>

```vue
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

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="border rounded-lg overflow-hidden h-96 bg-white dark:bg-base-950">
    <DocsLayout>
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="font-bold text-xl">API Reference</div>
          <div class="flex gap-4">
            <a href="#" class="text-primary-600 dark:text-primary-400">Guide</a>
            <a href="#" class="text-primary-600 dark:text-primary-400 font-medium">API</a>
            <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
          </div>
        </div>
      </template>
      
      <template #left-bar>
        <div class="space-y-6">
          <div>
            <div class="font-semibold mb-2">Getting Started</div>
            <div class="space-y-1 text-sm">
              <a href="#" class="block">Installation</a>
              <a href="#" class="block">Quick Start</a>
            </div>
          </div>
          <div>
            <div class="font-semibold mb-2">Core Concepts</div>
            <div class="space-y-1 text-sm">
              <a href="#" class="block">Architecture</a>
              <a href="#" class="block">Data Flow</a>
            </div>
          </div>
          <div>
            <div class="font-semibold mb-2">API Reference</div>
            <div class="space-y-1 text-sm">
              <a href="#" class="block text-primary-600 dark:text-primary-400">Overview</a>
              <a href="#" class="block">Endpoints</a>
              <a href="#" class="block">Authentication</a>
              <a href="#" class="block">Error Handling</a>
            </div>
          </div>
        </div>
      </template>
      
      <div class="prose dark:prose-invert max-w-none">
        <h1>API Reference</h1>
        <p>Welcome to the API reference documentation. This section provides detailed information about the available endpoints, request parameters, and response formats.</p>
        
        <h2 id="base-url">Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <pre><code>https://api.example.com/v1</code></pre>
        
        <h2 id="authentication">Authentication</h2>
        <p>Authentication is required for all API endpoints. You can authenticate your requests using an API key or OAuth 2.0.</p>
      </div>
      
      <template #right-bar>
        <div>
          <div class="font-semibold mb-3">On This Page</div>
          <div class="space-y-2 text-sm">
            <a href="#base-url" class="block">Base URL</a>
            <a href="#authentication" class="block">Authentication</a>
            <a href="#endpoints" class="block">Endpoints</a>
            <a href="#rate-limits" class="block">Rate Limits</a>
            <a href="#errors" class="block">Error Handling</a>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="px-6 flex items-center justify-between">
          <div class="text-sm text-base-500 dark:text-base-400">© 2023 API Documentation</div>
          <div class="flex gap-4 text-sm">
            <a href="#" class="text-base-500 dark:text-base-400 hover:text-primary-600 dark:hover:text-primary-400">Terms</a>
            <a href="#" class="text-base-500 dark:text-base-400 hover:text-primary-600 dark:hover:text-primary-400">Privacy</a>
            <a href="#" class="text-base-500 dark:text-base-400 hover:text-primary-600 dark:hover:text-primary-400">Contact</a>
          </div>
        </div>
      </template>
    </DocsLayout>
  </div>
</div>

```vue
<DocsLayout>
  <template #header>
    <div class="flex items-center justify-between w-full">
      <div class="font-bold text-xl">API Reference</div>
      <div class="flex gap-4">
        <a href="#" class="text-primary-600 dark:text-primary-400">Guide</a>
        <a href="#" class="text-primary-600 dark:text-primary-400 font-medium">API</a>
        <a href="#" class="text-primary-600 dark:text-primary-400">Examples</a>
      </div>
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
```

### Component Showcase Layout

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="border rounded-lg overflow-hidden h-96 bg-white dark:bg-base-950">
    <DocsLayout variant="fullwidth">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="font-bold text-xl">Component Library</div>
          <div class="flex gap-4">
            <button class="p-2 rounded-full bg-base-100 dark:bg-base-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071"></path><circle cx="12" cy="12" r="4"></circle></svg>
            </button>
            <button class="p-2 rounded-full bg-base-100 dark:bg-base-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
          </div>
        </div>
      </template>
      
      <template #left-bar>
        <div class="space-y-6">
          <div>
            <div class="font-semibold mb-2">Components</div>
            <div class="space-y-1 text-sm">
              <a href="#" class="block">Buttons</a>
              <a href="#" class="block">Forms</a>
              <a href="#" class="block text-primary-600 dark:text-primary-400">Cards</a>
              <a href="#" class="block">Navigation</a>
              <a href="#" class="block">Feedback</a>
            </div>
          </div>
        </div>
      </template>
      
      <div>
        <h1 class="text-2xl font-bold mb-6">Card Component</h1>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-4">Basic Cards</h2>
            <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white dark:bg-base-800 p-4 rounded-lg shadow">
                  <h3 class="font-medium mb-2">Basic Card</h3>
                  <p class="text-sm text-base-600 dark:text-base-400">This is a simple card component with minimal styling.</p>
                </div>
                <div class="bg-white dark:bg-base-800 p-4 rounded-lg shadow">
                  <h3 class="font-medium mb-2">Card with Image</h3>
                  <div class="w-full h-24 bg-base-200 dark:bg-base-700 rounded mb-2"></div>
                  <p class="text-sm text-base-600 dark:text-base-400">A card with an image placeholder.</p>
                </div>
                <div class="bg-white dark:bg-base-800 p-4 rounded-lg shadow">
                  <h3 class="font-medium mb-2">Interactive Card</h3>
                  <p class="text-sm text-base-600 dark:text-base-400 mb-3">Click the button below to trigger an action.</p>
                  <button class="px-3 py-1 bg-primary-500 text-white rounded text-sm">Action</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <template #right-bar>
        <div>
          <div class="font-semibold mb-3">Component API</div>
          <div class="space-y-3 text-sm">
            <a href="#" class="block">Props</a>
            <a href="#" class="block">Events</a>
            <a href="#" class="block">Slots</a>
            <a href="#" class="block">CSS Variables</a>
          </div>
        </div>
      </template>
    </DocsLayout>
  </div>
</div>

```vue
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
    <div class="space-y-6">
      <!-- Various component examples -->
    </div>
  </div>
  
  <template #right-bar>
    <!-- Component API reference -->
  </template>
</DocsLayout>
```