<template>
  <div class="paginator flex flex-wrap items-center justify-between gap-4">
    <!-- Information section -->
    <div
      class="flex items-center gap-2 text-sm text-base-700 dark:text-base-300"
      v-if="showInfo"
    >
      <span>
        {{ computedItemRangeText }}
      </span>
    </div>

    <!-- Pagination controls -->
    <div class="flex flex-wrap items-center gap-1">
      <!-- Page size selector -->
      <div
        v-if="showPageSizeSelector"
        class="flex items-center gap-2 mr-4"
      >
        <label
          :for="`${id}-page-size`"
          class="text-sm whitespace-nowrap"
        >
          {{ pageSizeLabel }}
        </label>
        <Select
          :id="`${id}-page-size`"
          class="w-20"
          :items="
            availablePageSizes.map((size) => ({
              value: size,
              label: size.toString(),
            }))
          "
          v-model="pageSize"
          size="sm"
        />
      </div>

      <!-- To first page -->
      <Action
        v-if="showFirstLastButtons"
        :disabled="!canGoPrevious || disabled"
        @click="goToFirstPage"
        aria-label="First page"
      >
        <slot name="first-page-icon">
          <IconMdiChevronDoubleLeft class="w-5 h-5" />
        </slot>
      </Action>

      <!-- Previous page -->
      <Action
        :disabled="!canGoPrevious || disabled"
        @click="goToPreviousPage"
        aria-label="Previous page"
      >
        <slot name="previous-page-icon">
          <IconMdiChevronLeft class="w-5 h-5" />
        </slot>
      </Action>

      <!-- Page buttons -->
      <template v-if="mode === 'buttons'">
        <Action
          v-for="page in visiblePageNumbers"
          :key="page"
          :active="page === internalPage"
          :disabled="disabled"
          @click="goToPage(page)"
        >
          {{ page }}
        </Action>
      </template>

      <!-- Page input -->
      <template v-else-if="mode === 'input'">
        <div class="flex items-center gap-2 mx-2">
          <span class="text-sm">{{ pageLabel }}</span>
          <TextField
            v-model="pageInput"
            @blur="handlePageInputBlur"
            @keyup.enter="handlePageInputBlur"
            class="w-16"
            type="number"
            :min="1"
            :max="totalPages"
            :disabled="disabled"
          />
          <span class="text-sm">{{ ofLabel }} {{ totalPages }}</span>
        </div>
      </template>

      <!-- Next page -->
      <Action
        :disabled="!canGoNext || disabled"
        @click="goToNextPage"
        aria-label="Next page"
      >
        <slot name="next-page-icon">
          <IconMdiChevronRight class="w-5 h-5" />
        </slot>
      </Action>

      <!-- To last page -->
      <Action
        v-if="showFirstLastButtons"
        :disabled="!canGoNext || disabled"
        @click="goToLastPage"
        aria-label="Last page"
      >
        <slot name="last-page-icon">
          <IconMdiChevronDoubleRight class="w-5 h-5" />
        </slot>
      </Action>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    // Basic pagination props
    page: {
      type: Number,
      default: 1,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },

    // Display configuration
    disabled: {
      type: Boolean,
      default: false,
    },
    showFirstLastButtons: {
      type: Boolean,
      default: false,
    },
    showInfo: {
      type: Boolean,
      default: true,
    },
    visiblePageButtonLimit: {
      type: Number,
      default: 5,
    },
    mode: {
      type: String as PropType<"buttons" | "input">,
      default: "buttons",
    },

    // Page size selector configuration
    showPageSizeSelector: {
      type: Boolean,
      default: false,
    },
    availablePageSizes: {
      type: Array as PropType<number[]>,
      default: () => [5, 10, 25, 50, 100],
    },

    // Localization
    itemRangeText: {
      type: String,
      default: "Showing {start} to {end} of {total} items",
    },
    pageSizeLabel: {
      type: String,
      default: "Items per page:",
    },
    pageLabel: {
      type: String,
      default: "Page",
    },
    ofLabel: {
      type: String,
      default: "of",
    },
  });

  const emit = defineEmits([
    "update:page",
    "update:itemsPerPage",
    "pageChange",
  ]);

  // Model binding for page
  const internalPage = defineModel<number>("page");

  // Model binding for items per page
  const pageSize = defineModel<number>("itemsPerPage");

  // Initialize model values if undefined
  if (internalPage.value === undefined) {
    internalPage.value = props.page;
  }
  if (pageSize.value === undefined) {
    pageSize.value = props.itemsPerPage;
  }

  // Input field for the page number when using input mode
  const pageInput = ref(internalPage.value.toString());

  // Generate unique id for ARIA purposes
  const id = useId();

  // Computed properties
  const totalPages = computed(() => {
    return Math.max(1, Math.ceil(props.totalItems / (pageSize.value ?? props.itemsPerPage)));
  });

  const startItem = computed(() => {
    return props.totalItems === 0
      ? 0
      : ((internalPage.value ?? 1) - 1) * (pageSize.value ?? props.itemsPerPage) + 1;
  });

  const endItem = computed(() => {
    return Math.min((internalPage.value ?? 1) * (pageSize.value ?? props.itemsPerPage), props.totalItems);
  });

  const computedItemRangeText = computed(() => {
    return props.itemRangeText
      .replace("{start}", startItem.value.toString())
      .replace("{end}", endItem.value.toString())
      .replace("{total}", props.totalItems.toString());
  });

  const canGoPrevious = computed(() => (internalPage.value ?? 1) > 1);
  const canGoNext = computed(() => (internalPage.value ?? 1) < totalPages.value);

  // Calculate visible page numbers for button mode
  const visiblePageNumbers = computed(() => {
    const limit = props.visiblePageButtonLimit;
    const total = totalPages.value;
    const current = internalPage.value ?? 1;

    if (total <= limit) {
      // Show all pages if total is less than limit
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    // Calculate range to display
    let start = Math.max(1, current - Math.floor(limit / 2));
    let end = start + limit - 1;

    // Adjust if end is beyond total pages
    if (end > total) {
      end = total;
      start = Math.max(1, end - limit + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  // Methods
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages.value || props.disabled) return;
    internalPage.value = page;
    pageInput.value = page.toString();
    emit("pageChange", page);
  };

  const goToFirstPage = () => {
    goToPage(1);
  };

  const goToLastPage = () => {
    goToPage(totalPages.value);
  };

  const goToNextPage = () => {
    if (canGoNext.value) {
      goToPage((internalPage.value ?? 1) + 1);
    }
  };

  const goToPreviousPage = () => {
    if (canGoPrevious.value) {
      goToPage((internalPage.value ?? 1) - 1);
    }
  };

  const handlePageInputBlur = () => {
    let newPage = parseInt(pageInput.value);

    if (isNaN(newPage)) {
      // Reset to current page if input is invalid
      pageInput.value = (internalPage.value ?? 1).toString();
      return;
    }

    // Ensure page is within valid range
    newPage = Math.max(1, Math.min(newPage, totalPages.value));
    goToPage(newPage);
  };

  // Watch for external changes to props
  watch(
    () => props.page,
    (newPage) => {
      if (newPage !== internalPage.value) {
        internalPage.value = newPage;
        pageInput.value = (newPage ?? "").toString();
      }
    },
  );

  watch(
    () => props.itemsPerPage,
    (newSize) => {
      if (newSize !== pageSize.value) {
        pageSize.value = newSize;
      }
    },
  );

  // Watch for page size changes to adjust current page if needed
  watch(pageSize, (newSize, oldSize) => {
    if (newSize !== oldSize) {
      // Recalculate current page to keep approximate scroll position
      const currentItemIndex = ((internalPage.value ?? 1) - 1) * (oldSize ?? 1) + 1;
      const newPage = Math.floor((currentItemIndex - 1) / (newSize ?? 1)) + 1;
      goToPage(Math.min(newPage, Math.ceil(props.totalItems / (newSize ?? 1))));
    }
  });

  // Update page input when model changes
  watch(internalPage, (newPage) => {
    pageInput.value = (newPage ?? "").toString();
  });

  // Expose public methods
  defineExpose({
    goToPage,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    getCurrentPage: () => internalPage.value,
    getTotalPages: () => totalPages.value,
  });
</script>
