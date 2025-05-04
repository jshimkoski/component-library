<template>
  <div
    class="grid items-center gap-1"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <label
      :for="id"
      class="cursor-pointer block font-semibold"
      :class="[
        required && showMarker
          ? `after:text-danger-500 after:content-['*'] after:ml-1`
          : '',
      ]"
    >
      <slot>{{ label }}</slot>
    </label>
    <textarea
      v-model="model"
      v-bind="$attrs"
      :id="id"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :name="name"
      :class="`
        w-full h-24 p-4
        rounded-base
        radius-2xl:rounded-2xl
        border border-base-300 dark:border-base-700
        bg-white dark:bg-base-950
        text-base-700 dark:text-base-300
        hover:bg-base-50 dark:hover:bg-base-900
        focus:bg-white dark:focus:bg-base-950
        focus:border-primary-500
        focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:focus:outline-primary-400
        transition-colors
        resize-none
      `"
    />
    <p
      v-if="description"
      class="text-sm text-base-600 dark:text-base-400"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
  });

  defineProps({
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
    placeholder: {
      type: String,
      default: undefined,
    },
    showMarker: {
      type: Boolean,
      default: undefined,
    },
  });

  const model = defineModel({
    type: String,
  });

  const id = useId();
</script>
