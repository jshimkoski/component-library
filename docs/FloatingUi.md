# FloatingUi

## Overview

The FloatingUi component is a low-level utility component that provides floating element positioning using the Floating UI library. It's primarily used internally by other components like Tooltip, Menu, and Dialog to create properly positioned popover content. This component handles complex positioning logic, collision detection, and responsive placement.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex justify-center">
    <FloatingUi 
      v-model:open="isOpen"
      text="This is a floating element"
      placement="top"
    >
      <Action @click="isOpen = !isOpen">Toggle Floating Element</Action>
    </FloatingUi>
  </div>
</div>

```vue
<template>
  <FloatingUi 
    v-model:open="isOpen"
    text="This is a floating element"
    placement="top"
  >
    <Action @click="isOpen = !isOpen">Toggle Floating Element</Action>
  </FloatingUi>
</template>

<script setup>
const isOpen = ref(false);
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `open` | Boolean | `false` | Whether the floating element is visible (v-model). |
| `text` | String | `""` | Simple text content for the floating element. |
| `type` | `"plain" \| "rich"` | `"plain"` | Visual style type of the floating element. |
| `placement` | `Placement` | `"top"` | Preferred placement of the floating element relative to the trigger. |
| `hideArrow` | Boolean | `false` | Whether to hide the arrow pointer. |

## Placement Options

The `placement` prop accepts any valid Floating UI placement:

- `top`, `top-start`, `top-end`
- `bottom`, `bottom-start`, `bottom-end`
- `left`, `left-start`, `left-end`
- `right`, `right-start`, `right-end`

## Slots

| Name | Description |
|------|-------------|
| `default` | Trigger element that activates the floating UI. Receives props: `isOpen`, `open()`, `close()`, `toggle()`. |
| `popover` | Content of the floating element. Receives props: `isOpen`, `open()`, `close()`, `toggle()`. |

## Variants/Options

### Plain vs Rich Styling

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex gap-4 justify-center">
  <FloatingUi 
    v-model:open="plainOpen"
    text="Plain tooltip style"
    type="plain"
    placement="top"
  >
    <Action @click="plainOpen = !plainOpen">Plain Style</Action>
  </FloatingUi>
  
  <FloatingUi 
    v-model:open="richOpen"
    type="rich"
    placement="top"
  >
    <Action @click="richOpen = !richOpen">Rich Style</Action>
    <template #popover>
      <div class="p-3">
        <h4 class="font-semibold mb-1">Rich Content</h4>
        <p class="text-sm">This supports complex content with styling.</p>
      </div>
    </template>
  </FloatingUi>
</div>

```vue
<!-- Plain style (tooltip-like) -->
<FloatingUi 
  v-model:open="plainOpen"
  text="Plain tooltip style"
  type="plain"
  placement="top"
>
  <Action @click="plainOpen = !plainOpen">Plain Style</Action>
</FloatingUi>

<!-- Rich style (popover-like) -->
<FloatingUi 
  v-model:open="richOpen"
  type="rich"
  placement="top"
>
  <Action @click="richOpen = !richOpen">Rich Style</Action>
  <template #popover>
    <div class="p-3">
      <h4 class="font-semibold mb-1">Rich Content</h4>
      <p class="text-sm">This supports complex content with styling.</p>
    </div>
  </template>
</FloatingUi>
```

### Different Placements

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
    <FloatingUi 
      v-model:open="topOpen"
      text="Top placement"
      placement="top"
    >
      <Action @click="topOpen = !topOpen" class="w-full">Top</Action>
    </FloatingUi>
    
    <FloatingUi 
      v-model:open="bottomOpen"
      text="Bottom placement"
      placement="bottom"
    >
      <Action @click="bottomOpen = !bottomOpen" class="w-full">Bottom</Action>
    </FloatingUi>
    
    <FloatingUi 
      v-model:open="leftOpen"
      text="Left placement"
      placement="left"
    >
      <Action @click="leftOpen = !leftOpen" class="w-full">Left</Action>
    </FloatingUi>
    
    <FloatingUi 
      v-model:open="rightOpen"
      text="Right placement"
      placement="right"
    >
      <Action @click="rightOpen = !rightOpen" class="w-full">Right</Action>
    </FloatingUi>
  </div>
</div>

```vue
<FloatingUi v-model:open="topOpen" text="Top placement" placement="top">
  <Action @click="topOpen = !topOpen">Top</Action>
