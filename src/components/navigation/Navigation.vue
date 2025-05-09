<template>
  <nav
    :class="[responsiveClasses, variantClasses]"
    class="relative isolate"
  >
    <div
      class="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2"
      :class="{ 'gap-4': isMobile }"
    >
      <!-- Logo or branding area -->
      <div class="flex items-center">
        <slot name="logo"></slot>
      </div>

      <!-- Mobile menu button (only visible on mobile) -->
      <button
        v-if="responsive"
        class="md:hidden inline-flex items-center justify-center p-2 rounded-base hover:bg-base-100 dark:hover:bg-base-800"
        :aria-expanded="isMobile ? 'true' : 'false'"
        @click="isMobile = !isMobile"
      >
        <span class="sr-only">{{ isMobile ? "Close menu" : "Open menu" }}</span>
        <IconMdiMenu
          v-if="!isMobile"
          class="h-6 w-6"
        />
        <IconMdiClose
          v-else
          class="h-6 w-6"
        />
      </button>

      <!-- Navigation items container -->
      <div
        class="w-full md:flex md:w-auto md:order-1"
        :class="[isMobile ? 'block' : 'hidden']"
      >
        <ul
          class="flex flex-col md:flex-row md:items-center gap-2 md:gap-0"
          :class="itemsContainerClass"
        >
          <slot></slot>
        </ul>
      </div>

      <!-- Optional right content (search, account, etc.) -->
      <div class="hidden md:flex md:items-center">
        <slot name="right"></slot>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const props = defineProps({
    variant: {
      type: String as PropType<"primary" | "secondary" | "subtle">,
      default: "primary",
    },
    responsive: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String as PropType<"static" | "sticky" | "fixed">,
      default: "static",
    },
    itemsSpacing: {
      type: String as PropType<"normal" | "wide" | "compact">,
      default: "normal",
    },
    itemsAlignment: {
      type: String as PropType<
        "left" | "center" | "right" | "space-between" | "space-around"
      >,
      default: "left",
    },
  });

  // Mobile menu state
  const isMobile = ref(false);

  // Position classes
  const responsiveClasses = computed(() => {
    switch (props.position) {
      case "sticky":
        return "sticky top-0 z-20";
      case "fixed":
        return "fixed top-0 left-0 right-0 z-20";
      default:
        return "";
    }
  });

  // Variant classes
  const variantClasses = computed(() => {
    switch (props.variant) {
      case "primary":
        return "bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-50 border-b border-primary-200 dark:border-primary-900";
      case "secondary":
        return "bg-white dark:bg-base-900 text-base-900 dark:text-base-100 border-b border-base-200 dark:border-base-800";
      case "subtle":
        return "bg-transparent text-base-900 dark:text-base-100";
      default:
        return "";
    }
  });

  // Items container class
  const itemsContainerClass = computed(() => {
    let alignmentClass = "";

    switch (props.itemsAlignment) {
      case "center":
        alignmentClass = "md:justify-center";
        break;
      case "right":
        alignmentClass = "md:justify-end";
        break;
      case "space-between":
        alignmentClass = "md:justify-between";
        break;
      case "space-around":
        alignmentClass = "md:justify-around";
        break;
      default:
        alignmentClass = "md:justify-start";
    }

    let spacingClass = "";
    switch (props.itemsSpacing) {
      case "compact":
        spacingClass = "md:gap-1";
        break;
      case "wide":
        spacingClass = "md:gap-6";
        break;
      default:
        spacingClass = "md:gap-4";
    }

    return `${alignmentClass} ${spacingClass}`;
  });
</script>
