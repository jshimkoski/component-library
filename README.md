# @jasonshimmy/components

A comprehensive collection of Vue 3 components built with TypeScript and Vite, designed for modern web applications.

**Please Note:** This library is under active development. Nothing is set in stone, and breaking changes may occur.

## Overview

This component library provides a set of highly customizable, accessible, and reusable Vue 3 components. Built with TypeScript and Vite, it offers excellent developer experience and runtime performance.

## Features

- 🧩 30+ customizable Vue 3 components
- 📝 Full TypeScript support
- 📱 Responsive design
- 🌙 Dark mode support
- ♿ Accessibility compliance
- 🎨 Consistent styling and behavior

## Prerequisites

- Node.js 16.x or higher (LTS recommended)
- npm 8.x or higher
- Vue 3.x or higher

## Installation & Usage

### 1. Install the Package

```bash
npm install @jasonshimmy/components
```

### 2. Framework-Specific Setup

Choose the setup instructions for your framework:

#### For Vue Applications

**Setup Styles:**
```css
/* src/assets/css/main.css */
@import "tailwindcss";
@import '@jasonshimmy/components/style.css';
@source "../../../node_modules/@jasonshimmy/components";
```

**Global Component Registration:**
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

#### For Nuxt Applications

**nuxt.config.ts:**
```ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
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

**app/assets/css/main.css:**
```css
@import "tailwindcss";
@import '@jasonshimmy/components/style.css';
@source "../../../node_modules/@jasonshimmy/components";
```

**app/plugins/jasonshimmy-components.ts:**
```ts
import * as ComponentLibrary from '@jasonshimmy/components';

export default defineNuxtPlugin((nuxtApp) => {
  // Register all components globally
  Object.entries(ComponentLibrary).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component);
  });
});
```

### 3. Individual Component Imports (Alternative)

If you prefer to import components individually instead of global registration:

```ts
import { Card, Button, Dialog } from '@jasonshimmy/components';
import '@jasonshimmy/components/style.css';

// Use <Card />, <Button />, <Dialog /> in your templates
```

## TypeScript Support

### Automatic Type Declarations

TypeScript type declarations are included automatically. You'll get full type support and autocompletion for all components and their props:

```ts
import { Card } from '@jasonshimmy/components';
// Card will have full prop types and event typings
```

### Global Component Types (Volar/Vetur)

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

## Tailwind CSS Integration

For best practices on integrating this library with Tailwind CSS in your project, see [USAGE_WITH_TAILWIND.md](./docs/USAGE_WITH_TAILWIND.md).

## Available Components

This library includes 30+ components organized by category:

### Core Components
- **[Action](./docs/Action.md)** - General-purpose interactive button or link
- **[Avatar](./docs/Avatar.md)** - User profile image or initials, with optional status
- **[Badge](./docs/Badge.md)** - Small indicator for status, notifications, or counts
- **[Card](./docs/Card.md)** - Flexible content container with header, body, and footer slots
- **[Chip](./docs/Chip.md)** - Compact element for tags, filters, or actions

### Form Components
- **[Checkbox](./docs/Checkbox.md)** - Single checkbox input for boolean values
- **[CheckboxGroup](./docs/CheckboxGroup.md)** - Group of checkboxes for multi-select options
- **[Datepicker](./docs/Datepicker.md)** - Input for selecting dates from a calendar UI
- **[Radio](./docs/Radio.md)** - Single radio button for exclusive selection
- **[RadioGroup](./docs/RadioGroup.md)** - Group of radio buttons for single-choice selection
- **[Select](./docs/Select.md)** - Dropdown select input for single or multiple options
- **[Slider](./docs/Slider.md)** - Range slider for numeric input
- **[Switch](./docs/Switch.md)** - Toggle switch for boolean values
- **[TextField](./docs/TextField.md)** - Standard text input field

### Content & Media
- **[Carousel](./docs/Carousel.md)** - Image/content slider with navigation controls
- **[Progress](./docs/Progress.md)** - Linear progress bar for loading or completion status
- **[Prose](./docs/Prose.md)** - Styled container for rich text content
- **[RichTextEditor](./docs/RichTextEditor.md)** - (WIP) - WYSIWYG editor for formatted text input
- **[Table](./docs/Table.md)** - Table for displaying tabular data
- **[TextEditor](./docs/TextEditor.md)** - Simple text editor input

### Navigation & Layout
- **[DocsLayout](./docs/DocsLayout.md)** - Layout wrapper for documentation pages
- **[Menu](./docs/Menu.md)** - Dropdown or context menu container
- **[MenuContent](./docs/MenuContent.md)** - Content area for menu items
- **[MenuDivider](./docs/MenuDivider.md)** - Divider line for separating menu sections
- **[MenuHeader](./docs/MenuHeader.md)** - Header/title for menu sections
- **[MenuItem](./docs/MenuItem.md)** - Selectable item within a menu
- **[Paginator](./docs/Paginator.md)** - Pagination controls for navigating data sets
- **[Scrollspy](./docs/Scrollspy.md)** - (WIP) -Navigation aid that highlights sections as you scroll
- **[Sheet](./docs/Sheet.md)** - Sliding panel for side-drawers or overlays
- **[TabPanel](./docs/TabPanel.md)** - Content panel for use within Tabs
- **[Tabs](./docs/Tabs.md)** - Tabbed navigation and content switching
- **[Tree](./docs/Tree.md)** - Hierarchical tree view for nested data
- **[TreeItem](./docs/TreeItem.md)** - Single item/node within a Tree component

### Overlays & Feedback
- **[Dialog](./docs/Dialog.md)** - Modal dialog for alerts, confirmations, or custom content
- **[FloatingUi](./docs/FloatingUi.md)** - Utility for floating elements (tooltips, popovers, etc.)
- **[Snackbar](./docs/Snackbar.md)** - Temporary toast notification for feedback messages
- **[Tooltip](./docs/Tooltip.md)** - Hover/focus popup for contextual information

## Available Composables

This library also includes powerful Vue 3 composables for common functionality:

### State Management & UI Control
- **[useMenu](./docs/useMenu.md)** - Hierarchical menu state management with automatic coordination
- **[useSnackbar](./docs/useSnackbar.md)** - Programmatic toast notification control with full customization

## Local Development

To set up the project for local development:

```bash
npm install
npm run dev
```

This will start the development server with the component documentation and examples.
