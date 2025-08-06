# Radio

## Overview

The Radio component allows users to select a single option from a set of mutually exclusive choices. It's commonly used in forms, surveys, or any interface where users need to make a single selection from a group of options.

## Basic Usage

```vue
<template>
  <Radio v-model="selectedOption" label="Option 1" name="example" value="option1" />
</template>
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

## With Description

```vue
<template>
  <Radio 
    v-model="shippingMethod"
    label="Standard Shipping" 
    description="7-10 business days (Free)"
    name="shipping"
    value="standard"
  />
</template>
```

## Required Radio

```vue
<template>
  <Radio 
    v-model="agreement"
    label="I agree to the terms and conditions" 
    required
    showMarker
    name="agreement"
    value="agreed"
  />
</template>
```

## States

### Disabled

```vue
<template>
  <Radio 
    v-model="selection"
    label="Unavailable option" 
    disabled
    name="disabled-example"
    value="unavailable"
  />
</template>
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

<h3 class="font-semibold text-lg mb-2">Select Shipping Method</h3>

```vue
<script setup>
const shippingMethod = ref('standard');
</script>

<template>
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
</template>
```
