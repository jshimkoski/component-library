# MenuHeader

## Overview

The MenuHeader component provides section headers within menus to organize and categorize menu items. It renders as a non-interactive text label that helps users understand the grouping of related menu options.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="User Account">
    <MenuHeader label="Account Settings" />
    <MenuItem label="Profile" />
    <MenuItem label="Preferences" />
    <MenuDivider />
    <MenuHeader label="Actions" />
    <MenuItem label="Log Out" />
  </Menu>
</div>

```vue
<Menu label="User Account">
  <MenuHeader label="Account Settings" />
  <MenuItem label="Profile" />
  <MenuItem label="Preferences" />
  <MenuDivider />
  <MenuHeader label="Actions" />
  <MenuItem label="Log Out" />
</Menu>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `""` | Text content for the menu header. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Custom content for the menu header. Overrides the label prop. |

## Variants/Options

### Headers with Custom Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Developer Tools">
    <MenuHeader>
      <div class="flex items-center gap-2">
        <Icon icon="material-symbols:code" class="text-primary-500" />
        <span class="font-semibold">Development</span>
      </div>
    </MenuHeader>
    <MenuItem label="Code Editor" />
    <MenuItem label="Terminal" />
    
    <MenuDivider />
    
    <MenuHeader>
      <div class="flex items-center gap-2">
        <Icon icon="material-symbols:bug-report" class="text-warning-500" />
        <span class="font-semibold">Debugging</span>
      </div>
    </MenuHeader>
    <MenuItem label="Debugger" />
    <MenuItem label="Inspector" />
  </Menu>
</div>

```vue
<Menu label="Developer Tools">
  <MenuHeader>
    <div class="flex items-center gap-2">
      <Icon icon="material-symbols:code" class="text-primary-500" />
      <span class="font-semibold">Development</span>
    </div>
  </MenuHeader>
  <MenuItem label="Code Editor" />
  <MenuItem label="Terminal" />
  
  <MenuDivider />
  
  <MenuHeader>
    <div class="flex items-center gap-2">
      <Icon icon="material-symbols:bug-report" class="text-warning-500" />
      <span class="font-semibold">Debugging</span>
    </div>
  </MenuHeader>
  <MenuItem label="Debugger" />
  <MenuItem label="Inspector" />
</Menu>
```

### Multi-level Organization

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="File Manager" auto-width>
    <MenuHeader label="Recent Files" />
    <MenuItem label="document.pdf" />
    <MenuItem label="spreadsheet.xlsx" />
    <MenuItem label="image.png" />
    
    <MenuDivider />
    
    <MenuHeader label="Quick Actions" />
    <MenuItem label="New Folder" />
    <MenuItem label="Upload File" />
    <MenuItem label="Share Link" />
    
    <MenuDivider />
    
    <MenuHeader label="View Options" />
    <MenuItem label="List View" />
    <MenuItem label="Grid View" />
    <MenuItem label="Details" />
  </Menu>
</div>

```vue
<Menu label="File Manager" auto-width>
  <MenuHeader label="Recent Files" />
  <MenuItem label="document.pdf" />
  <MenuItem label="spreadsheet.xlsx" />
  <MenuItem label="image.png" />
  
  <MenuDivider />
  
  <MenuHeader label="Quick Actions" />
  <MenuItem label="New Folder" />
  <MenuItem label="Upload File" />
  <MenuItem label="Share Link" />
  
  <MenuDivider />
  
  <MenuHeader label="View Options" />
  <MenuItem label="List View" />
  <MenuItem label="Grid View" />
  <MenuItem label="Details" />
</Menu>
```

## Best Practices

- Use MenuHeader to group related menu items logically
- Keep header labels short and descriptive
- Use sentence case for headers (e.g., "Account settings" not "Account Settings")
- Follow headers with relevant MenuItems or MenuContent
- Use MenuDivider to separate different header sections
- Consider using icons in custom header content for better visual hierarchy
- Don't use too many headers in a single menu as it can become cluttered
- Headers should be informational only - they are not interactive elements

## Examples

### Contextual Menu Organization

```vue
<Menu label="Text Editor">
  <MenuHeader label="Edit" />
  <MenuItem label="Cut" @click="cut" />
  <MenuItem label="Copy" @click="copy" />
  <MenuItem label="Paste" @click="paste" />
  
  <MenuDivider />
  
  <MenuHeader label="Format" />
  <MenuItem label="Bold" @click="toggleBold" />
  <MenuItem label="Italic" @click="toggleItalic" />
  <MenuItem label="Underline" @click="toggleUnderline" />
  
  <MenuDivider />
  
  <MenuHeader label="Insert" />
  <MenuItem label="Link" @click="insertLink" />
  <MenuItem label="Image" @click="insertImage" />
  <MenuItem label="Table" @click="insertTable" />
</Menu>
```

### Status-based Headers

```vue
<template>
  <Menu label="Notifications" auto-width>
    <MenuHeader v-if="unreadCount > 0">
      <div class="flex items-center gap-2">
        <span>Unread</span>
        <Badge :label="unreadCount" kind="primary" size="xs" />
      </div>
    </MenuHeader>
    
    <MenuItem 
      v-for="notification in unreadNotifications" 
      :key="notification.id"
      @click="markAsRead(notification.id)"
    >
      <div class="flex flex-col">
        <span class="font-medium">{{ notification.title }}</span>
        <span class="text-xs text-base-500 truncate">{{ notification.message }}</span>
      </div>
    </MenuItem>
    
    <MenuDivider v-if="unreadCount > 0 && readNotifications.length > 0" />
    
    <MenuHeader v-if="readNotifications.length > 0" label="Earlier" />
    <MenuItem 
      v-for="notification in readNotifications" 
      :key="notification.id"
    >
      {{ notification.title }}
    </MenuItem>
  </Menu>
</template>
```

### Header with Action

```vue
<Menu label="Bookmarks" auto-width>
  <MenuHeader>
    <div class="flex items-center justify-between">
      <span>Recent Bookmarks</span>
      <Action 
        size="xs" 
        variant="ghost" 
        @click="clearRecent"
        class="text-xs"
      >
        Clear
      </Action>
    </div>
  </MenuHeader>
  
  <MenuItem label="Homepage" href="/" />
  <MenuItem label="Documentation" href="/docs" />
  <MenuItem label="GitHub" href="https://github.com" target="_blank" />
</Menu>
```
