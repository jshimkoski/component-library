<template>
  <div class="content">
    <Prose>
      <h1>Docs Layout</h1>
      <h2>Overview</h2>
      <p>The DocsLayout component provides a structured layout optimized for documentation pages. It features a sticky header, optional sidebars for navigation and table of contents, and a footer, creating a consistent and navigable documentation experience.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;DocsLayout&gt;
    &lt;template #header&gt;
      &lt;div class="font-bold text-xl"&gt;Documentation
        &lt;a href="#" class="text-primary-600 dark:text-primary-400"&gt;Home&lt;/a&gt;
          &lt;a href="#" class="text-primary-600 dark:text-primary-400"&gt;Components&lt;/a&gt;
          &lt;a href="#" class="text-primary-600 dark:text-primary-400"&gt;Examples&lt;/a&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #left-bar&gt;
      &lt;div class="font-semibold"&gt;Navigation
        &lt;a href="#" class="block text-primary-600 dark:text-primary-400"&gt;Getting Started&lt;/a&gt;
          &lt;a href="#" class="block"&gt;Installation&lt;/a&gt;
          &lt;a href="#" class="block"&gt;Usage&lt;/a&gt;
          &lt;a href="#" class="block"&gt;Components&lt;/a&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;div class="prose dark:prose-invert"&gt;
      &lt;h1&gt;Documentation Title&lt;/h1&gt;
      &lt;p&gt;This is the main content area of the documentation page.&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;template #right-bar&gt;
      &lt;div class="font-semibold"&gt;On This Page
        &lt;a href="#" class="block"&gt;Introduction&lt;/a&gt;
          &lt;a href="#" class="block"&gt;Getting Started&lt;/a&gt;
          &lt;a href="#" class="block"&gt;Configuration&lt;/a&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #footer&gt;
      &lt;div class="text-center text-sm text-base-500 dark:text-base-400"&gt;
        © 2023 Component Library. All rights reserved.
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/DocsLayout&gt;
&lt;/template&gt;</code></pre>
      <h2>Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <h2>Slots</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>default</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The main content area of the documentation page.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>header</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content for the sticky top navigation bar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>left-bar</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content for the left sidebar, typically used for navigation.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>right-bar</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content for the right sidebar, typically used for table of contents or additional information.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>footer</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content for the page footer. If not provided, the footer is not displayed.</td>
          </tr>
        </tbody>
      </table>
      <h2>Margined Layout (Default)</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;DocsLayout&gt;
    &lt;template #header&gt;
      &lt;div class="font-bold"&gt;Margined Layout (Default)&lt;/div&gt;
    &lt;/template&gt;

    &lt;template #left-bar&gt;
      &lt;div&gt;Left Sidebar&lt;/div&gt;
    &lt;/template&gt;

    &lt;div&gt;
      Main Content Area (Maximum width constrained)
    &lt;/div&gt;

    &lt;template #right-bar&gt;
      &lt;div&gt;Right Sidebar&lt;/div&gt;
    &lt;/template&gt;
  &lt;/DocsLayout&gt;
&lt;/template&gt;</code></pre>
      <h2>Full Width Layout</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;DocsLayout variant="fullwidth"&gt;
    &lt;template #header&gt;
      &lt;div class="font-bold"&gt;Full Width Layout&lt;/div&gt;
    &lt;/template&gt;

    &lt;template #left-bar&gt;
      &lt;div&gt;Left Sidebar&lt;/div&gt;
    &lt;/template&gt;

    &lt;div&gt;
      Main Content Area (Full viewport width)
    &lt;/div&gt;

    &lt;template #right-bar&gt;
      &lt;div&gt;Right Sidebar&lt;/div&gt;
    &lt;/template&gt;
  &lt;/DocsLayout&gt;
&lt;/template&gt;</code></pre>
      <h2>Layout Behavior</h2>
      <p>The DocsLayout component has the following responsive behavior:</p>
      <ul>
        <li>**Mobile (&lt; 1024px)**: Only the header and main content are visible. Sidebars are hidden.</li>
        <li>**Large screens (≥ 1024px)**: The left sidebar becomes visible alongside the main content.</li>
        <li>**Extra large screens (≥ 1280px)**: Both left and right sidebars are visible.</li>
      </ul>
      <p>This progressive disclosure ensures good readability on all devices while showing additional navigation on larger screens where space permits.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Use the left sidebar for primary navigation through different sections of documentation</li>
        <li>Use the right sidebar for table of contents or contextual information related to the current page</li>
        <li>Place important global navigation in the header for access on all screen sizes</li>
        <li>Consider using the Prose component for text content in the main area to ensure proper typography</li>
        <li>For API documentation or reference materials, the "margined" variant provides better readability</li>
        <li>For visual documentation with examples, consider using the "fullwidth" variant to maximize space</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The header is properly positioned with <code>z-index</code> to ensure it's accessible when scrolling</li>
        <li>The layout uses semantic HTML elements (<code>header</code>, <code>aside</code>, <code>main</code>, <code>footer</code>) for proper document structure</li>
        <li>Sticky positioning ensures that navigation remains accessible throughout the page</li>
        <li>The component ensures proper color contrast between text and background colors</li>
        <li>Sidebars are responsive and don't interfere with content readability on smaller screens</li>
      </ul>
      <h2>Examples</h2>
      <h3>API Documentation Layout</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;DocsLayout&gt;
    &lt;template #header&gt;
      &lt;div class="font-bold text-xl"&gt;API Reference
        &lt;a href="#" class="text-primary-600 dark:text-primary-400"&gt;Guide&lt;/a&gt;
          &lt;a href="#" class="text-primary-600 dark:text-primary-400 font-medium"&gt;API&lt;/a&gt;
          &lt;a href="#" class="text-primary-600 dark:text-primary-400"&gt;Examples&lt;/a&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #left-bar&gt;
      &lt;!-- Navigation structure with sections --&gt;
    &lt;/template&gt;

    &lt;div class="prose dark:prose-invert max-w-none"&gt;
      &lt;!-- Main documentation content --&gt;
      &lt;h1&gt;API Reference&lt;/h1&gt;
      &lt;p&gt;Welcome to the API reference documentation...&lt;/p&gt;
    &lt;/div&gt;

    &lt;template #right-bar&gt;
      &lt;!-- Table of contents for current page --&gt;
    &lt;/template&gt;

    &lt;template #footer&gt;
      &lt;!-- Footer with copyright and links --&gt;
    &lt;/template&gt;
  &lt;/DocsLayout&gt;
&lt;/template&gt;</code></pre>
      <h3>Component Showcase Layout</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;DocsLayout variant="fullwidth"&gt;
    &lt;template #header&gt;
      &lt;!-- Header with component library title and theme toggles --&gt;
    &lt;/template&gt;

    &lt;template #left-bar&gt;
      &lt;!-- Component navigation --&gt;
    &lt;/template&gt;

    &lt;div&gt;
      &lt;!-- Component showcase with examples --&gt;
      &lt;h1 class="text-2xl font-bold mb-6"&gt;Card Component&lt;/h1&gt;
      &lt;!-- Various component examples --&gt;
    &lt;/div&gt;

    &lt;template #right-bar&gt;
      &lt;!-- Component API reference --&gt;
    &lt;/template&gt;
  &lt;/DocsLayout&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>