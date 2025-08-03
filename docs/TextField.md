# TextField

## Overview

The TextField component provides a standard input field for collecting text-based user input. It's designed with consistent styling, accessibility, and usability in mind, supporting various input types including text, number, email, password, and more.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField label="Username" placeholder="Enter your username" />
</div>

```vue
<TextField v-model="username" label="Username" placeholder="Enter your username" />
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | The label text displayed above the input field. |
| `description` | String | `undefined` | Additional descriptive text displayed below the input field. |
| `type` | `"text" \| "number" \| "tel" \| "url" \| "email" \| "password"` | `"text"` | The type of input field. |
| `name` | String | `undefined` | Name attribute for the input element. |
| `disabled` | Boolean | `undefined` | When true, the input field is disabled and cannot be edited. |
| `required` | Boolean | `undefined` | When true, the input field is required in a form. |
| `placeholder` | String | `undefined` | Placeholder text shown when the input is empty. |
| `showMarker` | Boolean | `undefined` | When true and required is true, displays an asterisk (*) next to the label. |

## v-model

The component supports v-model for two-way binding of the input value.

## Slots

| Name | Description |
|------|-------------|
| `default` | Replaces the label text. Falls back to the `label` prop if not provided. |
| `suffix` | Content to display at the end of the input field (e.g., icons or buttons). |

## Variants/Options

### Different Input Types

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4">
  <TextField label="Text" type="text" placeholder="Standard text input" />
  <TextField label="Email" type="email" placeholder="email@example.com" />
  <TextField label="Password" type="password" placeholder="Enter your password" />
  <TextField label="Number" type="number" placeholder="123" />
  <TextField label="Telephone" type="tel" placeholder="(123) 456-7890" />
  <TextField label="URL" type="url" placeholder="https://example.com" />
</div>

```vue
<TextField v-model="text" label="Text" type="text" placeholder="Standard text input" />
<TextField v-model="email" label="Email" type="email" placeholder="email@example.com" />
<TextField v-model="password" label="Password" type="password" placeholder="Enter your password" />
<TextField v-model="number" label="Number" type="number" placeholder="123" />
<TextField v-model="phone" label="Telephone" type="tel" placeholder="(123) 456-7890" />
<TextField v-model="website" label="URL" type="url" placeholder="https://example.com" />
```

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField 
    label="Password" 
    type="password" 
    placeholder="Create a password"
    description="Password must be at least 8 characters long and include a number"
  />
</div>

```vue
<TextField 
  v-model="password"
  label="Password" 
  type="password" 
  placeholder="Create a password"
  description="Password must be at least 8 characters long and include a number"
/>
```

### Required Field

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField 
    label="Email" 
    type="email" 
    placeholder="Enter your email address"
    required
    showMarker
  />
</div>

```vue
<TextField 
  v-model="email"
  label="Email" 
  type="email" 
  placeholder="Enter your email address"
  required
  showMarker
/>
```

### With Suffix Icon

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField 
    label="Search" 
    placeholder="Search for items..."
  >
    <template #suffix>
      <Icon icon="material-symbols:search" width="16" height="16" class="text-base-500" />
    </template>
  </TextField>
</div>

```vue
<TextField 
  v-model="searchQuery"
  label="Search" 
  placeholder="Search for items..."
>
  <template #suffix>
    <Icon icon="material-symbols:search" width="16" height="16" class="text-base-500" />
  </template>
</TextField>
```

## States

### Disabled

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField 
    label="Username" 
    placeholder="This field is disabled"
    disabled
  />
</div>

```vue
<TextField 
  v-model="username"
  label="Username" 
  placeholder="This field is disabled"
  disabled
/>
```

## Best Practices

- Use clear, concise labels that describe what information is being requested
- Include placeholder text that provides an example of the expected input format
- Use the appropriate input type for the data being collected (email, password, etc.)
- Add descriptions when additional guidance about the field is needed
- For required fields, use both the `required` and `showMarker` props to provide visual indication
- Consider using the suffix slot for action buttons or validation indicators
- Keep labels consistent across your forms (e.g., capitalization, terminology)

## Accessibility Considerations

- The component automatically generates a unique ID to associate the label with the input
- Labels are properly associated with the input field for screen readers
- Required state is communicated both visually and through ARIA attributes
- Focus states are clearly visible for keyboard navigation
- The disabled state is properly communicated to assistive technologies

## Examples

### Login Form

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4">
    <TextField 
      label="Email" 
      type="email" 
      placeholder="your@email.com"
      required
      showMarker
    />
    <TextField 
      label="Password" 
      type="password" 
      placeholder="Enter your password"
      required
      showMarker
    />
    <div class="flex justify-between items-center">
      <Checkbox label="Remember me" />
      <a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">Forgot password?</a>
    </div>
    <div>
      <Action kind="primary" type="submit" class="w-full">Sign In</Action>
    </div>
  </form>
</div>

```vue
<script setup>
const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
});

function submitLogin() {
  // Handle login submission
}
</script>

<template>
  <form @submit.prevent="submitLogin" class="space-y-4">
    <TextField 
      v-model="loginForm.email"
      label="Email" 
      type="email" 
      placeholder="your@email.com"
      required
      showMarker
    />
    <TextField 
      v-model="loginForm.password"
      label="Password" 
      type="password" 
      placeholder="Enter your password"
      required
      showMarker
    />
    <div class="flex justify-between items-center">
      <Checkbox v-model="loginForm.rememberMe" label="Remember me" />
      <a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">Forgot password?</a>
    </div>
    <div>
      <Action kind="primary" type="submit" class="w-full">Sign In</Action>
    </div>
  </form>
</template>
```

### Search Field with Clear Button

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextField 
    label="Search Products" 
    placeholder="Type to search..."
  >
    <template #suffix>
      <button class="text-base-500 hover:text-base-700 dark:hover:text-base-300">
        <Icon icon="material-symbols:close" width="16" height="16" />
      </button>
    </template>
  </TextField>
</div>

```vue
<script setup>
const searchQuery = ref('');

function clearSearch() {
  searchQuery.value = '';
}
</script>

<template>
  <TextField 
    v-model="searchQuery"
    label="Search Products" 
    placeholder="Type to search..."
  >
    <template #suffix>
      <button 
        v-if="searchQuery"
        class="text-base-500 hover:text-base-700 dark:hover:text-base-300"
        @click="clearSearch"
      >
        <Icon icon="material-symbols:close" width="16" height="16" />
      </button>
    </template>
  </TextField>
</template>
```