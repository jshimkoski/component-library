<template>
  <div class="content">
    <Prose>
      <h1>Menu</h1>
      <h2>Overview</h2>
      <p>The Menu component is a versatile dropdown menu system that provides a flexible foundation for creating context menus, navigation dropdowns, and action menus. It uses FloatingUI for positioning and supports nested menus, custom content, and various trigger options. The Menu component works seamlessly with MenuItem, MenuHeader, MenuContent, and MenuDivider components to create rich interactive experiences.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Actions"&gt;
    &lt;MenuItem label="Edit" /&gt;
    &lt;MenuItem label="Duplicate" /&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Archive" /&gt;
    &lt;MenuItem label="Delete" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the menu trigger button.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>nested</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether this menu is nested within another menu.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu trigger is disabled.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;bottom-start&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Positioning of the menu relative to the trigger.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>autoWidth</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu width should auto-adjust to content. Default width is 192px (w-48).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>parentMenuId</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ID of the parent menu for nested menu behavior.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <p>The Menu component doesn't emit custom events directly, but MenuItem components within it can emit click events.</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content of the menu. Typically contains MenuItem, MenuHeader, MenuContent, and MenuDivider components.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>content</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Alternative slot for custom menu content with access to menu state props: <code>isOpen</code>, <code>open</code>, <code>close</code>, <code>toggle</code>.</td>
          </tr>
        </tbody>
      </table>
      <h2>Nested Menus</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="File"&gt;
    &lt;MenuItem label="New" /&gt;
    &lt;MenuItem label="Open" /&gt;
    &lt;MenuDivider /&gt;
    &lt;Menu label="Export As" nested&gt;
      &lt;MenuItem label="PDF" /&gt;
      &lt;MenuItem label="Excel" /&gt;
      &lt;MenuItem label="CSV" /&gt;
    &lt;/Menu&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Menu with Custom Content</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="User Account" auto-width&gt;
    &lt;MenuHeader label="Account" /&gt;
    &lt;MenuContent&gt;
      &lt;Avatar src="https://i.pravatar.cc/32" size="sm" alt="John Doe" /&gt;
      &lt;div&gt;
        &lt;div&gt;John Doe&lt;/div&gt;
        &lt;div&gt;john.doe@example.com&lt;/div&gt;
      &lt;/div&gt;
    &lt;/MenuContent&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Profile Settings" /&gt;
    &lt;MenuItem label="Log Out" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Menu Placement Options</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Different placement options --&gt;
  &lt;Menu label="Top Start" placement="top-start"&gt;
    &lt;MenuItem label="Item 1" /&gt;
    &lt;MenuItem label="Item 2" /&gt;
  &lt;/Menu&gt;

  &lt;Menu label="Bottom End" placement="bottom-end"&gt;
    &lt;MenuItem label="Item 1" /&gt;
    &lt;MenuItem label="Item 2" /&gt;
  &lt;/Menu&gt;

  &lt;Menu label="Right Start" placement="right-start"&gt;
    &lt;MenuItem label="Item 1" /&gt;
    &lt;MenuItem label="Item 2" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled Menu</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Disabled Menu" disabled&gt;
    &lt;MenuItem label="Item 1" /&gt;
    &lt;MenuItem label="Item 2" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use MenuItem components for interactive menu options</li>
        <li>Use MenuDivider to visually separate related menu sections</li>
        <li>Use MenuHeader to provide section titles within complex menus</li>
        <li>Use MenuContent for custom content like user profiles or complex controls</li>
        <li>Keep menu labels concise and descriptive</li>
        <li>Use nested menus sparingly to avoid overwhelming users</li>
        <li>Consider using <code>autoWidth</code> for menus with varying content lengths</li>
        <li>Use appropriate placement values to ensure menus don't overflow the viewport</li>
      </ul>
      <h2>Examples</h2>
      <h3>Context Menu with Actions</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div @contextmenu.prevent="showContextMenu"&gt;
    Right-click me for context menu
    &lt;Menu v-if="contextMenuVisible" :style="contextMenuStyle"&gt;
      &lt;MenuItem label="Cut" @click="handleCut" /&gt;
      &lt;MenuItem label="Copy" @click="handleCopy" /&gt;
      &lt;MenuItem label="Paste" @click="handlePaste" /&gt;
      &lt;MenuDivider /&gt;
      &lt;MenuItem label="Delete" @click="handleDelete" /&gt;
    &lt;/Menu&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const contextMenuVisible = ref(false);
const contextMenuStyle = ref({});

function showContextMenu(event) {
  contextMenuVisible.value = true;
  contextMenuStyle.value = {
    position: 'fixed',
    left: `${event.clientX}px`,
    top: `${event.clientY}px`,
  };
}
&lt;/script&gt;</code></pre>
      <h3>Complex Nested Menu Structure</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Tools"&gt;
    &lt;MenuItem label="Text Editor" /&gt;
    &lt;MenuItem label="Code Editor" /&gt;
    &lt;MenuDivider /&gt;

    &lt;Menu label="Development" nested&gt;
      &lt;MenuItem label="Build Project" /&gt;
      &lt;MenuItem label="Run Tests" /&gt;
      &lt;MenuDivider /&gt;

      &lt;Menu label="Deploy" nested&gt;
        &lt;MenuItem label="Staging" /&gt;
        &lt;MenuItem label="Production" /&gt;
      &lt;/Menu&gt;
    &lt;/Menu&gt;

    &lt;Menu label="Database" nested&gt;
      &lt;MenuItem label="View Data" /&gt;
      &lt;MenuItem label="Run Query" /&gt;
      &lt;MenuItem label="Export Data" /&gt;
    &lt;/Menu&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>