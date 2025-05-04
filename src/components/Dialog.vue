<template>
  <Teleport to="body">
    <Transition
      enter-active-class="ease-out duration-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-enter="showDialog = true"
      @after-leave="dialogIsVisible = false"
    >
      <div
        v-if="model"
        class="relative z-50"
        :aria-labelledby="modalTitleId"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-base-500/75 dark:bg-black/70 transition-opacity"
          aria-hidden="true"
        />

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-6 text-center sm:items-center sm:p-0"
          >
            <Transition
              enter-active-class="ease-out duration-150"
              enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              @after-enter="dialogIsVisible = true"
              @after-leave="model = false"
            >
              <div
                v-if="showDialog"
                ref="dialogRef"
                class="relative transform overflow-hidden p-4 rounded-base radius-full:rounded-4xl bg-base-50 dark:bg-base-950 dark:ring-1 dark:ring-base-800 text-left shadow-md dark:shadow-white/5 transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-base-50 dark:bg-base-950 p-4">
                  <div class="flex items-start gap-4">
                    <!-- <div
                      class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"
                    >
                      <svg
                        class="size-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div> -->
                    <div>
                      <h2
                        v-if="label || !!$slots.description"
                        :id="modalTitleId"
                        class="text-xl"
                      >
                        <slot name="label">{{ label }}</slot>
                      </h2>
                      <p
                        v-if="description || !!$slots.description"
                        class="text-sm text-base-600 dark:text-base-400"
                      >
                        <slot name="description">{{ description }}</slot>
                      </p>
                      <div class="mt-6 text-base-700 dark:text-base-300">
                        <slot name="content">{{ content }}</slot>
                      </div>
                    </div>
                    <div class="absolute top-2 right-2">
                      <Action
                        square
                        @click="showDialog = false"
                      >
                        <IconMdiTimes class="h-6 w-6" />
                      </Action>
                    </div>
                  </div>
                </div>
                <div
                  v-if="!!$slots.footer"
                  class="p-4 flex flex-row-reverse gap-3"
                >
                  <slot
                    name="footer"
                    :close="() => (showDialog = false)"
                  />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

  const props = defineProps({
    triggerRef: {
      type: Object as PropType<HTMLElement | null>,
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
    content: {
      type: String,
      default: undefined,
    },
  });

  const model = defineModel({
    type: Boolean,
  });

  const showDialog = ref(false);
  const dialogIsVisible = ref(false);
  const modalTitleId = useId();

  const dialogRef = useTemplateRef("dialogRef");
  const { activate, deactivate } = useFocusTrap(dialogRef);

  let isLocked: Ref<boolean>;

  onMounted(() => {
    isLocked = useScrollLock(document.body);
  });

  watch(dialogIsVisible, async (visible) => {
    if (visible) {
      isLocked.value = true;
      activate();
    } else {
      isLocked.value = false;
      deactivate();
      props.triggerRef?.focus();
    }
  });

  onClickOutside(dialogRef, (event) => {
    if (event.target === props.triggerRef) return;
    if (props.triggerRef?.contains(event.target as Node)) return;
    showDialog.value = false;
  });

  onKeyStroke("Escape", () => {
    if (!showDialog.value) return;
    showDialog.value = false;
  });
</script>
