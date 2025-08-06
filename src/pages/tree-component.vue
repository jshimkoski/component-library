<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Tree</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Tree component offers a flexible way to display hierarchical data in a tree structure. It supports:</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="items" @node-click="handleNodeClick" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>activeItemId</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String | Number | null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ID of the currently active/selected tree item.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for each tree node. Slot props: <code>item</code>, <code>level</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for each tree node. Slot props: <code>item</code>, <code>level</code>.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">With Custom Icons</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Without Icons</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="items" :show-icons="false" /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Right Controls</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="items" controls-position="right" /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Default Expanded Nodes</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="items" :default-expanded-keys="['docs', 'components']" /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Expand All Nodes</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="items" :default-expand-all="true" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>**Unique IDs**: Ensure each item has a unique ID to properly track expansion state</li>
          <li>**Hierarchical Structure**: Keep the nesting logical and not too deep - deep nesting can make navigation difficult</li>
          <li>**Visual Distinction**: Add visual cues to distinguish between different levels</li>
          <li>**Appropriate Labels**: Use concise, clear labels for tree items</li>
          <li>**Icon Usage**: Use icons that clearly communicate the item type or purpose</li>
          <li>**Keyboard Navigation**: The component supports keyboard navigation for accessibility</li>
          <li>**Action vs Navigation**: For parent items that should only expand/collapse, don't specify a <code>to</code>, <code>href</code>, or other action properties</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility</h2>
      <p>- The component uses proper ARIA attributes for tree structure
- Expand/collapse controls are proper...</p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Data Structure</h2>
      
      <Prose>
        <p>The Tree component expects the data to be in the following format:</p>
        <p>const items = [</p>
        <p>{</p>
        <p>id: "unique-id-1",     // Required: Unique identifier</p>
        <p>label: "Item Label",   // Required: Display text</p>
        <p>children: [            // Optional: Nested items</p>
        <p>{</p>
        <p>id: "child-id-1",</p>
        <p>label: "Child Item",</p>
        <p>children: [...]    // Can be nested further</p>
        <p>}</p>
        <p>],</p>
        <p>// For items that should navigate or perform actions:</p>
        <p>to: "/path",           // Optional: Router path (if using vue-router)</p>
        <p>href: "https://...",   // Optional: Direct URL (renders as <a> tag)</p>
        <p>action: function(){},  // Optional: Custom action to perform</p>
        <p>// You can include any other properties to use in custom rendering</p>
        <p>type: "folder",        // Optional: Can be used for custom icon rendering</p>
        <p>// ...other custom properties</p>
        <p>}</p>
        <p>]</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Implementation Example</h2>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
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
]);
</script>