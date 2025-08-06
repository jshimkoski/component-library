# Tooltip

## Overview

The Tooltip component provides a way to display additional information when users hover over or interact with an element. Tooltips are useful for providing context, explanations, or extra details without cluttering the interface.

## Basic Usage

```vue
<template>
  <Tooltip text="This is a simple tooltip">
    <Action>Hover me</Action>
  </Tooltip>
</template>
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

## Rich Tooltip

```vue
<template>
  <Tooltip type="rich" placement="bottom">
    <Action>Hover for rich tooltip</Action>
    <template #text>
      <h3>Custom tooltip</h3>
      <p>This is a rich tooltip with custom content</p>
    </template>
  </Tooltip>
</template>
```

## Different Placements

```vue
<template>
  <Tooltip text="Placed on top" placement="top">
    <Action>Top</Action>
  </Tooltip>

  <Tooltip text="Placed on bottom" placement="bottom">
    <Action>Bottom</Action>
  </Tooltip>

  <Tooltip text="Placed on left" placement="left">
    <Action>Left</Action>
  </Tooltip>

  <Tooltip text="Placed on right" placement="right">
    <Action>Right</Action>
  </Tooltip>
</template>
```

## Programmatic Control

```vue
<script setup>
  const tooltipOpen = ref(false);
</script>

<template>
  <Tooltip v-model:open="tooltipOpen" text="This tooltip is controlled programmatically">
    <Action @click="tooltipOpen = !tooltipOpen">
      Click to toggle tooltip
    </Action>
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

```vue
<template>
  <label>Username</label>
  <Tooltip type="rich" placement="right">
    <Action size="sm" variant="ghost">?</Action>
    <template #text>
      <p>Choose a username that is:</p>
      <ul>
        <li>Between 3-20 characters</li>
        <li>Contains only letters, numbers, and underscores</li>
        <li>Not already taken by another user</li>
      </ul>
    </template>
  </Tooltip>
  <TextField />
</template>
```
