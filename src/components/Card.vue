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
      class="relative p-4 rounded-base radius-xl:p-6 radius-3xl:p-8 radius-full:rounded-4xl text-black dark:text-white dark:shadow-white/5"
    >
      <slot name="header">
        <div class="mb-4">
          <h2 class="text-xl">
            {{ label }}
          </h2>
          <p class="text-sm text-base-600 dark:text-base-400">
            {{ description }}
          </p>
        </div>
      </slot>
      <slot>{{ content }}</slot>
      <slot name="footer">
        <div class="flex justify-end">
          <Action
            v-if="tag === 'a' && actionLabel"
            :href="href"
            :target="target"
            :rel="rel"
            :kind="kind"
            class="mt-4"
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
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    content: {
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
