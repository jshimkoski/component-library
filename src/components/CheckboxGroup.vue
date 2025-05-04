<template>
  <fieldset
    :disabled="disabled"
    :name="name"
    :form="form"
  >
    <legend
      class="cursor-pointer block font-semibold"
      :class="[
        required && showMarker
          ? `after:text-danger-500 after:content-['*'] after:ml-1`
          : '',
      ]"
    >
      {{ label }}
    </legend>
    <p
      v-if="description"
      class="text-sm text-base-600 dark:text-base-400"
    >
      {{ description }}
    </p>
    <div class="grid">
      <Checkbox
        v-for="(option, index) in options"
        :key="index"
        v-model="model"
        :label="option.label"
        :description="option.description"
        :name="option.name"
        :disabled="option.disabled || disabled"
        :required="option.required || required"
        :showMarker="showMarker"
        :value="option.value"
        :class="option.class || $attrs.class"
      />
    </div>
  </fieldset>
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
    form: {
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
    options: {
      type: Array as () => Array<{
        value:
          | null
          | boolean
          | string
          | number
          | Record<string, any>
          | string[]
          | number[]
          | Record<string, any>[];
        label: string;
        description?: string;
        class?: string;
        name?: string;
        disabled?: boolean;
        required?: boolean;
        showMarker?: boolean;
      }>,
      required: true,
    },
  });

  const model = defineModel({
    type: [Boolean, String, Number, Object] as PropType<
      | null
      | boolean
      | string
      | number
      | Record<string, any>
      | string[]
      | number[]
      | Record<string, any>[]
    >,
  });
</script>
