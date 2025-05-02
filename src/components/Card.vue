<template>
  <Component :is="tag">
    <div
      :class="{
        'bg-neutral-50 dark:bg-neutral-950 ring-1 ring-neutral-100 dark:ring-neutral-900 shadow-lg':
          variant === 'elevated',
        'bg-neutral-100 dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-900':
          variant === 'filled',
        'bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800':
          variant === 'outlined',
        'hover:shadow-xl transition-shadow': tag === 'a',
      }"
      class="relative p-4 rounded-theme-xl text-black dark:text-white dark:shadow-white/5"
    >
      <slot name="header">
        <div class="mb-4">
          <h2 class="text-xl">
            {{ label }}
          </h2>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            {{ description }}
          </p>
        </div>
      </slot>
      <slot />
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
