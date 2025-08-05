# MenuContent

## Overview

The MenuContent component provides a flexible container for custom content within menus. It adds appropriate padding and styling to ensure content fits seamlessly within the menu structure while maintaining consistent spacing with other menu components.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="User Profile" auto-width>
    <MenuContent>
      <div class="flex items-center gap-3 py-2">
        <Avatar 
          src="https://i.pravatar.cc/32" 
          size="sm" 
          alt="User Avatar" 
        />
        <div>
          <div class="font-medium">John Doe</div>
          <div class="text-sm text-base-500">john.doe@example.com</div>
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Account Settings" />
    <MenuItem label="Sign Out" />
  </Menu>
</div>

```vue
<Menu label="User Profile" auto-width>
  <MenuContent>
    <div class="flex items-center gap-3 py-2">
      <Avatar 
        src="https://i.pravatar.cc/32" 
        size="sm" 
        alt="User Avatar" 
      />
      <div>
        <div class="font-medium">John Doe</div>
        <div class="text-sm text-base-500">john.doe@example.com</div>
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  <MenuItem label="Account Settings" />
  <MenuItem label="Sign Out" />
</Menu>
```

## Props

MenuContent doesn't accept any props - it's a simple container component.

## Slots

| Name | Description |
|------|-------------|
| `default` | Any custom content to display within the menu. Receives appropriate padding and styling. |

## Variants/Options

### Forms within Menus

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
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
</div>

```vue
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
```

### Statistics or Info Display

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Storage Info" auto-width>
    <MenuContent>
      <div class="py-2">
        <div class="text-sm font-medium mb-2">Storage Usage</div>
        <div class="flex items-center gap-2 mb-1">
          <Progress v-model="storageUsed" :max="storageMax" size="sm" class="flex-1" />
          <span class="text-xs text-base-500">75%</span>
        </div>
        <div class="text-xs text-base-500">
          {{ storageUsed }}GB of {{ storageMax }}GB used
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Manage Storage" />
    <MenuItem label="Upgrade Plan" />
  </Menu>
</div>

```vue
<Menu label="Storage Info" auto-width>
  <MenuContent>
    <div class="py-2">
      <div class="text-sm font-medium mb-2">Storage Usage</div>
      <div class="flex items-center gap-2 mb-1">
        <Progress v-model="storageUsed" :max="storageMax" size="sm" class="flex-1" />
        <span class="text-xs text-base-500">75%</span>
      </div>
      <div class="text-xs text-base-500">
        {{ storageUsed }}GB of {{ storageMax }}GB used
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  <MenuItem label="Manage Storage" />
  <MenuItem label="Upgrade Plan" />
</Menu>
```

### Rich Media Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Menu label="Theme Preview" auto-width>
    <MenuContent>
      <div class="py-2">
        <div class="text-sm font-medium mb-2">Color Themes</div>
        <div class="grid grid-cols-3 gap-2">
          <div class="flex flex-col items-center gap-1">
            <div class="w-8 h-8 rounded bg-blue-500"></div>
            <span class="text-xs">Blue</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="w-8 h-8 rounded bg-green-500"></div>
            <span class="text-xs">Green</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="w-8 h-8 rounded bg-purple-500"></div>
            <span class="text-xs">Purple</span>
          </div>
        </div>
      </div>
    </MenuContent>
    <MenuDivider />
    <MenuItem label="Custom Theme" />
    <MenuItem label="Reset to Default" />
  </Menu>
</div>

```vue
<Menu label="Theme Preview" auto-width>
  <MenuContent>
    <div class="py-2">
      <div class="text-sm font-medium mb-2">Color Themes</div>
      <div class="grid grid-cols-3 gap-2">
        <div class="flex flex-col items-center gap-1">
          <div class="w-8 h-8 rounded bg-blue-500"></div>
          <span class="text-xs">Blue</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <div class="w-8 h-8 rounded bg-green-500"></div>
          <span class="text-xs">Green</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <div class="w-8 h-8 rounded bg-purple-500"></div>
          <span class="text-xs">Purple</span>
        </div>
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  <MenuItem label="Custom Theme" />
  <MenuItem label="Reset to Default" />
</Menu>
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
<Menu label="Quick Actions" auto-width>
  <MenuContent>
    <div class="py-2">
      <div class="text-sm font-medium mb-3">Bulk Actions</div>
      <div class="flex gap-2">
        <Action size="xs" @click="selectAll">Select All</Action>
        <Action size="xs" variant="outline" @click="clearSelection">Clear</Action>
      </div>
      <div class="mt-2 text-xs text-base-500">
        {{ selectedCount }} items selected
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  <MenuItem label="Edit Selected" :disabled="selectedCount === 0" />
  <MenuItem label="Delete Selected" :disabled="selectedCount === 0" />
</Menu>
```

### Notification Panel

```vue
<Menu label="Notifications" auto-width>
  <MenuContent>
    <div class="py-2">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium">Recent Notifications</span>
        <Action size="xs" variant="ghost" @click="markAllRead">
          Mark all read
        </Action>
      </div>
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
```

### Status Dashboard

```vue
<Menu label="System Status" auto-width>
  <MenuContent>
    <div class="py-2 min-w-64">
      <div class="text-sm font-medium mb-3">System Health</div>
      
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-sm">CPU Usage</span>
          <div class="flex items-center gap-2">
            <Progress :value="45" :max="100" size="xs" class="w-16" />
            <span class="text-xs text-base-500">45%</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="text-sm">Memory</span>
          <div class="flex items-center gap-2">
            <Progress :value="67" :max="100" size="xs" class="w-16" />
            <span class="text-xs text-base-500">67%</span>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="text-sm">Disk Space</span>
          <div class="flex items-center gap-2">
            <Progress :value="23" :max="100" size="xs" class="w-16" />
            <span class="text-xs text-base-500">23%</span>
          </div>
        </div>
      </div>
    </div>
  </MenuContent>
  <MenuDivider />
  <MenuItem label="Detailed View" />
  <MenuItem label="System Settings" />
</Menu>
```
