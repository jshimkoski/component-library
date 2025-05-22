# CheckboxGroup

## Overview

The CheckboxGroup component is designed to manage collections of related Checkbox components. It provides a semantic grouping with a label, optional description, and consistent styling, making it ideal for multiple-choice selections in forms.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Select your interests"
    :options="[
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'travel', label: 'Travel' }
    ]"
  />
</div>

```vue
<script setup>
const selectedInterests = ref([]);
</script>

<template>
  <CheckboxGroup
    v-model="selectedInterests"
    label="Select your interests"
    :options="[
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'travel', label: 'Travel' }
    ]"
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | The label for the checkbox group. |
| `description` | String | `undefined` | Additional descriptive text displayed below the label. |
| `name` | String | `undefined` | Name attribute for the fieldset element. |
| `form` | String | `undefined` | Specifies which form the fieldset belongs to. |
| `disabled` | Boolean | `undefined` | When true, disables all checkboxes in the group. |
| `required` | Boolean | `undefined` | When true, indicates that at least one option must be selected. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |
| `options` | Array | `required` | Array of objects defining the checkboxes in the group. |

### Options Array Structure

Each object in the options array supports the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `value` | `Any` | The value associated with the option when selected. |
| `label` | String | The display label for the option. |
| `description` | String | Optional description text for the option. |
| `class` | String | Optional CSS class names to apply to the option. |
| `name` | String | Optional name attribute for the individual checkbox. |
| `disabled` | Boolean | When true, disables this specific option. |
| `required` | Boolean | When true, marks this specific option as required. |
| `showMarker` | Boolean | Controls the display of the required marker for this option. |

## v-model

The component supports v-model for two-way binding of selected values. The v-model binds to an array containing the values of the selected checkboxes.

## Variants/Options

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Notification Preferences"
    description="Choose which notifications you'd like to receive"
    :options="[
      { value: 'email', label: 'Email notifications' },
      { value: 'push', label: 'Push notifications' },
      { value: 'sms', label: 'SMS notifications' }
    ]"
  />
</div>

```vue
<CheckboxGroup
  v-model="notificationPreferences"
  label="Notification Preferences"
  description="Choose which notifications you'd like to receive"
  :options="[
    { value: 'email', label: 'Email notifications' },
    { value: 'push', label: 'Push notifications' },
    { value: 'sms', label: 'SMS notifications' }
  ]"
/>
```

### Required Group

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Choose at least one option"
    required
    showMarker
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  />
</div>

```vue
<CheckboxGroup
  v-model="selectedOptions"
  label="Choose at least one option"
  required
  showMarker
  :options="[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]"
/>
```

### Options with Descriptions

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Subscription Plans"
    :options="[
      { 
        value: 'basic', 
        label: 'Basic Plan', 
        description: 'Essential features for individuals'
      },
      { 
        value: 'pro', 
        label: 'Pro Plan', 
        description: 'Advanced features for professionals'
      },
      { 
        value: 'enterprise', 
        label: 'Enterprise Plan', 
        description: 'Complete solution for large organizations'
      }
    ]"
  />
</div>

```vue
<CheckboxGroup
  v-model="selectedPlans"
  label="Subscription Plans"
  :options="[
    { 
      value: 'basic', 
      label: 'Basic Plan', 
      description: 'Essential features for individuals'
    },
    { 
      value: 'pro', 
      label: 'Pro Plan', 
      description: 'Advanced features for professionals'
    },
    { 
      value: 'enterprise', 
      label: 'Enterprise Plan', 
      description: 'Complete solution for large organizations'
    }
  ]"
/>
```

## States

### Disabled Group

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="This group is disabled"
    disabled
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  />
</div>

```vue
<CheckboxGroup
  v-model="disabledOptions"
  label="This group is disabled"
  disabled
  :options="[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]"
/>
```

### Mixed Disabled States

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Some options are disabled"
    :options="[
      { value: 'option1', label: 'Available Option' },
      { value: 'option2', label: 'Disabled Option', disabled: true },
      { value: 'option3', label: 'Another Available Option' }
    ]"
  />
</div>

```vue
<CheckboxGroup
  v-model="mixedStateOptions"
  label="Some options are disabled"
  :options="[
    { value: 'option1', label: 'Available Option' },
    { value: 'option2', label: 'Disabled Option', disabled: true },
    { value: 'option3', label: 'Another Available Option' }
  ]"
