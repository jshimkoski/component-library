# Progress

## Overview

The Progress component displays the completion progress of a task or operation using a horizontal progress bar. It supports various sizes, colors, and optional labels to provide clear visual feedback to users about ongoing processes or completion status.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Progress v-model="basicProgress" :max="100" />
</div>

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

## Variants/Options

### Sizes

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 space-y-4">
  <Progress v-model="sizeDemo" size="xs" label="Extra Small" />
  <Progress v-model="sizeDemo" size="sm" label="Small" />
  <Progress v-model="sizeDemo" size="md" label="Medium" />
  <Progress v-model="sizeDemo" size="lg" label="Large" />
  <Progress v-model="sizeDemo" size="xl" label="Extra Large" />
</div>

```vue
<Progress v-model="progress" size="xs" label="Extra Small" />
<Progress v-model="progress" size="sm" label="Small" />
<Progress v-model="progress" size="md" label="Medium" />
<Progress v-model="progress" size="lg" label="Large" />
<Progress v-model="progress" size="xl" label="Extra Large" />
```

### Color Variants (Kind)

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 space-y-4">
  <Progress v-model="kindDemo" kind="primary" label="Primary" />
  <Progress v-model="kindDemo" kind="secondary" label="Secondary" />
  <Progress v-model="kindDemo" kind="success" label="Success" />
  <Progress v-model="kindDemo" kind="info" label="Info" />
  <Progress v-model="kindDemo" kind="warning" label="Warning" />
  <Progress v-model="kindDemo" kind="danger" label="Danger" />
</div>

```vue
<Progress v-model="progress" kind="primary" label="Primary" />
<Progress v-model="progress" kind="secondary" label="Secondary" />
<Progress v-model="progress" kind="success" label="Success" />
<Progress v-model="progress" kind="info" label="Info" />
<Progress v-model="progress" kind="warning" label="Warning" />
<Progress v-model="progress" kind="danger" label="Danger" />
```

### With Value Display

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 space-y-4">
  <Progress v-model="valueDemo" label="Download Progress" show-value />
  <Progress v-model="valueDemo2" label="Upload Progress" show-value kind="success" />
</div>

```vue
<Progress v-model="downloadProgress" label="Download Progress" show-value />
<Progress v-model="uploadProgress" label="Upload Progress" show-value kind="success" />
```

### With Description

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 space-y-4">
  <Progress 
    v-model="descriptionDemo" 
    label="File Processing" 
    description="Processing your files, please wait..."
    show-value 
  />
  <Progress 
    v-model="descriptionDemo2" 
    label="Installation" 
    description="Installing dependencies and setting up your project."
    show-value
    kind="info"
  />
</div>

```vue
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
```

### Custom Label Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Progress v-model="customDemo" show-value>
    <div class="flex items-center gap-2">
      <Icon icon="material-symbols:cloud-upload" />
      <span>Uploading to Cloud Storage</span>
    </div>
  </Progress>
</div>

```vue
<Progress v-model="uploadProgress" show-value>
  <div class="flex items-center gap-2">
    <Icon icon="material-symbols:cloud-upload" />
    <span>Uploading to Cloud Storage</span>
  </div>
</Progress>
```

## States

### Different Progress States

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 space-y-4">
  <Progress :model-value="0" label="Not Started" description="Waiting to begin..." />
  <Progress :model-value="25" label="In Progress" description="Working on it..." kind="info" show-value />
  <Progress :model-value="100" label="Completed" description="Task finished successfully!" kind="success" show-value />
  <Progress :model-value="75" label="Warning State" description="Proceeding with caution" kind="warning" show-value />
  <Progress :model-value="45" label="Error State" description="Issues encountered during processing" kind="danger" show-value />
</div>

```vue
<!-- Different states -->
<Progress :model-value="0" label="Not Started" description="Waiting to begin..." />
<Progress :model-value="25" label="In Progress" description="Working on it..." kind="info" show-value />
<Progress :model-value="100" label="Completed" description="Task finished successfully!" kind="success" show-value />
<Progress :model-value="75" label="Warning State" description="Proceeding with caution" kind="warning" show-value />
<Progress :model-value="45" label="Error State" description="Issues encountered during processing" kind="danger" show-value />
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
  <div class="space-y-4">
    <Progress 
      v-model="uploadProgress" 
      label="Uploading Files" 
      :description="uploadStatus"
      show-value
      kind="info"
    />
    
    <div class="flex gap-2">
      <Action @click="startUpload" :disabled="isUploading">
        Start Upload
      </Action>
      <Action @click="cancelUpload" variant="outline" :disabled="!isUploading">
        Cancel
      </Action>
    </div>
  </div>
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

### Multi-step Process

```vue
<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">Installation Progress</h3>
      
      <Progress 
        :model-value="overallProgress" 
        label="Overall Progress"
        show-value
        size="lg"
        class="mb-4"
      />
      
      <div class="space-y-3">
        <Progress 
          :model-value="step1Progress" 
          label="Step 1: Downloading"
          :kind="step1Progress === 100 ? 'success' : 'primary'"
          size="sm"
          show-value
        />
        
        <Progress 
          :model-value="step2Progress" 
          label="Step 2: Installing"
          :kind="step2Progress === 100 ? 'success' : 'primary'"
          size="sm"
          show-value
        />
        
        <Progress 
          :model-value="step3Progress" 
          label="Step 3: Configuring"
          :kind="step3Progress === 100 ? 'success' : 'primary'"
          size="sm"
          show-value
        />
      </div>
    </div>
  </div>
</template>
```

### Dashboard Statistics

```vue
<template>
  <div class="grid grid-cols-2 gap-4">
    <Card>
      <template #header>
        <h4 class="font-semibold">Monthly Goals</h4>
      </template>
      
      <div class="space-y-3">
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
      </div>
    </Card>
  </div>
</template>
```
