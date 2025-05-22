<template>
  <FloatingUi
    v-model:open="open"
    :placement="placement"
    :type="type"
    ref="rootRef"
    class="w-fit"
  >
    <template #default>
      <slot
        :open="open"
        :toggle="() => (open = !open)"
      />
    </template>
    <template #popover>
      <div
        ref="popoverRef"
        @mouseenter="popoverIsHovered = true"
        @mouseleave="popoverIsHovered = false"
        :class="{
          'p-4': type === 'rich',
          'px-3 py-1': type === 'plain',
        }"
      >
        <slot name="text">
          <p>{{ text }}</p>
        </slot>
      </div>
    </template>
  </FloatingUi>
</template>

<script setup lang="ts">
  import type { Placement } from "@floating-ui/core";

  const props = defineProps({
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String as PropType<"plain" | "rich">,
      default: "plain",
    },
    placement: {
      type: String as PropType<Placement>,
      default: "top",
    },
  });

  const open = defineModel("open", {
    type: Boolean,
  });

  const rootRef = shallowRef();
  const popoverRef = shallowRef();

  const rootIsHovered = useElementHover(rootRef, {
    delayLeave: props.type === "rich" ? 200 : 0,
  });

  const popoverIsHovered = useElementHover(popoverRef);

  watch(rootIsHovered, (val) => {
    if (!popoverIsHovered.value) {
      open.value = val;
    }
  });

  watch(popoverIsHovered, (val) => {
    open.value = val;
  });
</script>
