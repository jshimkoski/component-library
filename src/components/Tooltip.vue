<template>
  <div
    ref="rootRef"
    class="relative w-fit"
    @mouseover="open = true"
    @mouseout="open = false"
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
        class="absolute z-10"
        :class="floatingContainerClasses"
        :style="floatingStyles"
      >
        <div :class="floatingClasses">
         <slot name="label"><p>{{ label }}</p></slot>
        </div>
        <div
          ref="arrowRef"
          class="absolute rotate-45 -z-10"
          :class="arrowClasses"
          :style="{
            left:
              middlewareData.arrow?.x != null
                ? `${middlewareData.arrow.x}px`
                : '',
            top:
              middlewareData.arrow?.y != null
                ? `${middlewareData.arrow.y}px`
                : '',
            [oppositeSide]: `${-(arrowRef?.clientWidth ?? 0) / 2}px`,
          }"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useFloating, flip, offset, arrow, autoUpdate } from '@floating-ui/vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'plain' | 'rich'>,
    default: 'plain'
  },
  placement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'top'
  }
})

const open = defineModel('open', {
  type: Boolean
})

const rootRef = useTemplateRef('rootRef')
const floatingRef = useTemplateRef('floatingRef')
const arrowRef = useTemplateRef('arrowRef')

/**
 * TODO: Use offset to position the tooltip based on arrow size
 */

const { floatingStyles, middlewareData, placement } = useFloating(rootRef, floatingRef, {
  placement: props.placement,
  middleware: [flip(), offset(10), arrow({ element: arrowRef })],
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
      return 'ring-1 ring-gray-300 rounded-sm shadow-md'
    case 'plain':
    default:
      return 'pointer-events-none ring-1 ring-white rounded-sm shadow-md'
  }
})

const floatingClasses = computed(() => {
  switch (props.type) {
    case 'rich':
      return 'rounded-sm bg-gray-50 text-black p-4 py-2 z-10 w-max'
    case 'plain':
    default:
      return 'rounded-sm bg-black text-white text-sm p-2 py-1 z-10 w-max'
  }
})

const arrowClasses = computed(() => {
  switch (props.type) {
    case 'rich':
      return 'size-4 bg-gray-50 ring-1 ring-gray-300'
    case 'plain':
    default:
      return 'size-2 bg-black ring-1 ring-white'
  }
})
</script>