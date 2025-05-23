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
    <div class="relative">
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
            rounded-base
            border border-base-300 dark:border-base-700
            bg-white dark:bg-base-950
            text-base-700 dark:text-base-300
            hover:bg-base-50 dark:hover:bg-base-900
            focus:bg-white dark:focus:bg-base-950
            focus:border-primary-500
            focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:focus:outline-primary-400
            transition-colors
            appearance-none force-colors:appearance-auto
            ${icon ? 'pl-10' : ''}
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
      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 flex items-center pl-4"
      >
        <Icon
          v-if="icon"
          :icon="icon"
          class="text-xl mt-0.25"
        />
      </div>
    </div>
    <p
      v-if="description"
      class="text-sm text-base-600 dark:text-base-400"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  defineOptions({
    inheritAttrs: false,
  });

  defineProps({
    icon: { type: String, default: undefined },
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
