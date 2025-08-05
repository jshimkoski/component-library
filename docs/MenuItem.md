# MenuItem

## Overview

The MenuItem component represents an individual interactive item within a Menu. It can function as a clickable action, a navigation link, or a trigger for nested menus. MenuItem supports various states including disabled and active, and can contain custom content through slots.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Actions">
    <MenuItem label="Edit Document" />
    <MenuItem label="Share" />
    <MenuItem label="Download" />
  </Menu>
</div>

```vue
<Menu label="Actions">
  <MenuItem label="Edit Document" />
  <MenuItem label="Share" />
  <MenuItem label="Download" />
</Menu>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `""` | Text label for the menu item. |
| `href` | String | `undefined` | URL for link behavior. When provided, renders as anchor tag. |
| `target` | String | `undefined` | Target attribute for links (e.g., "_blank"). |
| `rel` | String | `undefined` | Rel attribute for links (e.g., "noopener noreferrer"). |
| `disabled` | Boolean | `false` | Whether the menu item is disabled. |
| `active` | Boolean | `false` | Whether the menu item appears in active state. |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Button type when rendered as a button element. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `click` | `(event: MouseEvent)` | Emitted when the menu item is clicked (only for button behavior). |

## Slots

| Name | Description |
|------|-------------|
| `default` | Custom content for the menu item. Overrides the label prop. |

## Variants/Options

### Menu Items with Actions

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Document Actions">
    <MenuItem label="Edit" @click="handleEdit" />
    <MenuItem label="Duplicate" @click="handleDuplicate" />
    <MenuItem label="Move to Trash" @click="handleDelete" />
  </Menu>
</div>

```vue
<Menu label="Document Actions">
  <MenuItem label="Edit" @click="handleEdit" />
  <MenuItem label="Duplicate" @click="handleDuplicate" />
  <MenuItem label="Move to Trash" @click="handleDelete" />
</Menu>

<script setup>
function handleEdit() {
  console.log('Edit clicked');
}

function handleDuplicate() {
  console.log('Duplicate clicked');
}

function handleDelete() {
  console.log('Delete clicked');
}
</script>
```

### Menu Items as Links

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Navigation">
    <MenuItem label="Home" href="/" />
    <MenuItem label="About" href="/about" />
    <MenuItem label="Contact" href="/contact" />
    <MenuItem 
      label="External Link" 
      href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
    />
  </Menu>
</div>

```vue
<Menu label="Navigation">
  <MenuItem label="Home" href="/" />
  <MenuItem label="About" href="/about" />
  <MenuItem label="Contact" href="/contact" />
  <MenuItem 
    label="External Link" 
    href="https://example.com" 
    target="_blank" 
    rel="noopener noreferrer" 
  />
</Menu>
```

### Menu Items with Custom Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="User Options">
    <MenuItem>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center">
          <span class="text-success-600 text-xs">✓</span>
        </div>
        <span>Mark as Complete</span>
      </div>
    </MenuItem>
    <MenuItem>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center">
          <span class="text-warning-600 text-xs">!</span>
        </div>
        <span>Flag as Important</span>
      </div>
    </MenuItem>
  </Menu>
</div>

```vue
<Menu label="User Options">
  <MenuItem>
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center">
        <span class="text-success-600 text-xs">✓</span>
      </div>
      <span>Mark as Complete</span>
    </div>
  </MenuItem>
  <MenuItem>
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center">
        <span class="text-warning-600 text-xs">!</span>
      </div>
      <span>Flag as Important</span>
    </div>
  </MenuItem>
</Menu>
```

## States

### Disabled Menu Items

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Mixed States">
    <MenuItem label="Available Action" />
    <MenuItem label="Disabled Action" disabled />
    <MenuItem label="Active Action" active />
    <MenuItem label="Disabled Link" href="/disabled" disabled />
  </Menu>
</div>

```vue
<Menu label="Mixed States">
  <MenuItem label="Available Action" />
  <MenuItem label="Disabled Action" disabled />
  <MenuItem label="Active Action" active />
  <MenuItem label="Disabled Link" href="/disabled" disabled />
</Menu>
```

## Best Practices

- Keep menu item labels concise and action-oriented
- Use consistent terminology throughout your application
- Group related actions together using MenuDivider
- Use disabled state for actions that are temporarily unavailable
- Use active state to indicate the current selection or state
- When using href, always provide appropriate target and rel attributes for external links
- Use custom content sparingly to maintain menu consistency
- Provide clear visual feedback for interactive states (hover, focus, active)

## Examples

### Menu with Icons and Descriptions

```vue
<Menu label="File Operations">
  <MenuItem @click="createNew">
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <Icon icon="material-symbols:add" class="text-sm" />
        <span class="font-medium">New Document</span>
      </div>
      <span class="text-xs text-base-500 ml-6">Create a new document</span>
    </div>
  </MenuItem>
  
  <MenuItem @click="openExisting">
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <Icon icon="material-symbols:folder-open" class="text-sm" />
        <span class="font-medium">Open</span>
      </div>
      <span class="text-xs text-base-500 ml-6">Open an existing document</span>
    </div>
  </MenuItem>
</Menu>
```

### Conditional Menu Items

```vue
<template>
  <Menu label="Actions">
    <MenuItem v-if="canEdit" label="Edit" @click="handleEdit" />
    <MenuItem v-if="canDelete" label="Delete" @click="handleDelete" />
    <MenuItem v-if="!isLoggedIn" label="Login" href="/login" />
    <MenuItem v-else label="Logout" @click="handleLogout" />
  </Menu>
</template>

<script setup>
const canEdit = ref(true);
const canDelete = ref(false);
const isLoggedIn = ref(true);
</script>
```

### Menu Item with Keyboard Shortcuts

```vue
<Menu label="Edit">
  <MenuItem @click="undo">
    <div class="flex items-center justify-between w-full">
      <span>Undo</span>
      <kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded">⌘Z</kbd>
    </div>
  </MenuItem>
  
  <MenuItem @click="redo">
    <div class="flex items-center justify-between w-full">
      <span>Redo</span>
      <kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded">⌘⇧Z</kbd>
    </div>
  </MenuItem>
</Menu>
```
