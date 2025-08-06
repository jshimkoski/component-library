# Snackbar

## Overview

The Snackbar component displays brief messages at the bottom or top of the screen. It's commonly used for providing feedback about an operation, such as confirming an action was completed, alerting users to a condition, or providing a brief message with an optional action.

## Basic Usage

```vue
<script setup>
const basicSnackbar = ref(false);
</script>

<template>
  <Action @click="basicSnackbar = true">Show Snackbar</Action>
  <Snackbar 
    v-model="basicSnackbar"
    message="This is a basic snackbar message"
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `message` | String | `undefined` | The main text content of the snackbar. |
| `title` | String | `undefined` | Optional title text to display above the main message. |
| `kind` | `"primary" \| "success" \| "info" \| "warning" \| "danger" \| "secondary"` | `"primary"` | The style variant of the snackbar. |
| `position` | `"top" \| "bottom" \| "top-left" \| "top-right" \| "bottom-left" \| "bottom-right"` | `"bottom-right"` | Position of the snackbar on the screen. |
| `showIcon` | Boolean | `true` | Whether to display the status icon. |
| `dismissible` | Boolean | `true` | Whether the snackbar can be manually closed by the user. |
| `autoClose` | Boolean | `true` | Whether the snackbar should automatically close after a certain duration. |
| `duration` | Number | `5000` | Time in milliseconds before the snackbar automatically closes (when autoClose is true). |
| `actionLabel` | String | `undefined` | Text for an optional action button. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `action` | None | Emitted when the action button is clicked. |
| `dismiss` | None | Emitted when the snackbar is dismissed (either manually or automatically). |
| `close` | None | Emitted when the snackbar is closed automatically due to the duration timeout. |

## v-model

The component supports v-model for controlling the snackbar's visibility.

## Slots

| Name | Description |
|------|-------------|
| `default` | Main content of the snackbar. Falls back to the `message` prop if not provided. |

## Different Kinds

```vue
<script setup>
const primarySnackbar = ref(false);
const successSnackbar = ref(false);
const infoSnackbar = ref(false);
const warningSnackbar = ref(false);
const dangerSnackbar = ref(false);
const secondarySnackbar = ref(false);
</script>

<template>
  <Action @click="primarySnackbar = true">Primary</Action>
  <Snackbar 
    v-model="primarySnackbar"
    kind="primary"
    message="This is a primary snackbar"
  />

  <Action @click="successSnackbar = true">Success</Action>
  <Snackbar 
    v-model="successSnackbar"
    kind="success"
    message="Operation completed successfully"
  />
</template>
```

## Best Practices

- Keep snackbar messages concise and clear
- Use the appropriate `kind` to reflect the nature of the message:
  - `success`: For successful operations
  - `info`: For neutral informational messages
  - `warning`: For potential issues that need attention
  - `danger`: For errors or critical issues
  - `primary`: For general application messages
  - `secondary`: For less important notifications
- Position snackbars consistently throughout your application
- For important messages that shouldn't be missed, consider using `:auto-close="false"`
- Avoid showing multiple snackbars simultaneously, as it can overwhelm users
- Include an action button only when there's a clear and immediate action the user might want to take

## Accessibility Considerations

- Snackbars use `role="status"` and `aria-live="polite"` to ensure they're announced by screen readers
- The component automatically pauses its auto-close timer when hovered or focused, allowing users more time to read
- Dismissible snackbars have a properly labeled close button
- The component handles focus management appropriately

## Examples

### Form Submission Feedback

```vue
<script setup>
const formSubmitSnackbar = ref(false);

function showFormSubmitSnackbar() {
  // Form validation and submission logic would go here
  formSubmitSnackbar.value = true;
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="showFormSubmitSnackbar">
    <TextField v-model="name" label="Name" required />
    <TextField v-model="email" label="Email" type="email" required />
    <Action kind="primary" type="submit">Submit Form</Action>
  </form>
  <Snackbar 
    v-model="formSubmitSnackbar"
    title="Form Submitted"
    message="Thank you for your submission!"
    kind="success"
  />
</template>
```
