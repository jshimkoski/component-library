<template>
  <div
    class="inline-flex items-start gap-2"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      :id="id"
      :disabled="disabled"
      :required="required"
      :value="value"
      :name="name"
      type="radio"
      :class="`
        cursor-pointer
        mt-1.5 w-4 h-4
        accent-primary-500
      `"
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
        class="text-sm text-neutral-500"
      >
        {{ description }}
      </p>
    </div>
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
    showMarker: {
      type: Boolean,
      default: undefined,
    },
    value: {
      type: [Boolean, String, Number, Object] as PropType<
        null | boolean | string | number | Record<string, any>
      >,
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
