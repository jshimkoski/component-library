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
    <input
      v-model="model"
      :id="id"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :name="name"
      type="text"
      class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none
        transition-all
        placeholder:text-gray-400 placeholder:opacity-50
        [&:not(:placeholder-shown)]:bg-white
        [&:placeholder-shown]:bg-gray-100
        [&:placeholder-shown]:border-gray-300"
      :class="{
        'bg-gray-100': disabled,
      }"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel({
  type: String,
  default: ''
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
  placeholder: {
    type: String,
    default: ''
  },
  showMarker: {
    type: Boolean,
    default: false
  },
})
const id = useId()
</script>