<template>
  <FloatingUi
    v-model:open="isOpen"
    type="rich"
    placement="bottom-start"
    ref="floatingContainer"
  >
    <!-- Input Trigger -->
    <div
      class="grid items-center gap-1"
      :class="{ 'opacity-50 pointer-events-none': disabled }"
    >
      <label
        v-if="label"
        :for="id"
        class="cursor-pointer block font-semibold"
        :class="[
          required && showMarker
            ? `after:text-danger-500 after:content-['*'] after:ml-1`
            : '',
        ]"
      >
        <slot name="label">{{ label }}</slot>
      </label>
      <div
        ref="triggerRef"
        :id="id"
        class="flex items-center justify-between w-full px-4 py-2 rounded-base border border-base-300 dark:border-base-700 bg-white dark:bg-base-950 text-base-700 dark:text-base-300 hover:bg-base-50 dark:hover:bg-base-900 cursor-pointer transition-colors"
        @click="toggleOpen"
      >
        <div class="flex-grow truncate">
          <template v-if="modelValue">
            <span v-if="mode === 'single'">{{
              formatDate(modelValue as Date | null)
            }}</span>
            <span v-else-if="mode === 'range' && Array.isArray(modelValue)">
              {{ formatDate(modelValue[0]) }} - {{ formatDate(modelValue[1]) }}
            </span>
          </template>
          <span
            v-else
            class="text-base-400 dark:text-base-600"
          >
            {{ placeholder }}
          </span>
        </div>
        <svg
          class="h-5 w-5 text-base-500 ml-2 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p
        v-if="description"
        class="text-sm text-base-600 dark:text-base-400"
      >
        {{ description }}
      </p>
    </div>

    <!-- Calendar Popover -->
    <template #popover>
      <div
        class="p-4 shadow-md"
        ref="popoverRef"
        tabindex="0"
        @keydown.esc="isOpen = false"
      >
        <div
          class="flex"
          :class="{ 'space-x-4': mode === 'range' && showTwoMonths }"
        >
          <!-- First calendar (always shown) -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <button
                  type="button"
                  class="p-1 rounded-full hover:bg-base-100 dark:hover:bg-base-800"
                  @click="prevMonth"
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
                </button>
                <div class="px-2 text-sm font-medium">
                  {{ monthNames[currentMonth] }} {{ currentYear }}
                </div>
                <button
                  type="button"
                  class="p-1 rounded-full hover:bg-base-100 dark:hover:bg-base-800"
                  @click="nextMonth"
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
                </button>
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
                v-for="(date, index) in calendarDays"
                :key="index"
                type="button"
                class="h-7 w-7 flex items-center justify-center text-xs focus:outline-none rounded-full"
                :class="getDateClasses(date)"
                :disabled="isDateDisabled(date)"
                @click="handleDateClick(date)"
              >
                {{ date ? date.getDate() : "" }}
              </button>
            </div>
          </div>

          <!-- Second calendar (only shown in range mode with showTwoMonths=true) -->
          <div v-if="mode === 'range' && showTwoMonths">
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-medium pl-2">
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
                class="h-7 w-7 flex items-center justify-center text-xs focus:outline-none rounded-full"
                :class="getDateClasses(date)"
                :disabled="isDateDisabled(date)"
                @click="handleDateClick(date)"
              >
                {{ date ? date.getDate() : "" }}
              </button>
            </div>
          </div>
        </div>

        <div class="mt-4 flex justify-end space-x-2">
          <button
            type="button"
            class="px-3 py-1 text-xs font-medium text-base-700 dark:text-base-300 hover:bg-base-100 dark:hover:bg-base-800 rounded-md"
            @click="clearDate"
          >
            Clear
          </button>
          <button
            type="button"
            class="px-3 py-1 text-xs font-medium text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-md"
            @click="isOpen = false"
          >
            Done
          </button>
        </div>
      </div>
    </template>
  </FloatingUi>
</template>

<script setup lang="ts">
  import { ref, computed, watch, onMounted, nextTick } from "vue";
  import type { PropType } from "vue";

  type DateValue = Date | null;
  type RangeValue = [Date | null, Date | null] | null;
  type DatePickerValue = DateValue | RangeValue;
  type DatePickerMode = "single" | "range";

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
  const id = useId();

  // Handle clicks outside
  onClickOutside(floatingContainer, () => {
    if (isOpen.value) {
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
    }
  });

  // Current view state
  const today = new Date();
  const currentMonth = ref(today.getMonth());
  const currentYear = ref(today.getFullYear());

  // Toggle calendar visibility
  function toggleOpen() {
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
      isOpen.value = false;
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

      // Close the calendar when range is complete
      if (currentRange[0] && currentRange[1]) {
        isOpen.value = false;
      }
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
