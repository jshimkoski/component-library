<template>
  <div class="relative inline-block">
    <Button
      ref="triggerRef"
      :disabled="disabled"
      :active="show"
      :aria-expanded="show ? 'true' : 'false'"
      :aria-haspopup="true"
      @click="show = !show"
    >
      {{ label || 'Dropdown' }}
      <IconMdiChevronDown class="text-lg" />
    </Button>
    <Transition
      enter-active-class="transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        ref="dropdownRef"
        class="absolute w-48 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10"
      >
        <ul class="py-2">
          <slot />
        </ul>
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
  disabled: {
    type: Boolean,
    default: false
  }
})

const show = shallowRef(false)
const triggerRef = useTemplateRef('triggerRef')
const dropdownRef = useTemplateRef('dropdownRef')

onClickOutside(dropdownRef, (event) => {
  if (!show.value) return
  if (event.target === triggerRef.value?.$el) return
  if (triggerRef.value?.$el.contains(event.target)) return
  show.value = false
})

onKeyStroke('Escape', (event) => {
  if (!show.value) return
  event.preventDefault()
  show.value = false
})
</script>