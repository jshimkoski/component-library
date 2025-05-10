<template>
  <div class="scrollspy">
    <div
      class="scrollspy-nav"
      :class="navClass"
    >
      <ul
        class="scrollspy-list"
        :class="listClass"
      >
        <li
          v-for="(section, index) in sections"
          :key="index"
          :class="[
            'scrollspy-item',
            itemClass,
            { [activeItemClass]: activeIndex === index },
          ]"
        >
          <a
            :href="`#${section.id}`"
            class="scrollspy-link block"
            :class="linkClass"
            @click.prevent="scrollToSection(section.id)"
          >
            <!-- Icon if provided -->
            <slot
              name="icon"
              :section="section"
              :active="activeIndex === index"
            >
              <Icon
                v-if="section.icon"
                :icon="section.icon"
                class="w-5 h-5 mr-2 inline-block"
              />
            </slot>

            <!-- Title -->
            <slot
              name="title"
              :section="section"
              :active="activeIndex === index"
            >
              {{ section.title }}
            </slot>
          </a>
        </li>
      </ul>
    </div>

    <div
      class="scrollspy-content"
      :class="contentClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

  interface ScrollspySection {
    id: string;
    title: string;
    icon?: string;
    element?: HTMLElement;
    offsetTop?: number;
  }

  const props = defineProps({
    // Base configuration
    selector: {
      type: String,
      default: "[data-scrollspy]",
    },
    offset: {
      type: Number,
      default: 100,
    },

    // Auto-detect sections on mount
    autoDetect: {
      type: Boolean,
      default: true,
    },

    // Manual sections
    sections: {
      type: Array as PropType<
        Array<Omit<ScrollspySection, "element" | "offsetTop">>
      >,
      default: () => [],
    },

    // Styling
    navClass: {
      type: String,
      default:
        "sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto overflow-x-hidden pr-6 w-64 flex-shrink-0",
    },
    listClass: {
      type: String,
      default: "space-y-1",
    },
    itemClass: {
      type: String,
      default: "border-l-2 border-transparent pl-4 py-1",
    },
    activeItemClass: {
      type: String,
      default:
        "border-l-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium",
    },
    linkClass: {
      type: String,
      default:
        "text-base-700 dark:text-base-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors",
    },
    contentClass: {
      type: String,
      default: "flex-grow",
    },

    // Behavior
    smooth: {
      type: Boolean,
      default: true,
    },
    throttleInterval: {
      type: Number,
      default: 100,
    },
  });

  const emit = defineEmits(["change", "update:activeId"]);

  // State
  const activeIndex = ref(-1);
  const activeId = defineModel("activeId", { default: "" });
  const internalSections = ref<ScrollspySection[]>([]);

  // Combine manual and auto-detected sections
  const sections = computed(() => {
    return internalSections.value;
  });

  // Scroll handling with throttle
  let ticking = false;
  let scrollingProgrammatically = false;

  // Detect active section based on scroll position
  const determineActiveSection = () => {
    if (scrollingProgrammatically) return;

    const scrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPos = scrollPosition + props.offset;
        let newActiveIndex = -1;

        // Find the first section whose offsetTop is less than scrollPos
        for (let i = sections.value.length - 1; i >= 0; i--) {
          const section = sections.value[i];
          if (
            section.offsetTop !== undefined &&
            section.offsetTop <= scrollPos
          ) {
            newActiveIndex = i;
            break;
          }
        }

        // Special case: if we're at the top of the page, highlight the first section
        if (scrollPos <= props.offset && sections.value.length > 0) {
          newActiveIndex = 0;
        }

        if (newActiveIndex !== activeIndex.value) {
          activeIndex.value = newActiveIndex;
          const newActiveId =
            newActiveIndex >= 0 ? sections.value[newActiveIndex].id : "";
          emit("change", newActiveId, newActiveIndex);
          activeId.value = newActiveId;
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  // Initialize section elements and setup scrollspy
  const initializeSections = () => {
    // Start with manually provided sections
    const manualSections: ScrollspySection[] = props.sections.map(
      (section) => ({
        ...section,
        element: undefined,
        offsetTop: undefined,
      }),
    );

    // Add auto-detected sections if enabled
    if (props.autoDetect) {
      const elements = document.querySelectorAll(props.selector);

      elements.forEach((el) => {
        const id = el.id;
        const titleEl = el.querySelector("[data-scrollspy-title]") || el;
        const title = titleEl.textContent?.trim() || id;

        // Check if this section is not already in manual sections
        const existingIndex = manualSections.findIndex((s) => s.id === id);

        if (existingIndex >= 0) {
          // Update the existing section with the element
          manualSections[existingIndex].element = el as HTMLElement;
        } else {
          // Add as new section
          manualSections.push({
            id,
            title,
            element: el as HTMLElement,
            offsetTop: undefined,
          });
        }
      });
    }

    // Find all section elements and calculate offsetTops
    manualSections.forEach((section) => {
      if (!section.element && section.id) {
        section.element = document.getElementById(section.id) || undefined;
      }

      if (section.element) {
        section.offsetTop = section.element.offsetTop;
      }
    });

    // Sort sections by offsetTop
    internalSections.value = manualSections
      .filter((section) => section.element && section.offsetTop !== undefined)
      .sort((a, b) => (a.offsetTop || 0) - (b.offsetTop || 0));

    // Initialize active section
    determineActiveSection();
  };

  // Recalculate section positions on resize
  const recalculatePositions = () => {
    internalSections.value.forEach((section) => {
      if (section.element) {
        section.offsetTop = section.element.offsetTop;
      }
    });

    determineActiveSection();
  };

  // Programmatically scroll to a section
  const scrollToSection = (id: string) => {
    const section = sections.value.find((s) => s.id === id);

    if (section && section.element) {
      scrollingProgrammatically = true;

      const targetPosition = section.offsetTop || 0;

      if (props.smooth) {
        window.scrollTo({
          top: targetPosition - props.offset / 2,
          behavior: "smooth",
        });

        // Set active section immediately for better UX
        const sectionIndex = sections.value.findIndex((s) => s.id === id);
        if (sectionIndex >= 0) {
          activeIndex.value = sectionIndex;
          activeId.value = id;
          emit("change", id, sectionIndex);
        }

        // Reset flag after animation completes
        setTimeout(() => {
          scrollingProgrammatically = false;
        }, 500);
      } else {
        window.scrollTo(0, targetPosition - props.offset / 2);
        scrollingProgrammatically = false;
        determineActiveSection();
      }
    }
  };

  // Setup resize observer for responsive layouts
  let resizeObserver: ResizeObserver | null = null;
  let scrollHandler: (() => void) | null = null;

  onMounted(() => {
    // Initialize after DOM is ready
    nextTick(() => {
      initializeSections();

      // Setup scroll event handler with throttle
      scrollHandler = () => {
        determineActiveSection();
      };
      window.addEventListener("scroll", scrollHandler);

      // Setup resize observer
      resizeObserver = new ResizeObserver(recalculatePositions);

      // Observe all section elements
      sections.value.forEach((section) => {
        if (section.element) {
          resizeObserver?.observe(section.element);
        }
      });

      // Also observe the document body for overall layout changes
      resizeObserver.observe(document.body);
    });
  });

  onBeforeUnmount(() => {
    // Clean up event listeners and observers
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  });

  // Watch for external changes to sections prop
  watch(
    () => props.sections,
    () => {
      nextTick(initializeSections);
    },
    { deep: true },
  );

  // Watch for external activeId changes
  watch(activeId, (newId) => {
    if (newId) {
      const newIndex = sections.value.findIndex((s) => s.id === newId);
      if (newIndex >= 0 && newIndex !== activeIndex.value) {
        activeIndex.value = newIndex;

        // Optionally scroll to the section
        if (sections.value[newIndex] && sections.value[newIndex].element) {
          scrollToSection(newId);
        }
      }
    } else {
      activeIndex.value = -1;
    }
  });

  // Expose methods and computed properties
  defineExpose({
    scrollToSection,
    sections,
    activeIndex,
    recalculatePositions,
    initializeSections,
  });
</script>
