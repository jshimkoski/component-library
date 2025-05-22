# Badge

## Overview

The Badge component is a small visual indicator typically used to highlight status, notify counts, or draw attention to specific elements within a user interface. It's designed to be compact, distinctive, and immediately noticeable.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Badge label="New" />
</div>

```vue
<Badge label="New" />
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | Text content to display in the badge. When undefined, renders as a small dot. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"danger"` | Color theme of the badge. |

## Variants/Options

### Kinds

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Badge label="Primary" kind="primary" />
  <Badge label="Secondary" kind="secondary" />
  <Badge label="Success" kind="success" />
  <Badge label="Info" kind="info" />
  <Badge label="Warning" kind="warning" />
  <Badge label="Danger" kind="danger" />
</div>

```vue
<Badge label="Primary" kind="primary" />
<Badge label="Secondary" kind="secondary" />
<Badge label="Success" kind="success" />
<Badge label="Info" kind="info" />
<Badge label="Warning" kind="warning" />
<Badge label="Danger" kind="danger" />
```

### Dot Variant (No Label)

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-4">
  <Badge kind="primary" />
  <Badge kind="secondary" />
  <Badge kind="success" />
  <Badge kind="info" />
  <Badge kind="warning" />
  <Badge kind="danger" />
</div>

```vue
<Badge kind="primary" />
<Badge kind="secondary" />
<Badge kind="success" />
<Badge kind="info" />
<Badge kind="warning" />
<Badge kind="danger" />
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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="relative inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    <span class="absolute -top-1 -right-1">
      <Badge label="5" kind="danger" />
    </span>
  </div>
</div>

```vue
<div class="relative inline-block">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
  <span class="absolute -top-1 -right-1">
    <Badge label="5" kind="danger" />
  </span>
</div>
```

### Status Indicator

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="space-y-2">
    <div class="flex items-center gap-2">
      <Badge kind="success" />
      <span>Online</span>
    </div>
    <div class="flex items-center gap-2">
      <Badge kind="warning" />
      <span>Away</span>
    </div>
    <div class="flex items-center gap-2">
      <Badge kind="danger" />
      <span>Offline</span>
    </div>
  </div>
</div>

```vue
<div class="space-y-2">
  <div class="flex items-center gap-2">
    <Badge kind="success" />
    <span>Online</span>
  </div>
  <div class="flex items-center gap-2">
    <Badge kind="warning" />
    <span>Away</span>
  </div>
  <div class="flex items-center gap-2">
    <Badge kind="danger" />
    <span>Offline</span>
  </div>
</div>
```

### Feature Tags

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex flex-col gap-2">
    <div class="flex items-center">
      <span class="mr-2">Enhanced Security</span>
      <Badge label="New" kind="primary" />
    </div>
    <div class="flex items-center">
      <span class="mr-2">Dark Mode</span>
      <Badge label="Beta" kind="info" />
    </div>
    <div class="flex items-center">
      <span class="mr-2">Legacy Integration</span>
      <Badge label="Deprecated" kind="warning" />
    </div>
  </div>
</div>

```vue
<div class="flex flex-col gap-2">
  <div class="flex items-center">
    <span class="mr-2">Enhanced Security</span>
    <Badge label="New" kind="primary" />
  </div>
  <div class="flex items-center">
    <span class="mr-2">Dark Mode</span>
    <Badge label="Beta" kind="info" />
  </div>
  <div class="flex items-center">
    <span class="mr-2">Legacy Integration</span>
    <Badge label="Deprecated" kind="warning" />
  </div>
</div>
```