<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transform transition ease-out duration-300"
      enter-from-class="translate-y-8 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform transition ease-in duration-200"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-8 opacity-0"
    >
      <div
        v-if="isVisible"
        role="status"
        aria-live="polite"
        :class="[
          'fixed z-50 flex items-center gap-3 px-4 py-2 rounded-base radius-xl:rounded-xl shadow-lg border',
          positionClasses,
          kindClass,
        ]"
        @mouseenter="pauseTimer"
        @mouseleave="resumeTimer"
        @focusin="pauseTimer"
        @focusout="resumeTimer"
      >
        <!-- Icon -->
        <div
          v-if="showIcon"
          class="flex-shrink-0"
        >
          <!-- Success Icon -->
          <Icon
            v-if="kind === 'success'"
            icon="ic:baseline-check-circle"
            class="h-5 w-5"
          />

          <!-- Info Icon -->
          <Icon
            v-else-if="kind === 'info'"
            icon="ic:baseline-info"
            class="h-5 w-5"
          />

          <!-- Warning Icon -->
          <Icon
            v-else-if="kind === 'warning'"
            icon="ic:baseline-warning"
            class="h-5 w-5"
          />

          <!-- Danger/Error Icon -->
          <Icon
            v-else-if="kind === 'danger'"
            icon="ic:baseline-dangerous"
            class="h-5 w-5"
          />

          <!-- Default/Primary Icon -->
          <Icon
            v-else
            icon="ic:baseline-info"
            class="h-5 w-5"
          />
        </div>

        <!-- Content -->
        <div class="flex-1">
          <div
            v-if="title"
            class="font-medium text-sm"
          >
            {{ title }}
          </div>
          <div class="text-sm">
            <slot>{{ message }}</slot>
          </div>
        </div>

        <!-- Action Button -->
        <div
          v-if="actionLabel"
          class="flex-shrink-0"
        >
          <button
            class="text-sm font-medium underline focus:outline-none"
            @click="onAction"
          >
            {{ actionLabel }}
          </button>
        </div>

        <!-- Close Button -->
        <div
          v-if="dismissible"
          class="flex-shrink-0 mt-1.5"
        >
          <button
            type="button"
            class="rounded-base focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="closeButtonClass"
            @click="dismiss"
          >
            <span class="sr-only">Dismiss</span>
            <Icon
              icon="ic:baseline-close"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const props = defineProps({
    // Content
    message: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },

    // Appearance
    kind: {
      type: String as PropType<
        "primary" | "success" | "info" | "warning" | "danger" | "secondary"
      >,
      default: "primary",
    },
    position: {
      type: String as PropType<
        | "top"
        | "bottom"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
      >,
      default: "bottom-right",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    dismissible: {
      type: Boolean,
      default: true,
    },

    // Behavior
    autoClose: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 5000, // 5 seconds
    },

    // Action
    actionLabel: {
      type: String,
      default: undefined,
    },
  });

  const emit = defineEmits(["action", "dismiss", "close"]);

  const modelValue = defineModel<boolean>({
    default: true,
  });

  // State
  const isVisible = ref(modelValue.value);
  let autoCloseTimeout: number | null = null;
  let remainingDuration = ref(props.duration);
  let startTime = ref(0);
  const isPaused = ref(false);

  // Positioning classes
  const positionClasses = computed(() => {
    switch (props.position) {
      case "top":
        return "top-4 left-1/2 -translate-x-1/2";
      case "top-left":
        return "top-4 left-4";
      case "top-right":
        return "top-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom":
      default:
        return "bottom-4 left-1/2 -translate-x-1/2";
    }
  });

  // Styling based on kind
  const kindClass = computed(() => {
    switch (props.kind) {
      case "success":
        return "bg-success-700 text-success-50 dark:bg-success-900 dark:text-success-100 border-success-700";
      case "info":
        return "bg-info-700 text-info-50 dark:bg-info-900 dark:text-info-100 border-info-700";
      case "warning":
        return "bg-warning-700 text-warning-50 dark:bg-warning-900 dark:text-warning-100 border-warning-700";
      case "danger":
        return "bg-danger-700 text-danger-50 dark:bg-danger-900 dark:text-danger-100 border-danger-700";
      case "secondary":
        return "bg-secondary-700 text-secondary-50 dark:bg-secondary-900 dark:text-secondary-100 border-secondary-700";
      case "primary":
      default:
        return "bg-primary-700 text-primary-50 dark:bg-primary-900 dark:text-primary-100 border-primary-700";
    }
  });

  // Close button style
  const closeButtonClass = computed(() => {
    switch (props.kind) {
      case "success":
        return "focus:ring-success-400 dark:focus:ring-success-500";
      case "info":
        return "focus:ring-info-400 dark:focus:ring-info-500";
      case "warning":
        return "focus:ring-warning-400 dark:focus:ring-warning-500";
      case "danger":
        return "focus:ring-danger-400 dark:focus:ring-danger-500";
      case "secondary":
        return "focus:ring-secondary-400 dark:focus:ring-secondary-500";
      case "primary":
      default:
        return "focus:ring-primary-400 dark:focus:ring-primary-500";
    }
  });

  // Handlers
  function onAction() {
    emit("action");
    if (props.dismissible) {
      dismiss();
    }
  }

  function dismiss() {
    isVisible.value = false;
    modelValue.value = false;
    emit("dismiss");

    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = null;
    }
  }

  // Setup auto close
  watch(
    () => props.autoClose,
    (newVal) => {
      if (newVal && isVisible.value) {
        setupAutoClose();
      } else if (!newVal && autoCloseTimeout) {
        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = null;
      }
    },
    { immediate: true },
  );

  watch(isVisible, (newVal) => {
    if (!newVal && autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = null;
    } else if (newVal && props.autoClose) {
      setupAutoClose();
    }
  });

  watch(
    () => modelValue.value,
    (newVal) => {
      isVisible.value = newVal;
      if (newVal && props.autoClose) {
        setupAutoClose();
      }
    },
  );

  function pauseTimer() {
    if (!props.autoClose || !autoCloseTimeout) return;

    isPaused.value = true;

    // Calculate remaining time
    if (startTime.value > 0) {
      remainingDuration.value = Math.max(
        0,
        remainingDuration.value - (Date.now() - startTime.value),
      );
    }

    // Clear the current timeout
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = null;
    }
  }

  function resumeTimer() {
    if (!props.autoClose || isPaused.value === false) return;

    isPaused.value = false;
    startTime.value = Date.now();

    // Set a new timeout with the remaining duration
    autoCloseTimeout = window.setTimeout(() => {
      dismiss();
      emit("close");
    }, remainingDuration.value);
  }

  function setupAutoClose() {
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
    }

    // Reset values
    remainingDuration.value = props.duration;
    startTime.value = Date.now();
    isPaused.value = false;

    autoCloseTimeout = window.setTimeout(() => {
      dismiss();
      emit("close");
    }, props.duration);
  }

  // Clean up on unmount
  onBeforeUnmount(() => {
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
    }
  });

  // Expose methods
  defineExpose({
    dismiss,
    pauseTimer,
    resumeTimer,
  });
</script>
