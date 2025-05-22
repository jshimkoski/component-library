# Switch

## Overview

The Switch component provides a toggleable control that allows users to choose between two states. It's commonly used for enabling or disabling features, turning settings on or off, or toggling between binary options. The switch visually represents its state, making it easy for users to understand the current selection.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Switch label="Enable notifications" />
</div>

```vue
<script setup>
const notificationsEnabled = ref(false);
</script>

<template>
  <Switch v-model="notificationsEnabled" label="Enable notifications" />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | The color theme of the switch when in the on state. |
| `label` | String | `undefined` | Text label associated with the switch. |
| `description` | String | `undefined` | Additional descriptive text displayed below the label. |
| `name` | String | `undefined` | Name attribute for the underlying input element. |
| `disabled` | Boolean | `undefined` | When true, the switch is disabled and cannot be toggled. |
| `required` | Boolean | `undefined` | When true, marks the switch as required in a form. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |

## v-model

The component supports v-model for two-way binding of the switch state (true for on, false for off).

## Slots

| Name | Description |
|------|-------------|
| `default` | Replaces the label text. Falls back to the `label` prop if not provided. |

## Variants/Options

### Different Kinds

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4">
  <Switch kind="primary" label="Primary Switch" />
  <Switch kind="secondary" label="Secondary Switch" />
  <Switch kind="success" label="Success Switch" />
  <Switch kind="info" label="Info Switch" />
  <Switch kind="warning" label="Warning Switch" />
  <Switch kind="danger" label="Danger Switch" />
</div>

```vue
<Switch v-model="primaryState" kind="primary" label="Primary Switch" />
<Switch v-model="secondaryState" kind="secondary" label="Secondary Switch" />
<Switch v-model="successState" kind="success" label="Success Switch" />
<Switch v-model="infoState" kind="info" label="Info Switch" />
<Switch v-model="warningState" kind="warning" label="Warning Switch" />
<Switch v-model="dangerState" kind="danger" label="Danger Switch" />
```

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Switch 
    label="Dark Mode" 
    description="Enable dark theme across the application"
  />
</div>

```vue
<Switch 
  v-model="darkMode"
  label="Dark Mode" 
  description="Enable dark theme across the application"
/>
```

### Required Switch

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Switch 
    label="I agree to the terms and conditions" 
    required
    showMarker
  />
</div>

```vue
<Switch 
  v-model="termsAgreed"
  label="I agree to the terms and conditions" 
  required
  showMarker
/>
```

## States

### Disabled

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4">
  <Switch 
    label="Disabled off state" 
    disabled
  />
  <Switch 
    label="Disabled on state" 
    disabled
    :model-value="true"
  />
</div>

```vue
<Switch 
  v-model="disabledOffOption"
  label="Disabled off state" 
  disabled
/>

<Switch 
  v-model="disabledOnOption"
  label="Disabled on state" 
  disabled
/>
```

## Best Practices

- Use clear, concise labels that describe the effect of enabling the switch
- Use the description prop when additional context or explanation is needed
- Choose colors that align with the meaning of the action:
  - `primary`: For main features or standard toggles
  - `success`: For enabling positive or beneficial features
  - `danger`: For risky or potentially destructive toggles
  - Other variants as appropriate for your context
- Position switches consistently in your application
- Consider the default state carefully (is the feature opt-in or opt-out?)
- For critical options, consider using the required and showMarker props

## Accessibility Considerations

- The component uses `role="switch"` for proper semantic meaning
- Labels are properly associated with the input for screen readers
- The component supports keyboard navigation and operation
- Focus states are clearly visible for keyboard users
- The disabled state is properly communicated to assistive technologies

## Examples

### Feature Toggles

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="space-y-4">
    <h3 class="font-semibold text-lg mb-2">Account Settings</h3>
    <Switch 
      kind="info"
      label="Two-factor authentication" 
      description="Add an extra layer of security to your account"
    />
    <Switch 
      kind="primary"
      label="Email notifications" 
      description="Receive updates about account activity"
    />
    <Switch 
      kind="warning"
      label="Usage data sharing" 
      description="Help us improve by sharing anonymous usage data"
    />
  </div>
</div>

```vue
<script setup>
const accountSettings = reactive({
  twoFactor: false,
  emailNotifications: true,
  dataSharing: false
});
</script>

<template>
  <div class="space-y-4">
    <h3 class="font-semibold text-lg mb-2">Account Settings</h3>
    <Switch 
      v-model="accountSettings.twoFactor"
      kind="info"
      label="Two-factor authentication" 
      description="Add an extra layer of security to your account"
    />
    <Switch 
      v-model="accountSettings.emailNotifications"
      kind="primary"
      label="Email notifications" 
      description="Receive updates about account activity"
    />
    <Switch 
      v-model="accountSettings.dataSharing"
      kind="warning"
      label="Usage data sharing" 
      description="Help us improve by sharing anonymous usage data"
    />
  </div>
</template>
```

### Form Integration

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4">
    <TextField label="Name" required showMarker />
    <TextField label="Email" type="email" required showMarker />
    <Switch 
      kind="success"
      label="Subscribe to newsletter" 
    />
    <Switch 
      label="I agree to the privacy policy" 
      required
      showMarker
    />
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Create Account</Action>
    </div>
  </form>
</div>

```vue
<script setup>
const formData = reactive({
  name: '',
  email: '',
  newsletter: false,
  privacyAgreed: false
});

function submitForm() {
  if (formData.privacyAgreed) {
    // Process form submission
    console.log('Form submitted:', formData);
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <TextField v-model="formData.name" label="Name" required showMarker />
    <TextField v-model="formData.email" label="Email" type="email" required showMarker />
    <Switch 
      v-model="formData.newsletter"
      kind="success"
      label="Subscribe to newsletter" 
    />
    <Switch 
      v-model="formData.privacyAgreed"
      label="I agree to the privacy policy" 
      required
      showMarker
    />
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Create Account</Action>
    </div>
  </form>
</template>
```