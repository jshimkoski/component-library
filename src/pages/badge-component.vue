<template>
  <div class="content">
    <Prose>
      <h1>Badge</h1>
      <h2>Overview</h2>
      <p>The Badge component is a small visual indicator typically used to highlight status, notify counts, or draw attention to specific elements within a user interface. It's designed to be compact, distinctive, and immediately noticeable.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Badge label="New" /&gt;
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
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content to display in the badge. When undefined, renders as a small dot.</td>
          </tr>
        </tbody>
      </table>
      <h2>Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Badge label="Primary" kind="primary" /&gt;
  &lt;Badge label="Secondary" kind="secondary" /&gt;
  &lt;Badge label="Success" kind="success" /&gt;
  &lt;Badge label="Info" kind="info" /&gt;
  &lt;Badge label="Warning" kind="warning" /&gt;
  &lt;Badge label="Danger" kind="danger" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Dot Variant (No Label)</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Badge kind="primary" /&gt;
  &lt;Badge kind="secondary" /&gt;
  &lt;Badge kind="success" /&gt;
  &lt;Badge kind="info" /&gt;
  &lt;Badge kind="warning" /&gt;
  &lt;Badge kind="danger" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use badges sparingly to avoid visual clutter</li>
        <li>Choose an appropriate <code>kind</code> to align with the information being conveyed:</li>
        <li><code>primary</code>: For general highlights or main features</li>
        <li><code>secondary</code>: For less prominent highlights</li>
        <li><code>success</code>: For positive status or completed actions</li>
        <li><code>info</code>: For informational or neutral status</li>
        <li><code>warning</code>: For alerts that need attention but aren't critical</li>
        <li><code>danger</code>: For errors, alerts, or critical information</li>
        <li>Keep label text concise (ideally 1-3 characters or a very short word)</li>
        <li>For numeric badges showing counts, consider truncating large numbers (e.g., "99+" instead of "145")</li>
        <li>Place badges close to the elements they relate to for clear association</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Badges are set as <code>pointer-events-none</code> to ensure they don't interfere with the interaction of their parent elements</li>
        <li>When using badge dots (without labels), ensure the parent element has appropriate aria attributes for screen readers</li>
        <li>The small text size may be difficult for some users to read, so don't rely solely on badge text for critical information</li>
        <li>Ensure sufficient contrast between badge color and text</li>
      </ul>
      <h2>Examples</h2>
      <h3>Notification Badge</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action icon="material-symbols:notifications"&gt;
    &lt;Badge label="5" kind="danger" /&gt;
  &lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h3>Status Indicators</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Badge kind="success" /&gt; Online
  &lt;Badge kind="warning" /&gt; Away  
  &lt;Badge kind="danger" /&gt; Offline
&lt;/template&gt;</code></pre>
      <h3>Feature Tags</h3>
      <pre><code class="language-vue">&lt;template&gt;
  Enhanced Security &lt;Badge label="New" kind="primary" /&gt;
  Dark Mode &lt;Badge label="Beta" kind="info" /&gt;
  Legacy Integration &lt;Badge label="Deprecated" kind="warning" /&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>