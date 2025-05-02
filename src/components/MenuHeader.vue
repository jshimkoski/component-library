<template>
  <li class="px-4">
    <div
      class="flex gap-2 items-center py-2 text-neutral-600 dark:text-neutral-400"
    >
      <slot>{{ label }}</slot>
    </div>
  </li>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: "",
    },
  });
</script>
