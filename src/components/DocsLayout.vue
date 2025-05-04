<template>
  <div
    class="bg-white text-black dark:bg-base-950 dark:text-white flex flex-col min-h-screen"
  >
    <!-- Sticky Top Nav -->
    <header
      ref="header"
      class="sticky top-0 z-30 w-full bg-white/70 dark:bg-base-950/60 backdrop-blur-md border-b border-base-200 dark:border-base-800"
    >
      <div
        :class="{ 'max-w-7xl': variant !== 'fullwidth' }"
        class="mx-auto flex items-center justify-between px-6 py-3"
      >
        <slot name="header" />
      </div>
    </header>

    <!-- Main Layout -->
    <div
      :class="{ 'max-w-7xl': variant !== 'fullwidth' }"
      class="flex flex-1 w-full mx-auto"
    >
      <!-- Sidebar -->
      <aside
        class="hidden lg:block w-64 sticky-to-header overflow-y-auto p-6 shrink-0"
      >
        <slot name="left-bar" />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 px-6 py-10 max-w-none">
        <slot name="content" />
      </main>

      <!-- Table of Contents (Scrollspy) -->
      <div
        class="hidden xl:block w-64 sticky-to-header overflow-y-auto p-6 shrink-0"
      >
        <slot name="right-bar" />
      </div>
    </div>

    <!-- Footer -->
    <footer
      v-if="!!$slots.footer"
      class="w-full mt-auto"
    >
      <div
        class="text-center mt-12 py-12 border-t border-base-200 dark:border-base-800"
      >
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    variant: {
      type: String as PropType<"fullwidth" | "margined">,
      default: "margined",
    },
  });

  const header = useTemplateRef("header");

  const { height } = useElementSize(header);

  const heightPx = computed(() => {
    // height + 1 to compensate for border
    return `${height.value + 1}px`;
  });
</script>

<style>
  .sticky-to-header {
    position: sticky;
    height: calc(100dvh - v-bind(heightPx));
    top: v-bind(heightPx);
  }
</style>
