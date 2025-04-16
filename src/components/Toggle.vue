<template>
  <div
    class="inline-flex items-center gap-1"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <input
      v-model="model"
      :id="id"
      type="checkbox"
      role="switch"
      :name="name"
      :required="required"
      :disabled="disabled"
      class="
        appearance-none relative inline-block w-9 h-5 border rounded-full align-bottom m-auto text-white cursor-pointer
        bg-gray-300 border-gray-300
        before:shadow-sm
        checked:bg-green-500 checked:border-green-500
        transition-all before:transition-all
        before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0.25
        before:w-4 before:h-4 before:bg-current before:rounded-full
        checked:before:left-4.25
      "
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
const model = defineModel({
  type: Boolean,
  default: false
})
const emit = defineEmits(['change', 'update:modelValue'])
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
})
const id = useId()
</script>