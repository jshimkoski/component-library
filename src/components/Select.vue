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
    <div class="grid">
      <svg
        class="pointer-events-none relative right-2 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
      <select
        v-model="model"
        v-bind="$attrs"
        :id="id"
        :disabled="disabled"
        :required="required"
        :multiple="multiple"
        :name="name"
        :class="`
          col-start-1 row-start-1
          w-full px-4 py-2
          outline-none
          rounded-theme-md
          border border-neutral-300 dark:border-neutral-700
          bg-white dark:bg-black
          text-neutral-700 dark:text-neutral-300
          hover:bg-neutral-50 dark:hover:bg-neutral-900
          focus:bg-white dark:focus:bg-black
          focus:border-neutral-500
          focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-900
          transition-colors
        `"
      >
        <option
          value=""
          disabled
        >
          Please select one
        </option>
        <option
          v-for="option in options"
          :key="String(option.value ?? 'null-key')"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
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
    multiple: {
      type: Boolean,
      default: undefined,
    },
    options: {
      type: Array as () => Array<{
        label: string;
        value: null | boolean | string | number | Record<string, any>;
        disabled?: boolean;
      }>,
      default: undefined,
    },
    showMarker: {
      type: Boolean,
      default: undefined,
    },
  });

  const model = defineModel({
    type: [Boolean, String, Number, Object] as PropType<
      null | boolean | string | number | Record<string, any>
    >,
  });

  const id = useId();
</script>
