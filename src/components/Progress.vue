<template>
  <div class="progress-container">
    <div
      class="flex items-center justify-between"
      :class="{
        'mb-2': label || showValue,
      }"
    >
      <label
        v-if="label"
        :for="id"
        class="block text-sm font-medium text-base-700 dark:text-base-300"
      >
        <slot>{{ label }}</slot>
      </label>
      <div
        v-if="showValue"
        class="text-xs font-medium text-base-500 dark:text-base-400"
      >
        {{ percentComplete }}
      </div>
    </div>

    <div class="relative flex items-center">
      <!-- Track background -->
      <div
        class="w-full rounded-base bg-base-200 dark:bg-base-700"
        :class="{
          'h-0.5': props.size === 'xs',
          'h-1': props.size === 'sm',
          'h-2': props.size === 'md',
          'h-4': props.size === 'lg',
          'h-8': props.size === 'xl',
        }"
      ></div>

      <!-- Filled track -->
      <div
        class="absolute rounded-base transition-all duration-300"
        :class="[
          {
            'bg-primary-500 dark:bg-primary-400': props.kind === 'primary',
            'bg-secondary-500 dark:bg-secondary-400': props.kind === 'secondary',
            'bg-success-500 dark:bg-success-400': props.kind === 'success',
            'bg-info-500 dark:bg-info-400': props.kind === 'info',
            'bg-warning-500 dark:bg-warning-400': props.kind === 'warning',
            'bg-danger-500 dark:bg-danger-400': props.kind === 'danger',
            'h-0.5': props.size === 'xs',
            'h-1': props.size === 'sm',
            'h-2': props.size === 'md',
            'h-4': props.size === 'lg',
            'h-8': props.size === 'xl',
          }
        ]"
        :style="{ width: percentWidth }"
      ></div>
    </div>
    <p
      v-if="description"
      class="text-sm text-base-600 dark:text-base-400 mt-2"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: { type: String, default: undefined },
    description: { type: String, default: undefined },
    max: { type: Number, default: 100 },
    showValue: { type: Boolean, default: false },
    kind: {
      type: String,
      default: 'primary',
      validator: (v: string) => ['primary', 'secondary', 'success', 'info', 'warning', 'danger'].includes(v),
    },
    size: {
      type: String,
      default: 'md',
      validator: (v: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
    },
  });

  const model = defineModel({
    type: Number,
    default: 0,
  });

  const id = useId();

  const percent = computed(() => {
    if (!props.max || !model.value) return 0;
    return Math.min(Math.max((model.value / props.max) * 100, 0), 100);
  });

  const percentComplete = computed(() => `${Math.round(percent.value)}%`);
  const percentWidth = computed(() => `${percent.value}%`);
</script>
