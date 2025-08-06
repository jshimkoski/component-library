<template>
  <div class="content">
    <Prose>
      <h1>Action</h1>
      <h2>Overview</h2>
      <p>The Action component is a versatile interactive element that can be rendered as either a button or an anchor tag. It provides consistent styling options across the application while supporting various states, sizes, and visual variants.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action label="Click me" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Icon name from Iconify to display in the action.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content for the action.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>iconOnly</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, visually hides the label but keeps it accessible for screen readers.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for anchor tag. When provided, renders as <code>&lt;a&gt;</code> instead of <code>&lt;button&gt;</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for anchor tag (e.g., &quot;_blank&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for anchor tag.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Disables the action.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>active</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Applies active state styling.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>type</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;button&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Button type attribute (&quot;button&quot;, &quot;submit&quot;, &quot;reset&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>square</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Makes the action square-shaped with equal padding on all sides.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the action is clicked.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content of the action. Receives <code>label</code> prop as a slot prop.</td>
          </tr>
        </tbody>
      </table>
      <h2>Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action kind="primary"&gt;Primary&lt;/Action&gt;
  &lt;Action kind="secondary"&gt;Secondary&lt;/Action&gt;
  &lt;Action kind="success"&gt;Success&lt;/Action&gt;
  &lt;Action kind="info"&gt;Info&lt;/Action&gt;
  &lt;Action kind="warning"&gt;Warning&lt;/Action&gt;
  &lt;Action kind="danger"&gt;Danger&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h2>Visual Variants</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action kind="primary" variant="solid"&gt;Solid&lt;/Action&gt;
  &lt;Action kind="primary" variant="outline"&gt;Outline&lt;/Action&gt;
  &lt;Action kind="primary" variant="ghost"&gt;Ghost&lt;/Action&gt;
  &lt;Action kind="primary" variant="link"&gt;Link&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h2>Sizes</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action size="xs"&gt;Extra Small&lt;/Action&gt;
  &lt;Action size="sm"&gt;Small&lt;/Action&gt;
  &lt;Action size="md"&gt;Medium&lt;/Action&gt;
  &lt;Action size="lg"&gt;Large&lt;/Action&gt;
  &lt;Action size="xl"&gt;Extra Large&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h2>Square Actions</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action square size="md" icon="material-symbols:check" /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action disabled&gt;Disabled Button&lt;/Action&gt;
  &lt;Action disabled kind="primary" variant="solid"&gt;Disabled Primary&lt;/Action&gt;
  &lt;Action disabled kind="danger" variant="outline"&gt;Disabled Outline&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h3>Active</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action active&gt;Active Default&lt;/Action&gt;
  &lt;Action active activeKind="primary"&gt;Active Primary&lt;/Action&gt;
  &lt;Action active activeKind="success"&gt;Active Success&lt;/Action&gt;
  &lt;Action active activeKind="danger"&gt;Active Danger&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h2>Link Actions</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action href="#" target="_blank"&gt;Link Button&lt;/Action&gt;
  &lt;Action href="#" kind="primary" variant="solid"&gt;Primary Link&lt;/Action&gt;
  &lt;Action href="#" kind="info" variant="link"&gt;Info Link Style&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use the appropriate <code>kind</code> to convey the purpose of the action (e.g., <code>danger</code> for destructive actions)</li>
        <li>Choose the appropriate <code>variant</code> based on visual prominence needed:</li>
        <li><code>solid</code>: Primary actions with high emphasis</li>
        <li><code>outline</code>: Secondary actions with medium emphasis</li>
        <li><code>ghost</code>: Tertiary actions with low emphasis</li>
        <li><code>link</code>: Text-only actions for minimal emphasis</li>
        <li>Use the <code>square</code> prop when incorporating icons without text to maintain equal dimensions</li>
        <li>Ensure sufficient contrast between text and background colors</li>
        <li>Include descriptive text or aria-labels for icon-only buttons</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>When using icon-only actions, provide an accessible name either via the <code>label</code> prop or an <code>aria-label</code> attribute</li>
        <li>Focus states are visible for keyboard navigation</li>
        <li>The component ensures appropriate attributes are set based on the rendered element type (button or anchor)</li>
        <li>Disabled actions have appropriate visual styling and ARIA attributes</li>
      </ul>
      <h2>Examples</h2>
      <h3>Button Group</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action kind="primary"&gt;Save&lt;/Action&gt;
  &lt;Action variant="outline"&gt;Cancel&lt;/Action&gt;
&lt;/template&gt;</code></pre>
      <h3>Icon with Text</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Action
    kind="primary"
    icon="material-symbols:save"
    label="Save"
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Form Submit Button</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;form @submit.prevent="submitForm"&gt;
    &lt;Input v-model="email" type="email" label="Email" /&gt;
    &lt;div&gt;
      &lt;Action type="submit" kind="primary" size="lg"&gt;Sign In&lt;/Action&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>