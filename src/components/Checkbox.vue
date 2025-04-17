<template>
  <div
    class="inline-flex items-center gap-1"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <input
      v-model="model"
      :id="id"
      :true-value="trueValue"
      :false-value="falseValue"
      :disabled="disabled"
      :required="required"
      :value="value"
      :name="name"
      type="checkbox"
      class="cursor-pointer"
      @change="onChange"
    />
    <label
      :for="id"
      class="cursor-pointer"
      :class="[
        required && showMarker ? `after:text-red-500 after:content-['*'] after:ml-1` : '',
      ]"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  showMarker: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Boolean, String, Number] as PropType<null | boolean | string | number | Record<string, any>>,
    default: false
  },
  trueValue: {
    type: [Boolean, String, Number] as PropType<null | boolean | string | number | Record<string, any>>,
    default: true
  },
  falseValue: {
    type: [Boolean, String, Number] as PropType<null | boolean | string | number | Record<string, any>>,
    default: false
  }
})
const emit = defineEmits(['change', 'update:modelValue'])
const model = defineModel({
  type: [Boolean, String, Number, Array] as PropType<null | boolean | string | number | Record<string, any> | string[] | number[] | Record<string, any>[]>,
  default: null
})
const id = useId()
</script>