<template>
  <Prose>
    <h1>Slider</h1>
    <p>
      The Slider component provides an interactive way for users to select a
      value from a specific range.
    </p>
  </Prose>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
    <Card class="p-6">
      <Slider
        v-model="basicValue"
        :min="0"
        :max="100"
        :step="1"
        label="Basic Slider"
      />
      <div class="mt-4 text-sm text-base-600 dark:text-base-400">
        Current value: {{ basicValue }}
      </div>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <!-- <pre
        class="text-sm overflow-x-auto"
      ><code>{{ basicSliderCode }}</code></pre> -->
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">With Custom Formatter</h2>
    <Card class="p-6">
      <Slider
        v-model="priceValue"
        :min="0"
        :max="1000"
        :step="10"
        label="Price Range"
        :formatter="formatCurrency"
      />
      <div class="mt-4 text-sm text-base-600 dark:text-base-400">
        Selected price: {{ formatCurrency(priceValue) }}
      </div>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <!-- <pre
        class="text-sm overflow-x-auto"
      ><code>{{ formatterSliderCode }}</code></pre> -->
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">With Tick Marks</h2>
    <Card class="p-6">
      <Slider
        v-model="ratingValue"
        :min="0"
        :max="10"
        :step="1"
        label="Rating"
        :showTicks="true"
        :steps="10"
      />
      <div class="mt-4 text-sm text-base-600 dark:text-base-400">
        Your rating: {{ ratingValue }} out of 10
      </div>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <!-- <pre
        class="text-sm overflow-x-auto"
      ><code>{{ ticksSliderCode }}</code></pre> -->
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Disabled Slider</h2>
    <Card class="p-6">
      <Slider
        v-model="disabledValue"
        :min="0"
        :max="100"
        :step="1"
        label="Disabled Slider"
        disabled
      />
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <!-- <pre
        class="text-sm overflow-x-auto"
      ><code>{{ disabledSliderCode }}</code></pre> -->
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Temperature Control Example</h2>
    <Card class="p-6">
      <Slider
        v-model="temperature"
        :min="15"
        :max="30"
        :step="0.5"
        label="Temperature"
        :formatter="formatTemperature"
        :showTicks="true"
        :steps="15"
      />
      <div class="mt-4 flex gap-4 items-center">
        <div class="text-lg font-semibold">
          {{ formatTemperature(temperature) }}
        </div>
        <div class="text-sm text-base-600 dark:text-base-400">
          {{ temperatureDescription }}
        </div>
      </div>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <!-- <pre
        class="text-sm overflow-x-auto"
      ><code>{{ temperatureSliderCode }}</code></pre> -->
    </div>
  </div>

  <Prose>
    <h2>API Reference</h2>
    <h3>Props</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>modelValue</code></td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>The current value of the slider (use with v-model)</td>
        </tr>
        <tr>
          <td><code>min</code></td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>The minimum value of the slider</td>
        </tr>
        <tr>
          <td><code>max</code></td>
          <td><code>Number</code></td>
          <td><code>100</code></td>
          <td>The maximum value of the slider</td>
        </tr>
        <tr>
          <td><code>step</code></td>
          <td><code>Number</code></td>
          <td><code>1</code></td>
          <td>The amount to increase or decrease by when moving the slider</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>When true, disables slider interaction</td>
        </tr>
        <tr>
          <td><code>label</code></td>
          <td><code>String</code></td>
          <td><code>undefined</code></td>
          <td>Optional label text for the slider</td>
        </tr>
        <tr>
          <td><code>showValue</code></td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>Whether to display the current value</td>
        </tr>
        <tr>
          <td><code>showTicks</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether to show tick marks on the slider</td>
        </tr>
        <tr>
          <td><code>steps</code></td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>Number of steps to display as tick marks</td>
        </tr>
        <tr>
          <td><code>formatter</code></td>
          <td><code>Function</code></td>
          <td><code>undefined</code></td>
          <td>A function to format the displayed value</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Parameters</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>update:modelValue</code></td>
          <td><code>(value: number)</code></td>
          <td>Emitted when the slider value changes</td>
        </tr>
      </tbody>
    </table>
  </Prose>
</template>

<script setup lang="ts">
  // Basic slider
  const basicValue = ref(50);

  // Price slider with formatter
  const priceValue = ref(500);
  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  // Rating slider with ticks
  const ratingValue = ref(5);

  // Disabled slider
  const disabledValue = ref(50);

  // Temperature slider example
  const temperature = ref(22);
  const formatTemperature = (value: number) => {
    return `${value}°C`;
  };
  const temperatureDescription = computed(() => {
    if (temperature.value < 18) return "Too cold";
    if (temperature.value < 21) return "Cool";
    if (temperature.value < 24) return "Comfortable";
    if (temperature.value < 27) return "Warm";
    return "Too hot";
  });
</script>
