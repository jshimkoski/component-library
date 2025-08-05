# Action

## Overview

The Action component is a versatile interactive element that can be rendered as either a button or an anchor tag. It provides consistent styling options across the application while supporting various states, sizes, and visual variants.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action label="Click me" />
</div>

```vue
<Action label="Click me" />
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | String | `undefined` | Icon name from Iconify to display in the action. |
| `label` | String | `undefined` | Text content for the action. |
| `iconOnly` | Boolean | `false` | When true, visually hides the label but keeps it accessible for screen readers. |
| `href` | String | `undefined` | URL for anchor tag. When provided, renders as `<a>` instead of `<button>`. |
| `target` | String | `undefined` | Target attribute for anchor tag (e.g., "_blank"). |
| `rel` | String | `undefined` | Rel attribute for anchor tag. |
| `disabled` | Boolean | `false` | Disables the action. |
| `active` | Boolean | `false` | Applies active state styling. |
| `type` | String | `"button"` | Button type attribute ("button", "submit", "reset"). |
| `variant` | `"solid" \| "outline" \| "ghost" \| "link"` | `undefined` | Visual style of the action. Default is determined by the tag type. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `undefined` | Color theme of the action. |
| `activeKind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme when in active state. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size of the action. |
| `square` | Boolean | `false` | Makes the action square-shaped with equal padding on all sides. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `click` | `(event: MouseEvent)` | Emitted when the action is clicked. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content of the action. Receives `label` prop as a slot prop. |

## Variants/Options

### Kinds

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action kind="primary">Primary</Action>
  <Action kind="secondary">Secondary</Action>
  <Action kind="success">Success</Action>
  <Action kind="info">Info</Action>
  <Action kind="warning">Warning</Action>
  <Action kind="danger">Danger</Action>
</div>

```vue
<Action kind="primary">Primary</Action>
<Action kind="secondary">Secondary</Action>
<Action kind="success">Success</Action>
<Action kind="info">Info</Action>
<Action kind="warning">Warning</Action>
<Action kind="danger">Danger</Action>
```

### Visual Variants

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action kind="primary" variant="solid">Solid</Action>
  <Action kind="primary" variant="outline">Outline</Action>
  <Action kind="primary" variant="ghost">Ghost</Action>
  <Action kind="primary" variant="link">Link</Action>
</div>

```vue
<Action kind="primary" variant="solid">Solid</Action>
<Action kind="primary" variant="outline">Outline</Action>
<Action kind="primary" variant="ghost">Ghost</Action>
<Action kind="primary" variant="link">Link</Action>
```

### Sizes

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap items-center gap-2">
  <Action size="xs">Extra Small</Action>
  <Action size="sm">Small</Action>
  <Action size="md">Medium</Action>
  <Action size="lg">Large</Action>
  <Action size="xl">Extra Large</Action>
</div>

```vue
<Action size="xs">Extra Small</Action>
<Action size="sm">Small</Action>
<Action size="md">Medium</Action>
<Action size="lg">Large</Action>
<Action size="xl">Extra Large</Action>
```

### Square Actions

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap items-center gap-2">
  <Action square size="xs">
    <Icon icon="material-symbols:check" width="16" height="16" />
  </Action>
  <Action square size="sm">
    <Icon icon="material-symbols:check" width="16" height="16" />
  </Action>
  <Action square size="md">
    <Icon icon="material-symbols:check" width="20" height="20" />
  </Action>
  <Action square size="lg">
    <Icon icon="material-symbols:check" width="24" height="24" />
  </Action>
  <Action square size="xl">
    <Icon icon="material-symbols:check" width="32" height="32" />
  </Action>
</div>

```vue
<Action square size="md">
  <Icon icon="material-symbols:check" width="20" height="20" />
</Action>
```

## States

### Disabled

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action disabled>Disabled Button</Action>
  <Action disabled kind="primary" variant="solid">Disabled Primary</Action>
  <Action disabled kind="danger" variant="outline">Disabled Outline</Action>
</div>

```vue
<Action disabled>Disabled Button</Action>
<Action disabled kind="primary" variant="solid">Disabled Primary</Action>
<Action disabled kind="danger" variant="outline">Disabled Outline</Action>
```

### Active

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action active>Active Default</Action>
  <Action active activeKind="primary">Active Primary</Action>
  <Action active activeKind="success">Active Success</Action>
  <Action active activeKind="danger">Active Danger</Action>
</div>

```vue
<Action active>Active Default</Action>
<Action active activeKind="primary">Active Primary</Action>
<Action active activeKind="success">Active Success</Action>
<Action active activeKind="danger">Active Danger</Action>
```

## Link Actions

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action href="#" target="_blank">Link Button</Action>
  <Action href="#" kind="primary" variant="solid">Primary Link</Action>
  <Action href="#" kind="info" variant="link">Info Link Style</Action>
</div>

```vue
<Action href="#" target="_blank">Link Button</Action>
<Action href="#" kind="primary" variant="solid">Primary Link</Action>
<Action href="#" kind="info" variant="link">Info Link Style</Action>
```

## Best Practices

- Use the appropriate `kind` to convey the purpose of the action (e.g., `danger` for destructive actions)
- Choose the appropriate `variant` based on visual prominence needed:
  - `solid`: Primary actions with high emphasis
  - `outline`: Secondary actions with medium emphasis
  - `ghost`: Tertiary actions with low emphasis
  - `link`: Text-only actions for minimal emphasis
- Use the `square` prop when incorporating icons without text to maintain equal dimensions
- Ensure sufficient contrast between text and background colors
- Include descriptive text or aria-labels for icon-only buttons

## Accessibility Considerations

- When using icon-only actions, provide an accessible name either via the `label` prop or an `aria-label` attribute
- Focus states are visible for keyboard navigation
- The component ensures appropriate attributes are set based on the rendered element type (button or anchor)
- Disabled actions have appropriate visual styling and ARIA attributes

## Examples

### Button Group

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex gap-1">
    <Action kind="primary">Save</Action>
    <Action variant="outline">Cancel</Action>
  </div>
</div>

```vue
<div class="flex gap-1">
  <Action kind="primary">Save</Action>
  <Action variant="outline">Cancel</Action>
</div>
```

### Icon with Text

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action kind="primary">
    <Icon icon="material-symbols:save" width="16" height="16" class="mr-1" />
    Save
  </Action>
  <Action kind="danger" variant="outline">
    <Icon icon="material-symbols:delete" width="16" height="16" class="mr-1" />
    Delete
  </Action>
</div>

```vue
<Action kind="primary">
  <Icon icon="material-symbols:save" width="16" height="16" class="mr-1" />
  Save
</Action>
```

### Form Submit Button

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="flex flex-col gap-4">
    <div>
      <label class="block mb-1">Email</label>
      <input type="email" class="border rounded px-2 py-1 w-full" />
    </div>
    <div>
      <Action type="submit" kind="primary" size="lg" class="w-full">Sign In</Action>
    </div>
  </form>
</div>

```vue
<form @submit.prevent="submitForm">
  <div class="flex flex-col gap-4">
    <div>
      <label class="block mb-1">Email</label>
      <input v-model="email" type="email" class="border rounded px-2 py-1 w-full" />
    </div>
    <div>
      <Action type="submit" kind="primary" size="lg" class="w-full">Sign In</Action>
    </div>
  </div>
</form>
```