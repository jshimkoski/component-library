<template>
  <div class="content">
    <Prose>
      <h1>Chip</h1>
      <h2>Overview</h2>
      <p>The Chip component displays compact information elements or interactive labels. Chips are commonly used for categories, tags, filters, or contact information, allowing users to scan and select options quickly.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="New Feature" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content displayed in the chip.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for the chip when used as a link.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for the link (e.g., &quot;_blank&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for the link.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the chip is disabled and not interactive.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>active</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, indicates the chip is in an active state.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Parameters</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: MouseEvent)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the chip is clicked.</td>
          </tr>
        </tbody>
      </table>
      <h2>Different Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="Primary" kind="primary" /&gt;
  &lt;Chip label="Secondary" kind="secondary" /&gt;
  &lt;Chip label="Success" kind="success" /&gt;
  &lt;Chip label="Info" kind="info" /&gt;
  &lt;Chip label="Warning" kind="warning" /&gt;
  &lt;Chip label="Danger" kind="danger" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Interactive Chips (Button)</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="Click me" @click="handleClick" /&gt;
  &lt;Chip label="Submit" type="submit" kind="success" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Link Chips</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="Documentation" href="#" /&gt;
  &lt;Chip label="External Link" href="#" target="_blank" rel="noopener" kind="info" /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="Disabled" disabled /&gt;
  &lt;Chip label="Disabled Link" href="#" disabled kind="secondary" /&gt;
&lt;/template&gt;</code></pre>
      <h3>Active</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Chip label="Active" active /&gt;
  &lt;Chip label="Active Warning" active kind="warning" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Keep text concise, ideally 1-2 words</li>
        <li>Use colors consistently to represent meaning across your application</li>
        <li>Choose appropriate colors based on the context:</li>
        <li><code>primary</code>: For main features or functionality</li>
        <li><code>secondary</code>: For less emphasized options</li>
        <li><code>success</code>: For confirmation or positive indicators</li>
        <li><code>info</code>: For informational or neutral indicators</li>
        <li><code>warning</code>: For caution or attention-requiring features</li>
        <li><code>danger</code>: For error states or destructive actions</li>
        <li>For interactive chips, ensure sufficient touch target size</li>
        <li>Group related chips together for better usability</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Interactive chips (buttons/links) have appropriate focus states</li>
        <li>Disabled chips have proper ARIA attributes</li>
        <li>When using chips for filtering or selection, consider including state information (e.g., "selected" or "active")</li>
        <li>Ensure color is not the only means of conveying information</li>
      </ul>
      <h2>Examples</h2>
      <h3>Category Tags</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div class="mb-2"&gt;Product Categories:&lt;/div&gt;
  &lt;Chip 
    v-for="category in categories" 
    :key="category.id"
    :label="category.name"
    :kind="category.kind"
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Filter Selection</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const activeFilter = ref('all');

function setFilter(filter) {
  activeFilter.value = filter;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="mb-2"&gt;Filter by:&lt;/div&gt;
  &lt;Chip 
    label="All" 
    :active="activeFilter === 'all'"
    @click="setFilter('all')"
  /&gt;

  &lt;Chip 
    label="Recent" 
    :active="activeFilter === 'recent'"
    @click="setFilter('recent')"
  /&gt;

  &lt;Chip 
    label="Popular" 
    :active="activeFilter === 'popular'"
    @click="setFilter('popular')"
  /&gt;

  &lt;Chip 
    label="Trending" 
    :active="activeFilter === 'trending'"
    @click="setFilter('trending')"
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Status Indicators</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div v-for="order in orders" :key="order.id" class="flex items-center"&gt;
      Order #&#123;&#123; order.id &#125;&#125;:
      &lt;Chip 
        :label="order.status" 
        :kind="getStatusKind(order.status)" 
      /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>