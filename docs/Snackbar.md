# Snackbar

## Overview

The Snackbar component displays brief messages at the bottom or top of the screen. It's commonly used for providing feedback about an operation, such as confirming an action was completed, alerting users to a condition, or providing a brief message with an optional action.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="basicSnackbar = true">Show Snackbar</Action>
  <Snackbar 
    v-model="basicSnackbar"
    message="This is a basic snackbar message"
  />
</div>

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

## Variants/Options

### Different Kinds

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
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
  
  <Action @click="infoSnackbar = true">Info</Action>
  <Snackbar 
    v-model="infoSnackbar"
    kind="info"
    message="Here's some useful information"
  />
  
  <Action @click="warningSnackbar = true">Warning</Action>
  <Snackbar 
    v-model="warningSnackbar"
    kind="warning"
    message="Please be aware of this issue"
  />
  
  <Action @click="dangerSnackbar = true">Danger</Action>
  <Snackbar 
    v-model="dangerSnackbar"
    kind="danger"
    message="An error has occurred"
  />
  
  <Action @click="secondarySnackbar = true">Secondary</Action>
  <Snackbar 
    v-model="secondarySnackbar"
    kind="secondary"
    message="Additional information here"
  />
</div>

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
  
  <!-- Additional examples similar to the above -->
</template>
```

### Different Positions

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action @click="topSnackbar = true">Top</Action>
  <Snackbar 
    v-model="topSnackbar"
    position="top"
    message="Positioned at the top center"
  />
  
  <Action @click="bottomSnackbar = true">Bottom</Action>
  <Snackbar 
    v-model="bottomSnackbar"
    position="bottom"
    message="Positioned at the bottom center"
  />
  
  <Action @click="topLeftSnackbar = true">Top Left</Action>
  <Snackbar 
    v-model="topLeftSnackbar"
    position="top-left"
    message="Positioned at the top left"
  />
  
  <Action @click="topRightSnackbar = true">Top Right</Action>
  <Snackbar 
    v-model="topRightSnackbar"
    position="top-right"
    message="Positioned at the top right"
  />
  
  <Action @click="bottomLeftSnackbar = true">Bottom Left</Action>
  <Snackbar 
    v-model="bottomLeftSnackbar"
    position="bottom-left"
    message="Positioned at the bottom left"
  />
  
  <Action @click="bottomRightSnackbar = true">Bottom Right</Action>
  <Snackbar 
    v-model="bottomRightSnackbar"
    position="bottom-right"
    message="Positioned at the bottom right"
  />
</div>

```vue
<script setup>
const topSnackbar = ref(false);
const bottomSnackbar = ref(false);
const topLeftSnackbar = ref(false);
const topRightSnackbar = ref(false);
const bottomLeftSnackbar = ref(false);
const bottomRightSnackbar = ref(false);
</script>

<template>
  <Action @click="topSnackbar = true">Top</Action>
  <Snackbar 
    v-model="topSnackbar"
    position="top"
    message="Positioned at the top center"
  />
  
  <!-- Additional examples similar to the above -->
</template>
```

### With Title

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="titledSnackbar = true">Show Snackbar with Title</Action>
  <Snackbar 
    v-model="titledSnackbar"
    title="Success!"
    message="Your changes have been saved"
    kind="success"
  />
</div>

```vue
<script setup>
const titledSnackbar = ref(false);
</script>

<template>
  <Action @click="titledSnackbar = true">Show Snackbar with Title</Action>
  <Snackbar 
    v-model="titledSnackbar"
    title="Success!"
    message="Your changes have been saved"
    kind="success"
  />
</template>
```

### With Action Button

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="actionSnackbar = true">Show Snackbar with Action</Action>
  <Snackbar 
    v-model="actionSnackbar"
    message="Item deleted"
    action-label="Undo"
    kind="info"
    @action="handleUndo"
  />
</div>

```vue
<script setup>
const actionSnackbar = ref(false);

function handleUndo() {
  // Logic to undo the deletion
  console.log("Undo action triggered");
}
</script>

<template>
  <Action @click="actionSnackbar = true">Show Snackbar with Action</Action>
  <Snackbar 
    v-model="actionSnackbar"
    message="Item deleted"
    action-label="Undo"
    kind="info"
    @action="handleUndo"
  />
</template>
```

### Without Auto-Close

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="persistentSnackbar = true">Show Persistent Snackbar</Action>
  <Snackbar 
    v-model="persistentSnackbar"
    message="This snackbar will remain until dismissed"
    kind="warning"
    :auto-close="false"
  />
</div>

```vue
<script setup>
const persistentSnackbar = ref(false);
</script>

<template>
  <Action @click="persistentSnackbar = true">Show Persistent Snackbar</Action>
  <Snackbar 
    v-model="persistentSnackbar"
    message="This snackbar will remain until dismissed"
    kind="warning"
    :auto-close="false"
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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4" @submit.prevent="showFormSubmitSnackbar">
    <TextField label="Name" required />
    <TextField label="Email" type="email" required />
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Submit Form</Action>
    </div>
  </form>
  <Snackbar 
    v-model="formSubmitSnackbar"
    title="Form Submitted"
    message="Thank you for your submission!"
    kind="success"
  />
</div>

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
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Submit Form</Action>
    </div>
  </form>
  <Snackbar 
    v-model="formSubmitSnackbar"
    title="Form Submitted"
    message="Thank you for your submission!"
    kind="success"
  />
</template>
```

### Error with Action

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="errorSnackbar = true">Simulate Error</Action>
  <Snackbar 
    v-model="errorSnackbar"
    title="Connection Error"
    message="Failed to connect to the server"
    kind="danger"
    action-label="Retry"
    @action="handleRetry"
  />
</div>

```vue
<script setup>
const errorSnackbar = ref(false);

function handleRetry() {
  // Logic to retry the failed operation
  errorSnackbar.value = false;
  // Simulate a retry after a brief delay
  setTimeout(() => {
    // If retry is successful, show success message
    successRetrySnackbar.value = true;
  }, 1000);
}

const successRetrySnackbar = ref(false);
</script>

<template>
  <Action @click="errorSnackbar = true">Simulate Error</Action>
  <Snackbar 
    v-model="errorSnackbar"
    title="Connection Error"
    message="Failed to connect to the server"
    kind="danger"
    action-label="Retry"
    @action="handleRetry"
  />
  
  <Snackbar 
    v-model="successRetrySnackbar"
    message="Connection restored successfully"
    kind="success"
  />
</template>
```