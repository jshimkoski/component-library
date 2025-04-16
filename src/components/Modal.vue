<template>
  <button @click="modal = true">
    Open Modal
  </button>
  <div v-if="modal" ref="modalRef" class="modal">
    <div class="inner">
      <button class="button small" title="Close" @click="modal = false">
        𝖷
      </button>
      <p class="heading">
        Demo Modal
      </p>
      <p>Click outside of the modal to close it.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const modal = shallowRef(false)
const modalRef = useTemplateRef('modalRef')

onClickOutside(
  modalRef,
  (event) => {
    console.log(event)
    modal.value = false
  },
)

onKeyStroke('Escape', (e) => {
  if (!modal.value) return
  console.log('modal', e)
  modal.value = false
})
</script>