</FloatingUi>

<FloatingUi v-model:open="bottomOpen" text="Bottom placement" placement="bottom">
  <Action @click="bottomOpen = !bottomOpen">Bottom</Action>
</FloatingUi>

<FloatingUi v-model:open="leftOpen" text="Left placement" placement="left">
  <Action @click="leftOpen = !leftOpen">Left</Action>
</FloatingUi>

<FloatingUi v-model:open="rightOpen" text="Right placement" placement="right">
  <Action @click="rightOpen = !rightOpen">Right</Action>
</FloatingUi>
```

### Custom Content

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex justify-center">
  <FloatingUi 
    v-model:open="customOpen"
    type="rich"
    placement="bottom-start"
  >
    <Action @click="customOpen = !customOpen">User Profile</Action>
    <template #popover="{ close }">
      <div class="p-4 min-w-64">
        <div class="flex items-center gap-3 mb-3">
          <Avatar src="https://i.pravatar.cc/40" size="sm" />
          <div>
            <div class="font-semibold">John Doe</div>
            <div class="text-sm text-base-500">john@example.com</div>
          </div>
        </div>
        
        <div class="space-y-2">
          <Action variant="ghost" size="sm" class="w-full justify-start">
            View Profile
          </Action>
          <Action variant="ghost" size="sm" class="w-full justify-start">
            Settings
          </Action>
          <Action variant="ghost" size="sm" class="w-full justify-start" @click="close">
            Sign Out
          </Action>
        </div>
      </div>
    </template>
  </FloatingUi>
</div>

```vue
<FloatingUi 
  v-model:open="customOpen"
  type="rich"
  placement="bottom-start"
>
  <Action @click="customOpen = !customOpen">User Profile</Action>
  <template #popover="{ close }">
    <div class="p-4 min-w-64">
      <div class="flex items-center gap-3 mb-3">
        <Avatar src="https://i.pravatar.cc/40" size="sm" />
        <div>
          <div class="font-semibold">John Doe</div>
          <div class="text-sm text-base-500">john@example.com</div>
        </div>
      </div>
      
      <div class="space-y-2">
        <Action variant="ghost" size="sm" class="w-full justify-start">
          View Profile
        </Action>
        <Action variant="ghost" size="sm" class="w-full justify-start">
          Settings
        </Action>
        <Action variant="ghost" size="sm" class="w-full justify-start" @click="close">
          Sign Out
        </Action>
      </div>
    </div>
  </template>
</FloatingUi>
```

### Without Arrow

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex justify-center">
  <FloatingUi 
    v-model:open="noArrowOpen"
    type="rich"
    placement="top"
    hide-arrow
  >
    <Action @click="noArrowOpen = !noArrowOpen">No Arrow</Action>
    <template #popover>
      <div class="p-3">
        <p class="text-sm">This floating element has no arrow pointer.</p>
      </div>
    </template>
  </FloatingUi>
</div>

```vue
<FloatingUi 
  v-model:open="isOpen"
  type="rich"
  placement="top"
  hide-arrow
>
  <Action @click="isOpen = !isOpen">No Arrow</Action>
  <template #popover>
    <div class="p-3">
      <p class="text-sm">This floating element has no arrow pointer.</p>
    </div>
  </template>
</FloatingUi>
```

## Advanced Usage

### Programmatic Control

```vue
<template>
  <div class="flex gap-4">
    <FloatingUi 
      v-model:open="programmaticOpen"
      type="rich"
      placement="bottom"
    >
      <Action>Hover Target</Action>
      <template #popover="{ isOpen }">
        <div class="p-3">
          <p class="text-sm mb-2">Programmatically controlled</p>
          <p class="text-xs text-base-500">State: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </div>
      </template>
    </FloatingUi>
    
    <Action @click="programmaticOpen = true" variant="outline">Show</Action>
    <Action @click="programmaticOpen = false" variant="outline">Hide</Action>
    <Action @click="programmaticOpen = !programmaticOpen" variant="outline">Toggle</Action>
  </div>
</template>

