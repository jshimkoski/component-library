<template>
  <div class="prose max-w-2xl mx-auto py-8">
    <h1 id="carousel-demo" class="mb-4">Carousel Component Demo</h1>
    <p class="mb-6">
      This is a demo of the <code>Carousel</code> component. It supports custom slides, auto-play, keyboard navigation, and more.
    </p>
    <div class="flex items-center gap-2 mb-2">
      <Action
        :aria-label="isPlaying ? 'Pause carousel' : 'Play carousel'"
        variant="ghost"
        size="md"
        square
        @click="isPlaying = !isPlaying"
      >
        <Icon :icon="isPlaying ? 'material-symbols:pause' : 'material-symbols:play-arrow'" class="text-2xl" />
      </Action>
      <span class="text-base-600 dark:text-base-400">{{ isPlaying ? 'Pause' : 'Play' }}</span>
    </div>
    <Carousel
      v-model="current"
      :items="slides"
      :autoPlay="isPlaying"
      :interval="10000"
      :showArrows="true"
      :showIndicators="true"
    />
    <div class="text-sm text-base-600 dark:text-base-400">
      <strong>Current slide index:</strong> {{ current }}
    </div>
    <div class="mt-8">
      <h2>Code Example</h2>
      <pre><code class="language-html">&lt;Carousel
  v-model="current"
  :items="slides"
  :autoPlay="true"
  :interval="4000"
  :showArrows="true"
  :showIndicators="true"
  containerClass="rounded-lg shadow-lg"
&gt;
  &lt;template #slide="{ item, index }"&gt;
    &lt;div class="relative flex items-center justify-center h-64 bg-base-200 dark:bg-base-800"&gt;
      &lt;img :src="item.src" :alt="item.alt" class="h-full object-contain" /&gt;
      &lt;div class="absolute bottom-4 left-4 text-white bg-black/50 px-2 py-1 rounded"&gt;
        { { item.caption } }
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/Carousel&gt;
</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
const current = ref(0);
const isPlaying = ref(true);
const slides = [
  { src: 'https://placehold.co/600x400?text=Slide1', alt: 'Slide 1', caption: 'First Slide' },
  { src: 'https://placehold.co/600x400?text=Slide2', alt: 'Slide 2', caption: 'Second Slide' },
  { src: 'https://placehold.co/600x400?text=Slide3', alt: 'Slide 3', caption: 'Third Slide' },
];
</script>
