<template>
  <FloatingUi
    v-model:open="open"
    :placement="placement"
    type="rich"
  >
    <template #default>
      <Action
        ref="triggerElement"
        :disabled="disabled"
        :active="open"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-haspopup="true"
        @click="open = !open"
      >
        {{ label || "Menu" }}
        <IconMdiChevronDown class="text-lg" />
      </Action>
    </template>
    <template #popover>
      <ul
        ref="popoverRef"
        class="py-2 radius-xl:py-4"
        :class="{
          'w-48': !autoWidth,
          'w-auto': autoWidth,
        }"
        @click="handlePopoverClick"
      >
        <slot
          :isOpen="open"
          :open="() => (open = true)"
          :close="() => (open = false)"
          :toggle="() => (open = !open)"
        />
      </ul>
    </template>
  </FloatingUi>
</template>

<script setup lang="ts">
  import type { Placement } from "@floating-ui/core";
  defineProps({
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

  onClickOutside(popoverRef, (event) => {
    if (!open.value) return;
    if (event.target === triggerElement.value?.$el) return;
    if (triggerElement.value?.$el.contains(event.target)) return;
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
    if (clickableNodes.includes((event.target as HTMLElement).nodeName)) {
      open.value = false;
    }
  };
</script>
