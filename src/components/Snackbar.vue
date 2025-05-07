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
          'fixed z-50 flex items-center gap-3 p-4 rounded-base shadow-lg',
          positionClasses,
          kindClass,
        ]"
      >
        <!-- Icon -->
        <div v-if="showIcon" class="flex-shrink-0">
          <!-- Success Icon -->
          <svg v-if="kind === 'success'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          
          <!-- Info Icon -->
          <svg v-else-if="kind === 'info'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          
          <!-- Warning Icon -->
          <svg v-else-if="kind === 'warning'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.981l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          
          <!-- Danger/Error Icon -->
          <svg v-else-if="kind === 'danger'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          
          <!-- Default/Primary Icon -->
          <svg v-else class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        
        <!-- Content -->
        <div class="flex-1">
          <div v-if="title" class="font-medium text-sm">{{ title }}</div>
          <div class="text-sm">
            <slot>{{ message }}</slot>
          </div>
        </div>
        
        <!-- Action Button -->
        <div v-if="actionLabel" class="flex-shrink-0">
          <button
            class="text-sm font-medium underline focus:outline-none"
            @click="onAction"
          >
            {{ actionLabel }}
          </button>
        </div>
        
        <!-- Close Button -->
        <div v-if="dismissible" class="flex-shrink-0">
          <button
            type="button"
            class="inline-flex rounded-base p-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="closeButtonClass"
            @click="dismiss"
          >
            <span class="sr-only">Dismiss</span>
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
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
    type: String as PropType<'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary'>,
    default: 'primary',
  },
  position: {
    type: String as PropType<'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>,
    default: 'bottom',
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

const emit = defineEmits(['action', 'dismiss', 'close']);

const modelValue = defineModel<boolean>({
  default: true,
});

// State
const isVisible = ref(modelValue.value);
let autoCloseTimeout: number | null = null;

// Positioning classes
const positionClasses = computed(() => {
  switch (props.position) {
    case 'top':
      return 'top-4 left-1/2 -translate-x-1/2';
    case 'top-left':
      return 'top-4 left-4';
    case 'top-right':
      return 'top-4 right-4';
    case 'bottom-left':
      return 'bottom-4 left-4';
    case 'bottom-right':
      return 'bottom-4 right-4';
    case 'bottom':
    default:
      return 'bottom-4 left-1/2 -translate-x-1/2';
  }
});

// Styling based on kind
const kindClass = computed(() => {
  switch (props.kind) {
    case 'success':
      return 'bg-success-50 text-success-800 dark:bg-success-900 dark:text-success-200';
    case 'info':
      return 'bg-info-50 text-info-800 dark:bg-info-900 dark:text-info-200';
    case 'warning':
      return 'bg-warning-50 text-warning-800 dark:bg-warning-900 dark:text-warning-200';
    case 'danger':
      return 'bg-danger-50 text-danger-800 dark:bg-danger-900 dark:text-danger-200';
    case 'secondary':
      return 'bg-secondary-50 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200';
    case 'primary':
    default:
      return 'bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-primary-200';
  }
});

// Close button style
const closeButtonClass = computed(() => {
  switch (props.kind) {
    case 'success':
      return 'focus:ring-success-400 dark:focus:ring-success-500';
    case 'info':
      return 'focus:ring-info-400 dark:focus:ring-info-500';
    case 'warning':
      return 'focus:ring-warning-400 dark:focus:ring-warning-500';
    case 'danger':
      return 'focus:ring-danger-400 dark:focus:ring-danger-500';
    case 'secondary':
      return 'focus:ring-secondary-400 dark:focus:ring-secondary-500';
    case 'primary':
    default:
      return 'focus:ring-primary-400 dark:focus:ring-primary-500';
  }
});

// Handlers
function onAction() {
  emit('action');
  if (props.dismissible) {
    dismiss();
  }
}

function dismiss() {
  isVisible.value = false;
  modelValue.value = false;
  emit('dismiss');
  
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
    autoCloseTimeout = null;
  }
}

// Setup auto close
watch(() => props.autoClose, (newVal) => {
  if (newVal && isVisible.value) {
    setupAutoClose();
  } else if (!newVal && autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
    autoCloseTimeout = null;
  }
}, { immediate: true });

watch(isVisible, (newVal) => {
  if (!newVal && autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
    autoCloseTimeout = null;
  } else if (newVal && props.autoClose) {
    setupAutoClose();
  }
});

watch(() => modelValue.value, (newVal) => {
  isVisible.value = newVal;
  if (newVal && props.autoClose) {
    setupAutoClose();
  }
});

function setupAutoClose() {
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
  }
  
  autoCloseTimeout = window.setTimeout(() => {
    dismiss();
    emit('close');
  }, props.duration);
}

// Clean up on unmount
onBeforeUnmount(() => {
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
  }
});

// Expose close method
defineExpose({
  dismiss,
});
</script>