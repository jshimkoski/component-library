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
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
                class="transform overflow-auto grid gap-6 bg-base-50 dark:bg-base-900 dark:ring-1 dark:ring-base-800 text-left shadow-md dark:shadow-white/5 transition-all"
                :class="{
                  'relative p-6 rounded-base radius-full:rounded-4xl sm:my-8 sm:w-full sm:max-w-lg':
                    variant === 'basic',
                  'fixed inset-0': variant === 'fullscreen',
                }"
              >
                <div class="bg-base-50 dark:bg-base-900">
                  <div
                    :class="{
                      'sticky top-0 bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800 p-4':
                        variant === 'fullscreen',
                    }"
                    class="flex gap-3 items-center"
                  >
                    <Action
                      v-if="variant === 'fullscreen'"
                      variant="link"
                      class="mt-0.5"
                      @click="onDismiss"
                    >
                      <Icon
                        icon="ic:baseline-close"
                        class="h-6 w-6"
                      />
                      <span class="sr-only">{{ dismissLabel }}</span>
                    </Action>
                    <h2
                      v-if="headline || !!$slots.headline"
                      :id="modalTitleId"
                      tabindex="0"
                      class="text-2xl text-black dark:text-white"
                    >
                      <slot name="headline">{{ headline }}</slot>
                    </h2>
                    <Action
                      v-if="variant === 'fullscreen' && actionLabel"
                      :kind="actionKind"
                      :label="actionLabel"
                      variant="link"
                      class="ml-auto"
                      @click="onClick"
                    />
                  </div>
                  <div
                    :class="{
                      'p-6 pt-3': variant === 'fullscreen',
                    }"
                    class="mt-4 text-base-600 dark:text-base-400"
                  >
                    <slot>{{ text }}</slot>
                  </div>
                </div>
                <div
                  v-if="variant === 'basic'"
                  class="flex flex-row-reverse gap-3"
                >
                  <Action
                    v-if="actionLabel"
                    :kind="actionKind"
                    :variant="actionVariant"
                    :label="actionLabel"
                    @click="onClick"
                  />
                  <Action @click="onDismiss">
                    {{ dismissLabel }}
                  </Action>
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
  import { Icon } from "@iconify/vue";
  import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps({
    triggerElement: {
      type: Object as PropType<HTMLElement | null>,
      default: undefined,
    },
    variant: {
      type: String as PropType<"basic" | "fullscreen">,
      default: "basic",
    },
    headline: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    actionKind: {
      type: String as PropType<Kind>,
      default: "primary",
    },
    actionVariant: {
      type: String as PropType<ActionVariant>,
      default: "ghost",
    },
    actionLabel: {
      type: String,
      default: undefined,
    },
    dismissLabel: {
      type: String,
      default: "Close",
    },
  });

  const model = defineModel({
    type: Boolean,
  });

  const emit = defineEmits(["click", "dismiss"]);

  const onClick = (event: Event) => {
    emit("click", event);
  };

  const onDismiss = (event: Event) => {
    emit("dismiss", event);
  };

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
      props.triggerElement?.focus();
    }
  });

  onClickOutside(dialogRef, (event) => {
    if (event.target === props.triggerElement) return;
    if (props.triggerElement?.contains(event.target as Node)) return;
    event.stopImmediatePropagation();
    onDismiss(event);
  });

  onKeyStroke("Escape", (event: Event) => {
    if (!showDialog.value) return;
    event.preventDefault();
    onDismiss(event);
  });
</script>
