<template>
  <div
    class="bg-white text-black dark:bg-base-950 dark:text-white flex flex-col min-h-screen"
  >
    <!-- Sticky Top Nav -->
    <header
      ref="header"
      class="sticky top-0 z-20 w-full bg-white/70 dark:bg-base-950/60 backdrop-blur-md border-b border-base-200 dark:border-base-800"
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
      :class="{
        'max-w-7xl xl:grid-cols-[16rem_calc(80rem-32rem)_16rem]':
          variant !== 'fullwidth',
        'xl:grid-cols-[16rem_calc(100dvw-32rem)_16rem]':
          variant === 'fullwidth',
      }"
      class="grid flex-1 mx-auto grid-cols-[100dvw] lg:grid-cols-[16rem_calc(100dvw-16rem)]"
    >
      <!-- Sidebar -->
      <aside
        class="hidden lg:block sticky-to-header overflow-y-auto px-6 py-10 shrink-0"
      >
        <slot name="left-bar" />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 px-6 py-10">
        <slot />
      </main>

      <!-- Table of Contents (Scrollspy) -->
      <div
        class="hidden xl:block sticky-to-header overflow-y-auto px-6 py-10 shrink-0"
      >
        <slot name="right-bar" />
      </div>
    </div>

    <!-- Footer -->
    <footer
      v-if="!!$slots.footer"
      class="w-full mt-auto border-t border-base-200 dark:border-base-800"
    >
      <div
        :class="{ 'max-w-7xl': variant !== 'fullwidth' }"
        class="py-12 text-sm mx-auto"
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
