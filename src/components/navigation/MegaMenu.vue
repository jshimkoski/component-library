<template>
  <li>
    <Menu
      v-model:open="isOpen"
      :disabled="disabled"
      variant="nested"
      :placement="placement"
      auto-width
      :label="label"
    >
      <div
        class="min-w-[320px] max-w-[90vw]"
        :class="menuSizeClass"
      >
        <div
          class="p-4 grid"
          :class="[columnClass]"
        >
          <slot></slot>
        </div>
        <div
          v-if="$slots.footer"
          class="border-t border-base-200 dark:border-base-800 p-4 bg-base-50 dark:bg-base-900"
        >
          <slot name="footer"></slot>
        </div>
      </div>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: [Number, String],
      default: 2,
      validator: (value: number | string) => {
        const numValue =
          typeof value === "string" ? parseInt(value, 10) : value;
        return numValue >= 1 && numValue <= 4;
      },
    },
    width: {
      type: String as PropType<"auto" | "md" | "lg" | "xl" | "full">,
      default: "lg",
    },
    placement: {
      type: String as PropType<Placement>,
      default: "bottom",
    },
  });

  const isOpen = ref(false);

  // Watch for isOpen changes and emit events
  // Emit events
  const emit = defineEmits(["open", "close"]);

  watch(isOpen, (newValue) => {
    if (newValue) {
      emit("open");
    } else {
      emit("close");
    }
  });

  // Compute grid columns class based on columns prop
  const columnClass = computed(() => {
    const numColumns =
      typeof props.columns === "string"
        ? parseInt(props.columns, 10)
        : props.columns;

    switch (numColumns) {
      case 1:
        return "grid-cols-1";
      case 3:
        return "grid-cols-1 md:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case 2:
      default:
        return "grid-cols-1 md:grid-cols-2";
    }
  });

  // Compute menu size class based on width prop
  const menuSizeClass = computed(() => {
    switch (props.width) {
      case "auto":
        return "w-auto";
      case "md":
        return "w-[480px]";
      case "lg":
        return "w-[640px]";
      case "xl":
        return "w-[960px]";
      case "full":
        return "w-[90vw]";
      default:
        return "w-[640px]";
    }
  });
</script>
