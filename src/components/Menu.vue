<template>
  <FloatingUi
    v-model:open="open"
    :placement="nested ? 'right-start' : placement"
    type="rich"
    :class="{
      'w-full': nested,
    }"
    hide-arrow
  >
    <template #default>
      <Component
        :is="nested ? MenuItem : Action"
        data-menu="true"
        ref="triggerElement"
        :data-menu-nested="nested ? 'true' : undefined"
        :disabled="disabled"
        :active="open"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-haspopup="true"
        @click="open = !open"
      >
        <span class="grow text-left">{{ label || "Menu" }}</span>
        <Icon
          :icon="
            nested || placement.includes('left') || placement.includes('right')
              ? 'ic:baseline-arrow-right'
              : 'ic:baseline-arrow-drop-down'
          "
          :class="{
            'absolute -right-2 top-1/2 -translate-1/2': nested,
          }"
          class="text-2xl"
        />
      </Component>
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
          <div
            class="py-2 m-0 list-none isolation-auto"
            :class="{
              'w-48': !autoWidth,
              'w-auto': autoWidth,
            }"
            style="z-index: 9999; position: relative"
            @click="handlePopoverClick"
          >
            <slot
              :isOpen="open"
              :open="() => (open = true)"
              :close="() => (open = false)"
              :toggle="() => (open = !open)"
            />
          </div>
        </slot>
      </div>
    </template>
  </FloatingUi>
</template>

<script setup lang="ts">
  import Action from "./Action.vue";
  import MenuItem from "./MenuItem.vue";
  import { Icon } from "@iconify/vue";
  import type { Placement } from "@floating-ui/core";
  import { useMenu, closeAllMenus } from "../composables/useMenu";

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps({
    nested: {
      type: Boolean,
      default: false,
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
    parentMenuId: {
      type: String,
      default: undefined,
    },
  });

  // Inject parent menu ID if this is a nested menu
  const injectedParentMenuId = inject<string | undefined>(
    "parentMenuId",
    undefined,
  );
  const effectiveParentMenuId = props.parentMenuId || injectedParentMenuId;

  // Use the menu composable with proper parent tracking
  const { menuId, open, cleanup } = useMenu(effectiveParentMenuId);

  // Provide the menu ID to child components
  provide("parentMenuId", menuId);

  // Cleanup when component is unmounted
  onUnmounted(() => {
    cleanup();
  });

  const triggerElement = useTemplateRef("triggerElement");
  const popoverRef = useTemplateRef("popoverRef");

  const hasDataMenu = (event: MouseEvent) => {
    let el = event.target as HTMLElement | null;
    while (el) {
      if (el.hasAttribute && el.hasAttribute("data-menu")) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  };

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
    closeAllMenus();
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
