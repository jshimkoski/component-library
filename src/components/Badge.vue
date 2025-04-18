<template>
  <span
    class="inline-block bg-red-500 text-white rounded-full full text-xs"
    :class="[
      !label ? 'h-1 w-1' : 'px-1 py-0.5'
    ]"
  >{{ label }}</span>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: undefined
  },
})
</script>