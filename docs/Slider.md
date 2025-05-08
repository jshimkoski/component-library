# Slider

The Slider component provides an interactive way for users to select a value from a specific range.

## Overview

The Slider component allows users to select a value or range by moving a handle along a track. It's useful for adjusting settings like volume, brightness, or filtering by price or date ranges.

## Basic Usage

```vue
<template>
  <Slider v-model="value" :min="0" :max="100" :step="1" label="Volume" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Number` | `0` | The current value of the slider (use with v-model) |
| `min` | `Number` | `0` | The minimum value of the slider |
| `max` | `Number` | `100` | The maximum value of the slider |
| `step` | `Number` | `1` | The amount to increase or decrease by when moving the slider |
| `disabled` | `Boolean` | `false` | When true, disables slider interaction |
| `label` | `String` | `undefined` | Optional label text for the slider |
| `showValue` | `Boolean` | `true` | Whether to display the current value |
| `showTicks` | `Boolean` | `false` | Whether to show tick marks on the slider |
| `steps` | `Number` | `0` | Number of steps to display as tick marks (0 means no ticks) |
| `formatter` | `Function` | `undefined` | A function to format the displayed value |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `(value: number)` | Emitted when the slider value changes |

## Variants

### With Custom Formatter

```vue
<template>
  <Slider 
    v-model="price" 
    :min="0" 
    :max="1000" 
    :step="10" 
    label="Price Range" 
    :formatter="formatCurrency" 
  />
</template>

<script setup>
import { ref } from 'vue';

const price = ref(500);

const formatCurrency = (value) => {
  return `$${value.toFixed(2)}`;
};
</script>
```

### With Tick Marks

```vue
<template>
  <Slider 
    v-model="rating" 
    :min="0" 
    :max="10" 
    :step="1" 
    label="Rating" 
    :showTicks="true" 
    :steps="10" 
  />
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(5);
</script>
```

## States

### Disabled

```vue
<template>
  <Slider 
    v-model="volume" 
    :min="0" 
    :max="100" 
    :step="1" 
    label="Volume" 
    disabled 
  />
</template>

<script setup>
import { ref } from 'vue';

const volume = ref(50);
</script>
```

## Best Practices

- Use sliders for selecting values where visual, interactive feedback is helpful
- Include a label that clearly describes what the slider controls
- Consider using tick marks for discrete values to improve usability
- Use appropriate step values based on the range (smaller ranges benefit from smaller steps)
- Format displayed values to match user expectations (e.g., currency, percentage)
- Consider adding text input alongside sliders for precise input when needed

## Accessibility

- The component includes proper ARIA attributes for screen readers
- Keyboard navigation is fully supported:
  - Arrow keys (left/right or up/down) adjust the value by one step
  - Page Up/Down keys adjust the value by larger steps
  - Home/End keys set the value to min/max
- Focus states are clearly visible for keyboard users
- The slider handle can be operated via keyboard, mouse, or touch interactions

## Examples

### Temperature Control

```vue
<template>
  <div class="p-4 bg-base-100 rounded-lg">
    <Slider 
      v-model="temperature" 
      :min="15" 
      :max="30" 
      :step="0.5" 
      label="Temperature" 
      :formatter="formatTemperature" 
      :showTicks="true" 
      :steps="15" 
    />
    <div class="mt-4 text-sm text-base-500">
      {{ temperatureDescription }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const temperature = ref(22);

const formatTemperature = (value) => {
  return `${value}°C`;
};

const temperatureDescription = computed(() => {
  if (temperature.value < 18) return "Too cold";
  if (temperature.value < 21) return "Cool";
  if (temperature.value < 24) return "Comfortable";
  if (temperature.value < 27) return "Warm";
  return "Too hot";
});
</script>
```