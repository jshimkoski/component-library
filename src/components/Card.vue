<template>
  <div><slot /></div>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
  });

  defineProps({
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    type: {
      type: String as PropType<"elevated" | "filled" | "outlined">,
      default: "outlined",
    },
  });
</script>
