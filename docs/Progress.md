# Progress

## Overview

The Progress component displays the completion progress of a task or operation using a horizontal progress bar. It supports various sizes, colors, and optional labels to provide clear visual feedback to users about ongoing processes or completion status.

## Basic Usage

```vue
<template>
  <Progress v-model="progress" :max="100" />
</template>

<script setup>
const progress = ref(65);
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | Number | `0` | Current progress value (v-model). |
| `max` | Number | `100` | Maximum value for progress calculation. |
| `label` | String | `undefined` | Optional label text displayed above the progress bar. |
| `description` | String | `undefined` | Helper text displayed below the progress bar. |
| `showValue` | Boolean | `false` | Whether to display the percentage value. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"primary"` | Color theme of the progress bar. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size of the progress bar. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Content to display as the label. Overrides the label prop. |

## Sizes

```vue
<template>
  <Progress v-model="progress" size="xs" label="Extra Small" />
  <Progress v-model="progress" size="sm" label="Small" />
  <Progress v-model="progress" size="md" label="Medium" />
  <Progress v-model="progress" size="lg" label="Large" />
  <Progress v-model="progress" size="xl" label="Extra Large" />
</template>
```

## Color Variants (Kind)

```vue
<template>
  <Progress v-model="progress" kind="primary" label="Primary" />
  <Progress v-model="progress" kind="secondary" label="Secondary" />
  <Progress v-model="progress" kind="success" label="Success" />
  <Progress v-model="progress" kind="info" label="Info" />
  <Progress v-model="progress" kind="warning" label="Warning" />
  <Progress v-model="progress" kind="danger" label="Danger" />
</template>
```

## With Value Display

```vue
<template>
  <Progress v-model="downloadProgress" label="Download Progress" show-value />
  <Progress v-model="uploadProgress" label="Upload Progress" show-value kind="success" />
</template>
```

## With Description

```vue
<template>
  <Progress 
    v-model="processProgress" 
    label="File Processing" 
    description="Processing your files, please wait..."
    show-value 
  />

  <Progress 
    v-model="installProgress" 
    label="Installation" 
    description="Installing dependencies and setting up your project."
    show-value
    kind="info"
  />
</template>
```

## Custom Label Content

```vue
<template>
  <Progress v-model="uploadProgress" show-value>
    <Icon icon="material-symbols:cloud-upload" />
    <span>Uploading to Cloud Storage</span>
  </Progress>
</template>
```

## States

### Different Progress States

```vue
<template>
  <!-- Different states -->
  <Progress :model-value="0" label="Not Started" description="Waiting to begin..." />
  <Progress :model-value="25" label="In Progress" description="Working on it..." kind="info" show-value />
  <Progress :model-value="100" label="Completed" description="Task finished successfully!" kind="success" show-value />
  <Progress :model-value="75" label="Warning State" description="Proceeding with caution" kind="warning" show-value />
  <Progress :model-value="45" label="Error State" description="Issues encountered during processing" kind="danger" show-value />
</template>
```

## Best Practices

- Use appropriate colors (kind) to convey meaning - success for completed tasks, warning for issues, danger for errors
- Include labels when the context isn't immediately obvious
- Show percentage values for long-running operations where users benefit from specific progress information
- Use appropriate sizes based on the importance and context of the progress indicator
- Provide meaningful descriptions to explain what's happening during the process
- Consider using intermediate progress states rather than jumping from 0 to 100
- For file uploads/downloads, consider showing additional context like transfer speed or remaining time
- Use consistent progress indicators throughout your application

## Examples

### File Upload Progress

```vue
<template>
  <Progress 
    v-model="uploadProgress" 
    label="Uploading Files" 
    :description="uploadStatus"
    show-value
    kind="info"
  />

  <Action @click="startUpload" :disabled="isUploading">
    Start Upload
  </Action>
  <Action @click="cancelUpload" variant="outline" :disabled="!isUploading">
    Cancel
  </Action>
</template>

<script setup>
const uploadProgress = ref(0);
const isUploading = ref(false);

const uploadStatus = computed(() => {
  if (uploadProgress.value === 0) return 'Ready to upload';
  if (uploadProgress.value === 100) return 'Upload complete!';
  return `Uploading... ${Math.round(uploadProgress.value)}% complete`;
});

function startUpload() {
  isUploading.value = true;
  // Simulate upload progress
  const interval = setInterval(() => {
    uploadProgress.value += 10;
    if (uploadProgress.value >= 100) {
      clearInterval(interval);
      isUploading.value = false;
    }
  }, 500);
}
</script>
```

### Dashboard Statistics

```vue
<template>
  <Card>
    <template #header>
      <h4 class="font-semibold">Monthly Goals</h4>
    </template>

    <Progress 
      :model-value="salesGoal" 
      :max="salesTarget"
      label="Sales Target"
      kind="success"
      show-value
    />

    <Progress 
      :model-value="leadGoal" 
      :max="leadTarget"
      label="Lead Generation"
      kind="info"
      show-value
    />

    <Progress 
      :model-value="customerGoal" 
      :max="customerTarget"
      label="Customer Satisfaction"
      kind="warning"
      show-value
    />
  </Card>
</template>
```