/>
```

## Best Practices

- Use meaningful labels for both the group and individual options
- Group related options together for better cognitive organization
- Include descriptions when options might need additional explanation
- Keep the number of options reasonable (generally less than 7-10 per group)
- Consider using spacing or visual separators for groups with many options
- Arrange options in a logical order (alphabetical, most common first, etc.)
- Use required and showMarker together to properly indicate required selections

## Accessibility Considerations

- The component uses proper semantic HTML with `<fieldset>` and `<legend>` elements
- The disabled state is properly communicated to assistive technologies
- Group-level requirements are semantically associated with the fieldset
- Labels are properly formatted and associated with each checkbox

## Examples

### Feature Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <CheckboxGroup
    label="Choose additional features"
    description="Select the features you'd like to add to your package"
    :options="[
      { 
        value: 'backup', 
        label: 'Automated Backups', 
        description: 'Daily backups of all your data' 
      },
      { 
        value: 'analytics', 
        label: 'Advanced Analytics', 
        description: 'Detailed insights and reporting tools' 
      },
      { 
        value: 'support', 
        label: 'Priority Support', 
        description: 'Get help within 1 business hour' 
      },
      { 
        value: 'domains', 
        label: 'Custom Domains', 
        description: 'Use your own domain names' 
      }
    ]"
  />
</div>

```vue
<script setup>
const selectedFeatures = ref([]);

// Watch for changes to calculate total price
watch(selectedFeatures, (newValues) => {
  calculateTotalPrice(newValues);
});
</script>

<template>
  <CheckboxGroup
    v-model="selectedFeatures"
    label="Choose additional features"
    description="Select the features you'd like to add to your package"
    :options="[
      { 
        value: 'backup', 
        label: 'Automated Backups', 
        description: 'Daily backups of all your data' 
      },
      { 
        value: 'analytics', 
        label: 'Advanced Analytics', 
        description: 'Detailed insights and reporting tools' 
      },
      { 
        value: 'support', 
        label: 'Priority Support', 
        description: 'Get help within 1 business hour' 
      },
      { 
        value: 'domains', 
        label: 'Custom Domains', 
        description: 'Use your own domain names' 
      }
    ]"
  />
</template>
```

### Terms Acceptance

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-5">
    <TextField label="Email" type="email" />
    <CheckboxGroup
      label="Terms and Agreements"
      required
      showMarker
      :options="[
        { 
          value: 'terms', 
          label: 'I agree to the Terms of Service',
          required: true 
        },
        { 
          value: 'privacy', 
          label: 'I agree to the Privacy Policy',
          required: true 
        },
        { 
          value: 'marketing', 
          label: 'I would like to receive marketing emails',
          required: false
        }
      ]"
    />
    <div>
      <Action kind="primary" type="submit">Sign Up</Action>
    </div>
  </form>
</div>

```vue
<script setup>
const agreements = ref([]);
const email = ref('');

function submitForm() {
  // Validation: Check if required agreements are accepted
  const requiredValues = ['terms', 'privacy'];
  const allRequiredAccepted = requiredValues.every(val => 
    agreements.value.includes(val)
  );
  
  if (allRequiredAccepted) {
    // Process form submission
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-5">
    <TextField v-model="email" label="Email" type="email" />
    <CheckboxGroup
      v-model="agreements"
      label="Terms and Agreements"
      required
      showMarker
      :options="[
        { 
          value: 'terms', 
          label: 'I agree to the Terms of Service',
          required: true 
        },
        { 
          value: 'privacy', 
          label: 'I agree to the Privacy Policy',
          required: true 
        },
        { 
          value: 'marketing', 
          label: 'I would like to receive marketing emails',
          required: false
        }
      ]"
    />
    <div>
      <Action kind="primary" type="submit">Sign Up</Action>
    </div>
  </form>
</template>
```