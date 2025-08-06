# Tabs

The Tabs component provides a way to organize content into selectable views, displaying only one view at a time.

## Overview

The Tabs component is used to alternate between views within the same context, saving screen space while maintaining user awareness of available options. It consists of tab headers that serve as controls and corresponding content panels.

## Basic Usage

```vue
<template>
  <Tabs :tabs="tabs" v-model="activeTab" @change="handleTabChange">
    <template #tab-content-0>
      <p>This is the content for the first tab.</p>
    </template>

    <template #tab-content-1>
      <p>This is the content for the second tab.</p>
    </template>

    <template #tab-content-2>
      <p>This is the content for the third tab.</p>
    </template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const tabs = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' }
];

const handleTabChange = (index) => {
  console.log(`Tab changed to ${index}`);
};
</script>
```

## Declarative TabPanel API (Recommended)

The declarative API using `TabPanel` components provides a more intuitive way to define tabs:

```vue
<template>
  <Tabs v-model="activeTab" @change="handleTabChange">
    <TabPanel label="Account">
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">Account Information</h3>
        <p>User account settings and preferences go here.</p>
      </div>
    </TabPanel>
    
    <TabPanel label="Privacy" badge="New" badgeKind="success">
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">Privacy Settings</h3>
        <p>Control your privacy settings and permissions.</p>
      </div>
    </TabPanel>
    
    <TabPanel label="Notifications" icon="IconMdiBell">
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">Notification Preferences</h3>
        <p>Manage how you receive notifications.</p>
      </div>
    </TabPanel>
    
    <TabPanel label="Disabled Tab" disabled>
      <div class="p-4">
        <p>This content is not accessible because the tab is disabled.</p>
      </div>
    </TabPanel>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const handleTabChange = (index) => {
  console.log(`Tab changed to ${index}`);
};
</script>
```

## Props

### Tabs Component

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Array<TabItem>` | `[]` | Array of tab objects (for programmatic API) |
| `modelValue` | `Number` | `0` | Index of the currently active tab (use with v-model) |
| `disabled` | `Boolean` | `false` | When true, disables all tab interactions |
| `vertical` | `Boolean` | `false` | When true, arranges tabs vertically instead of horizontally |
| `lazy` | `Boolean` | `false` | When true, only renders tab content when tab is active |
| `keepAlive` | `Boolean` | `false` | When true with lazy loading, keeps tab content in DOM after initial render |
| `defaultTab` | `Number` | `0` | Default tab index to show when component mounts |
| `headerClass` | `String` | `''` | Custom CSS class for the tab header container |
| `contentClass` | `String` | `''` | Custom CSS class for the tab content container |
| `panelClass` | `String` | `''` | Custom CSS class for each tab panel |
| `activeTabClass` | `String` | `''` | Custom CSS class for the active tab |
| `inactiveTabClass` | `String` | `''` | Custom CSS class for inactive tabs |
| `transitionDuration` | `Number` | `200` | Duration of tab transition in milliseconds |
| `autoHeight` | `Boolean` | `false` | When true, content height adjusts to the current tab |

### TabPanel Component

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `String` | Required | Label text for the tab |
| `disabled` | `Boolean` | `false` | When true, disables this specific tab |
| `lazy` | `Boolean` | `undefined` | When defined, overrides parent Tabs lazy-loading setting for this tab |
| `badge` | `String` | `undefined` | Badge text to display in the tab |
| `badgeKind` | `String` | `'primary'` | Badge style variant |
| `icon` | `String\|Component` | `undefined` | Icon to display alongside the tab label |
| `id` | `String\|Number` | `undefined` | Optional unique identifier for the tab |

### TabItem Interface (Programmatic API)

```typescript
interface TabItem {
  label: string;
  content?: string;
  badge?: string;
  badgeKind?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  icon?: Component | string;
  disabled?: boolean;
  slot?: string;
  component?: Component;
  props?: Record<string, any>;
  id?: string | number;
  meta?: any;
}
```

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `(index: number)` | Emitted when the active tab changes |
| `change` | `(index: number)` | Emitted when the active tab changes |
| `before-change` | `({ from: number, to: number })` | Emitted before tab change, can be prevented by returning `false` |
| `tab-click` | `(tab: TabItem, index: number)` | Emitted when a tab is clicked |

## Slots

### Tabs Component Slots

| Name | Description |
|------|-------------|
| default | Contains TabPanel components when using the declarative API |
| `tab-headers` | Slot to completely customize the tab headers |
| `tab-icon-{index}` | Custom icon for the tab at the specified index |
| `tab-label-{index}` | Custom label content for the tab at the specified index |
| `tab-badge-{index}` | Custom badge for the tab at the specified index |
| `tab-content-{index}` | Content for the tab panel at the specified index |

### TabPanel Component Slots

| Name | Description |
|------|-------------|
| default | Content to display when this tab is active |

## Exposed Methods

The Tabs component exposes the following methods when using template refs:

```typescript
// Using ref
const tabsRef = ref();

