<template>
  <Component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    :rel="tag === 'a' ? rel : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :data-active="active || undefined"
    :data-disabled="disabled || undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :type="tag === 'button' ? type : undefined"
    class="inline-block text-white dark:text-black font-semibold rounded-base text-xs"
    :class="[
      kindClass,
      tag === 'a' ? 'cursor-pointer' : '',
      !label ? 'h-1 w-1' : 'px-2 py-0.5',
    ]"
    @click="tag === 'button' ? onClick($event) : undefined"
    >{{ label }}</Component
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
      default: "primary",
    },
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
    rel: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    type: {
      type: String as PropType<ActionType>,
      default: "button",
    },
  });

  const tag = computed(() => {
    return props.href ? "a" : "button";
  });

  const emit = defineEmits(["click"]);

  const onClick = (event: MouseEvent) => {
    emit("click", event);
  };

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
