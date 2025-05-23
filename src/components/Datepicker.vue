<template>
  <div ref="floatingContainer">
    <FloatingUi
      v-model:open="isOpen"
      type="rich"
      placement="bottom"
    >
      <TextField
        :model-value="
          mode === 'range' && Array.isArray(modelValue)
            ? `${formatDate(modelValue[0])} - ${formatDate(modelValue[1])}`
            : formatDate(modelValue as Date | null)
        "
        :label="label"
        :description="description"
        :show-marker="showMarker"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
        readonly
        icon="ic:baseline-calendar-month"
        @click="toggleOpen"
      />
      <!-- Calendar Popover -->
      <template #popover>
        <div
          class="p-4 shadow-md"
          ref="popoverRef"
          tabindex="0"
          @keydown.esc="isOpen = false"
          @click.stop
          @mousedown.stop
        >
          <div
            class="flex"
            :class="{ 'space-x-4': mode === 'range' && showTwoMonths }"
          >
            <!-- First calendar (always shown) -->
            <div>
              <div class="flex items-center justify-between w-full mb-4">
                <Action
                  variant="ghost"
                  size="xs"
                  square
                  @click.stop.prevent="prevMonth"
                >
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Action>
                <div class="px-2 text-sm font-medium">
                  {{ monthNames[currentMonth] }} {{ currentYear }}
                </div>
                <Action
                  variant="ghost"
                  size="xs"
                  square
                  @click.stop.prevent="nextMonth"
                >
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Action>
              </div>

              <div class="grid grid-cols-7 text-center mb-1">
                <span
                  v-for="day in daysOfWeek"
                  :key="day"
                  class="text-xs font-medium text-base-500 dark:text-base-400"
                >
                  {{ day }}
                </span>
              </div>

              <div class="grid grid-cols-7 gap-px">
                <button
                  v-for="(date, index) in calendarDays"
                  :key="index"
                  type="button"
                  class="cursor-pointer h-7 w-7 flex items-center justify-center text-xs focus:outline-none rounded-full"
                  :class="getDateClasses(date)"
                  :disabled="isDateDisabled(date)"
                  @click.stop.prevent="handleDateClick(date)"
                >
                  {{ date ? date.getDate() : "" }}
                </button>
              </div>
            </div>

            <!-- Second calendar (only shown in range mode with showTwoMonths=true) -->
            <div v-if="mode === 'range' && showTwoMonths">
              <div class="flex items-center justify-between w-full mb-4">
                <div class="mx-auto text-sm font-medium pl-2">
                  {{ monthNames[computedNextMonth] }}
                  {{ computedNextMonth === 0 ? currentYear + 1 : currentYear }}
                </div>
              </div>

              <div class="grid grid-cols-7 text-center mb-1">
                <span
                  v-for="day in daysOfWeek"
                  :key="day"
                  class="text-xs font-medium text-base-500 dark:text-base-400"
                >
                  {{ day }}
                </span>
              </div>

              <div class="grid grid-cols-7 gap-px">
                <button
                  v-for="(date, index) in nextMonthCalendarDays"
                  :key="index"
                  type="button"
                  class="cursor-pointer h-7 w-7 flex items-center justify-center text-xs focus:outline-none rounded-full"
                  :class="getDateClasses(date)"
                  :disabled="isDateDisabled(date)"
                  @click.stop.prevent="handleDateClick(date)"
                >
                  {{ date ? date.getDate() : "" }}
                </button>
              </div>
            </div>
          </div>

          <div class="mt-4 flex justify-end space-x-2">
            <Action
              variant="ghost"
              size="sm"
              @click.stop.prevent="clearDate"
            >
              Clear
            </Action>
            <Action
              kind="primary"
              size="sm"
              @click.stop.prevent="isOpen = false"
            >
              Done
            </Action>
          </div>
        </div>
      </template>
    </FloatingUi>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps({
    modelValue: {
      type: [Date, Array, null] as PropType<DatePickerValue>,
      default: null,
    },
    mode: {
      type: String as PropType<DatePickerMode>,
      default: "single",
    },
    minDate: {
      type: Date,
      default: undefined,
    },
    maxDate: {
      type: Date,
      default: undefined,
    },
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: "Select date",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    showMarker: {
      type: Boolean,
      default: true,
    },
    showTwoMonths: {
      type: Boolean,
      default: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  // UI state
  const isOpen = ref(false);
  const triggerRef = ref<HTMLElement | null>(null);
  const popoverRef = ref<HTMLElement | null>(null);
  const floatingContainer = ref<HTMLElement | null>(null);

  // Handle clicks outside but only close when not interacting with calendar
  onClickOutside(floatingContainer, (event) => {
    // Only close if we clicked outside both the trigger and the calendar
    if (
      isOpen.value &&
      !popoverRef.value?.contains(event.target as Node) &&
      !triggerRef.value?.contains(event.target as Node)
    ) {
      isOpen.value = false;
    }
  });

  // Global escape key listener
  useEventListener(document, "keydown", (e) => {
    if (e.key === "Escape" && isOpen.value) {
      isOpen.value = false;
      e.preventDefault();
    }
  });

  // Focus management
  watch(isOpen, (newValue) => {
    if (newValue) {
      nextTick(() => {
        popoverRef.value?.focus();
      });
    } else {
      // Return focus to trigger when calendar closes
      nextTick(() => {
        triggerRef.value?.focus();
      });
    }
  });

  // Current view state
  const today = new Date();
  const currentMonth = ref(today.getMonth());
  const currentYear = ref(today.getFullYear());

  // Toggle calendar visibility
  function toggleOpen(event?: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!props.disabled) {
      isOpen.value = !isOpen.value;
    }
  }

  // Date formatting
  function formatDate(date: Date | null): string {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  // Days of week labels
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Navigation functions
  function prevMonth() {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  }

  function nextMonth() {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  }

  // Compute next month for dual calendar view
  const computedNextMonth = computed(() => (currentMonth.value + 1) % 12);

  // Generate calendar days for current month
  const calendarDays = computed(() => {
    const days = [];
    const firstDay = new Date(currentYear.value, currentMonth.value, 1);
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);

    // Add empty slots for days before the first day of the month
    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(currentYear.value, currentMonth.value, i));
    }

    // Add empty slots to complete the grid if needed
    const remainingSlots = (7 - (days.length % 7)) % 7;
    for (let i = 0; i < remainingSlots; i++) {
      days.push(null);
    }

    return days;
  });

  // Generate calendar days for next month (used in range mode)
  const nextMonthCalendarDays = computed(() => {
    const nextMonthYear =
      currentMonth.value === 11 ? currentYear.value + 1 : currentYear.value;
    const nMonth = (currentMonth.value + 1) % 12;

    const days = [];
    const firstDay = new Date(nextMonthYear, nMonth, 1);
    const lastDay = new Date(nextMonthYear, nMonth + 1, 0);

    // Add empty slots for days before the first day of the month
    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(nextMonthYear, nMonth, i));
    }

    // Add empty slots to complete the grid if needed
    const remainingSlots = (7 - (days.length % 7)) % 7;
    for (let i = 0; i < remainingSlots; i++) {
      days.push(null);
    }

    return days;
  });

  // Check if date is disabled based on min/max constraints
  function isDateDisabled(date: Date | null): boolean {
    if (!date) return true;

    if (props.minDate && date < props.minDate) return true;
    if (props.maxDate && date > props.maxDate) return true;

    return false;
  }

  // Date selection
  function handleDateClick(date: Date | null) {
    if (!date || isDateDisabled(date)) return;

    if (props.mode === "single") {
      // Single date selection
      emit("update:modelValue", new Date(date));
      // Don't close for single date selection mode - keep open for adjustments
      // Let user explicitly close with Done or clicking outside
    } else if (props.mode === "range") {
      // Range selection
      const currentRange = Array.isArray(props.modelValue)
        ? [...props.modelValue]
        : [null, null];

      if (!currentRange[0] || (currentRange[0] && currentRange[1])) {
        // Start a new range
        currentRange[0] = new Date(date);
        currentRange[1] = null;
      } else {
        // Complete the range
        if (date < currentRange[0]) {
          currentRange[1] = currentRange[0];
          currentRange[0] = new Date(date);
        } else {
          currentRange[1] = new Date(date);
        }
      }

      emit("update:modelValue", currentRange);

      // For range mode, keep open even when range is complete
      // User must close with Done button or by clicking outside
    }
  }

  // Clear selected date(s)
  function clearDate() {
    if (props.mode === "single") {
      emit("update:modelValue", null);
    } else {
      emit("update:modelValue", [null, null]);
    }
  }

  // Helper to compare dates (ignoring time)
  function isDateSame(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  // Calculate date classes based on selection state
  function getDateClasses(date: Date | null) {
    if (!date) return "invisible pointer-events-none";

    const classes = ["hover:bg-base-100 dark:hover:bg-base-800"];

    // Today's date
    const isToday = isDateSame(date, today);
    if (isToday) {
      classes.push("font-bold border border-primary-500");
    }

    // Check if date is selected
    if (props.mode === "single") {
      const isSelected =
        props.modelValue && isDateSame(date, props.modelValue as Date);
      if (isSelected) {
        classes.push("bg-primary-500 text-white hover:bg-primary-600");
      }
    } else if (props.mode === "range" && Array.isArray(props.modelValue)) {
      const [startDate, endDate] = props.modelValue;

      // Selected start date
      if (startDate && isDateSame(date, startDate)) {
        classes.push("bg-primary-500 text-white hover:bg-primary-600");
      }

      // Selected end date
      if (endDate && isDateSame(date, endDate)) {
        classes.push("bg-primary-500 text-white hover:bg-primary-600");
      }

      // Date in the selected range
      if (startDate && endDate && date > startDate && date < endDate) {
        classes.push("bg-primary-100 dark:bg-primary-900/50");
      }
    }

    // Disabled dates
    if (isDateDisabled(date)) {
      classes.push("opacity-50 cursor-not-allowed");
    }

    return classes.join(" ");
  }

  // Initialize the displayed month/year based on the current selection
  onMounted(() => {
    if (props.modelValue) {
      if (props.mode === "single" && props.modelValue instanceof Date) {
        currentMonth.value = props.modelValue.getMonth();
        currentYear.value = props.modelValue.getFullYear();
      } else if (
        props.mode === "range" &&
        Array.isArray(props.modelValue) &&
        props.modelValue[0]
      ) {
        currentMonth.value = props.modelValue[0].getMonth();
        currentYear.value = props.modelValue[0].getFullYear();
      }
    }
  });

  // Watch for external modelValue changes
  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        if (props.mode === "single" && newValue instanceof Date) {
          currentMonth.value = newValue.getMonth();
          currentYear.value = newValue.getFullYear();
        } else if (
          props.mode === "range" &&
          Array.isArray(newValue) &&
          newValue[0]
        ) {
          currentMonth.value = newValue[0].getMonth();
          currentYear.value = newValue[0].getFullYear();
        }
      }
    },
  );
</script>
