<template>
  <div class="content">
    <Prose>
      <h1>Tooltip</h1>
      <h2>Overview</h2>
      <p>The Tooltip component provides a way to display additional information when users hover over or interact with an element. Tooltips are useful for providing context, explanations, or extra details without cluttering the interface.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tooltip text="This is a simple tooltip"&gt;
    &lt;Action&gt;Hover me&lt;/Action&gt;
  &lt;/Tooltip&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The text content to display in the tooltip.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;top&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Position of the tooltip relative to the trigger element. Possible values include &quot;top&quot;, &quot;bottom&quot;, &quot;left&quot;, &quot;right&quot;, etc.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>open</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean (v-model)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">-</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Controls whether the tooltip is visible. Can be bound with v-model:open.</td>
          </tr>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The triggering element that will show the tooltip on hover. Provides access to open state and toggle function.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the tooltip. Falls back to the <code>text</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
      <h2>Rich Tooltip</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tooltip type="rich" placement="bottom"&gt;
    &lt;Action&gt;Hover for rich tooltip&lt;/Action&gt;
    &lt;template #text&gt;
      &lt;h3&gt;Custom tooltip&lt;/h3&gt;
      &lt;p&gt;This is a rich tooltip with custom content&lt;/p&gt;
    &lt;/template&gt;
  &lt;/Tooltip&gt;
&lt;/template&gt;</code></pre>
      <h2>Different Placements</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tooltip text="Placed on top" placement="top"&gt;
    &lt;Action&gt;Top&lt;/Action&gt;
  &lt;/Tooltip&gt;

  &lt;Tooltip text="Placed on bottom" placement="bottom"&gt;
    &lt;Action&gt;Bottom&lt;/Action&gt;
  &lt;/Tooltip&gt;

  &lt;Tooltip text="Placed on left" placement="left"&gt;
    &lt;Action&gt;Left&lt;/Action&gt;
  &lt;/Tooltip&gt;

  &lt;Tooltip text="Placed on right" placement="right"&gt;
    &lt;Action&gt;Right&lt;/Action&gt;
  &lt;/Tooltip&gt;
&lt;/template&gt;</code></pre>
      <h2>Programmatic Control</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
  const tooltipOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Tooltip v-model:open="tooltipOpen" text="This tooltip is controlled programmatically"&gt;
    &lt;Action @click="tooltipOpen = !tooltipOpen"&gt;
      Click to toggle tooltip
    &lt;/Action&gt;
  &lt;/Tooltip&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use tooltips for supplementary information that doesn't need to be visible all the time</li>
        <li>Keep tooltip content brief and to the point</li>
        <li>Use "plain" tooltips for simple text hints and "rich" tooltips for more complex content</li>
        <li>Ensure that critical information is not solely contained in tooltips, as they may not be accessible on all devices</li>
        <li>Consider the placement carefully to avoid obscuring other important content</li>
        <li>For interactive content within tooltips, use the "rich" type to provide the hover delay when leaving the trigger</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Tooltip content should be perceivable by all users, including those using screen readers</li>
        <li>Consider adding aria-label or aria-labelledby to the triggering element to provide an accessible name</li>
        <li>The component uses hover detection which may not be available on touchscreen devices, so ensure critical information is accessible through other means</li>
      </ul>
      <h2>Examples</h2>
      <h3>Tooltip in a Form Context</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;label&gt;Username&lt;/label&gt;
  &lt;Tooltip type="rich" placement="right"&gt;
    &lt;Action size="sm" variant="ghost"&gt;?&lt;/Action&gt;
    &lt;template #text&gt;
      &lt;p&gt;Choose a username that is:&lt;/p&gt;
      &lt;ul&gt;
        &lt;li&gt;Between 3-20 characters&lt;/li&gt;
        &lt;li&gt;Contains only letters, numbers, and underscores&lt;/li&gt;
        &lt;li&gt;Not already taken by another user&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/template&gt;
  &lt;/Tooltip&gt;
  &lt;TextField /&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>