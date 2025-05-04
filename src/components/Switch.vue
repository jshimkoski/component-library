<template>
  <div
    class="inline-flex items-start gap-2"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <input
      v-model="model"
      :id="id"
      type="checkbox"
      role="switch"
      :name="name"
      :required="required"
      :disabled="disabled"
      :class="{
        'checked:bg-primary-500 checked:border-primary-500': kind === 'primary',
        'checked:bg-secondary-500 checked:border-secondary-500':
          kind === 'secondary',
        'checked:bg-success-500 checked:border-success-500': kind === 'success',
        'checked:bg-info-500 checked:border-info-500': kind === 'info',
        'checked:bg-warning-500 checked:border-warning-500': kind === 'warning',
        'checked:bg-danger-500 checked:border-danger-500': kind === 'danger',
      }"
      class="appearance-none relative inline-block w-9 h-5 border rounded-full align-bottom m-auto cursor-pointer bg-base-300 dark:bg-base-700 border-base-300 dark:border-base-700 before:shadow-sm transition-all before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0.25 before:w-4 before:h-4 before:bg-white dark:before:bg-base-300 before:rounded-full checked:before:left-4.25 mt-1.5"
    />
    <div class="relative">
      <label
        :for="id"
        class="cursor-pointer"
        :class="[
          required && showMarker
            ? `after:text-danger-500 after:content-['*'] after:ml-1`
            : '',
        ]"
      >
        <slot>{{ label }}</slot>
        <span class="absolute inset-0"></span>
      </label>
      <p
        v-if="description"
        class="text-sm text-base-600 dark:text-base-400"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    kind: {
      type: String as PropType<Kind>,
      default: "primary",
    },
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: undefined,
    },
    showMarker: {
      type: Boolean,
      default: undefined,
    },
  });

  const model = defineModel({
    type: Boolean,
  });

  const id = useId();
</script>
