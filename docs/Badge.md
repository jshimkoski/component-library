# Badge

## Overview

The Badge component is a small visual indicator typically used to highlight status, notify counts, or draw attention to specific elements within a user interface. It's designed to be compact, distinctive, and immediately noticeable.

## Basic Usage

```vue
<template>
  <Badge label="New" />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | Text content to display in the badge. When undefined, renders as a small dot. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"danger"` | Color theme of the badge. |

## Kinds

```vue
<template>
  <Badge label="Primary" kind="primary" />
  <Badge label="Secondary" kind="secondary" />
  <Badge label="Success" kind="success" />
  <Badge label="Info" kind="info" />
  <Badge label="Warning" kind="warning" />
  <Badge label="Danger" kind="danger" />
</template>
```

## Dot Variant (No Label)

```vue
<template>
  <Badge kind="primary" />
  <Badge kind="secondary" />
  <Badge kind="success" />
  <Badge kind="info" />
  <Badge kind="warning" />
  <Badge kind="danger" />
</template>
```

## Best Practices

- Use badges sparingly to avoid visual clutter
- Choose an appropriate `kind` to align with the information being conveyed:
  - `primary`: For general highlights or main features
  - `secondary`: For less prominent highlights
  - `success`: For positive status or completed actions
  - `info`: For informational or neutral status
  - `warning`: For alerts that need attention but aren't critical
  - `danger`: For errors, alerts, or critical information
- Keep label text concise (ideally 1-3 characters or a very short word)
- For numeric badges showing counts, consider truncating large numbers (e.g., "99+" instead of "145")
- Place badges close to the elements they relate to for clear association

## Accessibility Considerations

- Badges are set as `pointer-events-none` to ensure they don't interfere with the interaction of their parent elements
- When using badge dots (without labels), ensure the parent element has appropriate aria attributes for screen readers
- The small text size may be difficult for some users to read, so don't rely solely on badge text for critical information
- Ensure sufficient contrast between badge color and text

## Examples

### Notification Badge

```vue
<template>
  <Action icon="material-symbols:notifications">
    <Badge label="5" kind="danger" />
  </Action>
</template>
```

### Status Indicators

```vue
<template>
  <Badge kind="success" /> Online
  <Badge kind="warning" /> Away  
  <Badge kind="danger" /> Offline
</template>
```

### Feature Tags

```vue
<template>
  Enhanced Security <Badge label="New" kind="primary" />
  Dark Mode <Badge label="Beta" kind="info" />
  Legacy Integration <Badge label="Deprecated" kind="warning" />
</template>
```
