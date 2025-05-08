# TextEditor

## Overview

The TextEditor component provides a multi-line text input field with supporting elements like labels and descriptions. It's designed for collecting longer text input from users while maintaining the design system's visual aesthetics and accessibility standards.

## Basic Usage

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextEditor
    label="Notes"
    placeholder="Enter your notes here"
    description="These notes will be visible to the team"
  />
</div>

```vue
<TextEditor
  v-model="notes"
  label="Notes"
  placeholder="Enter your notes here"
  description="These notes will be visible to the team"
/>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | String | `undefined` | The label text for the textarea. |
| `description` | String | `undefined` | Explanatory text that appears below the textarea. |
| `name` | String | `undefined` | The name attribute for the textarea element. |
| `disabled` | Boolean | `undefined` | When true, the textarea is disabled and visually dimmed. |
| `required` | Boolean | `undefined` | Indicates if the field is required. |
| `placeholder` | String | `undefined` | Placeholder text for the textarea. |
| `showMarker` | Boolean | `undefined` | When true, displays an asterisk (*) next to the label for required fields. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Replaces the label text. Falls back to the `label` prop if not provided. |

## v-model

The component supports v-model for two-way binding of the textarea value.

## Variants/Options

### With Description

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextEditor
    label="About Me"
    placeholder="Tell us about yourself"
    description="This information will appear on your public profile"
  />
</div>

```vue
<TextEditor
  v-model="aboutMe"
  label="About Me"
  placeholder="Tell us about yourself"
  description="This information will appear on your public profile"
/>
```

### Required Field

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextEditor
    label="Feedback"
    required
    showMarker
    placeholder="Please provide your feedback"
  />
</div>

```vue
<TextEditor
  v-model="feedback"
  label="Feedback"
  required
  showMarker
  placeholder="Please provide your feedback"
/>
```

### Custom Label

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextEditor placeholder="Enter your message">
    <div class="flex items-center">
      <span>Message</span>
      <span class="ml-2 text-xs text-green-500">(Optional)</span>
    </div>
  </TextEditor>
</div>

```vue
<TextEditor v-model="message" placeholder="Enter your message">
  <div class="flex items-center">
    <span>Message</span>
    <span class="ml-2 text-xs text-green-500">(Optional)</span>
  </div>
</TextEditor>
```

## States

### Disabled

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <TextEditor
    label="Comments"
    disabled
    placeholder="Comments are currently disabled"
  />
</div>

```vue
<TextEditor
  v-model="comments"
  label="Comments"
  disabled
  placeholder="Comments are currently disabled"
/>
```

## Best Practices

- Use clear, concise labels that describe what information is expected
- Include placeholder text to provide examples or additional context
- Use the description prop to clarify expectations or explain how the information will be used
- For required fields, enable both the `required` and `showMarker` props to provide visual indication
- Maintain consistent use of descriptions across your application's forms
- Consider the appropriate height for your use case (the default height is 6rem)

## Accessibility Considerations

- The component automatically generates a unique ID to associate the label with the textarea
- Labels are properly associated with the textarea for screen readers
- The required attribute is applied to the textarea when the required prop is true
- Focus states are clearly visible for keyboard navigation

## Examples

### Form Integration

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <form class="space-y-4">
    <div>
      <TextField label="Name" required showMarker />
    </div>
    <div>
      <TextField label="Email" type="email" required showMarker />
    </div>
    <div>
      <TextEditor
        label="Message"
        required
        showMarker
        placeholder="Please provide details about your inquiry"
        description="Be as specific as possible to help us assist you better"
      />
    </div>
    <div>
      <button class="px-4 py-2 bg-primary-500 text-white rounded">Submit</button>
    </div>
  </form>
</div>

```vue
<form @submit.prevent="submitForm">
  <div class="space-y-4">
    <div>
      <TextField v-model="name" label="Name" required showMarker />
    </div>
    <div>
      <TextField v-model="email" label="Email" type="email" required showMarker />
    </div>
    <div>
      <TextEditor
        v-model="message"
        label="Message"
        required
        showMarker
        placeholder="Please provide details about your inquiry"
        description="Be as specific as possible to help us assist you better"
      />
    </div>
    <div>
      <button type="submit" class="px-4 py-2 bg-primary-500 text-white rounded">
        Submit
      </button>
    </div>
  </div>
</form>
```

### Character Count

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div>
    <TextEditor
      label="Bio"
      placeholder="Tell us about yourself in 150 characters or less"
    />
    <div class="text-right text-sm text-base-500">
      <span>120</span>/150 characters
    </div>
  </div>
</div>

```vue
<script setup>
const bio = ref('');
const maxLength = 150;

const charactersLeft = computed(() => {
  return maxLength - (bio.value?.length || 0);
});
</script>

<template>
  <div>
    <TextEditor
      v-model="bio"
      label="Bio"
      placeholder="Tell us about yourself in 150 characters or less"
    />
    <div class="text-right text-sm text-base-500">
      <span>{{ maxLength - (bio?.length || 0) }}</span>/{{ maxLength }} characters
    </div>
  </div>
</template>
```