# Component Library

A comprehensive collection of Vue 3 components built with TypeScript and Vite, designed for modern web applications.

## Usage with Tailwind CSS

See [USAGE_WITH_TAILWIND.md](./docs/USAGE_WITH_TAILWIND.md) for best practices on integrating this library with Tailwind CSS in your project.

## Overview

This component library provides a set of highly customizable, accessible, and reusable Vue 3 components. Built with TypeScript and Vite, it offers excellent developer experience and runtime performance.

## Features

- 30+ customizable Vue 3 components
- TypeScript support
- Responsive design
- Dark mode support
- Accessibility compliance
- Consistent styling and behavior

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Development

#### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

The documentation for each component follows a consistent structure:

#### Installation (for local development)

1. **Overview** - Description and purpose

```bash
npm install
npm run dev
```

This will start the development server with the component documentation and examples.

## Usage in Other Projects

You can use this library in your own Vue 3 projects after building it:

### 1. Install the library

```bash
npm install @jasonshimmy/components
```

### 2. Import the library and styles

**Global registration (main.ts):**

```css
/* src/assets/css/main.css */

@import "tailwindcss";
@import '@jasonshimmy/components/style.css';
@source "../../../node_modules/@jasonshimmy/components";
```

```ts
/* src/main.ts */

import { createApp } from 'vue';
import App from './App.vue';
import '../assets/css/main.css';
import * as ComponentLibrary from '@jasonshimmy/components';

const app = createApp(App);

// Register all components globally
Object.entries(ComponentLibrary).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount('#app');
```

**Or in Nuxt:**

```ts
/* nuxt.config.ts */

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['@jasonshimmy/components/globals'],
      },
    },
  },
});
```

```css
/* app/assets/css/main.css */

@import "tailwindcss";
@import '@jasonshimmy/components/style.css';
@source "../../../node_modules/@jasonshimmy/components";
```

```ts
/* app/plugins/jasonshimmy-components.ts */

import * as ComponentLibrary from '@jasonshimmy/components';

export default defineNuxtPlugin((nuxtApp) => {
  // Register all components globally
  Object.entries(ComponentLibrary).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component);
  });
})
```

**Or import individual components:**

```ts
import { Card, Button, Dialog } from '@jasonshimmy/components';
import '@jasonshimmy/components/style.css';

// Use <Card />, <Button />, <Dialog /> in your templates
```

## 3. Type Declarations

TypeScript type declarations are included automatically. If you use TypeScript, you will get full type support and autocompletion for all components and their props:

```ts
import { Card } from '@jasonshimmy/components';
// Card will have full prop types and event typings
```

### TypeScript Global Component Types (for Volar/Vetur)

To enable template autocompletion for all components in your project, update your `tsconfig.json`:

```jsonc
// tsconfig.json
{
  // ...existing config...
  "compilerOptions": {
    "types": ["@jasonshimmy/components/globals"]
  }
}
```

This will make all components from `@jasonshimmy/components` available globally in your templates with full type support.

## Available Components

Below is a full list of all components included in this library, with a brief description of each:

- **Action** - General-purpose interactive button or link.
- **Avatar** - User profile image or initials, with optional status.
- **Badge** - Small indicator for status, notifications, or counts.
- **Card** - Flexible content container with header, body, and footer slots.
- **Carousel** - Image/content slider with navigation controls.
- **Checkbox** - Single checkbox input for boolean values.
- **CheckboxGroup** - Group of checkboxes for multi-select options.
- **Chip** - Compact element for tags, filters, or actions.
- **Datepicker** - Input for selecting dates from a calendar UI.
- **Dialog** - Modal dialog for alerts, confirmations, or custom content.
- **DocsLayout** - Layout wrapper for documentation pages.
- **FloatingUi** - Utility for floating elements (tooltips, popovers, etc.).
- **Menu** - Dropdown or context menu container.
- **MenuContent** - Content area for menu items.
- **MenuDivider** - Divider line for separating menu sections.
- **MenuHeader** - Header/title for menu sections.
- **MenuItem** - Selectable item within a menu.
- **Paginator** - Pagination controls for navigating data sets.
- **Progress** - Linear progress bar for loading or completion status.
- **Prose** - Styled container for rich text content.
- **Radio** - Single radio button for exclusive selection.
- **RadioGroup** - Group of radio buttons for single-choice selection.
- **RichTextEditor** - WYSIWYG editor for formatted text input.
- **Scrollspy** - Navigation aid that highlights sections as you scroll.
- **Select** - Dropdown select input for single or multiple options.
- **Sheet** - Sliding panel for side-drawers or overlays.
- **Slider** - Range slider for numeric input.
- **Snackbar** - Temporary toast notification for feedback messages.
- **Switch** - Toggle switch for boolean values.
- **TabPanel** - Content panel for use within Tabs.
- **Table** - Table for displaying tabular data.
- **Tabs** - Tabbed navigation and content switching.
- **TextEditor** - Simple text editor input.
- **TextField** - Standard text input field.
- **Tooltip** - Hover/focus popup for contextual information.
- **Tree** - Hierarchical tree view for nested data.
- **TreeItem** - Single item/node within a Tree component.
