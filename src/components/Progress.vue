<template>
  <div class="progress-container">
    <div class="flex items-center justify-between">
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
        class="h-1.5 w-full rounded-full bg-base-200 dark:bg-base-700"
      ></div>

      <!-- Filled track -->
      <div
        class="absolute h-1.5 rounded-full transition-all duration-300"
        :class="[
          {
            'bg-primary-500 dark:bg-primary-400': props.kind === 'primary',
            'bg-secondary-500 dark:bg-secondary-400': props.kind === 'secondary',
            'bg-success-500 dark:bg-success-400': props.kind === 'success',
            'bg-info-500 dark:bg-info-400': props.kind === 'info',
            'bg-warning-500 dark:bg-warning-400': props.kind === 'warning',
            'bg-danger-500 dark:bg-danger-400': props.kind === 'danger',
          },
          'rounded-full'
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
