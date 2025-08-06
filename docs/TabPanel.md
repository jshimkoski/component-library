# TabPanel

## Overview

The TabPanel component represents individual content panels within a Tabs component. Each TabPanel contains the content that will be displayed when its corresponding tab is active. It's designed to work seamlessly with the declarative API of the Tabs component.

## Basic Usage

```vue
<template>
  <Tabs>
    <TabPanel label="First Tab">
      <p>Content for the first tab panel.</p>
    </TabPanel>
    <TabPanel label="Second Tab">
      <p>Content for the second tab panel.</p>
    </TabPanel>
    <TabPanel label="Third Tab">
      <p>Content for the third tab panel.</p>
    </TabPanel>
  </Tabs>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | Required | Text label for the tab header. |
| `badge` | String | `undefined` | Optional badge text displayed next to the label. |
| `badgeKind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme for the badge. |
| `icon` | String \| Component | `undefined` | Icon to display in the tab header. |
| `disabled` | Boolean | `false` | Whether the tab is disabled and cannot be selected. |
| `id` | String \| Number | `undefined` | Unique identifier for the tab panel. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content to display when this tab panel is active. |

## TabPanel with Icons

```vue
<template>
  <Tabs>
    <TabPanel label="Dashboard" icon="material-symbols:dashboard">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">Dashboard Overview</h3>
        <p>Welcome to your dashboard. Here you can see an overview of your account.</p>
      </div>
    </TabPanel>
    <TabPanel label="Settings" icon="material-symbols:settings">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">Settings</h3>
        <p>Configure your account settings and preferences here.</p>
      </div>
    </TabPanel>
    <TabPanel label="Profile" icon="material-symbols:person">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">User Profile</h3>
        <p>Manage your personal information and profile details.</p>
      </div>
    </TabPanel>
  </Tabs>
</template>
```

## States

### Disabled TabPanel

```vue
<template>
  <Tabs>
    <TabPanel label="Available">
      <p class="p-4">This tab is available and can be selected.</p>
    </TabPanel>
    <TabPanel label="Coming Soon" disabled>
      <p class="p-4">This content is coming soon.</p>
    </TabPanel>
    <TabPanel label="Premium Feature" disabled badge="Pro" badge-kind="warning">
      <p class="p-4">This feature requires a premium subscription.</p>
    </TabPanel>
  </Tabs>
</template>
```

## Best Practices

- Keep tab labels concise and descriptive
- Use icons to enhance recognition and improve usability
- Use badges sparingly to highlight important information (counts, status, etc.)
- Organize content logically within each panel
- Consider lazy loading for complex content in tabs that aren't immediately visible
- Ensure disabled tabs provide clear feedback about why they're unavailable
- Use consistent padding and spacing within tab panels
- Group related content together in the same tab panel
- Avoid nesting tabs within tabs for better user experience

## Examples

### Settings Panel with Multiple Sections

```vue
<template>
  <Tabs>
    <TabPanel label="General" icon="material-symbols:settings">
      <div class="p-6 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Account Information</h3>
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email" type="email" />
          <TextField label="Phone" type="tel" />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Preferences</h3>
          <Switch label="Email notifications" />
          <Switch label="SMS notifications" />
          <Switch label="Marketing emails" />
        </div>
      </div>
    </TabPanel>

    <TabPanel label="Security" icon="material-symbols:security" badge="2" badge-kind="warning">
      <div class="p-6 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Password</h3>
          <TextField label="Current Password" type="password" />
          <TextField label="New Password" type="password" />
          <TextField label="Confirm Password" type="password" />
          <Action kind="primary">Update Password</Action>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
          <div class="p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg">
            <p class="text-warning-700 dark:text-warning-300 mb-2">
              Two-factor authentication is not enabled
            </p>
            <Action kind="warning">Enable 2FA</Action>
          </div>
        </div>
      </div>
    </TabPanel>

    <TabPanel label="Billing" icon="material-symbols:credit-card">
      <div class="p-6">
        <h3 class="text-lg font-semibold mb-4">Subscription</h3>
        <Card>
          <div>
            <h4 class="font-semibold">Pro Plan</h4>
            <p class="text-sm text-base-600">$29/month</p>
            <Badge label="Active" kind="success" />
          </div>
        </Card>
      </div>
    </TabPanel>
  </Tabs>
</template>
```

### Dynamic Content Loading

```vue
<template>
  <Tabs @tab-change="handleTabChange">
    <TabPanel 
      v-for="category in categories" 
      :key="category.id"
      :label="category.name"
      :badge="category.count"
      :icon="category.icon"
    >
      <div class="p-4">
        <div v-if="loading[category.id]" class="text-center py-8">
          <Progress :model-value="50" size="sm" class="max-w-xs mx-auto mb-2" />
          <p class="text-base-500">Loading {{ category.name.toLowerCase() }}...</p>
        </div>
        
        <div v-else-if="content[category.id]" class="space-y-4">
          <div 
            v-for="item in content[category.id]" 
            :key="item.id"
            class="p-4 border rounded-lg"
          >
            <h4 class="font-semibold">{{ item.title }}</h4>
            <p class="text-sm text-base-600 mt-1">{{ item.description }}</p>
          </div>
        </div>
        
        <div v-else class="text-center py-8">
          <p class="text-base-500">No {{ category.name.toLowerCase() }} available.</p>
        </div>
      </div>
    </TabPanel>
  </Tabs>
</template>

<script setup>
const categories = [
  { id: 'articles', name: 'Articles', icon: 'material-symbols:article', count: '12' },
  { id: 'videos', name: 'Videos', icon: 'material-symbols:play-circle', count: '8' },
  { id: 'tutorials', name: 'Tutorials', icon: 'material-symbols:school', count: '5' }
];

const loading = ref({});
const content = ref({});

async function handleTabChange(tabIndex) {
  const category = categories[tabIndex];
  if (!content.value[category.id] && !loading.value[category.id]) {
    loading.value[category.id] = true;
    try {
      const data = await fetchCategoryContent(category.id);
      content.value[category.id] = data;
    } finally {
      loading.value[category.id] = false;
    }
  }
}
</script>
```
