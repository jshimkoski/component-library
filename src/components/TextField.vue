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
      <input
        v-model="model"
        v-bind="$attrs"
        :id="id"
        :type="type"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        :name="name"
        :class="`
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
          ${icon ? 'pl-10' : ''}
          ${$slots.suffix ? 'pr-10' : ''}
        `"
      />
      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <Icon
          v-if="icon"
          :icon="icon"
          class="text-xl mt-0.25"
        />
      </div>
      <div
        v-if="$slots.suffix"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <slot name="suffix"></slot>
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
    type: {
      type: String as PropType<
        "text" | "number" | "tel" | "url" | "email" | "password"
      >,
      default: "text",
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
