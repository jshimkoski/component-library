<template>
  <FloatingUi
    v-model:open="open"
    :placement="placement"
    type="rich"
    :class="{
      'w-full': variant === 'nested',
    }"
  >
    <template #default>
      <Action
        data-menu="true"
        ref="triggerElement"
        :disabled="disabled"
        :active="open"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-haspopup="true"
        :class="{
          'w-full': variant === 'nested',
        }"
        @click="open = !open"
      >
        <span class="grow text-left">{{ label || "Menu" }}</span>
        <Icon icon="ic:baseline-keyboard-arrow-down"
          v-if="placement.includes('top') || placement.includes('bottom')"
          class="text-lg"
        />
        <Icon icon="ic:baseline-chevron-right"
          v-if="placement.includes('left') || placement.includes('right')"
          class="text-lg"
        />
      </Action>
    </template>
    <template #popover>
      <div ref="popoverRef">
        <slot
          name="content"
          :isOpen="open"
          :open="() => (open = true)"
          :close="() => (open = false)"
          :toggle="() => (open = !open)"
        >
          <ul
            class="p-2 m-0 list-none isolation-auto"
            :class="{
              'w-48': !autoWidth,
              'w-auto': autoWidth,
            }"
            style="z-index: 9999; position: relative;"
            @click="handlePopoverClick"
          >
            <slot
              :isOpen="open"
              :open="() => (open = true)"
              :close="() => (open = false)"
              :toggle="() => (open = !open)"
            />
          </ul>
        </slot>
      </div>
    </template>
  </FloatingUi>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import type { Placement } from "@floating-ui/core";

  defineOptions({
    inheritAttrs: false,
  });
  defineProps({
    variant: {
      type: String as PropType<"standard" | "nested">,
      default: "standard",
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String as PropType<Placement>,
      default: "bottom-start",
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
  });

  const open = defineModel("open", {
    type: Boolean,
  });

  const triggerElement = useTemplateRef("triggerElement");
  const popoverRef = useTemplateRef("popoverRef");

  const hasDataMenu = (event: MouseEvent) => {
    let el = event.target as HTMLElement | null;
    while (el) {
      if (el.hasAttribute && el.hasAttribute('data-menu')) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  onClickOutside(popoverRef, (event) => {
    if (!open.value) return;
    if (event.target === triggerElement.value?.$el) return;
    if (triggerElement.value?.$el.contains(event.target)) return;
    if (hasDataMenu(event)) return;
    open.value = false;
  });

  onKeyStroke("Escape", (event) => {
    if (!open.value) return;
    event.preventDefault();
    open.value = false;
  });

  const handlePopoverClick = (event: Event) => {
    if (!event.target) return;
    const clickableNodes = ["A", "BUTTON"];
    if (
      clickableNodes.includes((event.target as HTMLElement).nodeName) &&
      !(event.target as HTMLElement).hasAttribute("data-menu")
    ) {
      open.value = false;
    }
  };
</script>
