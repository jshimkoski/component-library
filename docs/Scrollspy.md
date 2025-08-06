# Scrollspy

The Scrollspy component tracks scroll position on a page and automatically highlights the corresponding navigation link as the user scrolls through different sections.

## Overview

Scrollspy is a navigation aid that provides visual feedback about which section of content is currently in the viewport. It's especially useful for long-form content, documentation pages, or single-page applications with multiple sections.

## Basic Usage

```vue
<template>
  <Scrollspy>
    <!-- Content with sections -->
    <div>
      <section id="section1" data-scrollspy>
        <h2 data-scrollspy-title>Section 1</h2>
        <p>Content for section 1...</p>
      </section>
      
      <section id="section2" data-scrollspy>
        <h2 data-scrollspy-title>Section 2</h2>
        <p>Content for section 2...</p>
      </section>
      
      <section id="section3" data-scrollspy>
        <h2 data-scrollspy-title>Section 3</h2>
        <p>Content for section 3...</p>
      </section>
    </div>
  </Scrollspy>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selector` | `String` | `'[data-scrollspy]'` | CSS selector for identifying sections |
| `offset` | `Number` | `100` | Offset in pixels to trigger active state change |
| `autoDetect` | `Boolean` | `true` | Automatically detect sections on mount |
| `sections` | `ScrollspySection[]` | `[]` | Manual configuration of sections |
| `navClass` | `String` | *See source* | Custom class for the navigation container |
| `listClass` | `String` | `'space-y-1'` | Custom class for the list element |
| `itemClass` | `String` | *See source* | Custom class for list items |
| `activeItemClass` | `String` | *See source* | Custom class for active list item |
| `linkClass` | `String` | *See source* | Custom class for navigation links |
| `contentClass` | `String` | `'flex-grow'` | Custom class for the content container |
| `smooth` | `Boolean` | `true` | Enable smooth scrolling when clicking navigation links |
| `throttleInterval` | `Number` | `100` | Throttle interval for scroll event handling |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `change` | `(id: string, index: number)` | Emitted when the active section changes |
| `update:activeId` | `(id: string)` | Emitted when the active section ID changes |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content area containing the sections to spy on |
| `icon` | Custom icon for navigation items. Scoped slot with `section` and `active` properties |
| `title` | Custom title for navigation items. Scoped slot with `section` and `active` properties |

## Types

```typescript
interface ScrollspySection {
  id: string;
  title: string;
  icon?: Component;
}
```

## Variants

### Auto-Detected Sections (Default)

Uses `data-scrollspy` attributes to automatically detect sections on the page.

```vue
<template>
  <Scrollspy>
    <div>
      <section id="introduction" data-scrollspy>
        <h2 data-scrollspy-title>Introduction</h2>
        <!-- Content -->
      </section>
      <!-- More sections -->
    </div>
  </Scrollspy>
</template>
```

### Manually Defined Sections

Explicitly define sections via props instead of auto-detection.

```vue
<template>
  <Scrollspy :sections="sections" :auto-detect="false">
    <div>
      <section id="intro">
        <h2>Introduction</h2>
        <!-- Content -->
      </section>
      <section id="features">
        <h2>Features</h2>
        <!-- Content -->
      </section>
      <section id="api">
        <h2>API Reference</h2>
        <!-- Content -->
      </section>
    </div>
  </Scrollspy>

<script setup>
const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'features', title: 'Features' },
  { id: 'api', title: 'API Reference' }
];
</script>
```

### With Custom Icons

```vue
<template>
  <Scrollspy :sections="sections">
    <template #icon="{ section, active }">
      <component 
        :is="section.icon" 
        :class="active ? 'text-primary-500' : 'text-base-400'"
        class="w-5 h-5 mr-2"
      />
    </template>

    <!-- Content sections -->
  </Scrollspy>
</template>

<script setup>
import { IconMdiHome, IconMdiCog, IconMdiInformation } from '@iconify/vue';

const sections = [
  { id: 'home', title: 'Home', icon: IconMdiHome },
  { id: 'settings', title: 'Settings', icon: IconMdiCog },
  { id: 'about', title: 'About', icon: IconMdiInformation }
];
</script>
```

## Best Practices

- Ensure each section has a unique ID
- Apply sufficient spacing between sections for clear distinction
- Use descriptive section titles for better navigation
- For longer pages, consider using a sticky position for the navigation
- Set an appropriate offset based on your header height and layout
- Ensure the component works with keyboard navigation for accessibility
- Consider different viewport sizes in your implementation

## Examples

### Documentation Page Layout

```vue
<template>
  <!-- Sticky sidebar with Scrollspy -->
  <Scrollspy 
    nav-class="sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto pr-6 w-64"
    active-item-class="border-l-2 border-primary-500 text-primary-600 font-medium"
  >
    <div class="prose max-w-3xl mx-auto py-8">
      <h1>Documentation</h1>
      
      <section id="getting-started" data-scrollspy>
        <h2 data-scrollspy-title>Getting Started</h2>
        <p>This guide will help you get started with our library...</p>
        <!-- More content -->
      </section>
      
      <section id="installation" data-scrollspy>
        <h2 data-scrollspy-title>Installation</h2>
        <p>You can install our library using npm or yarn...</p>
        <!-- More content -->
      </section>
      
      <section id="configuration" data-scrollspy>
        <h2 data-scrollspy-title>Configuration</h2>
        <p>Configure the library to suit your needs...</p>
        <!-- More content -->
      </section>
      
      <section id="api-reference" data-scrollspy>
        <h2 data-scrollspy-title>API Reference</h2>
        <p>Detailed API documentation...</p>
        <!-- More content -->
      </section>
    </div>
  </Scrollspy>
</template>
```

### Programmatic Control

```vue
<template>
  <div>
    <div class="mb-4 flex gap-2">
      <Action v-for="section in sections" :key="section.id" @click="scrollTo(section.id)">
        {{ section.title }}
      </Action>
    </div>
    
    <Scrollspy ref="scrollspy" v-model:active-id="activeSection">
      <!-- Content sections -->
      <section v-for="section in sections" :key="section.id" :id="section.id" data-scrollspy>
        <h2 data-scrollspy-title>{{ section.title }}</h2>
        <p>Content for {{ section.title }}...</p>
        <!-- More content with sufficient height to enable scrolling -->
      </section>
    </Scrollspy>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'features', title: 'Features' },
  { id: 'usage', title: 'Usage' },
  { id: 'api', title: 'API' }
];

const scrollspy = ref(null);
const activeSection = ref('intro');

const scrollTo = (id) => {
  scrollspy.value.scrollToSection(id);
};
</script>
```
