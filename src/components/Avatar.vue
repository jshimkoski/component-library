<template>
  <img
    :src="src"
    :alt="alt"
    :class="{
      'object-cover ring-base-300 dark:ring-base-700': true,
      'w-4 h-4 ring-1': size === 'xs',
      'w-8 h-8 ring-1': size === 'sm',
      'w-12 h-12 ring-2': size === 'md',
      'w-16 h-16 ring-2': size === 'lg',
      'w-20 h-20 ring-2': size === 'xl',
      'w-24 h-24 ring-2': size === '2xl',
      'w-28 h-28 ring-3': size === '3xl',
      'w-32 h-32 ring-3': size === '4xl',
      'w-36 h-36 ring-3': size === '5xl',
      'w-40 h-40 ring-3': size === '6xl',
      'w-44 h-44 ring-3': size === '7xl',
      'w-48 h-48 ring-3': size === '8xl',
      'rounded-full': shape === 'circle',
      'rounded-none': shape === 'square',
    }"
    v-bind="$attrs"
    @error="handleError"
  />
</template>

<script lang="ts" setup>
  import fallbackImg from "../assets/vue.svg";

  defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Avatar",
    },
    size: {
      type: String as PropType<
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "7xl"
        | "8xl"
      >,
      default: "md",
    },
    shape: {
      type: String as PropType<"circle" | "square">,
      default: "circle",
    },
  });

  const handleError = (event: Event) => {
    if (!event.target) return;
    (event.target as HTMLImageElement).src = fallbackImg;
  };
</script>
