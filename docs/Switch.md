# Switch

## Overview

The Switch component provides a toggleable control that allows users to choose between two states. It's commonly used for enabling or disabling features, turning settings on or off, or toggling between binary options. The switch visually represents its state, making it easy for users to understand the current selection.

## Basic Usage

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

## Different Kinds

```vue
<template>
  <Switch v-model="primaryState" kind="primary" label="Primary Switch" />
  <Switch v-model="secondaryState" kind="secondary" label="Secondary Switch" />
  <Switch v-model="successState" kind="success" label="Success Switch" />
  <Switch v-model="infoState" kind="info" label="Info Switch" />
  <Switch v-model="warningState" kind="warning" label="Warning Switch" />
  <Switch v-model="dangerState" kind="danger" label="Danger Switch" />
</template>
```

## With Description

```vue
<template>
  <Switch 
    v-model="darkMode"
    label="Dark Mode" 
    description="Enable dark theme across the application"
  />
</template>
```

## Required Switch

```vue
<template>
  <Switch 
    v-model="termsAgreed"
    label="I agree to the terms and conditions" 
    required
    showMarker
  />
</template>
```

## States

### Disabled

```vue
<template>
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
</template>
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

```vue
<script setup>
const accountSettings = reactive({
  twoFactor: false,
  emailNotifications: true,
  dataSharing: false
});
</script>

<template>
  <h3>Account Settings</h3>
  <Switch 
    v-model="accountSettings.twoFactor"
    kind="info"
    label="Two-factor authentication" 
    description="Add an extra layer of security to your account"

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
</template>
```
