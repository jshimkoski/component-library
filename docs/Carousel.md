# Carousel Component

A Material Design-compliant carousel for Vue 3, supporting swiping, keyboard navigation, looping, auto-play, custom slides, and accessibility. Follows the conventions of other components in this library.

## Props

| Prop             | Type                                | Default      | Description                                                      |
|------------------|-------------------------------------|--------------|------------------------------------------------------------------|
| items            | Array<any>                          | []           | Array of slide data objects.                                     |
| modelValue       | Number                              | 0            | The index of the currently active slide (v-model support).       |
| loop             | Boolean                             | true         | Whether to loop from last to first slide and vice versa.         |
| autoPlay         | Boolean                             | false        | Whether to auto-advance slides.                                  |
| interval         | Number                              | 5000         | Auto-play interval in ms.                                        |
| showArrows       | Boolean                             | true         | Show previous/next navigation arrows.                            |
| showIndicators   | Boolean                             | true         | Show slide indicators (dots).                                    |
| containerClass   | String                              | ''           | Additional classes for the root container.                       |
| ariaLabel        | String                              | 'carousel'   | ARIA label for accessibility.                                    |
| prevLabel        | String                              | 'Previous slide' | ARIA label for previous arrow.                              |
| nextLabel        | String                              | 'Next slide' | ARIA label for next arrow.                                   |
| indicatorLabel   | Function(idx: number): string       | See code     | Function to generate ARIA label for indicators.                  |
| itemKey          | Function(item, idx): string \| number | See code     | Function to generate unique key for each slide.                  |

## Events

- `update:modelValue` — Emitted when the active slide changes (for v-model).
- `change` — Emitted when the active slide changes.
- `slide` — Emitted when the active slide changes (alias for `change`).

## Slots

- `slide` — Custom slot for rendering each slide. Receives `{ item, index }` as slot props.

## Usage Example

```vue
<template>
  <Carousel
    v-model="current"
    :items="slides"
    :autoPlay="true"
    :interval="4000"
    :showArrows="true"
    :showIndicators="true"
    containerClass="rounded-lg shadow-lg"
  >
    <template #slide="{ item, index }">
      <div class="flex items-center justify-center h-64 bg-base-200 dark:bg-base-800">
        <img :src="item.src" :alt="item.alt" class="h-full object-contain" />
        <div class="absolute bottom-4 left-4 text-white bg-black/50 px-2 py-1 rounded">
          {{ item.caption }}
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Carousel from '@/components/Carousel.vue';

const current = ref(0);
const slides = [
  { src: '/img/slide1.jpg', alt: 'Slide 1', caption: 'First Slide' },
  { src: '/img/slide2.jpg', alt: 'Slide 2', caption: 'Second Slide' },
  { src: '/img/slide3.jpg', alt: 'Slide 3', caption: 'Third Slide' },
];
</script>
```

## Accessibility
- Keyboard navigation: left/right arrows move slides.
- ARIA roles and labels for region, controls, and indicators.
- Indicators and arrows are focusable and labeled.

## Notes
- The default slot renders an image if `item.src` is present, but you can fully customize the slide content using the `slide` slot.
- The carousel is responsive and supports both light and dark themes.
