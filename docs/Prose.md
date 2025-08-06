# Prose

## Overview

The Prose component provides consistent styling for rich text content. It's designed to make standard HTML elements like paragraphs, headings, lists, and blockquotes look great with minimal effort, making it ideal for blog posts, articles, documentation, or any long-form content.

## Basic Usage

```vue
<template>
  <Prose>
    <h2>Getting Started</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    <h3>Installation</h3>
    <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
    <blockquote>
      <p>This is a blockquote with properly indented margins for readability.</p>
    </blockquote>
  </Prose>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme for the prose content, affecting links and certain elements. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content to be styled with prose formatting. |

## Different Kinds

```vue
<template>
  <Prose kind="primary">
    <h3>Primary Prose</h3>
    <p>This prose uses the primary color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>

  <Prose kind="secondary">
    <h3>Secondary Prose</h3>
    <p>This prose uses the secondary color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>

  <!-- And so on for other kinds -->
</template>
```

## Best Practices

- Use Prose for content-heavy sections like blog posts, documentation, or articles
- Choose the appropriate color kind based on the context:
  - `primary`: Default for most content
  - `secondary`: For less emphasized content
  - `success`: For content about successful processes or positive results
  - `info`: For informational or educational content
  - `warning`: For content containing warnings or cautions
  - `danger`: For content about errors or dangerous actions
- Keep standard HTML semantics in your content (headings, paragraphs, lists, etc.)
- Avoid overriding Prose component styles directly; use slots for custom-styled content

## Accessibility Considerations

- The Prose component maintains proper heading hierarchy, important for screen reader navigation
- Ensures sufficient text contrast for readability
- Maintains proper spacing for content readability
- Preserves semantic HTML structure, enhancing accessibility for assistive technologies

## Examples

### Article Layout

```vue
<template>
  <Prose>
    <h1>How to Use the Component Library</h1>
    <p class="lead">A comprehensive guide to using our component library effectively in your projects.</p>

    <h2>Introduction</h2>
    <p>This component library provides a set of reusable UI components designed to help you build consistent interfaces quickly and efficiently.</p>

    <!-- Additional content... -->
  </Prose>
</template>
```

### Documentation with Code Examples

```vue
<template>
  <Prose kind="info">
    <h2>API Documentation</h2>

    <h3>Authentication</h3>
    <p>To authenticate with the API, you'll need to include an authorization header with your requests:</p>

    <pre><code>fetch('https://api.example.com/data', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  })</code></pre>

    <!-- Additional content... -->
  </Prose>
</template>
```
