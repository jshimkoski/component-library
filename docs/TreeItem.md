# TreeItem

## Overview

The TreeItem component represents individual nodes within a Tree component. It handles the display of hierarchical data items with support for expansion/collapse, icons, and various interaction states. TreeItem components work together to create nested tree structures for navigation, file systems, or any hierarchical data.

## Basic Usage

TreeItem is typically used within a Tree component and is not commonly used in isolation:

```vue
<template>
  <Tree :items="treeItems" />
</template>

<script setup>
const treeItems = [
  {
    id: 'folder1',
    label: 'Documents',
    children: [
      { id: 'file1', label: 'Report.pdf' },
      { id: 'file2', label: 'Presentation.pptx' }
    ]
  },
  {
    id: 'folder2', 
    label: 'Images',
    children: [
      { id: 'img1', label: 'photo1.jpg' },
      { id: 'img2', label: 'photo2.png' }
    ]
  }
];
</script>
```

## Props

TreeItem props are typically defined by the data structure passed to the parent Tree component:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `item` | Object | Required | Tree item data object containing all item properties. |
| `level` | Number | `0` | Nesting level of the tree item (used for indentation). |
| `hideIcons` | Boolean | `false` | Whether to hide file/folder icons next to items. |
| `expandedKeys` | Array | `[]` | Array of item IDs that are currently expanded. |
| `activeItemId` | String \| Number \| null | `null` | ID of the currently active/selected tree item. |

## Tree Item Data Structure

```typescript
interface TreeItem {
  id: string | number;           // Unique identifier
  label: string;                 // Display text
  icon?: string;                 // Icon for the item
  iconOpen?: string;             // Icon when expanded (overrides icon)
  iconClose?: string;            // Icon when collapsed (overrides icon)
  children?: TreeItem[];         // Child items
  to?: string;                   // Vue Router path
  href?: string;                 // External URL
  action?: Function;             // Click handler function
  onClick?: Function;            // Alternative click handler
  [key: string]: any;            // Additional custom properties
}
```

## Events

TreeItem events are handled through the parent Tree component:

| Name | Parameters | Description |
|------|------------|-------------|
| `update:expanded` | `(itemId: string \| number)` | Emitted when tree item expand/collapse state changes. |
| `item-click` | `(item: TreeItem)` | Emitted when tree item is clicked. |

## File System Tree

```vue
<template>
  <Tree :items="fileSystemItems" />
</template>

<script setup>
const fileSystemItems = [
  {
    id: 'root',
    label: 'Project Root',
    icon: 'material-symbols:folder',
    iconOpen: 'material-symbols:folder-open',
    children: [
      {
        id: 'src',
        label: 'src',
        icon: 'material-symbols:folder',
        iconOpen: 'material-symbols:folder-open',
        children: [
          {
            id: 'components',
            label: 'components',
            icon: 'material-symbols:folder',
            iconOpen: 'material-symbols:folder-open',
            children: [
              { id: 'button', label: 'Button.vue', icon: 'material-symbols:code' },
              { id: 'input', label: 'Input.vue', icon: 'material-symbols:code' }
            ]
          },
          { id: 'main', label: 'main.js', icon: 'material-symbols:javascript' },
          { id: 'app', label: 'App.vue', icon: 'material-symbols:code' }
        ]
      },
      {
        id: 'public',
        label: 'public',
        icon: 'material-symbols:folder',
        iconOpen: 'material-symbols:folder-open',
        children: [
          { id: 'index', label: 'index.html', icon: 'material-symbols:html' },
          { id: 'favicon', label: 'favicon.ico', icon: 'material-symbols:image' }
        ]
      },
      { id: 'package', label: 'package.json', icon: 'material-symbols:settings' },
      { id: 'readme', label: 'README.md', icon: 'material-symbols:description' }
    ]
  }
];
</script>
```

## Navigation Tree

```vue
<template>
  <Tree :items="navigationItems" @item-click="handleNavigation" />
</template>

<script setup>
const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'material-symbols:dashboard',
    to: '/dashboard'
  },
  {
    id: 'users',
    label: 'User Management',
    icon: 'material-symbols:people',
    children: [
      { id: 'all-users', label: 'All Users', to: '/users' },
      { id: 'add-user', label: 'Add User', to: '/users/add' },
      { id: 'user-roles', label: 'Roles & Permissions', to: '/users/roles' }
    ]
  },
  {
    id: 'content',
    label: 'Content',
    icon: 'material-symbols:article',
    children: [
      {
        id: 'posts',
        label: 'Blog Posts',
        children: [
          { id: 'all-posts', label: 'All Posts', to: '/posts' },
          { id: 'draft-posts', label: 'Drafts', to: '/posts/drafts' },
          { id: 'published-posts', label: 'Published', to: '/posts/published' }
        ]
      },
      { id: 'pages', label: 'Pages', to: '/pages' },
      { id: 'media', label: 'Media Library', to: '/media' }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'material-symbols:settings',
    children: [
      { id: 'general', label: 'General', to: '/settings/general' },
      { id: 'security', label: 'Security', to: '/settings/security' },
      { id: 'integrations', label: 'Integrations', to: '/settings/integrations' }
    ]
  }
];

function handleNavigation(item) {
  if (item.to) {
    // Navigate using Vue Router
    router.push(item.to);
  }
}
</script>
```

