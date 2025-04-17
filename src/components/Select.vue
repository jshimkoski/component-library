<template>
  <div
    class="grid items-center gap-1"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <label
      :for="id"
      class="cursor-pointer block font-semibold"
      :class="[
        required && showMarker ? `after:text-red-500 after:content-['*'] after:ml-1` : '',
      ]"
    >
      <slot>{{ label }}</slot>
    </label>
    <select
      v-model="model"
      v-bind="$attrs"
      :id="id"
      :disabled="disabled"
      :required="required"
      :multiple="multiple"
      :name="name"
      class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
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
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
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
  multiple: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as () => Array<{
      label: string
      value: null | boolean | string | number | Record<string, any>
      disabled?: boolean
    }>,
    default: () => []
  },
  showMarker: {
    type: Boolean,
    default: false
  }
})
const model = defineModel({
  type: [Boolean, String, Number, Object] as PropType<null | boolean | string | number | Record<string, any>>,
  default: ''
})
const id = useId()
</script>