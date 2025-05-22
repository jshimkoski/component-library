# RadioGroup

## Overview

The RadioGroup component simplifies the management of related Radio components by grouping them together. It provides a semantic grouping with a label, optional description, and consistent styling, making it ideal for selecting a single option from a list of choices.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RadioGroup
    label="Select an option"
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  />
</div>

```vue
<script setup>
const selectedOption = ref('option1');
</script>

<template>
  <RadioGroup
    v-model="selectedOption"
    label="Select an option"
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | The label for the radio group. |
| `description` | String | `undefined` | Additional descriptive text displayed below the label. |
| `name` | String | `undefined` | Name attribute for the fieldset element. |
| `form` | String | `undefined` | Specifies which form the fieldset belongs to. |
| `disabled` | Boolean | `undefined` | When true, disables all radio buttons in the group. |
| `required` | Boolean | `undefined` | When true, indicates that a selection is required. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |
| `options` | Array | `required` | Array of objects defining the radio buttons in the group. |

### Options Array Structure

Each object in the options array supports the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `value` | `Any` | The value associated with the option when selected. |
| `label` | String | The display label for the option. |
| `description` | String | Optional description text for the option. |
| `class` | String | Optional CSS class names to apply to the option. |
| `name` | String | Optional name attribute for the individual radio button. |
| `disabled` | Boolean | When true, disables this specific option. |
| `required` | Boolean | When true, marks this specific option as required. |
| `showMarker` | Boolean | Controls the display of the required marker for this option. |

## v-model

The component supports v-model for two-way binding of the selected value.

## Variants/Options

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RadioGroup
    label="Shipping Method"
    description="Choose how you want your order delivered"
    :options="[
      { value: 'standard', label: 'Standard Shipping', description: '5-7 business days (Free)' },
      { value: 'express', label: 'Express Shipping', description: '2-3 business days ($5.99)' },
      { value: 'overnight', label: 'Overnight Shipping', description: 'Next business day ($12.99)' }
    ]"
  />
</div>

```vue
<RadioGroup
  v-model="shippingMethod"
  label="Shipping Method"
  description="Choose how you want your order delivered"
  :options="[
    { value: 'standard', label: 'Standard Shipping', description: '5-7 business days (Free)' },
    { value: 'express', label: 'Express Shipping', description: '2-3 business days ($5.99)' },
    { value: 'overnight', label: 'Overnight Shipping', description: 'Next business day ($12.99)' }
  ]"
/>
```

### Required Group

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RadioGroup
    label="Select a plan"
    required
    showMarker
    :options="[
      { value: 'basic', label: 'Basic' },
      { value: 'premium', label: 'Premium' },
      { value: 'enterprise', label: 'Enterprise' }
    ]"
  />
</div>

```vue
<RadioGroup
  v-model="selectedPlan"
  label="Select a plan"
  required
  showMarker
  :options="[
    { value: 'basic', label: 'Basic' },
    { value: 'premium', label: 'Premium' },
    { value: 'enterprise', label: 'Enterprise' }
  ]"
/>
```

## States

### Disabled Group

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RadioGroup
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
<RadioGroup
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
  <RadioGroup
    label="Some options are disabled"
    :options="[
      { value: 'option1', label: 'Available Option' },
      { value: 'option2', label: 'Disabled Option', disabled: true },
      { value: 'option3', label: 'Another Available Option' }
    ]"
  />
</div>

```vue
<RadioGroup
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
- RadioGroup should be used for mutually exclusive choices (only one selection allowed)

## Accessibility Considerations

- The component uses proper semantic HTML with `<fieldset>` and `<legend>` elements
- The disabled state is properly communicated to assistive technologies
- Group-level requirements are semantically associated with the fieldset
- Labels are properly formatted and associated with each radio button
- The component provides proper keyboard navigation between options

## Examples

### Payment Method Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4">
    <RadioGroup
      label="Payment Method"
      required
      showMarker
      :options="[
        { 
          value: 'credit-card', 
          label: 'Credit Card', 
          description: 'Visa, Mastercard, American Express' 
        },
        { 
          value: 'paypal', 
          label: 'PayPal', 
          description: 'Secure online payment' 
        },
        { 
          value: 'bank-transfer', 
          label: 'Bank Transfer', 
          description: 'Direct payment from your bank account' 
        }
      ]"
    />
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Continue to Payment</Action>
    </div>
  </form>
</div>

```vue
<script setup>
const paymentMethod = ref('credit-card');

function submitForm() {
  // Process payment
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <RadioGroup
      v-model="paymentMethod"
      label="Payment Method"
      required
      showMarker
      :options="[
        { 
          value: 'credit-card', 
          label: 'Credit Card', 
          description: 'Visa, Mastercard, American Express' 
        },
        { 
          value: 'paypal', 
          label: 'PayPal', 
          description: 'Secure online payment' 
        },
        { 
          value: 'bank-transfer', 
          label: 'Bank Transfer', 
          description: 'Direct payment from your bank account' 
        }
      ]"
    />
    <div class="flex justify-end">
      <Action kind="primary" type="submit">Continue to Payment</Action>
    </div>
  </form>
</template>
```

### Subscription Plan Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="space-y-4">
    <RadioGroup
      label="Choose Your Plan"
      description="Select the plan that best fits your needs"
      required
      showMarker
      :options="[
        { 
          value: 'basic', 
          label: 'Basic Plan - $9.99/month', 
          description: 'Essential features for individuals' 
        },
        { 
          value: 'pro', 
          label: 'Pro Plan - $19.99/month', 
          description: 'Advanced features for professionals' 
        },
        { 
          value: 'enterprise', 
          label: 'Enterprise Plan - $49.99/month', 
          description: 'Complete solution for large organizations' 
        }
      ]"
    />
    <div class="flex justify-end">
      <Action kind="primary">Subscribe Now</Action>
    </div>
  </div>
</div>

```vue
<script setup>
const selectedPlan = ref('basic');

function subscribe() {
  // Handle subscription
}
</script>

<template>
  <div class="space-y-4">
    <RadioGroup
      v-model="selectedPlan"
      label="Choose Your Plan"
      description="Select the plan that best fits your needs"
      required
      showMarker
      :options="[
        { 
          value: 'basic', 
          label: 'Basic Plan - $9.99/month', 
          description: 'Essential features for individuals' 
        },
        { 
          value: 'pro', 
          label: 'Pro Plan - $19.99/month', 
          description: 'Advanced features for professionals' 
        },
        { 
          value: 'enterprise', 
          label: 'Enterprise Plan - $49.99/month', 
          description: 'Complete solution for large organizations' 
        }
      ]"
    />
    <div class="flex justify-end">
      <Action kind="primary" @click="subscribe">Subscribe Now</Action>
    </div>
  </div>
</template>
```