<template>
  <Action
    @click="sheet = !sheet"
    ref="sheetTrigger"
  >
    <span>Open Sheet</span>
    <Badge label="999+" />
  </Action>
  <Sheet
    v-model="sheet"
    :trigger-ref="sheetTrigger?.$el"
    label="Sheet label"
    description="Sheet description"
  >
    <template #content>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
      <p>This is content for the sheet.</p>
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
  </Sheet>
</template>

<script setup lang="ts">
  const sheetTrigger = useTemplateRef("sheetTrigger");
  const sheet = ref(false);
</script>
