# Dialog

## Overview

The Dialog component presents content in a modal overlay, requiring user interaction before they can return to the main interface. Dialogs are useful for confirmations, alerts, form inputs, or displaying critical information that requires immediate attention.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="basicDialog = true">Open Basic Dialog</Action>
  <Dialog 
    v-model="basicDialog"
    headline="Dialog Title"
    text="This is a basic dialog with default settings."
    action-label="Confirm"
  />
</div>

```vue
<script setup>
const basicDialog = ref(false);
</script>

<template>
  <Action @click="basicDialog = true">Open Basic Dialog</Action>
  <Dialog 
    v-model="basicDialog"
    headline="Dialog Title"
    text="This is a basic dialog with default settings."
    action-label="Confirm"
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `triggerElement` | `HTMLElement \| null` | `undefined` | Reference to the element that triggered the dialog. Focus returns to this element when the dialog closes. |
| `variant` | `"basic" \| "fullscreen"` | `"basic"` | Determines the size and layout of the dialog. |
| `headline` | String | `undefined` | The title displayed in the dialog header. |
| `text` | String | `undefined` | The main content text of the dialog. |
| `actionKind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | The color theme for the primary action button. |
| `actionVariant` | `"solid" \| "outline" \| "ghost" \| "link"` | `"ghost"` | The visual style of the primary action button. |
| `actionLabel` | String | `undefined` | Text for the primary action button. If not provided, only the dismiss button is shown. |
| `dismissLabel` | String | `"Close"` | Text for the dismissal button. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `click` | `(event: Event)` | Emitted when the primary action button is clicked. |
| `dismiss` | `(event: Event)` | Emitted when the dialog is dismissed via the close button, clicking outside, or pressing Escape. |

## v-model

The component supports v-model for controlling the dialog's visibility.

## Slots

| Name | Description |
|------|-------------|
| `default` | Main content area of the dialog. Falls back to the `text` prop if not provided. |
| `headline` | Custom headline content. Falls back to the `headline` prop if not provided. |

## Variants/Options

### Basic Dialog

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="standardDialog = true">Open Standard Dialog</Action>
  <Dialog 
    v-model="standardDialog"
    headline="Confirmation"
    action-label="Save Changes"
    action-kind="primary"
  >
    <p>Are you sure you want to save these changes? This action cannot be undone.</p>
  </Dialog>
</div>

```vue
<script setup>
const standardDialog = ref(false);
</script>

<template>
  <Action @click="standardDialog = true">Open Standard Dialog</Action>
  <Dialog 
    v-model="standardDialog"
    headline="Confirmation"
    action-label="Save Changes"
    action-kind="primary"
  >
    <p>Are you sure you want to save these changes? This action cannot be undone.</p>
  </Dialog>
</template>
```

### Fullscreen Dialog

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="fullscreenDialog = true">Open Fullscreen Dialog</Action>
  <Dialog 
    v-model="fullscreenDialog"
    variant="fullscreen"
    headline="Terms and Conditions"
    action-label="Accept"
    action-kind="success"
  >
    <div class="prose prose-sm max-w-none">
      <p>This fullscreen dialog is ideal for displaying longer content that requires the user's full attention.</p>
      <p>You can include extensive text, forms, or other complex content that benefits from using the entire screen.</p>
      <h3>Section 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
      <h3>Section 2</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </Dialog>
</div>

```vue
<script setup>
const fullscreenDialog = ref(false);
</script>

<template>
  <Action @click="fullscreenDialog = true">Open Fullscreen Dialog</Action>
  <Dialog 
    v-model="fullscreenDialog"
    variant="fullscreen"
    headline="Terms and Conditions"
    action-label="Accept"
    action-kind="success"
  >
    <div class="prose prose-sm max-w-none">
      <p>This fullscreen dialog is ideal for displaying longer content that requires the user's full attention.</p>
      <p>You can include extensive text, forms, or other complex content that benefits from using the entire screen.</p>
      <h3>Section 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <h3>Section 2</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit...</p>
    </div>
  </Dialog>
</template>
```

### Different Action Styles

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex flex-wrap gap-2">
  <Action @click="primaryDialog = true">Primary Action</Action>
  <Dialog 
    v-model="primaryDialog"
    headline="Primary Action"
    action-label="Confirm"
    action-kind="primary"
    action-variant="solid"
  >
    This dialog uses a solid primary button for high emphasis.
  </Dialog>
  
  <Action @click="warningDialog = true">Warning Action</Action>
  <Dialog 
    v-model="warningDialog"
    headline="Warning"
    action-label="Proceed"
    action-kind="warning"
    action-variant="outline"
  >
    This action may have consequences. Please review carefully before proceeding.
  </Dialog>
  
  <Action @click="dangerDialog = true">Danger Action</Action>
  <Dialog 
    v-model="dangerDialog"
    headline="Delete Confirmation"
    action-label="Delete"
    action-kind="danger"
    action-variant="solid"
  >
    Are you sure you want to delete this item? This action cannot be undone.
  </Dialog>
</div>

