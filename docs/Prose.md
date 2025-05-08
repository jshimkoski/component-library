# Prose

## Overview

The Prose component provides consistent styling for rich text content. It's designed to make standard HTML elements like paragraphs, headings, lists, and blockquotes look great with minimal effort, making it ideal for blog posts, articles, documentation, or any long-form content.

## Basic Usage

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
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
</div>

```vue
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
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme for the prose content, affecting links and certain elements. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content to be styled with prose formatting. |

## Variants/Options

### Different Kinds

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-6 md:grid-cols-2">
  <Prose kind="primary">
    <h3>Primary Prose</h3>
    <p>This prose uses the primary color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
  
  <Prose kind="secondary">
    <h3>Secondary Prose</h3>
    <p>This prose uses the secondary color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
  
  <Prose kind="success">
    <h3>Success Prose</h3>
    <p>This prose uses the success color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
  
  <Prose kind="info">
    <h3>Info Prose</h3>
    <p>This prose uses the info color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
  
  <Prose kind="warning">
    <h3>Warning Prose</h3>
    <p>This prose uses the warning color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
  
  <Prose kind="danger">
    <h3>Danger Prose</h3>
    <p>This prose uses the danger color for links and accents. <a href="#">Example link</a>.</p>
  </Prose>
</div>

```vue
<Prose kind="primary">
  <h3>Primary Prose</h3>
  <p>This prose uses the primary color for links and accents. <a href="#">Example link</a>.</p>
</Prose>

<Prose kind="secondary">
  <h3>Secondary Prose</h3>
  <p>This prose uses the secondary color for links and accents. <a href="#">Example link</a>.</p>
</Prose>

<!-- And so on for other kinds -->
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

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Prose>
    <h1>How to Use the Component Library</h1>
    <p class="lead">A comprehensive guide to using our component library effectively in your projects.</p>
    
    <h2>Introduction</h2>
    <p>This component library provides a set of reusable UI components designed to help you build consistent interfaces quickly and efficiently.</p>
    
    <h2>Getting Started</h2>
    <p>To get started with the component library, you'll need to install it in your project:</p>
    
    <pre><code>npm install @example/component-library</code></pre>
    
    <h3>Basic Setup</h3>
    <p>Import the components you need in your Vue files:</p>
    
    <pre><code>import { Button, Card, TextField } from '@example/component-library';</code></pre>
    
    <h2>Best Practices</h2>
    <p>When using the component library, keep these best practices in mind:</p>
    
    <ul>
      <li>Use semantic components for their intended purposes</li>
      <li>Follow the documentation for each component</li>
      <li>Maintain consistent styling across your application</li>
    </ul>
    
    <blockquote>
      <p>The component library is designed to be flexible while encouraging consistency. Use the built-in variants before creating custom styles.</p>
    </blockquote>
  </Prose>
</div>

```vue
<Prose>
  <h1>How to Use the Component Library</h1>
  <p class="lead">A comprehensive guide to using our component library effectively in your projects.</p>
  
  <h2>Introduction</h2>
  <p>This component library provides a set of reusable UI components designed to help you build consistent interfaces quickly and efficiently.</p>
  
  <!-- Additional content... -->
</Prose>
```

### Documentation with Code Examples

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Prose kind="info">
    <h2>API Documentation</h2>
    
    <h3>Authentication</h3>
    <p>To authenticate with the API, you'll need to include an authorization header with your requests:</p>
    
    <pre><code>fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})</code></pre>
    
    <h3>Endpoints</h3>
    <p>The API provides the following endpoints:</p>
    
    <table>
      <thead>
        <tr>
          <th>Endpoint</th>
          <th>Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>/users</td>
          <td>GET</td>
          <td>Get all users</td>
        </tr>
        <tr>
          <td>/users/:id</td>
          <td>GET</td>
          <td>Get a specific user</td>
        </tr>
        <tr>
          <td>/users</td>
          <td>POST</td>
          <td>Create a new user</td>
        </tr>
      </tbody>
    </table>
    
    <div class="note">
      <strong>Note:</strong> All API requests must use HTTPS.
    </div>
  </Prose>
</div>

```vue
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
```