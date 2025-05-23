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
        class="pointer-events-none relative z-50"
        aria-headlineledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          v-if="variant !== 'standard'"
          class="fixed inset-0 bg-base-500/75 dark:bg-black/70 transition-opacity"
          aria-hidden="true"
        />

        <Transition
          enter-active-class="transform transition ease-in-out duration-150"
          :enter-from-class="
            placement === 'right' ? 'translate-x-full' : '-translate-x-full'
          "
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-150"
          leave-from-class="translate-x-0"
          :leave-to-class="
            placement === 'right' ? 'translate-x-full' : '-translate-x-full'
          "
          @after-enter="isVisible = true"
          @after-leave="model = false"
        >
          <div
            v-if="show"
            class="fixed flex max-w-full"
            :class="{
              'inset-y-0': variant !== 'inset-modal',
              'left-0': placement === 'left' && variant !== 'inset-modal',
              'right-0': placement === 'right' && variant !== 'inset-modal',
              'inset-y-4': variant === 'inset-modal',
              'left-4': placement === 'left' && variant === 'inset-modal',
              'right-4': placement === 'right' && variant === 'inset-modal',
            }"
          >
            <div
              ref="sheetRef"
              class="pointer-events-auto relative w-screen max-w-md"
            >
              <div
                :class="{
                  'bg-base-50 dark:bg-base-900': variant === 'standard',
                  'bg-white dark:bg-base-950 shadow-xl dark:shadow-white/5':
                    variant === 'modal' || variant === 'inset-modal',
                  'rounded-l-base radius-2xl:rounded-l-2xl':
                    variant === 'modal' && placement === 'right',
                  'rounded-r-base radius-2xl:rounded-r-2xl':
                    variant === 'modal' && placement === 'left',
                  'rounded-base radius-2xl:rounded-2xl':
                    variant === 'inset-modal',
                }"
                class="flex h-full flex-col overflow-y-scroll pt-4 ring-1 ring-base-200 dark:ring-base-800"
              >
                <div class="px-4 sm:px-6 flex gap-2 items-center">
                  <div>
                    <h2
                      v-if="headline || !!$slots.headline"
                      :id="titleId"
                      class="text-2xl text-black dark:text-white"
                    >
                      <slot name="headline">{{ headline }}</slot>
                    </h2>
                  </div>
                  <div class="ml-auto">
                    <Action
                      square
                      @click="show = false"
                    >
                      <Icon
                        icon="ic:baseline-close"
                        class="h-6 w-6"
                      />
                    </Action>
                  </div>
                </div>
                <div
                  class="relative mt-4 flex-1 px-4 sm:px-6 text-black dark:text-white"
                >
                  <slot />
                </div>
                <div
                  v-if="!!$slots.footer"
                  :class="{
                    'bg-base-50/70 dark:bg-base-900/60': variant === 'standard',
                    'bg-white/70 dark:bg-base-950/60': variant !== 'standard',
                    'flex-row-reverse': placement === 'left',
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
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";
  import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

  const props = defineProps({
    triggerElement: {
      type: Object as PropType<HTMLElement | null>,
      default: undefined,
    },
    variant: {
      type: String as PropType<"standard" | "modal" | "inset-modal">,
      default: "standard",
    },
    headline: {
      type: String,
      default: undefined,
    },
    placement: {
      type: String as PropType<"left" | "right">,
      default: "right",
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
    if (props.variant === "standard") return;
    if (visible) {
      isLocked.value = true;
      activate();
    } else {
      isLocked.value = false;
      deactivate();
      props.triggerElement?.focus();
    }
  });

  onClickOutside(sheetRef, (event) => {
    if (props.variant === "standard") return;
    if (event.target === props.triggerElement) return;
    if (props.triggerElement?.contains(event.target as Node)) return;
    event.stopImmediatePropagation();
    show.value = false;
  });

  onKeyStroke("Escape", (event) => {
    if (!show.value) return;
    event.preventDefault();
    show.value = false;
  });
</script>
