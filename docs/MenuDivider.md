# MenuDivider

## Overview

The MenuDivider component provides a visual separator between sections of menu items. It renders as a horizontal line that helps organize menu content by creating clear visual breaks between related groups of items.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
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
</div>

```vue
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
```

## Props

MenuDivider doesn't accept any props - it's a simple visual separator.

## Slots

MenuDivider doesn't have any slots - it renders as a simple horizontal line.

## Variants/Options

### Separating Different Action Types

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="File Operations">
    <MenuItem label="New Document" />
    <MenuItem label="Open" />
    <MenuItem label="Recent Files" />
    <MenuDivider />
    <MenuItem label="Save" />
    <MenuItem label="Save As" />
    <MenuItem label="Export" />
    <MenuDivider />
    <MenuItem label="Print" />
    <MenuItem label="Print Preview" />
    <MenuDivider />
    <MenuItem label="Close" />
    <MenuItem label="Exit" />
  </Menu>
</div>

```vue
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
```

### With Headers and Custom Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="User Account" auto-width>
    <MenuContent>
      <div class="flex items-center gap-2 py-2">
        <Avatar src="https://i.pravatar.cc/32" size="sm" />
        <div>
          <div class="font-medium">Jane Smith</div>
          <div class="text-xs text-base-500">jane@example.com</div>
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuHeader label="Account" />
    <MenuItem label="Profile Settings" />
    <MenuItem label="Billing" />
    <MenuItem label="Notifications" />
    <MenuDivider />
    <MenuHeader label="Support" />
    <MenuItem label="Help Center" />
    <MenuItem label="Contact Support" />
    <MenuDivider />
    <MenuItem label="Sign Out" />
  </Menu>
</div>

```vue
<Menu label="User Account" auto-width>
  <MenuContent>
    <div class="flex items-center gap-2 py-2">
      <Avatar src="https://i.pravatar.cc/32" size="sm" />
      <div>
        <div class="font-medium">Jane Smith</div>
        <div class="text-xs text-base-500">jane@example.com</div>
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  
  <MenuHeader label="Account" />
  <MenuItem label="Profile Settings" />
  <MenuItem label="Billing" />
  <MenuItem label="Notifications" />
  <MenuDivider />
  
  <MenuHeader label="Support" />
  <MenuItem label="Help Center" />
  <MenuItem label="Contact Support" />
  <MenuDivider />
  
  <MenuItem label="Sign Out" />
</Menu>
```

### Contextual Grouping

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Text Formatting">
    <MenuItem label="Bold" />
    <MenuItem label="Italic" />
    <MenuItem label="Underline" />
    <MenuDivider />
    <MenuItem label="Increase Font Size" />
    <MenuItem label="Decrease Font Size" />
    <MenuDivider />
    <MenuItem label="Text Color" />
    <MenuItem label="Background Color" />
    <MenuDivider />
    <MenuItem label="Clear Formatting" />
  </Menu>
</div>

```vue
<Menu label="Text Formatting">
  <!-- Basic formatting -->
  <MenuItem label="Bold" />
  <MenuItem label="Italic" />
  <MenuItem label="Underline" />
  <MenuDivider />
  
  <!-- Font size -->
  <MenuItem label="Increase Font Size" />
  <MenuItem label="Decrease Font Size" />
  <MenuDivider />
  
  <!-- Colors -->
  <MenuItem label="Text Color" />
  <MenuItem label="Background Color" />
  <MenuDivider />
  
  <!-- Reset -->
  <MenuItem label="Clear Formatting" />
</Menu>
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
```

### Settings Menu with Categories

```vue
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
```

### Data Management Menu

```vue
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
```

### Navigation Menu with Status

```vue
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
```
