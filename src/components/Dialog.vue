<template>
  <div
    v-if="model"
    ref="dialogRef"
    role="dialog"
    aria-modal="true"
  >
    <div class="inner">
      <button
        class="button small"
        title="Close"
        @click="model = false"
      >
        Close
      </button>
      <p class="heading">Demo Dialog</p>
      <p>Click outside of the modal to close it.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  triggerRef: {
    type: Object as PropType<HTMLElement | null>,
    default: undefined,
  },
});

const model = defineModel({
  type: Boolean,
});

const dialogRef = useTemplateRef("dialogRef");

watch(model, (newValue) => {
  if (!newValue) {
    props.triggerRef?.focus();
  }
});

onClickOutside(dialogRef, (event) => {
  if (event.target === props.triggerRef) return;
  if (props.triggerRef?.contains(event.target as Node)) return;
  model.value = false;
});

onKeyStroke("Escape", () => {
  if (!model.value) return;
  model.value = false;
});
</script>
