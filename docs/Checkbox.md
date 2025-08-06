# Checkbox

## Overview

The Checkbox component allows users to select one or more items from a set of options. It's commonly used in forms, settings panels, and preference lists to toggle options on and off.

## Basic Usage

```vue
<template>
  <Checkbox v-model="subscribed" label="Subscribe to newsletter" />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | Text label associated with the checkbox. |
| `description` | String | `undefined` | Additional descriptive text displayed below the label. |
| `name` | String | `undefined` | Name attribute for the checkbox input. |
| `disabled` | Boolean | `undefined` | When true, the checkbox is disabled and cannot be changed. |
| `required` | Boolean | `undefined` | When true, marks the checkbox as required in a form. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |
| `indeterminate` | Boolean | `false` | When true, shows the checkbox in an indeterminate state. |
| `value` | `Boolean \| String \| Number \| Object` | `undefined` | The value to use when the checkbox is used in a group. |
| `trueValue` | `Boolean \| String \| Number \| Object` | `true` | The value when checked. |
| `falseValue` | `Boolean \| String \| Number \| Object` | `false` | The value when unchecked. |

## v-model

The component supports v-model for two-way binding of the checkbox state.

## Slots

| Name | Description |
|------|-------------|
| `default` | Replaces the label text. Falls back to the `label` prop if not provided. |

## With Description

```vue
<template>
  <Checkbox 
    v-model="productUpdates"
    label="Send me product updates" 
    description="You'll receive occasional emails about product updates and new features"
  />
</template>
```

## Required Checkbox

```vue
<template>
  <Checkbox 
    v-model="termsAgreed"
    label="I agree to the terms and conditions" 
    required
    showMarker
  />
</template>
```

## Indeterminate State

```vue
<template>
  <Checkbox 
    v-model="selectAll"
    label="Select all items" 
    :indeterminate="indeterminate"
    @change="updateIndeterminateState"
  />

  <div class="mt-2 ml-6 space-y-1">
    <Checkbox 
      v-for="item in items" 
      :key="item.id"
      v-model="item.selected"
      :label="item.name"
      @change="updateIndeterminateState"
    />
  </div>
</template>

<script setup>
const selectAll = ref(false);
const indeterminate = ref(true);
const items = ref([
  { id: 1, selected: true, name: 'Item 1' },
  { id: 2, selected: false, name: 'Item 2' },
  { id: 3, selected: true, name: 'Item 3' },
]);

// Update indeterminate state based on selected items
function updateIndeterminateState() {
  const selectedCount = items.value.filter(item => item.selected).length;
  indeterminate.value = selectedCount > 0 && selectedCount < items.value.length;
  selectAll.value = selectedCount === items.value.length;
}

// Toggle all items when selectAll changes
watch(selectAll, (newValue) => {
  items.value.forEach(item => item.selected = newValue);
  indeterminate.value = false;
});
</script>
```

## Custom True/False Values

```vue
<template>
  <Checkbox 
    v-model="shippingMethod"
    label="Express shipping" 
    true-value="express"
    false-value="standard"
  />
</template>
```

## States

### Disabled

```vue
<template>
  <Checkbox 
    label="Disabled unchecked" 
    disabled
    v-model="option1"
  />

  <Checkbox 
    label="Disabled checked" 
    disabled
    v-model="option2"
  />

  <Checkbox 
    label="Disabled indeterminate" 
    disabled
    indeterminate
    v-model="option3"
  />
</template>
```

## Best Practices

- Use clear, concise labels that accurately describe the option
- Group related checkboxes together visually
- Use the description prop for additional explanation when needed
- Consider using indeterminate state for parent checkboxes that control a group of child checkboxes
- Place most commonly used options at the top of a list
- Use checkboxes (not radio buttons) when users can select multiple options
- Use checkboxes (not toggle switches) for optional form submissions

## Accessibility Considerations

- The component automatically generates a unique ID to associate the label with the checkbox input
- Labels are properly associated with the input for screen readers
- The component supports keyboard navigation and operation
- The required attribute is applied to the input when the required prop is true
- Indeterminate state is properly communicated to assistive technologies

## Examples

### Checkbox Group for Preferences

```vue
<template>
  <h3 class="font-semibold text-lg mb-2">Notification Preferences</h3>
  <Checkbox v-model="preferences.email" label="Email notifications" />
  <Checkbox v-model="preferences.push" label="Push notifications" />
  <Checkbox v-model="preferences.sms" label="SMS alerts" />
  <Checkbox 
    v-model="preferences.digest"
    label="Weekly digest" 
    description="Receive a summary of all activity once per week"
  />
</template>
```

### Form with Required Checkbox

```vue
<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <TextField v-model="formData.email" label="Email" type="email" required showMarker />
    </div>
    <div>
      <Checkbox 
        v-model="formData.agreedToPrivacy"
        label="I agree to the privacy policy" 
        required
        showMarker
      />
    </div>
    <div>
      <Action kind="primary" type="submit">Subscribe</Action>
    </div>
  </form>
</template>

<script setup>
const formData = reactive({
  email: '',
  agreedToPrivacy: false
});

function submitForm() {
  if (formData.agreedToPrivacy) {
    // Process form submission
  }
}
</script>
```

### Custom Label Content

```vue
<template>
  <Checkbox v-model="agreedToTerms">
    <div>
      I agree to the <Action href="/terms">Terms of Service</Action> and <Action href="/privacy">Privacy Policy</Action>
    </div>
  </Checkbox>
</template>
```
