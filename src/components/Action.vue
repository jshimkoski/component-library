<template>
  <Component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    :rel="tag === 'a' ? rel : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :data-active="tag === 'button' ? active : undefined"
    :data-disabled="disabled || undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :type="tag === 'button' ? type : undefined"
    :class="actionClasses"
    class="inline-flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:pointer-events-none [&[data-disabled]]:opacity-50 [&[data-disabled]]:pointer-events-none"
    @click="tag === 'button' ? onClick($event) : undefined"
  >
    <slot>{{ label }}</slot>
  </Component>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: "" },
  href: { type: String, default: "" },
  target: { type: String, default: "" },
  rel: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  variant: {
    type: String as PropType<"solid" | "outline" | "ghost" | "link">,
  },
});

const tag = computed(() => {
  return props.href ? "a" : "button";
});

const variant = computed<"solid" | "outline" | "ghost" | "link">(() => {
  if (!props.variant) {
    return tag.value === "a" ? "link" : "ghost";
  }
  return props.variant;
});

const emit = defineEmits(["click"]);

const onClick = (event: MouseEvent) => {
  emit("click", event);
};

const actionClasses = computed(() => {
  switch (variant.value) {
    case "solid":
      return "px-4 py-2 rounded-sm ring-1 ring-blue-500 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 [&[data-active='true']]:text-blue-700 active:text-blue-700";
    case "outline":
      return "px-4 py-2 rounded-sm ring-1 ring-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100 [&[data-active='true']]:text-blue-700 active:text-blue-700";
    case "ghost":
      return "px-4 py-2 rounded-sm ring-1 ring-transparent text-blue-500 hover:ring-blue-50 hover:bg-blue-50 active:bg-blue-100 [&[data-active='true']]:bg-blue-100";
    case "link":
      return "text-blue-500 rounded hover:text-blue-600 [&[data-active='true']]:text-blue-700 active:text-blue-700";
  }
});
</script>
