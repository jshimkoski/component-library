# Menu Content

## Overview

The MenuContent component provides a flexible container for custom content within menus. It adds appropriate padding and styling to ensure content fits seamlessly within the menu structure while maintaining consistent spacing with other menu components.

## Basic Usage

```vue
<template>
  <Menu label="User Profile" auto-width>
    <MenuContent>
      <Avatar 
          src="https://i.pravatar.cc/32" 
          size="sm" 
          alt="User Avatar" 

        <div>
          <div class="font-medium">John Doe
          <div class="text-sm text-base-500">john.doe@example.com</div>
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Account Settings" />
    <MenuItem label="Sign Out" />
  </Menu>
</template>
```

## Props

MenuContent doesn't accept any props - it's a simple container component.

## Slots

| Name | Description |
|------|-------------|
| `default` | Any custom content to display within the menu. Receives appropriate padding and styling. |

## Forms within Menus

<div class="py-2">

```vue
<template>
  <Menu label="Quick Search" auto-width>
    <MenuContent>
      <div class="py-2">
        <TextField 
          placeholder="Search items..." 
          size="sm"
          class="min-w-48"
        />
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Advanced Search" />
    <MenuItem label="Search History" />
  </Menu>
</template>
```

## Best Practices

- Use MenuContent for custom layouts that don't fit the standard MenuItem pattern
- Always wrap content in appropriate spacing (py-2 is recommended)
- Combine with MenuDivider to separate custom content from menu items
- Keep content focused and avoid overwhelming users with too much information
- Ensure custom content maintains accessibility standards
- Use `auto-width` on the parent Menu when content has specific width requirements
- Consider the menu's purpose - complex content might be better in a Dialog or Sheet
- Test content at different screen sizes to ensure it remains usable

## Examples

### Interactive Content

```vue
<template>
  <Menu label="Quick Actions" auto-width>
    <MenuContent>
      <div class="py-2">
        <div class="text-sm font-medium mb-3">Bulk Actions</div>
        <Action size="xs" @click="selectAll">Select All</Action>
        <Action size="xs" variant="outline" @click="clearSelection">Clear</Action>
        <div class="mt-2 text-xs text-base-500">
          {{ selectedCount }} items selected
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Edit Selected" :disabled="selectedCount === 0" />
    <MenuItem label="Delete Selected" :disabled="selectedCount === 0" />
  </Menu>
</template>
```

### Notification Panel

```vue
<template>
  <Menu label="Notifications" auto-width>
    <MenuContent>
      <div class="py-2">
        Recent Notifications
          <Action size="xs" variant="ghost" @click="markAllRead">
            Mark all read
          </Action>
        <div class="max-h-48 overflow-y-auto space-y-2">
          <div 
            v-for="notification in notifications" 
            :key="notification.id"
            class="p-2 bg-base-100 dark:bg-base-800 rounded text-sm"
          >
            <div class="font-medium">{{ notification.title }}</div>
            <div class="text-base-500 text-xs mt-1">{{ notification.time }}</div>
          </div>
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="View All Notifications" />
    <MenuItem label="Notification Settings" />
  </Menu>
</template>
```
