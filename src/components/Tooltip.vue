<template>
  <div
    ref="root"
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
        class="absolute bg-black text-white rounded-sm text-sm p-2 py-1 z-10 w-max shadow-md pointer-events-none"
        :class="{
          'left-1/2 -translate-x-1/2': position === 'top' || position === 'bottom',
          'top-1/2 -translate-y-1/2': position === 'left' || position === 'right',
          'top-full mt-2': position === 'bottom',
          'bottom-full mb-2': position === 'top',
          'left-full ml-2': position === 'right',
          'right-full mr-2': position === 'left'
        }"
      >
        <p>{{ label }}</p>
        <div
          class="absolute h-0 w-0"
          :class="{
            'top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black': position === 'top',
            'bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black': position === 'bottom',
            'right-full top-1/2 -translate-y-1/2 border-r-4 border-t-4 border-b-4 border-t-transparent border-b-transparent border-r-black': position === 'right',
            'left-full top-1/2 -translate-y-1/2 border-l-4 border-t-4 border-b-4 border-t-transparent border-b-transparent border-l-black': position === 'left'
          }"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  position: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'top'
  }
})

const open = defineModel('open', {
  type: Boolean,
  default: false
})
</script>