<template>
  <div
    ref="rootRef"
    :style="{
      position: 'relative',
      width: 'fit-content',
    }"
  >
    <slot />
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
          ...floatingStyles
        }"
      >
        <div :class="floatingClasses">
         <slot name="text"><p>{{ text }}</p></slot>
        </div>
        <div
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
            [oppositeSide]: `${-arrowLen / 2}px`
          }"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useFloating, flip, offset, arrow, autoUpdate } from '@floating-ui/vue'
import type { Placement } from '@floating-ui/core'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'plain' | 'rich'>,
    default: 'plain'
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'top'
  },
})

const open = defineModel('open', {
  type: Boolean
})

const rootRef = useTemplateRef('rootRef')
const floatingRef = useTemplateRef('floatingRef')
const arrowRef = useTemplateRef('arrowRef')

const isHovered = useElementHover(rootRef, {
  delayLeave: props.type === 'rich' ? 200 : 0
})

watch(isHovered, (val) => {
  open.value = val
})

const arrowLen = computed(() => {
  return arrowRef.value?.offsetWidth || 0
})

const floatingOffset = computed(() => {
  return (Math.sqrt(2 * arrowLen.value ** 2) / 2) + 4
})

/**
 * TODO: Make arrow padding dynamic
 */

const { floatingStyles, middlewareData, placement } = useFloating(rootRef, floatingRef, {
  placement: props.placement,
  middleware: [
    offset(() => floatingOffset.value),
    flip(),
    arrow({ element: arrowRef, padding: 8 })
  ],
  whileElementsMounted: autoUpdate
})

const OPPOSITE_SIDE_BY_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
} as { [key: string]: string }

const side = computed(() => placement.value.split("-")[0])
const oppositeSide = computed(() => OPPOSITE_SIDE_BY_SIDE[side.value])

const floatingContainerClasses = computed(() => {
  switch (props.type) {
    case 'rich':
      return 'ring-1 ring-gray-300 rounded-sm shadow-md dark:ring-gray-700'
    case 'plain':
    default:
      return 'pointer-events-none ring-1 ring-gray-700 rounded-sm shadow-md'
  }
})

const floatingClasses = computed(() => {
  switch (props.type) {
    case 'rich':
      return 'rounded-sm bg-gray-50 text-black p-4 py-2 z-10 w-max dark:bg-gray-900 dark:text-white'
    case 'plain':
    default:
      return 'rounded-sm bg-black text-white text-sm p-2 py-1 z-10 w-max'
  }
})

const arrowClasses = computed(() => {
  switch (props.type) {
    case 'rich':
      return 'size-4 bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-900 dark:ring-gray-700 shadow-md'
    case 'plain':
    default:
      return 'size-2 bg-black ring-1 ring-gray-700 shadow-md'
  }
})
</script>