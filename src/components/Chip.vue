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
    class="inline-block rounded-base text-xs"
    :class="[
      kindClass,
      tag === 'a' ? 'cursor-pointer' : '',
      !label && !slots.default ? 'h-1 w-1' : 'px-2 py-0.5',
    ]"
    @click="tag === 'button' ? onClick($event) : undefined"
    ><slot>{{ label }}</slot></Component
  >
</template>

<script setup lang="ts">
  import type { ChipVariant } from '../types/common';

  const props = defineProps({
    label: {
      type: String,
      default: undefined,
    },
    kind: {
      type: String as PropType<Kind>,
      default: "primary",
    },
    variant: {
      type: String as PropType<ChipVariant>,
      default: "solid",
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

  const slots = defineSlots();

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
        return props.variant === 'solid' ? "text-white dark:text-black bg-primary-700 dark:bg-primary-300" : 'text-primary-900 dark:text-primary-100 bg-primary-100 dark:bg-primary-900';
      case "secondary":
        return props.variant === 'solid' ? "text-white dark:text-black bg-secondary-700 dark:bg-secondary-300" : 'text-secondary-900 dark:text-secondary-100 bg-secondary-100 dark:bg-secondary-900';
      case "success":
        return props.variant === 'solid' ? "text-white dark:text-black bg-success-700 dark:bg-success-300" : 'text-success-900 dark:text-success-100 bg-success-100 dark:bg-success-900';
      case "info":
        return props.variant === 'solid' ? "text-white dark:text-black bg-info-700 dark:bg-info-300" : 'text-info-900 dark:text-info-100 bg-info-100 dark:bg-info-900';
      case "warning":
        return props.variant === 'solid' ? "text-white dark:text-black bg-warning-700 dark:bg-warning-300" : 'text-warning-900 dark:text-warning-100 bg-warning-100 dark:bg-warning-900';
      case "danger":
        return props.variant === 'solid' ? "text-white dark:text-black bg-danger-700 dark:bg-danger-300" : 'text-danger-900 dark:text-danger-100 bg-danger-100 dark:bg-danger-900';
    }
  });
</script>
