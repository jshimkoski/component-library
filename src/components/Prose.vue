<template>
  <div
    :class="{
      'prose-primary': kind === 'primary',
      'prose-secondary': kind === 'secondary',
      'prose-success': kind === 'success',
      'prose-info': kind === 'info',
      'prose-warning': kind === 'warning',
      'prose-danger': kind === 'danger',
    }"
    class="prose"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineProps({
    kind: {
      type: String as PropType<Kind>,
      default: "primary",
    },
  });
</script>
