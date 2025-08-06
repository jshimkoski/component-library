# Tree

A hierarchical tree component for displaying nested navigation items with expandable/collapsible sections. The Tree component is ideal for representing file systems, site navigation, categories, or any data that has a nested structure. For parent items without specific actions, the entire heading acts as an expand/collapse toggle for better usability.

## Overview

The Tree component offers a flexible way to display hierarchical data in a tree structure. It supports:
- Nested navigation items with expand/collapse functionality
- Custom icons or no icons
- Positioning of expand/collapse controls on either left or right side
- Automatic expand/collapse behavior when clicking parent items that don't have links
- Events for node click, expansion, and collapse operations
- Default expansion of specified nodes

## Basic Usage

```vue
<template>
  <Tree :items="items" @node-click="handleNodeClick" />
</template>

<script setup>
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
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | Array of tree items. Each item should have an `id`, `label` and optional `children` array. |
| `defaultExpandAll` | `Boolean` | `false` | Whether to expand all tree nodes by default. |
| `defaultExpandedKeys` | `Array` | `[]` | Array of item IDs that should be expanded by default. |
| `hideIcons` | `Boolean` | `false` | Whether to hide file/folder icons next to items. |
| `activeItemId` | `String \| Number \| null` | `null` | ID of the currently active/selected tree item. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `node-click` | `node: Object` | Emitted when a node is clicked. |
| `node-expanded` | `node: Object` | Emitted when a node is expanded. |
| `node-collapsed` | `node: Object` | Emitted when a node is collapsed. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Custom content for each tree node. Slot props: `item`, `level`. |
| `icon` | Custom icon for each tree node. Slot props: `item`, `level`. |

## Variants

### With Custom Icons

You can customize the icons displayed for each node using the `icon` slot:

```vue
<template>
  <Tree :items="items">
    <template #icon="{ item }">
      <div class="w-5 h-5 flex items-center justify-center">
        <svg v-if="item.type === 'folder'" class="w-4 h-4" viewBox="0 0 24 24">
          <!-- Custom folder icon SVG path -->
        </svg>
        <svg v-else-if="item.type === 'file'" class="w-4 h-4" viewBox="0 0 24 24">
          <!-- Custom file icon SVG path -->
        </svg>
      </div>
    </template>
  </Tree>
</template>
```

### Without Icons

If you prefer a more minimal look or want to save horizontal space, you can disable the default icons:

```vue
<template>
  <Tree :items="items" :show-icons="false" />
</template>
```

### Right Controls

You can position the expand/collapse controls on the right side of each node:

```vue
<template>
  <Tree :items="items" controls-position="right" />
</template>
```

### Default Expanded Nodes

You can specify which nodes should be expanded by default using their IDs:

```vue
<template>
  <Tree :items="items" :default-expanded-keys="['docs', 'components']" />
</template>
```

### Expand All Nodes

To expand all nodes by default:

```vue
<template>
  <Tree :items="items" :default-expand-all="true" />
</template>
```

## Best Practices

- **Unique IDs**: Ensure each item has a unique ID to properly track expansion state
- **Hierarchical Structure**: Keep the nesting logical and not too deep - deep nesting can make navigation difficult
- **Visual Distinction**: Add visual cues to distinguish between different levels
- **Appropriate Labels**: Use concise, clear labels for tree items
- **Icon Usage**: Use icons that clearly communicate the item type or purpose
- **Keyboard Navigation**: The component supports keyboard navigation for accessibility
- **Action vs Navigation**: For parent items that should only expand/collapse, don't specify a `to`, `href`, or other action properties

## Accessibility

- The component uses proper ARIA attributes for tree structure
- Expand/collapse controls are properly labeled for screen readers
- Keyboard navigation is supported
- Focus states are visible for keyboard users

## Data Structure

The Tree component expects the data to be in the following format:

```js
const items = [
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
    href: "https://...",   // Optional: Direct URL (renders as <a> tag)
    action: function(){},  // Optional: Custom action to perform
    // You can include any other properties to use in custom rendering
    type: "folder",        // Optional: Can be used for custom icon rendering
    // ...other custom properties
  }
]
```

## Implementation Example

Here's an example of a file system navigator implemented with Tree:

```vue
<template>
  <div class="file-explorer p-4 border rounded-lg">
    <h3 class="text-lg font-medium mb-4">Project Files</h3>
    <Tree
      :items="fileItems"
      @node-click="onFileClick"
      @node-expanded="onFolderOpen"
    />
  </div>
</template>

<script setup>
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
</script>
```
