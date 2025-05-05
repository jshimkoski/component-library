<template>
  <Action
    @click="dialog = !dialog"
    ref="dialogTrigger"
  >
    <span>Open Dialog</span>
    <Badge label="999+" />
  </Action>
  <Dialog
    v-model="dialog"
    :trigger-ref="dialogTrigger?.$el"
    label="Dialog label"
    description="Dialog description"
  >
    <template #default>
      <p>This is content for the dialog.</p>
    </template>
    <template #footer="{ close }">
      <Action
        kind="danger"
        label="Deactivate"
      />
      <Action
        label="Cancel"
        @click="close"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  const dialogTrigger = useTemplateRef("dialogTrigger");
  const dialog = ref(false);
</script>
