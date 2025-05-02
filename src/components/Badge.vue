<template>
  <span
    class="pointer-events-none inline-block text-white dark:text-black font-semibold rounded-full text-[0.625rem]"
    :class="[kindClass, !label ? 'h-1.5 w-1.5' : 'px-1.5 py-0.25']"
    >{{ label }}</span
  >
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      default: undefined,
    },
    kind: {
      type: String as PropType<Kind>,
      default: "danger",
    },
  });

  const kindClass = computed(() => {
    switch (props.kind) {
      case "primary":
        return "bg-primary-700 dark:bg-primary-300";
      case "secondary":
        return "bg-secondary-700 dark:bg-secondary-300";
      case "success":
        return "bg-success-700 dark:bg-success-300";
      case "info":
        return "bg-info-700 dark:bg-info-300";
      case "warning":
        return "bg-warning-700 dark:bg-warning-300";
      case "danger":
        return "bg-danger-700 dark:bg-danger-300";
    }
  });
</script>
