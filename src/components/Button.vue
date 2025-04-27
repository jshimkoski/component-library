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
    class="inline-flex items-center gap-2 cursor-pointer px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none [&[data-disabled]]:opacity-50 [&[data-disabled]]:pointer-events-none [&[data-active='true']]:bg-blue-700 active:bg-blue-700"
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
});

const tag = computed(() => {
  return props.href ? "a" : "button";
});

const emit = defineEmits(["click"]);

const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
