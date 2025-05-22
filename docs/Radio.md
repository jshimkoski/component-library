# Radio

## Overview

The Radio component allows users to select a single option from a set of mutually exclusive choices. It's commonly used in forms, surveys, or any interface where users need to make a single selection from a group of options.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Radio label="Option 1" name="example" value="option1" />
</div>

```vue
<Radio v-model="selectedOption" label="Option 1" name="example" value="option1" />
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | Text label associated with the radio button. |
| `description` | String | `undefined` | Additional descriptive text displayed below the label. |
| `name` | String | `undefined` | Name attribute for the radio input. Should be the same for all radio buttons in a group. |
| `disabled` | Boolean | `undefined` | When true, the radio button is disabled and cannot be changed. |
| `required` | Boolean | `undefined` | When true, marks the radio button as required in a form. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |
| `value` | `Boolean \| String \| Number \| Object` | `undefined` | The value associated with this radio button when selected. |

## v-model

The component supports v-model for two-way binding of the selected value.

## Slots

| Name | Description |
|------|-------------|
| `default` | Replaces the label text. Falls back to the `label` prop if not provided. |

## Variants/Options

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Radio 
    label="Standard Shipping" 
    description="7-10 business days (Free)"
    name="shipping"
    value="standard"
  />
</div>

```vue
<Radio 
  v-model="shippingMethod"
  label="Standard Shipping" 
  description="7-10 business days (Free)"
  name="shipping"
  value="standard"
/>
```

### Required Radio

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Radio 
    label="I agree to the terms and conditions" 
    required
    showMarker
    name="agreement"
    value="agreed"
  />
</div>

```vue
<Radio 
  v-model="agreement"
  label="I agree to the terms and conditions" 
  required
  showMarker
  name="agreement"
  value="agreed"
/>
```

## States

### Disabled

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Radio 
    label="Unavailable option" 
    disabled
    name="disabled-example"
    value="unavailable"
  />
</div>

```vue
<Radio 
  v-model="selection"
  label="Unavailable option" 
  disabled
  name="disabled-example"
  value="unavailable"
/>
```

## Best Practices

- Use clear, concise labels that accurately describe each option
- Group related radio buttons together visually and with the same `name` attribute
- Use the description prop for additional explanation when needed
- Place most commonly used options at the top of a list
- Use radio buttons (not checkboxes) when users must select exactly one option
- Avoid using radio buttons for optional selections; consider checkboxes instead
- For lists with more than 7 options, consider using a Select component instead

## Accessibility Considerations

- The component automatically generates a unique ID to associate the label with the radio input
- Labels are properly associated with the input for screen readers
- The component supports keyboard navigation and operation
- The required attribute is applied to the input when the required prop is true
- Radio groups should be grouped together semantically (typically using RadioGroup component)

## Examples

### Radio Group for Shipping Options

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="space-y-3">
    <h3 class="font-semibold text-lg mb-2">Select Shipping Method</h3>
    <Radio 
      name="shipping-method" 
      value="standard" 
      label="Standard Shipping" 
      description="Delivery in 5-7 business days (Free)"
    />
    <Radio 
      name="shipping-method" 
      value="express" 
      label="Express Shipping" 
      description="Delivery in 2-3 business days ($5.99)"
    />
    <Radio 
      name="shipping-method" 
      value="overnight" 
      label="Overnight Shipping" 
      description="Next business day delivery ($12.99)"
    />
  </div>
</div>

```vue
<script setup>
const shippingMethod = ref('standard');
</script>

<template>
  <div class="space-y-3">
    <h3 class="font-semibold text-lg mb-2">Select Shipping Method</h3>
    <Radio 
      v-model="shippingMethod" 
      name="shipping-method" 
      value="standard" 
      label="Standard Shipping" 
      description="Delivery in 5-7 business days (Free)"
    />
    <Radio 
      v-model="shippingMethod" 
      name="shipping-method" 
      value="express" 
      label="Express Shipping" 
      description="Delivery in 2-3 business days ($5.99)"
    />
    <Radio 
      v-model="shippingMethod" 
      name="shipping-method" 
      value="overnight" 
      label="Overnight Shipping" 
      description="Next business day delivery ($12.99)"
    />
  </div>
</template>
```

### Payment Method Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4">
    <div>
      <h3 class="font-semibold text-lg mb-3">Select Payment Method</h3>
      <div class="space-y-3">
        <Radio 
          name="payment-method" 
          value="credit-card" 
          label="Credit Card"
        />
        <Radio 
          name="payment-method" 
          value="paypal" 
          label="PayPal"
        />
        <Radio 
          name="payment-method" 
          value="bank-transfer" 
          label="Bank Transfer"
        />
      </div>
    </div>
    <div>
      <Action kind="primary" type="submit">Continue to Payment</Action>
    </div>
  </form>
</div>

```vue
<script setup>
const paymentMethod = ref('credit-card');

function submitForm() {
  // Process form submission
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <h3 class="font-semibold text-lg mb-3">Select Payment Method</h3>
      <div class="space-y-3">
        <Radio 
          v-model="paymentMethod" 
          name="payment-method" 
          value="credit-card" 
          label="Credit Card"
        />
        <Radio 
          v-model="paymentMethod" 
          name="payment-method" 
          value="paypal" 
          label="PayPal"
        />
        <Radio 
          v-model="paymentMethod" 
          name="payment-method" 
          value="bank-transfer" 
          label="Bank Transfer"
        />
      </div>
    </div>
    <div>
      <Action kind="primary" type="submit">Continue to Payment</Action>
    </div>
  </form>
</template>
```

### Custom Label Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Radio name="custom-label" value="premium">
    <div>
      <span class="font-bold">Premium Plan</span>
      <Badge label="Recommended" kind="primary" class="ml-2" />
    </div>
  </Radio>
</div>

```vue
<Radio v-model="selectedPlan" name="custom-label" value="premium">
  <div>
    <span class="font-bold">Premium Plan</span>
    <Badge label="Recommended" kind="primary" class="ml-2" />
  </div>
</Radio>
```