<template>
  <div v-if="model"><slot /></div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  placement: {
    type: String as PropType<'bottom' | 'left' | 'right'>,
    default: 'bottom'
  },
})
const model = defineModel({
  type: Boolean
})
</script>