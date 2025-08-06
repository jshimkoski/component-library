<template>
  <div class="content">
    <Prose>
      <h1>Tree</h1>
      <p>A hierarchical tree component for displaying nested navigation items with expandable/collapsible sections. The Tree component is ideal for representing file systems, site navigation, categories, or any data that has a nested structure. For parent items without specific actions, the entire heading acts as an expand/collapse toggle for better usability.</p>
      <h2>Overview</h2>
      <p>The Tree component offers a flexible way to display hierarchical data in a tree structure. It supports:</p>
      <ul>
        <li>Nested navigation items with expand/collapse functionality</li>
        <li>Custom icons or no icons</li>
        <li>Positioning of expand/collapse controls on either left or right side</li>
        <li>Automatic expand/collapse behavior when clicking parent items that don't have links</li>
        <li>Events for node click, expansion, and collapse operations</li>
        <li>Default expansion of specified nodes</li>
      </ul>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items" @node-click="handleNodeClick" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Tree } from 'your-component-library';

const items = [
  {
    id: "home",
    label: "Home"
  },
  {
    id: "docs",
    label: "Documentation",
    children: [
      {
        id: "getting-started",
        label: "Getting Started"
      },
      {
        id: "api",
        label: "API Reference"
      }
    ]
  }
];

function handleNodeClick(node) {
  console.log(`Clicked on: ${node.label}`);
}
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>items</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Array</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of tree items. Each item should have an <code>id</code>, <code>label</code> and optional <code>children</code> array.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>defaultExpandAll</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to expand all tree nodes by default.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>defaultExpandedKeys</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Array</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of item IDs that should be expanded by default.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>hideIcons</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to hide file/folder icons next to items.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node-click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node: Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a node is clicked.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node-expanded</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node: Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a node is expanded.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node-collapsed</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>node: Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a node is collapsed.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for each tree node. Slot props: <code>item</code>, <code>level</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for each tree node. Slot props: <code>item</code>, <code>level</code>.</td>
          </tr>
        </tbody>
      </table>
      <h2>Variants</h2>
      <h3>With Custom Icons</h3>
      <p>You can customize the icons displayed for each node using the <code>icon</code> slot:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items"&gt;
    &lt;template #icon="{ item }"&gt;
      &lt;div class="w-5 h-5 flex items-center justify-center"&gt;
        &lt;svg v-if="item.type === 'folder'" class="w-4 h-4" viewBox="0 0 24 24"&gt;
          &lt;!-- Custom folder icon SVG path --&gt;
        &lt;/svg&gt;
        &lt;svg v-else-if="item.type === 'file'" class="w-4 h-4" viewBox="0 0 24 24"&gt;
          &lt;!-- Custom file icon SVG path --&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Tree&gt;
&lt;/template&gt;</code></pre>
      <h3>Without Icons</h3>
      <p>If you prefer a more minimal look or want to save horizontal space, you can disable the default icons:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items" :show-icons="false" /&gt;
&lt;/template&gt;</code></pre>
      <h3>Right Controls</h3>
      <p>You can position the expand/collapse controls on the right side of each node:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items" controls-position="right" /&gt;
&lt;/template&gt;</code></pre>
      <h3>Default Expanded Nodes</h3>
      <p>You can specify which nodes should be expanded by default using their IDs:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items" :default-expanded-keys="['docs', 'components']" /&gt;
&lt;/template&gt;</code></pre>
      <h3>Expand All Nodes</h3>
      <p>To expand all nodes by default:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tree :items="items" :default-expand-all="true" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>**Unique IDs**: Ensure each item has a unique ID to properly track expansion state</li>
        <li>**Hierarchical Structure**: Keep the nesting logical and not too deep - deep nesting can make navigation difficult</li>
        <li>**Visual Distinction**: Add visual cues to distinguish between different levels</li>
        <li>**Appropriate Labels**: Use concise, clear labels for tree items</li>
        <li>**Icon Usage**: Use icons that clearly communicate the item type or purpose</li>
        <li>**Keyboard Navigation**: The component supports keyboard navigation for accessibility</li>
        <li>**Action vs Navigation**: For parent items that should only expand/collapse, don't specify a <code>to</code>, <code>href</code>, or other action properties</li>
      </ul>
      <h2>Accessibility</h2>
      <ul>
        <li>The component uses proper ARIA attributes for tree structure</li>
        <li>Expand/collapse controls are properly labeled for screen readers</li>
        <li>Keyboard navigation is supported</li>
        <li>Focus states are visible for keyboard users</li>
      </ul>
      <h2>Data Structure</h2>
      <p>The Tree component expects the data to be in the following format:</p>
      <pre><code class="language-js">const items = [
  {
    id: "unique-id-1",     // Required: Unique identifier
    label: "Item Label",   // Required: Display text
    children: [            // Optional: Nested items
      {
        id: "child-id-1",
        label: "Child Item",
        children: [...]    // Can be nested further
      }
    ],
    // For items that should navigate or perform actions:
    to: "/path",           // Optional: Router path (if using vue-router)
    href: "https://...",   // Optional: Direct URL (renders as &lt;a&gt; tag)
    action: function(){},  // Optional: Custom action to perform
    // You can include any other properties to use in custom rendering
    type: "folder",        // Optional: Can be used for custom icon rendering
    // ...other custom properties
  }
]</code></pre>
      <h2>Implementation Example</h2>
      <p>Here's an example of a file system navigator implemented with Tree:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div class="file-explorer p-4 border rounded-lg"&gt;
    &lt;h3 class="text-lg font-medium mb-4"&gt;Project Files&lt;/h3&gt;
    &lt;Tree
      :items="fileItems"
      @node-click="onFileClick"
      @node-expanded="onFolderOpen"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Tree } from 'your-component-library';
import { ref } from 'vue';

const fileItems = ref([
  {
    id: "src",
    label: "src",
    type: "folder",
    children: [
      {
        id: "components",
        label: "components",
        type: "folder",
        children: [
          {
            id: "Tree.vue",
            label: "Tree.vue",
            type: "file"
          },
          {
            id: "TreeItem.vue",
            label: "TreeItem.vue",
            type: "file"
          }
        ]
      },
      {
        id: "App.vue",
        label: "App.vue",
        type: "file"
      }
    ]
  },
  {
    id: "package.json",
    label: "package.json",
    type: "file"
  }
]);

function onFileClick(node) {
  if (node.type === 'file') {
    // Handle file click
    console.log(`Opening file: ${node.label}`);
    // If a node has children but no specific action, clicking will toggle expand/collapse
  }
}

function onFolderOpen(node) {
  if (node.type === 'folder') {
    // Handle folder open, e.g., fetch contents
    console.log(`Loading contents of folder: ${node.label}`);
  }
}
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>