<template>
  <div class="content">
    <Prose>
      <h1>Slider</h1>
      <p>The Slider component provides an interactive way for users to select a value from a specific range.</p>
      <h2>Overview</h2>
      <p>The Slider component allows users to select a value or range by moving a handle along a track. It's useful for adjusting settings like volume, brightness, or filtering by price or date ranges.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Slider v-model="value" :min="0" :max="100" :step="1" label="Volume" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const value = ref(50);
&lt;/script&gt;</code></pre>
      <h2>Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The current value of the slider (use with v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>min</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The minimum value of the slider</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>max</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>100</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The maximum value of the slider</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>step</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>1</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The amount to increase or decrease by when moving the slider</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables slider interaction</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional label text for the slider</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to display the current value</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showTicks</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show tick marks on the slider</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>steps</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number of steps to display as tick marks (0 means no ticks)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>formatter</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Function</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">A function to format the displayed value</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Parameters</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(value: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the slider value changes</td>
          </tr>
        </tbody>
      </table>
      <h2>Variants</h2>
      <h3>With Custom Formatter</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Slider 
    v-model="price" 
    :min="0" 
    :max="1000" 
    :step="10" 
    label="Price Range" 
    :formatter="formatCurrency" 
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const price = ref(500);

const formatCurrency = (value) =&gt; {
  return `$${value.toFixed(2)}`;
};
&lt;/script&gt;</code></pre>
      <h3>With Tick Marks</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Slider 
    v-model="rating" 
    :min="0" 
    :max="10" 
    :step="1" 
    label="Rating" 
    :showTicks="true" 
    :steps="10" 
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const rating = ref(5);
&lt;/script&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Slider 
    v-model="volume" 
    :min="0" 
    :max="100" 
    :step="1" 
    label="Volume" 
    disabled 
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const volume = ref(50);
&lt;/script&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use sliders for selecting values where visual, interactive feedback is helpful</li>
        <li>Include a label that clearly describes what the slider controls</li>
        <li>Consider using tick marks for discrete values to improve usability</li>
        <li>Use appropriate step values based on the range (smaller ranges benefit from smaller steps)</li>
        <li>Format displayed values to match user expectations (e.g., currency, percentage)</li>
        <li>Consider adding text input alongside sliders for precise input when needed</li>
      </ul>
      <h2>Accessibility</h2>
      <ul>
        <li>The component includes proper ARIA attributes for screen readers</li>
        <li>Keyboard navigation is fully supported:</li>
        <li>Arrow keys (left/right or up/down) adjust the value by one step</li>
        <li>Page Up/Down keys adjust the value by larger steps</li>
        <li>Home/End keys set the value to min/max</li>
        <li>Focus states are clearly visible for keyboard users</li>
        <li>The slider handle can be operated via keyboard, mouse, or touch interactions</li>
      </ul>
      <h2>Examples</h2>
      <h3>Temperature Control</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div class="p-4 bg-base-100 rounded-lg"&gt;
    &lt;Slider 
      v-model="temperature" 
      :min="15" 
      :max="30" 
      :step="0.5" 
      label="Temperature" 
      :formatter="formatTemperature" 
      :showTicks="true" 
      :steps="15" 
    /&gt;

    &lt;div class="mt-4 text-sm text-base-500"&gt;
      &#123;&#123; temperatureDescription &#125;&#125;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue';

const temperature = ref(22);

const formatTemperature = (value) =&gt; {
  return `${value}°C`;
};

const temperatureDescription = computed(() =&gt; {
  if (temperature.value &lt; 18) return "Too cold";
  if (temperature.value &lt; 21) return "Cool";
  if (temperature.value &lt; 24) return "Comfortable";
  if (temperature.value &lt; 27) return "Warm";
  return "Too hot";
});
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>