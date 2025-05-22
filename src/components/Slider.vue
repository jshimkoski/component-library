<template>
  <div class="slider-container">
    <div class="mb-2 flex items-center justify-between">
      <label
        v-if="label"
        :for="id"
        class="block text-sm font-medium text-base-700 dark:text-base-300"
      >
        {{ label }}
      </label>
      <div
        v-if="showValue"
        class="text-xs font-medium text-base-500 dark:text-base-400"
      >
        {{ formatValue(modelValue) }}
      </div>
    </div>

    <div class="relative flex items-center">
      <!-- Track background -->
      <div
        class="h-1.5 w-full rounded-full bg-base-200 dark:bg-base-700"
        :class="{ 'opacity-50': disabled, 'cursor-pointer': !disabled }"
        @click="disabled ? null : trackClick($event)"
      ></div>

      <!-- Filled track -->
      <div
        class="absolute h-1.5 rounded-full bg-primary-500 dark:bg-primary-400"
        :style="{ width: `${percentage}%` }"
        :class="{ 'opacity-50': disabled, 'cursor-pointer': !disabled }"
        @click="disabled ? null : trackClick($event)"
      ></div>

      <!-- Thumb -->
      <div
        class="absolute h-4 w-4 rounded-full bg-white dark:bg-primary-400 border-2 border-primary-500 dark:border-primary-300 transform -translate-x-1/2 cursor-pointer shadow-md transition-shadow duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
        :class="{
          'opacity-50 cursor-not-allowed': disabled,
          'ring-2 ring-primary-500': isFocused,
        }"
        :style="{ left: `${percentage}%` }"
        @mousedown="disabled ? null : startDrag($event)"
        @touchstart="disabled ? null : startDrag($event)"
        @focus="isFocused = true"
        @blur="isFocused = false"
        ref="thumb"
        :tabindex="disabled ? -1 : 0"
        role="slider"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
        :aria-disabled="disabled"
        :aria-label="label || 'slider'"
        :aria-valuetext="formatValue(modelValue)"
        @keydown.left.prevent="decrementValue"
        @keydown.right.prevent="incrementValue"
        @keydown.down.prevent="decrementValue"
        @keydown.up.prevent="incrementValue"
        @keydown.home.prevent="setValue(min)"
        @keydown.end.prevent="setValue(max)"
        @keydown.page-down.prevent="decrementByStep(10)"
        @keydown.page-up.prevent="incrementByStep(10)"
      ></div>
    </div>

    <!-- Optional tick marks -->
    <div
      v-if="showTicks && steps > 0"
      class="relative mt-2 px-2"
    >
      <div
        v-for="(tick, index) in ticks"
        :key="index"
        class="absolute top-0 h-1 w-1 rounded-full bg-base-400 dark:bg-base-600 transform -translate-x-1/2"
        :style="{ left: `${tick.percentage}%` }"
        :class="{
          'bg-primary-500 dark:bg-primary-400': modelValue >= tick.value,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      default: undefined,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showValue: {
      type: Boolean,
      default: true,
    },
    showTicks: {
      type: Boolean,
      default: false,
    },
    steps: {
      type: Number,
      default: 0,
    },
    formatter: {
      type: Function as PropType<(value: number) => string>,
      default: undefined,
    },
  });

  const modelValue = defineModel<number>({ default: 0 });
  const thumb = ref<HTMLElement | null>(null);
  const dragging = ref(false);
  const isFocused = ref(false);
  const id = useId();

  // Calculate percentage for positioning
  const percentage = computed(() => {
    const percent =
      ((modelValue.value - props.min) / (props.max - props.min)) * 100;
    return Math.min(Math.max(percent, 0), 100);
  });

  // Generate tick marks if enabled
  const ticks = computed(() => {
    if (!props.showTicks || props.steps <= 0) return [];

    const result = [];
    const stepSize = (props.max - props.min) / props.steps;

    for (let i = 0; i <= props.steps; i++) {
      const value = props.min + stepSize * i;
      const percent = ((value - props.min) / (props.max - props.min)) * 100;
      result.push({ value, percentage: percent });
    }

    return result;
  });

  // Format display value
  const formatValue = (value: number): string => {
    if (props.formatter) {
      return props.formatter(value);
    }
    return value.toString();
  };

  // Set value with constraints
  const setValue = (value: number) => {
    if (props.disabled) return;

    // Ensure value is within min/max range
    const constrainedValue = Math.min(Math.max(value, props.min), props.max);

    // Round to nearest step if steps are defined
    if (props.step > 0) {
      const steps = Math.round((constrainedValue - props.min) / props.step);
      const newValue = props.min + steps * props.step;

      if (modelValue.value !== newValue) {
        modelValue.value = newValue;
      }
    } else {
      if (modelValue.value !== constrainedValue) {
        modelValue.value = constrainedValue;
      }
    }
  };

  // Handle drag events
  const startDrag = (event: MouseEvent | TouchEvent) => {
    if (props.disabled) return;

    event.preventDefault();
    event.stopPropagation();
    thumb.value?.focus();
    dragging.value = true;

    const moveHandler = (e: MouseEvent | TouchEvent) => handleDrag(e);
    const endHandler = () => stopDrag();

    window.addEventListener("mousemove", moveHandler as EventListener, {
      passive: false,
    });
    window.addEventListener("touchmove", moveHandler as EventListener, {
      passive: false,
    });
    window.addEventListener("mouseup", endHandler);
    window.addEventListener("touchend", endHandler);

    // Store the cleanup function for later use
    const cleanup = () => {
      window.removeEventListener(
        "mousemove",
        moveHandler as EventListener,
        { passive: false } as EventListenerOptions,
      );
      window.removeEventListener(
        "touchmove",
        moveHandler as EventListener,
        { passive: false } as EventListenerOptions,
      );
      window.removeEventListener("mouseup", endHandler);
      window.removeEventListener("touchend", endHandler);
    };

    // Set the cleanup function for onBeforeUnmount
    cleanupFn.value = cleanup;

    // Handle the initial drag position
    handleDrag(event);
  };

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!dragging.value || props.disabled) return;

    // Prevent default to avoid scrolling on touch devices
    event.preventDefault();

    const container = thumb.value?.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX =
      "touches" in event && event.touches.length > 0
        ? event.touches[0].clientX
        : (event as MouseEvent).clientX;

    const position = clientX - rect.left;
    const percentage = Math.min(Math.max(position / rect.width, 0), 1);

    setValue(props.min + percentage * (props.max - props.min));
  };

  const stopDrag = () => {
    dragging.value = false;
    if (cleanupFn.value) {
      cleanupFn.value();
      cleanupFn.value = null;
    }
  };

  // Allow clicking on the track to set the value
  const trackClick = (event: MouseEvent) => {
    if (props.disabled) return;

    const container = thumb.value?.parentElement;
    if (!container) return;

    event.stopPropagation(); // Prevent event bubbling

    const rect = container.getBoundingClientRect();
    const position = event.clientX - rect.left;
    const percentage = Math.min(Math.max(position / rect.width, 0), 1);

    setValue(props.min + percentage * (props.max - props.min));
    thumb.value?.focus(); // Focus the thumb after clicking
  };

  // Keyboard navigation
  const incrementValue = () => {
    setValue(modelValue.value + props.step);
  };

  const decrementValue = () => {
    setValue(modelValue.value - props.step);
  };

  const incrementByStep = (multiplier: number) => {
    setValue(modelValue.value + props.step * multiplier);
  };

  const decrementByStep = (multiplier: number) => {
    setValue(modelValue.value - props.step * multiplier);
  };

  // Cleanup function reference
  const cleanupFn = ref<(() => void) | null>(null);

  onBeforeUnmount(() => {
    if (cleanupFn.value) {
      cleanupFn.value();
    }
  });
</script>
