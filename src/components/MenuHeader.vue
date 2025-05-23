<template>
  <div
    class="flex gap-2 items-center px-4 py-2 text-base-600 dark:text-base-400"
  >
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: "",
    },
  });
</script>
