# Chip

## Overview

The Chip component displays compact information elements or interactive labels. Chips are commonly used for categories, tags, filters, or contact information, allowing users to scan and select options quickly.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Chip label="New Feature" />
</div>

```vue
<Chip label="New Feature" />
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

## Variants/Options

### Different Kinds

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Chip label="Primary" kind="primary" />
  <Chip label="Secondary" kind="secondary" />
  <Chip label="Success" kind="success" />
  <Chip label="Info" kind="info" />
  <Chip label="Warning" kind="warning" />
  <Chip label="Danger" kind="danger" />
</div>

```vue
<Chip label="Primary" kind="primary" />
<Chip label="Secondary" kind="secondary" />
<Chip label="Success" kind="success" />
<Chip label="Info" kind="info" />
<Chip label="Warning" kind="warning" />
<Chip label="Danger" kind="danger" />
```

### Interactive Chips (Button)

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Chip label="Click me" @click="handleClick" />
  <Chip label="Submit" type="submit" kind="success" />
</div>

```vue
<Chip label="Click me" @click="handleClick" />
<Chip label="Submit" type="submit" kind="success" />
```

### Link Chips

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Chip label="Documentation" href="#" />
  <Chip label="External Link" href="#" target="_blank" rel="noopener" kind="info" />
</div>

```vue
<Chip label="Documentation" href="#" />
<Chip label="External Link" href="#" target="_blank" rel="noopener" kind="info" />
```

## States

### Disabled

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Chip label="Disabled" disabled />
  <Chip label="Disabled Link" href="#" disabled kind="secondary" />
</div>

```vue
<Chip label="Disabled" disabled />
<Chip label="Disabled Link" href="#" disabled kind="secondary" />
```

### Active

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Chip label="Active" active />
  <Chip label="Active Warning" active kind="warning" />
</div>

```vue
<Chip label="Active" active />
<Chip label="Active Warning" active kind="warning" />
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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="mb-2">Product Categories:</div>
  <div class="flex flex-wrap gap-2">
    <Chip label="Electronics" kind="primary" />
    <Chip label="Clothing" kind="secondary" />
    <Chip label="Books" kind="info" />
    <Chip label="Home & Garden" kind="success" />
    <Chip label="Toys" kind="warning" />
  </div>
</div>

```vue
<div class="mb-2">Product Categories:</div>
<div class="flex flex-wrap gap-2">
  <Chip 
    v-for="category in categories" 
    :key="category.id"
    :label="category.name"
    :kind="category.kind"
  />
</div>
```

### Filter Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="mb-2">Filter by:</div>
  <div class="flex flex-wrap gap-2">
    <Chip label="All" active />
    <Chip label="Recent" />
    <Chip label="Popular" />
    <Chip label="Trending" />
  </div>
</div>

```vue
<script setup>
const activeFilter = ref('all');

function setFilter(filter) {
  activeFilter.value = filter;
}
</script>

<template>
  <div class="mb-2">Filter by:</div>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>
```

### Status Indicators

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex flex-col gap-3">
    <div class="flex items-center">
      <span class="w-24">Order #1234:</span>
      <Chip label="Shipped" kind="success" />
    </div>
    <div class="flex items-center">
      <span class="w-24">Order #5678:</span>
      <Chip label="Processing" kind="warning" />
    </div>
    <div class="flex items-center">
      <span class="w-24">Order #9012:</span>
      <Chip label="Cancelled" kind="danger" />
    </div>
  </div>
</div>

```vue
<div class="flex flex-col gap-3">
  <div v-for="order in orders" :key="order.id" class="flex items-center">
    <span class="w-24">Order #{{ order.id }}:</span>
    <Chip 
      :label="order.status" 
      :kind="getStatusKind(order.status)" 
    />
  </div>
</div>
```