<template>
  <div class="content">
    <Prose>
      <h1>Prose</h1>
      <h2>Overview</h2>
      <p>The Prose component provides consistent styling for rich text content. It's designed to make standard HTML elements like paragraphs, headings, lists, and blockquotes look great with minimal effort, making it ideal for blog posts, articles, documentation, or any long-form content.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Prose&gt;
    &lt;h2&gt;Getting Started&lt;/h2&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.&lt;/p&gt;
    &lt;p&gt;Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.&lt;/p&gt;
    &lt;h3&gt;Installation&lt;/h3&gt;
    &lt;ol&gt;
      &lt;li&gt;First step&lt;/li&gt;
      &lt;li&gt;Second step&lt;/li&gt;
      &lt;li&gt;Third step&lt;/li&gt;
    &lt;/ol&gt;
    &lt;blockquote&gt;
      &lt;p&gt;This is a blockquote with properly indented margins for readability.&lt;/p&gt;
    &lt;/blockquote&gt;
  &lt;/Prose&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to be styled with prose formatting.</td>
          </tr>
        </tbody>
      </table>
      <h2>Different Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Prose kind="primary"&gt;
    &lt;h3&gt;Primary Prose&lt;/h3&gt;
    &lt;p&gt;This prose uses the primary color for links and accents. &lt;a href="#"&gt;Example link&lt;/a&gt;.&lt;/p&gt;
  &lt;/Prose&gt;

  &lt;Prose kind="secondary"&gt;
    &lt;h3&gt;Secondary Prose&lt;/h3&gt;
    &lt;p&gt;This prose uses the secondary color for links and accents. &lt;a href="#"&gt;Example link&lt;/a&gt;.&lt;/p&gt;
  &lt;/Prose&gt;

  &lt;!-- And so on for other kinds --&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use Prose for content-heavy sections like blog posts, documentation, or articles</li>
        <li>Choose the appropriate color kind based on the context:</li>
        <li><code>primary</code>: Default for most content</li>
        <li><code>secondary</code>: For less emphasized content</li>
        <li><code>success</code>: For content about successful processes or positive results</li>
        <li><code>info</code>: For informational or educational content</li>
        <li><code>warning</code>: For content containing warnings or cautions</li>
        <li><code>danger</code>: For content about errors or dangerous actions</li>
        <li>Keep standard HTML semantics in your content (headings, paragraphs, lists, etc.)</li>
        <li>Avoid overriding Prose component styles directly; use slots for custom-styled content</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The Prose component maintains proper heading hierarchy, important for screen reader navigation</li>
        <li>Ensures sufficient text contrast for readability</li>
        <li>Maintains proper spacing for content readability</li>
        <li>Preserves semantic HTML structure, enhancing accessibility for assistive technologies</li>
      </ul>
      <h2>Examples</h2>
      <h3>Article Layout</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Prose&gt;
    &lt;h1&gt;How to Use the Component Library&lt;/h1&gt;
    &lt;p class="lead"&gt;A comprehensive guide to using our component library effectively in your projects.&lt;/p&gt;

    &lt;h2&gt;Introduction&lt;/h2&gt;
    &lt;p&gt;This component library provides a set of reusable UI components designed to help you build consistent interfaces quickly and efficiently.&lt;/p&gt;

    &lt;!-- Additional content... --&gt;
  &lt;/Prose&gt;
&lt;/template&gt;</code></pre>
      <h3>Documentation with Code Examples</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Prose kind="info"&gt;
    &lt;h2&gt;API Documentation&lt;/h2&gt;

    &lt;h3&gt;Authentication&lt;/h3&gt;
    &lt;p&gt;To authenticate with the API, you'll need to include an authorization header with your requests:&lt;/p&gt;

    &lt;pre&gt;&lt;code&gt;fetch('https://api.example.com/data', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  })&lt;/code&gt;&lt;/pre&gt;

    &lt;!-- Additional content... --&gt;
  &lt;/Prose&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>