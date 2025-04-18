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
      v-bind="$attrs"
      :id="id"
      :type="type"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :name="name"
    />
    <p v-if="description" class="text-sm text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
defineProps({
  label: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  type: {
    type: String as PropType<'text' | 'email' | 'password'>,
    default: 'text'
  },
  name: {
    type: String,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  required: {
    type: Boolean,
    default: undefined
  },
  placeholder: {
    type: String,
    default: undefined
  },
  showMarker: {
    type: Boolean,
    default: undefined
  },
})
const model = defineModel({
  type: String
})
const id = useId()
</script>