```vue
<script setup>
const primaryDialog = ref(false);
const warningDialog = ref(false);
const dangerDialog = ref(false);
</script>

<template>
  <Action @click="primaryDialog = true">Primary Action</Action>
  <Dialog 
    v-model="primaryDialog"
    headline="Primary Action"
    action-label="Confirm"
    action-kind="primary"
    action-variant="solid"
  >
    This dialog uses a solid primary button for high emphasis.
  </Dialog>
  
  <Action @click="warningDialog = true">Warning Action</Action>
  <Dialog 
    v-model="warningDialog"
    headline="Warning"
    action-label="Proceed"
    action-kind="warning"
    action-variant="outline"
  >
    This action may have consequences. Please review carefully before proceeding.
  </Dialog>
  
  <Action @click="dangerDialog = true">Danger Action</Action>
  <Dialog 
    v-model="dangerDialog"
    headline="Delete Confirmation"
    action-label="Delete"
    action-kind="danger"
    action-variant="solid"
  >
    Are you sure you want to delete this item? This action cannot be undone.
  </Dialog>
</template>
```

## Best Practices

- Use dialogs sparingly to avoid disrupting the user's workflow
- Keep dialog content concise and focused on a single task or message
- Provide clear actions with descriptive labels (avoid generic terms like "OK")
- Use appropriate action colors to indicate the nature of the action:
  - `primary` for standard actions
  - `success` for positive confirmations
  - `warning` for actions requiring careful consideration
  - `danger` for destructive or irreversible actions
- Consider using the fullscreen variant for complex content that requires the user's full attention
- Ensure that dialogs can be dismissed via multiple methods (button, Escape key, clicking outside)

## Accessibility Considerations

- The component uses `aria-modal="true"` to indicate modal behavior to assistive technologies
- Focus is trapped within the dialog when open, preventing users from accidentally interacting with content behind the overlay
- The Escape key can be used to close the dialog
- Focus returns to the triggering element when the dialog is closed (if `triggerElement` is provided)
- The dialog has appropriate ARIA labeling via `aria-labelledby`
- The component manages scroll locking to prevent background content scrolling

## Examples

### Confirmation Dialog

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="confirmDialog = true" kind="danger">Delete Account</Action>
  <Dialog 
    v-model="confirmDialog"
    headline="Delete Account"
    action-label="Delete Permanently"
    action-kind="danger"
    action-variant="solid"
    dismiss-label="Cancel"
    @click="handleDeleteConfirm"
  >
    <p class="mb-4">Are you sure you want to delete your account? This action cannot be undone and will:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li>Permanently remove all your data</li>
      <li>Cancel any active subscriptions</li>
      <li>Remove access to all services</li>
    </ul>
  </Dialog>
</div>

```vue
<script setup>
const confirmDialog = ref(false);

function handleDeleteConfirm() {
  // Perform delete action
  confirmDialog.value = false;
  // Show success notification or redirect
}
</script>

<template>
  <Action @click="confirmDialog = true" kind="danger">Delete Account</Action>
  <Dialog 
    v-model="confirmDialog"
    headline="Delete Account"
    action-label="Delete Permanently"
    action-kind="danger"
    action-variant="solid"
    dismiss-label="Cancel"
    @click="handleDeleteConfirm"
  >
    <p class="mb-4">Are you sure you want to delete your account? This action cannot be undone and will:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li>Permanently remove all your data</li>
      <li>Cancel any active subscriptions</li>
      <li>Remove access to all services</li>
    </ul>
  </Dialog>
</template>
```

### Form Dialog

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Action @click="formDialog = true">Add New Contact</Action>
  <Dialog 
    v-model="formDialog"
    headline="Add New Contact"
    action-label="Save"
    action-kind="primary"
    @click="handleSaveContact"
  >
    <div class="space-y-4">
      <TextField label="Name" placeholder="Enter full name" />
      <TextField label="Email" type="email" placeholder="Enter email address" />
      <TextField label="Phone" type="tel" placeholder="Enter phone number" />
      <Select 
        label="Category" 
        placeholder="Select a category"
        :options="[
          { value: 'personal', label: 'Personal' },
          { value: 'work', label: 'Work' },
          { value: 'other', label: 'Other' }
        ]"
      />
    </div>
  </Dialog>
</div>

```vue
<script setup>
const formDialog = ref(false);
const newContact = reactive({
  name: '',
  email: '',
  phone: '',
  category: ''
});

function handleSaveContact() {
  // Validate and save contact
  formDialog.value = false;
  // Reset form or show success notification
}
</script>

<template>
  <Action @click="formDialog = true">Add New Contact</Action>
  <Dialog 
    v-model="formDialog"
    headline="Add New Contact"
    action-label="Save"
    action-kind="primary"
    @click="handleSaveContact"
  >
    <div class="space-y-4">
      <TextField v-model="newContact.name" label="Name" placeholder="Enter full name" />
      <TextField v-model="newContact.email" label="Email" type="email" placeholder="Enter email address" />
      <TextField v-model="newContact.phone" label="Phone" type="tel" placeholder="Enter phone number" />
      <Select 
        v-model="newContact.category"
        label="Category" 
        placeholder="Select a category"
        :options="[
          { value: 'personal', label: 'Personal' },
          { value: 'work', label: 'Work' },
          { value: 'other', label: 'Other' }
        ]"
      />
    </div>
  </Dialog>
</template>
```