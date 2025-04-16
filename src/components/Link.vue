<template>
  <Component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    :rel="tag === 'a' ? rel : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :data-disabled="disabled || undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :type="tag === 'button' ? type : undefined"
    class="
      inline-flex items-center gap-1 cursor-pointer
      text-blue-500 rounded hover:text-blue-600
      disabled:opacity-50 disabled:pointer-events-none [&[data-disabled]]:opacity-50 [&[data-disabled]]:pointer-events-none
      [&[data-active='true']]:text-blue-700 active:text-blue-700
    "
    @click="tag === 'button' ? onClick($event) : undefined"
  >
    <slot>{{ label }}</slot>
  </Component>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  rel: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'a'
  }
})

const tag = computed(() => {
  return props.href ? 'a' : 'button'
})

const emit = defineEmits(['click'])

const onClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>