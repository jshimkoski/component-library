<template>
  <div
    class="inline-flex items-start gap-2"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <div class="relative">
      <input
        v-model="model"
        v-bind="$attrs"
        :id="id"
        :true-value="trueValue"
        :false-value="falseValue"
        :disabled="disabled"
        :required="required"
        :value="value"
        :name="name"
        type="checkbox"
        :class="`
          peer
          cursor-pointer
          mt-1.5 w-4 h-4
          accent-primary-500
          appearance-none
          forced-colors:appearance-auto
          bg-white dark:bg-base-950
          hover:not-checked:bg-base-100 dark:hover:not-checked:bg-base-900
          checked:bg-primary-500 dark:checked:bg-primary-400
          rounded-base
          radius-sm:rounded-sm
          border border-base-300 dark:border-base-700
        `"
        ref="checkboxRef"
        :indeterminate="indeterminate"
      />
      <Icon
        icon="mdi:check-bold"
        class="hidden peer-checked:block h-4 w-4 text-white absolute top-1.5 left-0 z-10 pointer-events-none"
        v-if="!indeterminate"
      />
      <div
        v-if="indeterminate"
        class="absolute top-[0.65rem] left-1 w-2 h-2 bg-white rounded-sm z-10 pointer-events-none"
      ></div>
    </div>
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
  import { Icon } from '@iconify/vue'

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps({
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
    indeterminate: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, String, Number, Object] as PropType<
        null | boolean | string | number | Record<string, any>
      >,
      default: undefined,
    },
    trueValue: {
      type: [Boolean, String, Number, Object] as PropType<
        null | boolean | string | number | Record<string, any>
      >,
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number, Object] as PropType<
        null | boolean | string | number | Record<string, any>
      >,
      default: false,
    },
  });

  const model = defineModel({
    type: [Boolean, String, Number, Object, Array] as PropType<
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

  const id = useId();
  const checkboxRef = ref<HTMLInputElement | null>(null);

  // Update the indeterminate state when the prop changes
  watch(
    () => props.indeterminate,
    (newVal) => {
      if (checkboxRef.value) {
        checkboxRef.value.indeterminate = newVal;
      }
    },
  );

  // Set the initial indeterminate state
  onMounted(() => {
    if (checkboxRef.value && props.indeterminate) {
      checkboxRef.value.indeterminate = true;
    }
  });
</script>
