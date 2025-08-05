# Select

## Overview

The Select component provides a dropdown interface for selecting one or multiple options from a predefined list. It supports icons, descriptions, validation states, and both single and multiple selection modes, making it suitable for forms and data entry scenarios.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="basicSelection"
    label="Choose an option"
    :options="basicOptions"
  />
</div>

```vue
<template>
  <Select 
    v-model="selection"
    label="Choose an option"
    :options="options"
  />
</template>

<script setup>
const selection = ref('');
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | String \| Array | `""` | Selected value(s). Use v-model for two-way binding. |
| `options` | Array | `[]` | Array of option objects with `label`, `value`, and optional `disabled` properties. |
| `label` | String | `undefined` | Label text displayed above the select. |
| `description` | String | `undefined` | Helper text displayed below the select. |
| `icon` | String | `undefined` | Icon name to display inside the select input. |
| `disabled` | Boolean | `false` | Whether the select is disabled. |
| `required` | Boolean | `false` | Whether the select is required for form validation. |
| `multiple` | Boolean | `false` | Whether multiple options can be selected. |
| `name` | String | `undefined` | Name attribute for form submission. |
| `showMarker` | Boolean | `true` | Whether to show the required marker (*) when required is true. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `(value: string \| string[])` | Emitted when selection changes. |
| `change` | `(event: Event)` | Native change event from the select element. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Custom content for the label. Overrides the label prop. |

## Option Object Structure

```typescript
interface SelectOption {
  label: string;      // Display text for the option
  value: any;         // Value to be selected
  disabled?: boolean; // Whether this option is disabled
}
```

## Variants/Options

### With Icon

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="iconSelection"
    label="Select Country"
    icon="material-symbols:public"
    :options="countryOptions"
    description="Choose your country"
  />
</div>

```vue
<Select 
  v-model="country"
  label="Select Country"
  icon="material-symbols:public"
  :options="countryOptions"
  description="Choose your country"
/>
```

### Multiple Selection

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="multipleSelection"
    label="Select Skills"
    :options="skillOptions"
    multiple
    description="Hold Ctrl/Cmd to select multiple options"
  />
</div>

```vue
<template>
  <Select 
    v-model="skills"
    label="Select Skills"
    :options="skillOptions"
    multiple
    description="Hold Ctrl/Cmd to select multiple options"
  />
</template>

<script setup>
const skills = ref([]);
const skillOptions = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' }
];
</script>
```

### With Disabled Options

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="planSelection"
    label="Select Plan"
    :options="planOptions"
    description="Some plans may not be available"
  />
</div>

```vue
<template>
  <Select 
    v-model="plan"
    label="Select Plan"
    :options="planOptions"
    description="Some plans may not be available"
  />
</template>

<script setup>
const plan = ref('');
const planOptions = [
  { label: 'Free Plan', value: 'free' },
  { label: 'Basic Plan - $9/month', value: 'basic' },
  { label: 'Pro Plan - $29/month', value: 'pro' },
  { label: 'Enterprise Plan', value: 'enterprise', disabled: true }
];
</script>
```

### Required Field

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="requiredSelection"
    label="Priority Level"
    :options="priorityOptions"
    required
    description="This field is required"
  />
</div>

```vue
<Select 
  v-model="priority"
  label="Priority Level"
  :options="priorityOptions"
  required
  description="This field is required"
/>
```

## States

### Disabled Select

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Select 
    v-model="disabledSelection"
    label="Disabled Select"
    :options="basicOptions"
    disabled
    description="This select is disabled"
  />
</div>

```vue
<Select 
  v-model="selection"
  label="Disabled Select"
  :options="options"
  disabled
  description="This select is disabled"
/>
```

### Form Integration

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <Select 
      v-model="formData.category"
      label="Category"
      :options="categoryOptions"
      required
      name="category"
    />
    
    <Select 
      v-model="formData.tags"
      label="Tags"
      :options="tagOptions"
      multiple
      name="tags"
      description="Select one or more tags"
    />
    
    <Action type="submit" kind="primary">Submit</Action>
  </form>
</div>

```vue
<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <Select 
      v-model="formData.category"
      label="Category"
      :options="categoryOptions"
      required
      name="category"
    />
    
    <Select 
      v-model="formData.tags"
      label="Tags"
      :options="tagOptions"
      multiple
      name="tags"
      description="Select one or more tags"
    />
    
    <Action type="submit" kind="primary">Submit</Action>
  </form>
</template>

<script setup>
const formData = reactive({
  category: '',
  tags: []
});

function handleSubmit() {
  console.log('Form submitted:', formData);
}
</script>
```

## Best Practices

- Provide clear, descriptive labels for the select and its options
- Use logical grouping and ordering of options (alphabetical, by frequency, or by importance)
- Include descriptions when the purpose or constraints aren't immediately obvious
- Use icons to enhance recognition but ensure they're meaningful and consistent
- For long option lists, consider using a search/filter mechanism or grouping
- Mark required fields clearly with the required prop and appropriate messaging
- Provide feedback for form validation states
- Use multiple selection sparingly - consider other UI patterns for complex multi-selection
- Ensure disabled options are clearly distinguishable and provide context when possible

## Examples

### Dynamic Options Loading

```vue
<template>
  <Select 
    v-model="selectedCity"
    label="Select City"
    :options="cityOptions"
    :disabled="!selectedCountry || loadingCities"
    description="Select a country first"
  />
</template>

<script setup>
const selectedCountry = ref('');
const selectedCity = ref('');
const loadingCities = ref(false);
const cityOptions = ref([]);

watch(selectedCountry, async (country) => {
  if (!country) {
    cityOptions.value = [];
    return;
  }
  
  loadingCities.value = true;
  try {
    const cities = await fetchCitiesForCountry(country);
    cityOptions.value = cities.map(city => ({
      label: city.name,
      value: city.id
    }));
  } finally {
    loadingCities.value = false;
  }
});
</script>
```

### Grouped Options (using optgroup)

```vue
<template>
  <div class="grid items-center gap-1">
    <label :for="id" class="cursor-pointer block font-semibold">
      {{ label }}
    </label>
    <select v-model="model" :id="id" class="form-select">
      <optgroup v-for="group in groupedOptions" :key="group.label" :label="group.label">
        <option 
          v-for="option in group.options" 
          :key="option.value" 
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script setup>
const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' }
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' }
    ]
  }
];
</script>
```

### Search and Filter Integration

```vue
<template>
  <div class="space-y-2">
    <TextField 
      v-model="searchTerm"
      placeholder="Search options..."
      icon="material-symbols:search"
    />
    
    <Select 
      v-model="selection"
      label="Select Option"
      :options="filteredOptions"
      description="Type above to filter options"
    />
  </div>
</template>

<script setup>
const searchTerm = ref('');
const selection = ref('');

const allOptions = [
  { label: 'JavaScript Development', value: 'js-dev' },
  { label: 'Python Programming', value: 'python-prog' },
  { label: 'Web Design', value: 'web-design' },
  { label: 'Database Management', value: 'db-mgmt' }
];

const filteredOptions = computed(() => {
  if (!searchTerm.value) return allOptions;
  
  return allOptions.filter(option => 
    option.label.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>
```
