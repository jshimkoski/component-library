<template>
  <div
    :class="{
      'flex items-center justify-center ring-base-300 dark:ring-base-700 bg-base-100 dark:bg-base-800': true,
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
  >
    <img
      v-if="!showFallback"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
      :class="{
        'rounded-full': shape === 'circle',
        'rounded-none': shape === 'square',
      }"
      @error="handleError"
    />
    <Icon
      v-else
      icon="material-symbols:person"
      :class="{
        'w-3 h-3': size === 'xs',
        'w-5 h-5': size === 'sm',
        'w-8 h-8': size === 'md',
        'w-10 h-10': size === 'lg',
        'w-12 h-12': size === 'xl',
        'w-16 h-16': size === '2xl',
        'w-20 h-20': size === '3xl',
        'w-24 h-24': size === '4xl',
        'w-28 h-28': size === '5xl',
        'w-32 h-32': size === '6xl',
        'w-36 h-36': size === '7xl',
        'w-40 h-40': size === '8xl',
      }"
      class="text-base-500 dark:text-base-400"
    />
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";

  const showFallback = ref(false);

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

  const handleError = () => {
    showFallback.value = true;
  };
</script>
