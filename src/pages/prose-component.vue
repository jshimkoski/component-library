<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Prose</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Prose component provides consistent styling for rich text content. It's designed to make standard HTML elements like paragraphs, headings, lists, and blockquotes look great with minimal effort, making it ideal for blog posts, articles, documentation, or any long-form content.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
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

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
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
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot; | &amp;quot;secondary&amp;quot; | &amp;quot;success&amp;quot; | &amp;quot;info&amp;quot; | &amp;quot;warning&amp;quot; | &amp;quot;danger&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Color theme for the prose content, affecting links and certain elements.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
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
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Different Kinds</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Prose kind="primary">
        <h3>Primary Prose</h3>
        <p>This prose uses the primary color for links and accents. <a href="#">Example link</a>.</p>
        </Prose>
        <Prose kind="secondary">
        <h3>Secondary Prose</h3>
        <p>This prose uses the secondary color for links and accents. <a href="#">Example link</a>.</p>
        </Prose>
        <!-- And so on for other kinds -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
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
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The Prose component maintains proper heading hierarchy, important for screen reader navigation</li>
          <li>Ensures sufficient text contrast for readability</li>
          <li>Maintains proper spacing for content readability</li>
          <li>Preserves semantic HTML structure, enhancing accessibility for assistive technologies</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Article Layout</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Prose&gt;
    &lt;h1&gt;How to Use the Component Library&lt;/h1&gt;
    &lt;p class="lead"&gt;A comprehensive guide to using our component library effectively in your projects.&lt;/p&gt;

    &lt;h2&gt;Introduction&lt;/h2&gt;
    &lt;p&gt;This component library provides a set of reusable UI components designed to help you build consistent interfaces quickly and efficiently.&lt;/p&gt;

    &lt;!-- Additional content... --&gt;
  &lt;/Prose&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Documentation with Code Examples</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>