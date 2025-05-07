<template>
  <div
    ref="rootRef"
    :style="{
      display: 'inline-block',
      position: 'relative',
    }"
  >
    <slot
      :isOpen="open"
      :open="() => (open = true)"
      :close="() => (open = false)"
      :toggle="() => (open = !open)"
    />
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        ref="floatingRef"
        :class="floatingContainerClasses"
        :style="{
          zIndex: 50,
          ...floatingStyles,
        }"
      >
        <div :class="floatingClasses">
          <slot
            name="popover"
            :isOpen="open"
            :open="() => (open = true)"
            :close="() => (open = false)"
            :toggle="() => (open = !open)"
          >
            <p>{{ text }}</p>
          </slot>
        </div>
        <div
          v-if="!hideArrow"
          ref="arrowRef"
          :class="arrowClasses"
          :style="{
            position: 'absolute',
            rotate: '45deg',
            zIndex: -10,
            left:
              middlewareData.arrow?.x != null
                ? `${middlewareData.arrow.x}px`
                : '',
            top:
              middlewareData.arrow?.y != null
                ? `${middlewareData.arrow.y}px`
                : '',
            [oppositeSide]: `${-arrowLen / 2}px`,
          }"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import {
    useFloating,
    flip,
    offset,
    arrow,
    autoUpdate,
  } from "@floating-ui/vue";
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
    hideArrow: {
      type: Boolean,
      default: false,
    },
  });

  const open = defineModel("open", {
    type: Boolean,
  });

  const rootRef = useTemplateRef("rootRef");
  const floatingRef = useTemplateRef("floatingRef");
  const arrowRef = useTemplateRef("arrowRef");

  const arrowLen = computed(() => {
    return arrowRef.value?.offsetWidth || 0;
  });

  const floatingOffset = computed(() => {
    return Math.sqrt(2 * arrowLen.value ** 2) / 2 + 4;
  });

  const arrowPadding = computed(() => {
    return props.type === "rich" ? 24 : 4;
  });

  const { update, floatingStyles, middlewareData, placement } = useFloating(
    rootRef,
    floatingRef,
    {
      placement: props.placement,
      middleware: [
        offset(() => floatingOffset.value),
        flip(),
        arrow({
          element: arrowRef,
          padding: arrowPadding.value,
        }),
      ],
      whileElementsMounted: autoUpdate,
    },
  );

  watch([() => props.type, () => props.placement], () => {
    update();
  });

  const OPPOSITE_SIDE_BY_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  } as { [key: string]: string };

  const side = computed(() => placement.value.split("-")[0]);
  const oppositeSide = computed(() => OPPOSITE_SIDE_BY_SIDE[side.value]);

  const floatingContainerClasses = computed(() => {
    switch (props.type) {
      case "rich":
        return "ring-1 ring-base-300 rounded-base radius-2xl:rounded-2xl shadow-md dark:shadow-white/5 dark:ring-base-700";
      case "plain":
      default:
        return "pointer-events-none ring-1 ring-base-700 rounded-base radius-2xl:rounded-2xl shadow-md dark:shadow-white/5";
    }
  });

  const floatingClasses = computed(() => {
    switch (props.type) {
      case "rich":
        return "rounded-base radius-2xl:rounded-2xl bg-base-50 text-black w-max dark:bg-base-900 dark:text-white";
      case "plain":
      default:
        return "rounded-base radius-2xl:rounded-2xl bg-black text-white text-sm w-max";
    }
  });

  const arrowClasses = computed(() => {
    switch (props.type) {
      case "rich":
        return "size-4 bg-base-50 ring-1 ring-base-300 dark:bg-base-900 dark:ring-base-700 shadow-md dark:shadow-white/5";
      case "plain":
      default:
        return "size-2 bg-black ring-1 ring-base-700 shadow-md dark:shadow-white/5";
    }
  });
</script>
