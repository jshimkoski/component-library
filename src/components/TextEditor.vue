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
        w-full h-24 px-4 py-2
        outline-none
        rounded-theme-md
        border border-neutral-300 dark:border-neutral-700
        bg-neutral-50 dark:bg-neutral-950
        text-neutral-700 dark:text-neutral-300
        focus:border-neutral-500
        transition-colors
      `"
    />
    <p
      v-if="description"
      class="text-sm text-neutral-500"
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
