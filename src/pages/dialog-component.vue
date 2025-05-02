<template>
  <Action
    @click.stop="dialog = !dialog"
    ref="dialogTrigger"
  >
    <span>Open Dialog</span>
    <Badge label="999+" />
  </Action>
  <Dialog
    v-model="dialog"
    :trigger-ref="dialogTrigger?.$el"
  />
</template>

<script setup lang="ts">
  const dialogTrigger = useTemplateRef("dialogTrigger");
  const dialog = ref(false);
</script>
