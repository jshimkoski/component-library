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
    :class="[variantClasses, sizeClasses, activeClasses]"
    class="inline-flex items-center gap-2 cursor-pointer font-medium disabled:opacity-50 disabled:pointer-events-none [&[data-disabled]]:opacity-50 [&[data-disabled]]:pointer-events-none"
    @click="tag === 'button' ? onClick($event) : undefined"
  >
    <template v-if="iconOnly">
      <Icon
        v-if="icon"
        :icon="icon"
        class="text-2xl"
      />
      <span
        :class="{
          'sr-only': iconOnly,
        }"
        ><slot :label="label">{{ label }}</slot></span
      >
    </template>
    <template v-else>
      <Icon
        v-if="icon"
        :icon="icon"
      />
      <slot :label="label">{{ label }}</slot>
    </template>
  </Component>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const props = defineProps({
    icon: { type: String, default: undefined },
    label: { type: String, default: undefined },
    iconOnly: { type: Boolean, default: false },
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
    rel: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    type: {
      type: String as PropType<ActionType>,
      default: "button",
    },
    variant: {
      type: String as PropType<ActionVariant>,
      default: undefined, // Default is determined by the tag type
    },
    kind: {
      type: String as PropType<Kind>,
    },
    activeKind: {
      type: String as PropType<Kind>,
      default: "primary",
    },
    size: {
      type: String as PropType<Size>,
      default: "md",
    },
    square: {
      type: Boolean,
      default: false,
    },
  });

  const tag = computed(() => {
    return props.href ? "a" : "button";
  });

  const variant = computed<ActionVariant>(() => {
    if (!props.variant) {
      switch (props.kind) {
        case "primary":
        case "success":
        case "info":
        case "warning":
        case "danger":
          return "solid";
        case "secondary":
          return "outline";
        default: {
          if (tag.value === "a") {
            return "link";
          }
          return "ghost";
        }
      }
    }
    return props.variant;
  });

  const emit = defineEmits(["click"]);

  const onClick = (event: MouseEvent) => {
    emit("click", event);
  };

  const activeClasses = computed(() => {
    if (!props.active) return "";
    switch (props.activeKind) {
      case "primary":
        return `
        [&[data-active]]:text-primary-600 dark:[&[data-active]]:text-primary-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
      case "secondary":
        return `
        [&[data-active]]:text-secondary-600 dark:[&[data-active]]:text-secondary-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
      case "success":
        return `
        [&[data-active]]:text-success-600 dark:[&[data-active]]:text-success-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
      case "info":
        return `
        [&[data-active]]:text-info-600 dark:[&[data-active]]:text-info-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
      case "warning":
        return `
        [&[data-active]]:text-warning-600 dark:[&[data-active]]:text-warning-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
      case "danger":
        return `
        [&[data-active]]:text-danger-600 dark:[&[data-active]]:text-danger-400
        [&[data-active]]:border-transparent dark:[&[data-active]]:border-transparent
        [&[data-active]]:bg-transparent dark:[&[data-active]]:bg-transparent
      `;
    }
  });

  const variantClasses = computed(() => {
    if (props.kind === "primary") {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-primary-600 bg-primary-600 text-white
            hover:border-primary-500 hover:bg-primary-500
            dark:border-primary-400 dark:bg-primary-400 dark:text-black
            dark:hover:border-primary-300 dark:hover:bg-primary-300
          `;
        case "outline":
          return `
          border
          border-base-300 bg-white text-primary-600
          hover:bg-base-100
          dark:border-base-700 dark:bg-base-950 dark:text-primary-300
          dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-primary-600
            hover:border-base-100 hover:bg-base-100
            dark:text-primary-400
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-primary-600
            hover:text-primary-500
            dark:text-primary-400
            dark:hover:text-primary-300
          `;
      }
    } else if (props.kind === "success") {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-success-600 bg-success-600 text-white
            hover:border-success-500 hover:bg-success-500
            dark:border-success-400 dark:bg-success-400 dark:text-black
            dark:hover:border-success-300 dark:hover:bg-success-300
          `;
        case "outline":
          return `
            border
            border-base-300 bg-white text-success-600
            hover:bg-base-100
            dark:border-base-700 dark:bg-base-950 dark:text-success-300
            dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-success-600
            hover:border-base-100 hover:bg-base-100
            dark:text-success-400
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-success-600
            hover:text-success-500
            dark:text-success-400
            dark:hover:text-success-300
          `;
      }
    } else if (props.kind === "info") {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-info-600 bg-info-600 text-white
            hover:border-info-500 hover:bg-info-500
            dark:border-info-400 dark:bg-info-400 dark:text-black
            dark:hover:border-info-300 dark:hover:bg-info-300
          `;
        case "outline":
          return `
            border
            border-base-300 bg-white text-info-600
            hover:bg-base-100
            dark:border-base-700 dark:bg-base-950 dark:text-info-300
            dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-info-600
            hover:border-base-100 hover:bg-base-100
            dark:text-info-400
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-info-600
            hover:text-info-500
            dark:text-info-400
            dark:hover:text-info-300
          `;
      }
    } else if (props.kind === "warning") {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-warning-600 bg-warning-600 text-white
            hover:border-warning-500 hover:bg-warning-500
            dark:border-warning-400 dark:bg-warning-400 dark:text-black
            dark:hover:border-warning-300 dark:hover:bg-warning-300
          `;
        case "outline":
          return `
            border
            border-base-300 bg-white text-warning-600
            hover:bg-base-100
            dark:border-base-700 dark:bg-base-950 dark:text-warning-300
            dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-warning-600
            hover:border-base-100 hover:bg-base-100
            dark:text-warning-400
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-warning-600
            hover:text-warning-500
            dark:text-warning-400
            dark:hover:text-warning-300
          `;
      }
    } else if (props.kind === "danger") {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-danger-600 bg-danger-600 text-white
            hover:border-danger-500 hover:bg-danger-500
            dark:border-danger-400 dark:bg-danger-400 dark:text-black
            dark:hover:border-danger-300 dark:hover:bg-danger-300
          `;
        case "outline":
          return `
            border
            border-base-300 bg-white text-danger-600
            hover:bg-base-100
            dark:border-base-700 dark:bg-base-950 dark:text-danger-300
            dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-danger-600
            hover:border-base-100 hover:bg-base-100
            dark:text-danger-400
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-danger-600
            hover:text-danger-500
            dark:text-danger-400
            dark:hover:text-danger-300
          `;
      }
      // secondary or undefined
    } else {
      switch (variant.value) {
        case "solid":
          return `
            border
            border-secondary-600 bg-secondary-600 text-white
            hover:border-secondary-500 hover:bg-secondary-500
            dark:border-secondary-300 dark:bg-secondary-300 dark:text-black
            dark:hover:border-secondary-200 dark:hover:bg-secondary-200
          `;
        case "outline":
          return `
            border
            border-base-300 bg-white text-secondary-600
            hover:bg-base-100
            dark:border-base-700 dark:bg-base-950 dark:text-secondary-300
            dark:hover:bg-base-800
          `;
        case "ghost":
          return `
            border
            border-transparent text-secondary-600
            hover:border-base-100 hover:bg-base-100
            dark:text-secondary-300
            dark:hover:border-base-800 dark:hover:bg-base-800
          `;
        case "link":
          return `
            text-secondary-600
            hover:text-secondary-500
            dark:text-secondary-300
            dark:hover:text-secondary-200
          `;
      }
    }
  });

  const sizeClasses = computed(() => {
    if (variant.value === "link") {
      switch (props.size) {
        case "xs":
          return "text-xs";
        case "sm":
          return "text-sm";
        case "md":
          return "text-base";
        case "lg":
          return "text-lg";
        case "xl":
          return "text-xl";
      }
    } else {
      switch (props.size) {
        case "xs":
          return "text-xs rounded-base " + (props.square ? "p-1" : "px-2 py-1");
        case "sm":
          return "text-sm rounded-base " + (props.square ? "p-1" : "px-2 py-1");
        case "md":
          return (
            "text-base rounded-base " + (props.square ? "p-2" : "px-4 py-1.5")
          );
        case "lg":
          return "text-lg rounded-base " + (props.square ? "p-2" : "px-6 py-2");
        case "xl":
          return "text-xl rounded-base " + (props.square ? "p-3" : "px-8 py-3");
      }
    }
  });
</script>