// Available methods
tabsRef.value.selectTab(index); // Programmatically select a tab
tabsRef.value.getActiveTab(); // Get the current active tab object
tabsRef.value.getActiveIndex(); // Get the current active tab index
tabsRef.value.focusTab(index); // Focus a specific tab
tabsRef.value.focusNextTab(); // Focus the next tab
tabsRef.value.focusPrevTab(); // Focus the previous tab
tabsRef.value.focusFirstTab(); // Focus the first tab
tabsRef.value.focusLastTab(); // Focus the last tab
```

## Variants

### Vertical Tabs

```vue
<template>
  <Tabs vertical v-model="activeTab">
    <TabPanel label="Account">
      <div class="p-4">Account content</div>
    </TabPanel>
    <TabPanel label="Settings">
      <div class="p-4">Settings content</div>
    </TabPanel>
    <TabPanel label="Profile">
      <div class="p-4">Profile content</div>
    </TabPanel>
  </Tabs>
</template>
```

### With Custom Styling

```vue
<template>
  <Tabs 
    v-model="activeTab" 
    headerClass="bg-base-200 p-2" 
    contentClass="p-4 bg-base-50" 
    activeTabClass="bg-primary-100 text-primary-800 font-bold" 
    inactiveTabClass="text-base-600 hover:bg-base-100"
  >
    <TabPanel label="Tab 1">
      <div>Tab 1 Content</div>
    </TabPanel>
    <TabPanel label="Tab 2">
      <div>Tab 2 Content</div>
    </TabPanel>
  </Tabs>
</template>
```

### With Dynamic Components

```vue
<template>
  <Tabs :tabs="dynamicTabs" v-model="activeTab" />
</template>

<script setup>
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';
import UserSettings from './UserSettings.vue';
import UserDashboard from './UserDashboard.vue';

const activeTab = ref(0);
const dynamicTabs = [
  {
    label: 'Dashboard',
    component: UserDashboard,
    props: { userId: 123 }
  },
  {
    label: 'Profile',
    component: UserProfile,
    props: { userId: 123, editable: true }
  },
  {
    label: 'Settings',
    component: UserSettings,
    props: { theme: 'dark' }
  }
];
</script>
```

## Accessibility

- The component implements full ARIA support for tab patterns
- Keyboard navigation is fully supported:
  - Tab key to focus the tab list
  - Arrow keys to navigate between tabs (left/right or up/down)
  - Home/End keys to jump to first/last tab
  - Space or Enter to select a tab
- Focus management automatically maintains position when tabs change
- Disabled tabs are properly excluded from keyboard navigation
- Screen readers will announce the tab selection and content changes

## Best Practices

- Keep tab labels short and clear
- Use icons to enhance recognition but not as the only identifier
- Limit the number of tabs to avoid overwhelming users (3-7 is optimal)
- Use lazy loading for tabs with expensive content
- Consider tab widths - either equal width or content-based depending on context
- Use badges sparingly to highlight new or updated content
- Maintain a consistent hierarchy - tabs shouldn't nest tabs within the same context
- Use vertical tabs for more complex hierarchies or when space permits

## Examples

### Complex Tab Layout with Custom Rendering

```vue
<template>
  <Tabs v-model="activeTab">
    <template #tab-headers>
      <div class="flex gap-2">
        <button 
          v-for="(tab, i) in tabs" 
          :key="i"
          @click="activeTab = i"
          class="px-4 py-2 rounded"
          :class="activeTab === i ? 'bg-primary-500 text-white' : 'hover:bg-base-200'"
        >
          {{ tab.label }}
        </button>
        <button class="text-primary-600">
          <Icon icon="material-symbols:add" />
        </button>
      </div>
    </template>
    <TabPanel label="Dashboard">
      <DashboardContent />
    </TabPanel>
    <TabPanel label="Analytics">
      <AnalyticsContent />
    </TabPanel>
    <TabPanel label="Reports">
      <ReportsContent />
    </TabPanel>
  </Tabs>
</template>
```
