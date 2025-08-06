# Menu

## Overview

The Menu component is a versatile dropdown menu system that provides a flexible foundation for creating context menus, navigation dropdowns, and action menus. It uses FloatingUI for positioning and supports nested menus, custom content, and various trigger options. The Menu component works seamlessly with MenuItem, MenuHeader, MenuContent, and MenuDivider components to create rich interactive experiences.

## Basic Usage

```vue
<template>
  <Menu label="Actions">
    <MenuItem label="Edit" />
    <MenuItem label="Duplicate" />
    <MenuDivider />
    <MenuItem label="Archive" />
    <MenuItem label="Delete" />
  </Menu>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `""` | Text label for the menu trigger button. |
| `nested` | Boolean | `false` | Whether this menu is nested within another menu. |
| `disabled` | Boolean | `false` | Whether the menu trigger is disabled. |
| `placement` | `Placement` | `"bottom-start"` | Positioning of the menu relative to the trigger. |
| `autoWidth` | Boolean | `false` | Whether the menu width should auto-adjust to content. Default width is 192px (w-48). |
| `parentMenuId` | String | `undefined` | ID of the parent menu for nested menu behavior. |

## Events

The Menu component doesn't emit custom events directly, but MenuItem components within it can emit click events.

## Slots

| Name | Description |
|------|-------------|
| `default` | Content of the menu. Typically contains MenuItem, MenuHeader, MenuContent, and MenuDivider components. |
| `content` | Alternative slot for custom menu content with access to menu state props: `isOpen`, `open`, `close`, `toggle`. |

## Nested Menus

```vue
<template>
  <Menu label="File">
    <MenuItem label="New" />
    <MenuItem label="Open" />
    <MenuDivider />
    <Menu label="Export As" nested>
      <MenuItem label="PDF" />
      <MenuItem label="Excel" />
      <MenuItem label="CSV" />
    </Menu>
  </Menu>
</template>
```

## Menu with Custom Content

```vue
<template>
  <Menu label="User Account" auto-width>
    <MenuHeader label="Account" />
    <MenuContent>
      <Avatar src="https://i.pravatar.cc/32" size="sm" alt="John Doe" />
      <div>
        <div>John Doe</div>
        <div>john.doe@example.com</div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Profile Settings" />
    <MenuItem label="Log Out" />
  </Menu>
</template>
```

## Menu Placement Options

</Menu>

```vue
<template>
  <!-- Different placement options -->
  <Menu label="Top Start" placement="top-start">
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
  </Menu>

  <Menu label="Bottom End" placement="bottom-end">
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
  </Menu>

  <Menu label="Right Start" placement="right-start">
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
  </Menu>
</template>
```

## States

### Disabled Menu

```vue
<template>
  <Menu label="Disabled Menu" disabled>
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
  </Menu>
</template>
```

## Best Practices

- Use MenuItem components for interactive menu options
- Use MenuDivider to visually separate related menu sections
- Use MenuHeader to provide section titles within complex menus
- Use MenuContent for custom content like user profiles or complex controls
- Keep menu labels concise and descriptive
- Use nested menus sparingly to avoid overwhelming users
- Consider using `autoWidth` for menus with varying content lengths
- Use appropriate placement values to ensure menus don't overflow the viewport

## Examples

### Context Menu with Actions

```vue
<template>
  <div @contextmenu.prevent="showContextMenu">
    Right-click me for context menu
    <Menu v-if="contextMenuVisible" :style="contextMenuStyle">
      <MenuItem label="Cut" @click="handleCut" />
      <MenuItem label="Copy" @click="handleCopy" />
      <MenuItem label="Paste" @click="handlePaste" />
      <MenuDivider />
      <MenuItem label="Delete" @click="handleDelete" />
    </Menu>
  </div>
</template>

<script setup>
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
</script>
```

### Complex Nested Menu Structure

```vue
<template>
  <Menu label="Tools">
    <MenuItem label="Text Editor" />
    <MenuItem label="Code Editor" />
    <MenuDivider />

    <Menu label="Development" nested>
      <MenuItem label="Build Project" />
      <MenuItem label="Run Tests" />
      <MenuDivider />

      <Menu label="Deploy" nested>
        <MenuItem label="Staging" />
        <MenuItem label="Production" />
      </Menu>
    </Menu>

    <Menu label="Database" nested>
      <MenuItem label="View Data" />
      <MenuItem label="Run Query" />
      <MenuItem label="Export Data" />
    </Menu>
  </Menu>
</template>
```
