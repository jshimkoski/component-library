<template>
  <div class="content">
    <Prose>
      <h1>Menu Item</h1>
      <h2>Overview</h2>
      <p>The MenuItem component represents an individual interactive item within a Menu. It can function as a clickable action, a navigation link, or a trigger for nested menus. MenuItem supports various states including disabled and active, and can contain custom content through slots.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Actions"&gt;
    &lt;MenuItem label="Edit Document" /&gt;
    &lt;MenuItem label="Share" /&gt;
    &lt;MenuItem label="Download" /&gt;
  &lt;/Menu&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the menu item.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for link behavior. When provided, renders as anchor tag.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for links (e.g., &quot;_blank&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for links (e.g., &quot;noopener noreferrer&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu item is disabled.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>active</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu item appears in active state.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the menu item is clicked (only for button behavior).</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the menu item. Overrides the label prop.</td>
          </tr>
        </tbody>
      </table>
      <h2>Menu Items with Actions</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Document Actions"&gt;
    &lt;MenuItem label="Edit" @click="handleEdit" /&gt;
    &lt;MenuItem label="Duplicate" @click="handleDuplicate" /&gt;
    &lt;MenuItem label="Move to Trash" @click="handleDelete" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;

&lt;script setup&gt;
function handleEdit() {
  console.log('Edit clicked');
}

function handleDuplicate() {
  console.log('Duplicate clicked');
}

function handleDelete() {
  console.log('Delete clicked');
}
&lt;/script&gt;</code></pre>
      <h2>Menu Items as Links</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Navigation"&gt;
    &lt;MenuItem label="Home" href="/" /&gt;
    &lt;MenuItem label="About" href="/about" /&gt;
    &lt;MenuItem label="Contact" href="/contact" /&gt;
    &lt;MenuItem 
      label="External Link" 
      href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
    /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Menu Items with Custom Content</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="User Options"&gt;
    &lt;MenuItem&gt;
      &lt;div class="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center"&gt;
          ✓
        &lt;span&gt;Mark as Complete&lt;/span&gt;
      &lt;/div&gt;
    &lt;/MenuItem&gt;
    &lt;MenuItem&gt;
      &lt;div class="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center"&gt;
          !
        &lt;span&gt;Flag as Important&lt;/span&gt;
      &lt;/div&gt;
    &lt;/MenuItem&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled Menu Items</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Mixed States"&gt;
    &lt;MenuItem label="Available Action" /&gt;
    &lt;MenuItem label="Disabled Action" disabled /&gt;
    &lt;MenuItem label="Active Action" active /&gt;
    &lt;MenuItem label="Disabled Link" href="/disabled" disabled /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Keep menu item labels concise and action-oriented</li>
        <li>Use consistent terminology throughout your application</li>
        <li>Group related actions together using MenuDivider</li>
        <li>Use disabled state for actions that are temporarily unavailable</li>
        <li>Use active state to indicate the current selection or state</li>
        <li>When using href, always provide appropriate target and rel attributes for external links</li>
        <li>Use custom content sparingly to maintain menu consistency</li>
        <li>Provide clear visual feedback for interactive states (hover, focus, active)</li>
      </ul>
      <h2>Examples</h2>
      <h3>Conditional Menu Items</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Actions"&gt;
    &lt;MenuItem v-if="canEdit" label="Edit" @click="handleEdit" /&gt;
    &lt;MenuItem v-if="canDelete" label="Delete" @click="handleDelete" /&gt;
    &lt;MenuItem v-if="!isLoggedIn" label="Login" href="/login" /&gt;
    &lt;MenuItem v-else label="Logout" @click="handleLogout" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;

&lt;script setup&gt;
const canEdit = ref(true);
const canDelete = ref(false);
const isLoggedIn = ref(true);
&lt;/script&gt;</code></pre>
      <h3>Menu Item with Keyboard Shortcuts</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Edit"&gt;
    &lt;MenuItem @click="undo"&gt;
      &lt;span&gt;Undo&lt;/span&gt;
        &lt;kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded"&gt;⌘Z&lt;/kbd&gt;
    &lt;/MenuItem&gt;

    &lt;MenuItem @click="redo"&gt;
      &lt;span&gt;Redo&lt;/span&gt;
        &lt;kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded"&gt;⌘⇧Z&lt;/kbd&gt;
    &lt;/MenuItem&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>