## Interactive Tree with Actions

```vue
<template>
  <Tree :items="actionItems" @item-click="handleItemClick" />
</template>

<script setup>
const actionItems = [
  {
    id: 'projects',
    label: 'Projects',
    icon: 'material-symbols:work',
    children: [
      {
        id: 'project1',
        label: 'Website Redesign',
        icon: 'material-symbols:web',
        action: () => openProject('project1'),
        children: [
          { 
            id: 'task1', 
            label: 'Design Phase', 
            icon: 'material-symbols:palette',
            action: () => openTask('task1')
          },
          { 
            id: 'task2', 
            label: 'Development Phase', 
            icon: 'material-symbols:code',
            action: () => openTask('task2')
          }
        ]
      },
      {
        id: 'project2',
        label: 'Mobile App',
        icon: 'material-symbols:phone-android',
        action: () => openProject('project2'),
        children: [
          { 
            id: 'task3', 
            label: 'UI Design', 
            icon: 'material-symbols:design-services',
            action: () => openTask('task3')
          }
        ]
      }
    ]
  },
  {
    id: 'archive',
    label: 'Archived Projects',
    icon: 'material-symbols:archive',
    children: [
      { 
        id: 'old-project', 
        label: 'Legacy System', 
        icon: 'material-symbols:history',
        action: () => viewArchived('old-project')
      }
    ]
  }
];

function handleItemClick(item) {
  if (item.action) {
    item.action();
  }
}

function openProject(projectId) {
  console.log('Opening project:', projectId);
}

function openTask(taskId) {
  console.log('Opening task:', taskId);
}

function viewArchived(id) {
  console.log('Viewing archived item:', id);
}
</script>
```

## Custom Item Rendering

TreeItem can be customized through slots in the parent Tree component:

```vue
<template>
  <Tree :items="customItems">
    <template #default="{ item, level }">
      <div 
        v-if="item.status" 
        class="w-2 h-2 rounded-full"
        :class="{
          'bg-success-500': item.status === 'completed',
          'bg-warning-500': item.status === 'in-progress',
          'bg-base-300': item.status === 'pending'
        }"
      >

        <Icon v-if="item.icon" :icon="item.icon" class="text-sm" />

        {{ item.label }}

        <Badge 
          v-if="item.count" 
          :label="item.count" 
          size="xs" 
          kind="secondary" 
        />
        <Menu v-if="item.id !== 'root'" auto-width>
          <MenuItem label="Edit" @click="editItem(item)" />
          <MenuItem label="Delete" @click="deleteItem(item)" />
        </Menu>
      </div>
    </template>

    <template #icon="{ item, level }">
      <div 
        class="w-4 h-4 rounded-full mr-2"
        :class="{
          'bg-blue-500': item.type === 'folder',
          'bg-green-500': item.type === 'file',
          'bg-red-500': item.type === 'error'
        }"
      ></div>
    </template>
  </Tree>
</template>
```

## Best Practices

- Use meaningful and descriptive labels for tree items
- Provide appropriate icons to enhance visual recognition
- Use consistent iconography throughout the tree structure
- Consider performance for large trees - implement lazy loading when necessary
- Provide clear visual hierarchy through proper indentation and styling
- Handle click events appropriately based on item type (navigation, action, etc.)
- Use different icons for expanded/collapsed states when helpful
- Ensure keyboard navigation support through the parent Tree component
- Group related items logically within the tree structure
- Consider providing context menus for item-specific actions

## Examples

### Documentation Structure

```vue
<template>
  <Tree :items="docsStructure" @item-click="navigateToDoc">
    <template #default="{ item }">
      <Icon 
        :icon="getDocIcon(item)" 
        class="text-sm"
        :class="getDocIconColor(item)"

      {{ item.label }}
      
      <div class="flex items-center gap-1">
        <Badge 
          v-if="item.isNew" 
          label="New" 
          size="xs" 
          kind="success"
        />

        <Badge 
          v-if="item.difficulty" 
          :label="item.difficulty" 
          size="xs" 
          :kind="getDifficultyKind(item.difficulty)"
        />
      </div>
    </template>
  </Tree>
</template>

<script setup>
function getDocIcon(item) {
  if (item.type === 'category') return 'material-symbols:folder';
  if (item.type === 'guide') return 'material-symbols:book';
  if (item.type === 'api') return 'material-symbols:code';
  if (item.type === 'example') return 'material-symbols:play-circle';
  return 'material-symbols:description';
}

function getDocIconColor(item) {
  const colors = {
    category: 'text-blue-500',
    guide: 'text-green-500',
    api: 'text-purple-500',
    example: 'text-orange-500'
  };
  return colors[item.type] || 'text-base-500';
}

function getDifficultyKind(difficulty) {
  const kinds = {
    'Beginner': 'success',
    'Intermediate': 'warning',
    'Advanced': 'danger'
  };
  return kinds[difficulty] || 'secondary';
}
</script>
```
