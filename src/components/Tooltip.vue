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
        class="absolute z-10 pointer-events-none ring-1 ring-white rounded-sm shadow-md"
        :style="floatingStyles"
      >
        <div class="rounded-sm shadow-md bg-black text-white text-sm p-2 py-1 z-10 w-max">
         <slot name="label"><p>{{ label }}</p></slot>
        </div>
        <div
          ref="arrowRef"
          class="absolute h-2 w-2 rotate-45 bg-black ring-1 ring-white -z-1"
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

const { floatingStyles, middlewareData, placement } = useFloating(rootRef, floatingRef, {
  placement: props.placement,
  middleware: [flip(), offset(10), arrow({ element: arrowRef, padding: 5 })],
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
</script>