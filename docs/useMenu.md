# useMenu

## Overview

The `useMenu` composable provides a comprehensive solution for managing hierarchical menu state across your Vue 3 application. It handles opening, closing, and coordinating between multiple menu levels, ensuring that only appropriate menus are open at any given time and providing proper cleanup functionality.

## Basic Usage

```vue
<template>
  <div>
    <button @click="open = !open">
      Toggle Menu
    </button>
    
    <div v-if="open" class="menu">
      <div class="menu-item">Item 1</div>
      <div class="menu-item">Item 2</div>
      <div class="menu-item">Item 3</div>
    </div>
  </div>
</template>

<script setup>
import { useMenu } from '@jasonshimmy/components';

const { open, menuId, level } = useMenu();
</script>
```

## API Reference

### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `parentId` | `string \| undefined` | `undefined` | ID of the parent menu for hierarchical menu structures. |

### Return Value

The composable returns an object with the following properties and methods:

| Name | Type | Description |
|------|------|-------------|
| `menuId` | `string` | Unique identifier for this menu instance. |
| `open` | `WritableComputedRef<boolean>` | Reactive reference to control menu open/closed state. |
| `level` | `number` | Nesting level of the menu (0 for root menus). |
| `openMenu` | `() => void` | Function to programmatically open the menu. |
| `closeMenu` | `() => void` | Function to programmatically close the menu. |
| `cleanup` | `() => void` | Function to clean up menu state when component unmounts. |

## Global Functions

### closeAllMenus()

Closes all currently open menus across the application.

```typescript
import { closeAllMenus } from '@jasonshimmy/components';

// Close all menus (useful for escape key handlers)
closeAllMenus();
```

### getOpenMenus()

Returns an array of all currently open menu states for debugging or utility purposes.

```typescript
import { getOpenMenus } from '@jasonshimmy/components';

const openMenus = getOpenMenus();
console.log('Currently open menus:', openMenus);
```

## Features

### Automatic Sibling Menu Management
When a menu opens, all sibling menus at the same level automatically close to prevent UI conflicts.

### Hierarchical Menu Support
Supports nested menu structures with proper parent-child relationships and level tracking.

### Root Menu Coordination
Root-level menus (level 0) automatically close other root menus when opened.

### Child Menu Cleanup
When a parent menu closes, all of its child menus are automatically closed as well.

## Advanced Usage

### Nested Menus

```vue
<template>
  <div>
    <!-- Root menu -->
    <button @click="rootMenu.open = !rootMenu.open">
      Main Menu
    </button>
    
    <div v-if="rootMenu.open" class="menu">
      <div class="menu-item">Item 1</div>
      
      <!-- Nested submenu -->
      <div class="menu-item">
        <button @click="subMenu.open = !subMenu.open">
          Submenu ▶
        </button>
        
        <div v-if="subMenu.open" class="submenu">
          <div class="menu-item">Sub Item 1</div>
          <div class="menu-item">Sub Item 2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenu } from '@jasonshimmy/components';
import { onUnmounted } from 'vue';

const rootMenu = useMenu();
const subMenu = useMenu(rootMenu.menuId);

// Cleanup on unmount
onUnmounted(() => {
  rootMenu.cleanup();
  subMenu.cleanup();
});
</script>
```

### Global Menu Control

```vue
<template>
  <div>
    <!-- Multiple independent menus -->
    <button @click="menu1.open = !menu1.open">Menu 1</button>
    <button @click="menu2.open = !menu2.open">Menu 2</button>
    <button @click="closeAll">Close All</button>
    
    <div v-if="menu1.open" class="menu">Menu 1 Content</div>
    <div v-if="menu2.open" class="menu">Menu 2 Content</div>
  </div>
</template>

<script setup>
import { useMenu, closeAllMenus } from '@jasonshimmy/components';

const menu1 = useMenu();
const menu2 = useMenu();

const closeAll = () => {
  closeAllMenus();
};
</script>
```

## Integration with Menu Components

The `useMenu` composable is designed to work seamlessly with the Menu, MenuItem, and related components in this library:

```vue
<template>
  <Menu>
    <MenuItem @click="handleMenuAction">Action Item</MenuItem>
    <MenuDivider />
    <MenuItem @click="menu.closeMenu">Close Menu</MenuItem>
  </Menu>
</template>

<script setup>
import { useMenu } from '@jasonshimmy/components';

const menu = useMenu();

const handleMenuAction = () => {
  // Perform action
  console.log('Action performed');
  
  // Close menu after action
  menu.closeMenu();
};
</script>
```

## TypeScript Support

The composable includes full TypeScript support with proper type definitions:

```typescript
import { useMenu, type MenuState } from '@jasonshimmy/components';

const menu = useMenu();
// menu.menuId is typed as string
// menu.open is typed as WritableComputedRef<boolean>
// menu.level is typed as number
```

## Best Practices

- Always call `cleanup()` in `onUnmounted` to prevent memory leaks
- Use hierarchical menus for complex navigation structures
- Leverage `closeAllMenus()` for global menu control (e.g., escape key handlers)
- Consider menu level depth for proper UI spacing and styling
- Use descriptive parent IDs when creating nested menu structures

## Accessibility Considerations

- Ensure proper ARIA attributes are set on menu elements
- Handle keyboard navigation (arrow keys, escape, enter)
- Provide focus management when menus open and close
- Consider screen reader announcements for menu state changes
