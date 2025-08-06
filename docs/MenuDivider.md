# MenuDivider

## Overview

The MenuDivider component provides a visual separator between sections of menu items. It renders as a horizontal line that helps organize menu content by creating clear visual breaks between related groups of items.

## Basic Usage

```vue
<template>
  <Menu label="Edit Menu">
    <MenuItem label="Cut" />
    <MenuItem label="Copy" />
    <MenuItem label="Paste" />
    <MenuDivider />
    <MenuItem label="Select All" />
    <MenuItem label="Find" />
    <MenuDivider />
    <MenuItem label="Preferences" />
  </Menu>
</template>
```

## Props

MenuDivider doesn't accept any props - it's a simple visual separator.

## Slots

MenuDivider doesn't have any slots - it renders as a simple horizontal line.

## Separating Different Action Types

```vue
<template>
  <Menu label="File Operations">
    <!-- Document creation/opening -->
    <MenuItem label="New Document" />
    <MenuItem label="Open" />
    <MenuItem label="Recent Files" />
    <MenuDivider />

    <!-- Saving operations -->
    <MenuItem label="Save" />
    <MenuItem label="Save As" />
    <MenuItem label="Export" />
    <MenuDivider />

    <!-- Printing operations -->
    <MenuItem label="Print" />
    <MenuItem label="Print Preview" />
    <MenuDivider />

    <!-- Application control -->
    <MenuItem label="Close" />
    <MenuItem label="Exit" />
  </Menu>
</template>
```

## Best Practices

- Use MenuDivider to separate logically related groups of menu items
- Place dividers between different types of actions (e.g., creation vs. deletion actions)
- Use sparingly - too many dividers can make menus feel fragmented
- Combine with MenuHeader when you need both visual separation and labeled sections
- Always place dividers between MenuItems, MenuContent, or MenuHeader components
- Avoid placing dividers at the beginning or end of menus
- Group similar or related actions together before adding a divider
- Consider the visual weight - multiple consecutive dividers should be avoided

## Examples

### Context Menu with Action Groups

```vue
<template>
  <Menu label="Item Actions">
    <!-- View actions -->
    <MenuItem label="View Details" />
    <MenuItem label="Preview" />
    <MenuItem label="Open in New Tab" />
    <MenuDivider />

    <!-- Edit actions -->
    <MenuItem label="Edit" />
    <MenuItem label="Rename" />
    <MenuItem label="Duplicate" />
    <MenuDivider />

    <!-- Organization actions -->
    <MenuItem label="Move to Folder" />
    <MenuItem label="Add to Collection" />
    <MenuItem label="Share" />
    <MenuDivider />

    <!-- Destructive actions -->
    <MenuItem label="Archive" />
    <MenuItem label="Delete" />
  </Menu>
</template>
```

### Settings Menu with Categories

```vue
<template>
  <Menu label="Settings" auto-width>
    <!-- Appearance -->
    <MenuHeader label="Appearance" />
    <MenuItem label="Theme" />
    <MenuItem label="Font Size" />
    <MenuItem label="Layout" />
    <MenuDivider />

    <!-- Behavior -->
    <MenuHeader label="Behavior" />
    <MenuItem label="Auto-save" />
    <MenuItem label="Notifications" />
    <MenuItem label="Keyboard Shortcuts" />
    <MenuDivider />

    <!-- Advanced -->
    <MenuHeader label="Advanced" />
    <MenuItem label="Developer Tools" />
    <MenuItem label="Export Settings" />
    <MenuItem label="Reset to Defaults" />
  </Menu>
</template>
```

### Data Management Menu

```vue
<template>
  <Menu label="Data Options">
    <!-- Import/Export -->
    <MenuItem label="Import Data" />
    <MenuItem label="Export to CSV" />
    <MenuItem label="Export to PDF" />
    <MenuDivider />

    <!-- Filtering -->
    <MenuItem label="Filter Data" />
    <MenuItem label="Sort Options" />
    <MenuItem label="Group By" />
    <MenuDivider />

    <!-- Bulk Operations -->
    <MenuItem label="Select All" />
    <MenuItem label="Clear Selection" />
    <MenuDivider />

    <!-- Danger Zone -->
    <MenuItem label="Clear All Data" />
    <MenuItem label="Reset View" />
  </Menu>
</template>
```

### Navigation Menu with Status

```vue
<template>
  <Menu label="Navigation">
    <!-- Main pages -->
    <MenuItem label="Dashboard" active />
    <MenuItem label="Projects" />
    <MenuItem label="Tasks" />
    <MenuDivider />

    <!-- Secondary pages -->
    <MenuItem label="Reports" />
    <MenuItem label="Analytics" />
    <MenuDivider />

    <!-- Admin (conditional) -->
    <MenuItem v-if="isAdmin" label="User Management" />
    <MenuItem v-if="isAdmin" label="System Settings" />
    <MenuDivider v-if="isAdmin" />

    <!-- Account -->
    <MenuItem label="Profile" />
    <MenuItem label="Logout" />
  </Menu>
</template>
```
