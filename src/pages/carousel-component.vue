<template>
  <div class="content">
    <Prose>
      <h1>Carousel</h1>
      <h2>Overview</h2>
      <p>The Carousel component is a Material Design-compliant slideshow for Vue 3 that displays a series of content items in a rotating fashion. It supports swiping, keyboard navigation, looping, auto-play, custom slides, and accessibility features. The component is ideal for showcasing images, testimonials, or any content that benefits from a sliding presentation.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Carousel 
    v-model="currentSlide"
    :items="slides" 
    :auto-play="true"
    :interval="4000"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentSlide = ref(0);
const slides = [
  { src: '/image1.jpg', alt: 'First slide' },
  { src: '/image2.jpg', alt: 'Second slide' },
  { src: '/image3.jpg', alt: 'Third slide' }
];
&lt;/script&gt;</code></pre>
      <h2>Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Prop</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>items</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array&lt;any&gt;</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">[]</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of slide data objects.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">0</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The index of the currently active slide (v-model support).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>loop</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">true</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to loop from last to first slide and vice versa.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>autoPlay</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to auto-advance slides.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showProgress</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show progress bar during auto-play.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>interval</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">5000</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Auto-play interval in ms.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showArrows</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">true</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Show previous/next navigation arrows.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showIndicators</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">true</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Show slide indicators (dots).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>containerClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">''</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Additional classes for the root container.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>ariaLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">'carousel'</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ARIA label for accessibility.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>prevLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">'Previous slide'</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ARIA label for previous arrow.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>nextLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">'Next slide'</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ARIA label for next arrow.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>indicatorLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Function(idx: number): string</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">See code</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Function to generate ARIA label for indicators.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <ul>
        <li><code>update:modelValue</code> — Emitted when the active slide changes (for v-model).</li>
        <li><code>change</code> — Emitted when the active slide changes.</li>
        <li><code>slide</code> — Emitted when the active slide changes (alias for <code>change</code>).</li>
      </ul>
      <h2>Slots</h2>
      <ul>
        <li><code>slide</code> — Custom slot for rendering each slide. Receives <code>{ item, index }</code> as slot props.</li>
      </ul>
      <h2>Usage Example</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Carousel
    v-model="current"
    :items="slides"
    :autoPlay="true"
    :interval="4000"
    :showArrows="true"
    :showIndicators="true"
    containerClass="rounded-lg shadow-lg"
  &gt;
    &lt;template #slide="{ item, index }"&gt;
      &lt;img :src="item.src" :alt="item.alt" class="h-full object-contain" /&gt;
        &lt;div class="absolute bottom-4 left-4 text-white bg-black/50 px-2 py-1 rounded"&gt;
          &#123;&#123; item.caption &#125;&#125;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Carousel&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue';
import Carousel from '@/components/Carousel.vue';

const current = ref(0);
const slides = [
  { src: '/img/slide1.jpg', alt: 'Slide 1', caption: 'First Slide' },
  { src: '/img/slide2.jpg', alt: 'Slide 2', caption: 'Second Slide' },
  { src: '/img/slide3.jpg', alt: 'Slide 3', caption: 'Third Slide' },
];
&lt;/script&gt;</code></pre>
      <h2>Accessibility</h2>
      <ul>
        <li>Keyboard navigation: left/right arrows move slides.</li>
        <li>ARIA roles and labels for region, controls, and indicators.</li>
        <li>Indicators and arrows are focusable and labeled.</li>
      </ul>
      <h2>Notes</h2>
      <ul>
        <li>The default slot renders an image if <code>item.src</code> is present, but you can fully customize the slide content using the <code>slide</code> slot.</li>
        <li>The carousel is responsive and supports both light and dark themes.</li>
      </ul>
      <h2>Best Practices</h2>
      <ul>
        <li>Use clear and descriptive labels</li>
        <li>Consider accessibility requirements</li>
        <li>Follow consistent patterns across your application</li>
        <li>Test with keyboard navigation</li>
        <li>Ensure proper color contrast for readability</li>
      </ul>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>