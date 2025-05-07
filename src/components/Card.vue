<template>
  <Component :is="tag">
    <div
      :class="{
        'bg-base-50 dark:bg-base-900 ring-1 ring-base-100 dark:ring-base-800 shadow-md':
          variant === 'elevated',
        'bg-base-100 dark:bg-base-800 dark:ring-1 dark:ring-base-900':
          variant === 'filled',
        'bg-white dark:bg-base-950 border border-base-200 dark:border-base-800':
          variant === 'outlined',
        'hover:shadow-lg transition-shadow': tag === 'a',
      }"
      class="relative p-6 pt-5 rounded-base radius-full:rounded-4xl text-black dark:text-white dark:shadow-white/5"
    >
      <div class="grid gap-2 mb-2">
        <h2 class="text-2xl">
          {{ headline }}
        </h2>
        <p class="text-lg text-base-700 dark:text-base-300">
          {{ subhead }}
        </p>
        <div
          v-if="!!$slots.default || text"
          class="text-sm text-base-600 dark:text-base-400 max-w-prose text-pretty"
        >
          <slot>{{ text }}</slot>
        </div>
      </div>
      <slot name="footer">
        <div
          v-if="tag === 'a' && actionLabel"
          class="mt-6 flex justify-end"
        >
          <Action
            :href="href"
            :target="target"
            :rel="rel"
            :kind="kind"
          >
            <span>{{ actionLabel }}</span>
            <span class="absolute inset-0 z-10"></span>
          </Action>
        </div>
      </slot>
    </div>
  </Component>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps({
    kind: {
      type: String as PropType<Kind>,
      default: "secondary",
    },
    headline: {
      type: String,
      default: undefined,
    },
    subhead: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    variant: {
      type: String as PropType<"elevated" | "filled" | "outlined">,
      default: "outlined",
    },
    actionLabel: {
      type: String,
      default: undefined,
    },
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
    rel: { type: String, default: undefined },
  });

  const tag = computed(() => {
    return props.href ? "a" : "dv";
  });
</script>
