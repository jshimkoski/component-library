<template>
  <Teleport to="body">
    <Transition
      enter-active-class="ease-out duration-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-enter="show = true"
      @after-leave="isVisible = false"
    >
      <div
        v-if="model"
        class="relative z-50"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          v-if="variant === 'modal'"
          class="fixed inset-0 bg-base-500/75 dark:bg-black/70 transition-opacity"
          aria-hidden="true"
        />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
              <Transition
                enter-active-class="transform transition ease-in-out duration-150"
                enter-from-class="translate-x-full"
                enter-to-class="translate-x-0"
                leave-active-class="transform transition ease-in-out duration-150"
                leave-from-class="translate-x-0"
                leave-to-class="translate-x-full"
                @after-enter="isVisible = true"
                @after-leave="model = false"
              >
                <div
                  v-if="show"
                  ref="sheetRef"
                  class="pointer-events-auto relative w-screen max-w-md"
                >
                  <div
                    :class="{
                      'bg-base-50 dark:bg-base-900': variant === 'standard',
                      'bg-white dark:bg-base-950 rounded-l-base radius-4xl:rounded-l-4xl':
                        variant === 'modal',
                    }"
                    class="flex h-full flex-col overflow-y-scroll pt-6 ring-1 ring-base-300 dark:ring-base-700 shadow-xl dark:shadow-white/5"
                  >
                    <div class="px-4 sm:px-6 flex gap-2 items-center">
                      <div>
                        <h2
                          v-if="label || !!$slots.label"
                          :id="titleId"
                          class="text-xl text-black dark:text-white"
                        >
                          <slot name="label">{{ label }}</slot>
                        </h2>
                        <p
                          v-if="description || !!$slots.description"
                          class="text-sm text-base-600 dark:text-base-400"
                        >
                          <slot name="description">{{ description }}</slot>
                        </p>
                      </div>
                      <div class="absolute top-2 right-2">
                        <Action
                          square
                          @click="show = false"
                        >
                          <IconMdiTimes class="h-6 w-6" />
                        </Action>
                      </div>
                    </div>
                    <div
                      class="relative mt-6 flex-1 px-4 sm:px-6 text-black dark:text-white"
                    >
                      <slot>{{ content }}</slot>
                    </div>
                    <div
                      v-if="!!$slots.footer"
                      :class="{
                        'bg-base-50/70 dark:bg-base-900/60':
                          variant === 'standard',
                        'bg-white/70 dark:bg-base-950/60': variant === 'modal',
                      }"
                      class="sticky bottom-0 p-6 flex gap-3 backdrop-blur-md"
                    >
                      <slot
                        name="footer"
                        :close="() => (show = false)"
                      />
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
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
    variant: {
      type: String as PropType<"standard" | "modal">,
      default: "standard",
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

  const show = ref(false);
  const isVisible = ref(false);
  const titleId = useId();

  const sheetRef = useTemplateRef("sheetRef");
  const { activate, deactivate } = useFocusTrap(sheetRef);

  let isLocked: Ref<boolean>;

  onMounted(() => {
    isLocked = useScrollLock(document.body);
  });

  watch(isVisible, async (visible) => {
    if (visible) {
      isLocked.value = true;
      activate();
    } else {
      isLocked.value = false;
      deactivate();
      props.triggerRef?.focus();
    }
  });

  onClickOutside(sheetRef, (event) => {
    if (event.target === props.triggerRef) return;
    if (props.triggerRef?.contains(event.target as Node)) return;
    show.value = false;
  });

  onKeyStroke("Escape", () => {
    if (!show.value) return;
    show.value = false;
  });
</script>