<script setup>
const programmaticOpen = ref(false);
</script>
```

### With Form Content

```vue
<template>
  <FloatingUi 
    v-model:open="formOpen"
    type="rich"
    placement="bottom-start"
    hide-arrow
  >
    <Action @click="formOpen = !formOpen">Quick Add</Action>
    <template #popover="{ close }">
      <form @submit.prevent="handleSubmit" class="p-4 min-w-80">
        <h3 class="font-semibold mb-3">Add New Item</h3>
        
        <div class="space-y-3">
          <TextField 
            v-model="formData.title"
            label="Title"
            required
          />
          
          <TextField 
            v-model="formData.description"
            label="Description"
            rows="3"
          />
          
          <Select 
            v-model="formData.category"
            label="Category"
            :options="categoryOptions"
          />
        </div>
        
        <div class="flex gap-2 justify-end mt-4">
          <Action @click="close" variant="outline" size="sm">Cancel</Action>
          <Action type="submit" kind="primary" size="sm">Add Item</Action>
        </div>
      </form>
    </template>
  </FloatingUi>
</template>

<script setup>
const formOpen = ref(false);
const formData = reactive({
  title: '',
  description: '',
  category: ''
});

function handleSubmit() {
  console.log('Form submitted:', formData);
  formOpen.value = false;
  // Reset form
  Object.assign(formData, { title: '', description: '', category: '' });
}
</script>
```

## Best Practices

- Use `type="plain"` for simple tooltips and informational content
- Use `type="rich"` for complex interactive content like menus or forms
- Consider the `hideArrow` option for content that doesn't need visual connection to the trigger
- Choose appropriate placement based on the context and available space
- Use the slot props (`isOpen`, `open`, `close`, `toggle`) for dynamic content and interactions
- Avoid nesting FloatingUi components deeply as it can cause positioning issues
- Test different placements to ensure content remains visible on various screen sizes
- Use this component as a foundation for building higher-level components rather than directly in application code
- Consider accessibility when building interactive floating content

## Examples

### Tooltip-like Information

```vue
<template>
  <div class="flex gap-4 items-center">
    <span>Hover over these elements for information:</span>
    
    <FloatingUi 
      text="This is a username field"
      placement="top"
      type="plain"
    >
      <TextField placeholder="Username" />
    </FloatingUi>
    
    <FloatingUi 
      placement="top"
      type="rich"
    >
      <Icon icon="material-symbols:help" class="text-base-500 cursor-help" />
      <template #popover>
        <div class="p-3 max-w-xs">
          <h4 class="font-semibold mb-1">Password Requirements</h4>
          <ul class="text-sm space-y-1">
            <li>• At least 8 characters</li>
            <li>• Include uppercase and lowercase</li>
            <li>• Include at least one number</li>
            <li>• Include at least one symbol</li>
          </ul>
        </div>
      </template>
    </FloatingUi>
  </div>
</template>
```

### Context Menu Implementation

```vue
<template>
  <div 
    @contextmenu.prevent="showContextMenu"
    class="p-8 border-2 border-dashed border-base-300 rounded-lg cursor-pointer"
  >
    <p class="text-center text-base-500">Right-click for context menu</p>
    
    <FloatingUi 
      v-model:open="contextMenuOpen"
      type="rich"
      :placement="contextMenuPlacement"
      hide-arrow
    >
      <div></div> <!-- Empty trigger -->
      <template #popover="{ close }">
        <div class="py-2">
          <MenuItem label="Cut" @click="close" />
          <MenuItem label="Copy" @click="close" />
          <MenuItem label="Paste" @click="close" />
          <MenuDivider />
          <MenuItem label="Delete" @click="close" />
        </div>
      </template>
    </FloatingUi>
  </div>
</template>

<script setup>
const contextMenuOpen = ref(false);
const contextMenuPlacement = ref('bottom-start');

function showContextMenu(event) {
  // Determine best placement based on mouse position
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;
  
  if (clientX > innerWidth / 2) {
    contextMenuPlacement.value = clientY > innerHeight / 2 ? 'top-end' : 'bottom-end';
  } else {
    contextMenuPlacement.value = clientY > innerHeight / 2 ? 'top-start' : 'bottom-start';
  }
  
  contextMenuOpen.value = true;
}
</script>
```
