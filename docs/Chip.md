# Chip

## Overview

The Chip component displays compact information elements or interactive labels. Chips are commonly used for categories, tags, filters, or contact information, allowing users to scan and select options quickly.

## Basic Usage

```vue
<template>
  <Chip label="New Feature" />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | Text content displayed in the chip. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme of the chip. |
| `variant` | `"solid" \| "subtle"` | `"solid"` | Visual style variant of the chip. |
| `href` | String | `undefined` | URL for the chip when used as a link. |
| `target` | String | `undefined` | Target attribute for the link (e.g., "_blank"). |
| `rel` | String | `undefined` | Rel attribute for the link. |
| `disabled` | Boolean | `false` | When true, the chip is disabled and not interactive. |
| `active` | Boolean | `false` | When true, indicates the chip is in an active state. |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | The button type when rendered as a button. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `click` | `(event: MouseEvent)` | Emitted when the chip is clicked. |

## Different Kinds

```vue
<template>
  <Chip label="Primary" kind="primary" />
  <Chip label="Secondary" kind="secondary" />
  <Chip label="Success" kind="success" />
  <Chip label="Info" kind="info" />
  <Chip label="Warning" kind="warning" />
  <Chip label="Danger" kind="danger" />
</template>
```

## Interactive Chips (Button)

```vue
<template>
  <Chip label="Click me" @click="handleClick" />
  <Chip label="Submit" type="submit" kind="success" />
</template>
```

## Link Chips

```vue
<template>
  <Chip label="Documentation" href="#" />
  <Chip label="External Link" href="#" target="_blank" rel="noopener" kind="info" />
</template>
```

## States

### Disabled

```vue
<template>
  <Chip label="Disabled" disabled />
  <Chip label="Disabled Link" href="#" disabled kind="secondary" />
</template>
```

### Active

```vue
<template>
  <Chip label="Active" active />
  <Chip label="Active Warning" active kind="warning" />
</template>
```

## Best Practices

- Keep text concise, ideally 1-2 words
- Use colors consistently to represent meaning across your application
- Choose appropriate colors based on the context:
  - `primary`: For main features or functionality
  - `secondary`: For less emphasized options
  - `success`: For confirmation or positive indicators
  - `info`: For informational or neutral indicators
  - `warning`: For caution or attention-requiring features
  - `danger`: For error states or destructive actions
- For interactive chips, ensure sufficient touch target size
- Group related chips together for better usability

## Accessibility Considerations

- Interactive chips (buttons/links) have appropriate focus states
- Disabled chips have proper ARIA attributes
- When using chips for filtering or selection, consider including state information (e.g., "selected" or "active")
- Ensure color is not the only means of conveying information

## Examples

### Category Tags

```vue
<template>
  <div class="mb-2">Product Categories:</div>
  <Chip 
    v-for="category in categories" 
    :key="category.id"
    :label="category.name"
    :kind="category.kind"
  />
</template>
```

### Filter Selection

```vue
<script setup>
const activeFilter = ref('all');

function setFilter(filter) {
  activeFilter.value = filter;
}
</script>

<template>
  <div class="mb-2">Filter by:</div>
  <Chip 
    label="All" 
    :active="activeFilter === 'all'"
    @click="setFilter('all')"
  />

  <Chip 
    label="Recent" 
    :active="activeFilter === 'recent'"
    @click="setFilter('recent')"
  />

  <Chip 
    label="Popular" 
    :active="activeFilter === 'popular'"
    @click="setFilter('popular')"
  />

  <Chip 
    label="Trending" 
    :active="activeFilter === 'trending'"
    @click="setFilter('trending')"
  />
</template>
```

### Status Indicators

```vue
<template>
  <div v-for="order in orders" :key="order.id" class="flex items-center">
      Order #{{ order.id }}:
      <Chip 
        :label="order.status" 
        :kind="getStatusKind(order.status)" 
      />
  </div>
</template>
```
