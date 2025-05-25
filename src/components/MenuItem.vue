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
    class="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-base-100 dark:hover:bg-base-800 cursor-pointer disabled:opacity-50 disabled:pointer-events-none [&[data-disabled]]:opacity-50 [&[data-disabled]]:pointer-events-none [&[data-active='true']]:bg-base-100 dark:[&[data-active='true']]:bg-base-800"
    @mousedown="tag === 'button' ? onClick($event) : undefined"
  >
    <slot>{{ label }}</slot>
  </Component>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: undefined,
    },
    target: {
      type: String,
      default: "",
    },
    rel: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button",
    },
  });

  const tag = computed(() => {
    return props.href ? "a" : "button";
  });

  const emit = defineEmits(["click"]);

  const onClick = (event: MouseEvent) => {
    // For anchor tags, only prevent default if it's not a real navigation
    if (tag.value === "a" && !props.href) {
      event.preventDefault();
    }
    // For button tags, always prevent default
    if (tag.value === "button") {
      event.preventDefault();
    }

    // Always stop event propagation to prevent menu toggle
    event.stopImmediatePropagation();
    emit("click", event);
  };
</script>
