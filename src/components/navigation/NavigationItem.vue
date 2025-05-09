<template>
  <li>
    <Action
      v-if="!hasChildren"
      :href="href"
      :target="target"
      :rel="rel"
      :active="active"
      :disabled="disabled"
      variant="ghost"
      class="md:hover:bg-transparent rounded-base relative"
      :class="activeItemClass"
    >
      <slot>{{ label }}</slot>
    </Action>

    <Menu
      v-else
      :disabled="disabled"
      variant="nested"
      :placement="placement"
      :auto-width="true"
      :label="label"
    >
      <slot name="dropdown"></slot>
    </Menu>
  </li>
</template>

<script setup lang="ts">
  import type { Placement } from "@floating-ui/core";

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
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hasChildren: {
      type: Boolean,
      default: false,
    },
    activeIndicator: {
      type: String as PropType<"none" | "underline" | "background">,
      default: "underline",
    },
    placement: {
      type: String as PropType<Placement>,
      default: "bottom-start",
    },
  });

  // Active item styling based on activeIndicator prop
  const activeItemClass = computed(() => {
    if (!props.active) return "";

    switch (props.activeIndicator) {
      case "underline":
        return "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current";
      case "background":
        return "bg-primary-100 dark:bg-primary-900";
      default:
        return "";
    }
  });
</script>
