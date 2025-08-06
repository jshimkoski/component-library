# Sheet

## Overview

The Sheet component creates a sliding panel that appears from the left or right side of the screen. It's commonly used for secondary navigation, detail panels, or forms that don't require the full screen. The Sheet component offers various configuration options including different variants, placements, and styling capabilities.

## Basic Usage

```vue
<script setup>
const standardSheetOpen = ref(false);
</script>

<template>
  <button @click="standardSheetOpen = true">
    Open standard sheet
  </button>
  
  <Sheet v-model="standardSheetOpen" headline="Standard Sheet">
    <div class="p-4">
      <p>This is a standard sheet that slides in from the right side.</p>
    </div>
  </Sheet>
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `triggerElement` | `HTMLElement \| null` | `undefined` | Reference to the element that triggered the sheet. Focus returns to this element when the sheet closes. |
| `variant` | `"standard" \| "modal" \| "inset-modal"` | `"standard"` | Determines the visual style and behavior: "standard" has no overlay, "modal" has overlay and edge alignment, "inset-modal" has overlay and inset margins. |
| `headline` | `String` | `undefined` | The title displayed in the sheet header. |
| `placement` | `"left" \| "right"` | `"right"` | Determines if the sheet slides in from the left or right side. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Main content of the sheet. |
| `headline` | Custom headline content (replaces the headline prop). |
| `footer` | Footer content for buttons or actions. Receives close function to dismiss the sheet. |

## v-model

The component supports v-model for controlling the sheet's visibility.

## Modal Variant

```vue
<script setup>
const modalSheetOpen = ref(false);
</script>

<template>
  <button @click="modalSheetOpen = true">
    Open modal sheet
  </button>
  
  <Sheet v-model="modalSheetOpen" variant="modal" headline="Modal Sheet">
    <div class="p-4">
      <p>This modal sheet includes an overlay and edge alignment.</p>
    </div>
  </Sheet>
</template>
```

## Inset Modal Variant

```vue
<script setup>
const insetModalSheetOpen = ref(false);
</script>

<template>
  <button @click="insetModalSheetOpen = true">
    Open inset modal sheet
  </button>
  
  <Sheet v-model="insetModalSheetOpen" variant="inset-modal" headline="Inset Modal Sheet">
    <div class="p-4">
      <p>This inset modal sheet includes an overlay and inset margins for a floating appearance.</p>
    </div>
  </Sheet>
</template>
```

## Left Placement

```vue
<script setup>
const leftSheetOpen = ref(false);
</script>

<template>
  <button @click="leftSheetOpen = true">
    Open left sheet
  </button>
  
  <Sheet v-model="leftSheetOpen" placement="left" headline="Left Sheet">
    <div class="p-4">
      <p>This sheet slides in from the left side of the screen.</p>
    </div>
  </Sheet>
</template>
```

## Using the Footer Slot

```vue
<script setup>
const formSheetOpen = ref(false);

function saveForm(close) {
  // Save form data
  close(); // Close the sheet
}
</script>

<template>
  <button @click="formSheetOpen = true">
    Open form sheet
  </button>
  
  <Sheet v-model="formSheetOpen" variant="modal" headline="Edit Profile">
    <div class="p-4 space-y-4">
      <div>
        <label class="block mb-1">Name</label>
        <input v-model="name" type="text" class="border rounded px-2 py-1 w-full" />
      </div>
      <div>
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="border rounded px-2 py-1 w-full" />
      </div>
    </div>
    <template #footer="{ close }">
      <button 
        class="px-3 py-1 border rounded"
        @click="close"
      >
        Cancel
      </button>
      <button 
        class="px-3 py-1 bg-primary-500 text-white rounded"
        @click="saveForm(close)"
      >
        Save
      </button>
    </template>
  </Sheet>
</template>
```

## Custom Headline

```vue
<script setup>
const customHeadlineSheetOpen = ref(false);
</script>

<template>
  <button @click="customHeadlineSheetOpen = true">
    Open sheet with custom headline
  </button>
  
  <Sheet v-model="customHeadlineSheetOpen">
    <template #headline>
      <div class="w-6 h-6 rounded-full bg-green-500">
        <span>User is Online</span>
      </div>
    </template>

    <div class="p-4">
      <p>This sheet has a custom headline with an indicator.</p>
    </div>
  </Sheet>
</template>
```

## Best Practices

- Use the appropriate variant based on the content importance and user flow:
  - **Standard**: For non-critical content like site navigation or settings that don't require user decisions
  - **Modal**: For content that requires user attention or decision
  - **Inset Modal**: For more prominent content that visually appears more elevated/important
- Consider which side the sheet should appear from:
  - **Right**: Better for detail views, settings, or forms (common default)
  - **Left**: Better for navigation menus or structure-related content
- Always provide a clear headline to indicate the purpose of the sheet
- For sheets with forms or actions, use the footer slot to provide consistent action buttons
- Pass the `triggerElement` when possible to improve accessibility by returning focus properly
- Keep content organized and scrollable for longer content

## Accessibility Considerations

- The component uses `aria-modal="true"` to indicate its role to assistive technologies
- Focus is trapped within the sheet when modal variants are used, preventing users from accidentally interacting with content behind the overlay
- The Escape key can be used to close modal variants
- Focus returns to the triggering element when the sheet is closed (if `triggerElement` is provided)
- Clicking outside the sheet will close modal variants

## Examples

### Navigation Menu

```vue
<script setup>
const navSheetOpen = ref(false);
</script>

<template>
  <button @click="navSheetOpen = true">
    <span>Menu</span>
  </button>
  
  <Sheet v-model="navSheetOpen" placement="left" headline="Navigation">
    <div class="divide-y">
      <a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800">Home</a>
      <a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800">Products</a>
      <a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800">Services</a>
      <a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800">About Us</a>
      <a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800">Contact</a>
    </div>
  </Sheet>
</template>
```
