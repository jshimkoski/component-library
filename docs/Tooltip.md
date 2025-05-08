# Tooltip

## Overview

The Tooltip component provides a way to display additional information when users hover over or interact with an element. Tooltips are useful for providing context, explanations, or extra details without cluttering the interface.

## Basic Usage

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Tooltip text="This is a simple tooltip">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Hover me</button>
  </Tooltip>
</div>

```vue
<Tooltip text="This is a simple tooltip">
  <button>Hover me</button>
</Tooltip>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `text` | String | `""` | The text content to display in the tooltip. |
| `type` | `"plain" \| "rich"` | `"plain"` | Determines the tooltip style - "plain" for simple tooltips, "rich" for more complex content with padding. |
| `placement` | String | `"top"` | Position of the tooltip relative to the trigger element. Possible values include "top", "bottom", "left", "right", etc. |
| `open` | Boolean (v-model) | - | Controls whether the tooltip is visible. Can be bound with v-model:open. |

## Slots

| Name | Description |
|------|-------------|
| `default` | The triggering element that will show the tooltip on hover. Provides access to open state and toggle function. |
| `text` | Custom content for the tooltip. Falls back to the `text` prop if not provided. |

## Variants/Options

### Rich Tooltip

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Tooltip type="rich" placement="bottom">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Hover for rich tooltip</button>
    <template #text>
      <h3 class="font-bold">Custom tooltip</h3>
      <p>This is a rich tooltip with custom content</p>
    </template>
  </Tooltip>
</div>

```vue
<Tooltip type="rich" placement="bottom">
  <button>Hover for rich tooltip</button>
  <template #text>
    <h3 class="font-bold">Custom tooltip</h3>
    <p>This is a rich tooltip with custom content</p>
  </template>
</Tooltip>
```

### Different Placements

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4 flex gap-4">
  <Tooltip text="Placed on top" placement="top">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Top</button>
  </Tooltip>
  <Tooltip text="Placed on bottom" placement="bottom">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Bottom</button>
  </Tooltip>
  <Tooltip text="Placed on left" placement="left">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Left</button>
  </Tooltip>
  <Tooltip text="Placed on right" placement="right">
    <button class="px-3 py-1 bg-primary-500 text-white rounded">Right</button>
  </Tooltip>
</div>

```vue
<Tooltip text="Placed on top" placement="top">
  <button>Top</button>
</Tooltip>

<Tooltip text="Placed on bottom" placement="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip text="Placed on left" placement="left">
  <button>Left</button>
</Tooltip>

<Tooltip text="Placed on right" placement="right">
  <button>Right</button>
</Tooltip>
```

## Programmatic Control

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Tooltip v-model:open="tooltipOpen" text="This tooltip is controlled programmatically">
    <button 
      class="px-3 py-1 bg-primary-500 text-white rounded"
      @click="tooltipOpen = !tooltipOpen"
    >
      Click to toggle tooltip
    </button>
  </Tooltip>
</div>

```vue
<script setup>
  const tooltipOpen = ref(false);
</script>

<template>
  <Tooltip v-model:open="tooltipOpen" text="This tooltip is controlled programmatically">
    <button @click="tooltipOpen = !tooltipOpen">
      Click to toggle tooltip
    </button>
  </Tooltip>
</template>
```

## Best Practices

- Use tooltips for supplementary information that doesn't need to be visible all the time
- Keep tooltip content brief and to the point
- Use "plain" tooltips for simple text hints and "rich" tooltips for more complex content
- Ensure that critical information is not solely contained in tooltips, as they may not be accessible on all devices
- Consider the placement carefully to avoid obscuring other important content
- For interactive content within tooltips, use the "rich" type to provide the hover delay when leaving the trigger

## Accessibility Considerations

- Tooltip content should be perceivable by all users, including those using screen readers
- Consider adding aria-label or aria-labelledby to the triggering element to provide an accessible name
- The component uses hover detection which may not be available on touchscreen devices, so ensure critical information is accessible through other means

## Examples

### Tooltip in a Form Context

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex items-center gap-2">
    <label for="example-input">Username</label>
    <Tooltip type="rich" placement="right">
      <button class="rounded-full w-5 h-5 bg-base-200 dark:bg-base-700 flex items-center justify-center">
        <span class="text-xs">?</span>
      </button>
      <template #text>
        <div>
          <p>Choose a username that is:</p>
          <ul class="list-disc pl-5">
            <li>Between 3-20 characters</li>
            <li>Contains only letters, numbers, and underscores</li>
            <li>Not already taken by another user</li>
          </ul>
        </div>
      </template>
    </Tooltip>
  </div>
  <input id="example-input" type="text" class="border rounded px-2 py-1 mt-1 w-full" />
</div>

```vue
<div class="flex items-center gap-2">
  <label for="example-input">Username</label>
  <Tooltip type="rich" placement="right">
    <button class="rounded-full w-5 h-5 bg-base-200 dark:bg-base-700 flex items-center justify-center">
      <span class="text-xs">?</span>
    </button>
    <template #text>
      <div>
        <p>Choose a username that is:</p>
        <ul class="list-disc pl-5">
          <li>Between 3-20 characters</li>
          <li>Contains only letters, numbers, and underscores</li>
          <li>Not already taken by another user</li>
        </ul>
      </div>
    </template>
  </Tooltip>
</div>
<input id="example-input" type="text" class="border rounded px-2 py-1 mt-1 w-full" />
```