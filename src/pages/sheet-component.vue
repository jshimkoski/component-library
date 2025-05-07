<template>
  <Action
    @click="sheetModal = !sheetModal"
    ref="sheetModalTrigger"
  >
    <span>Toggle Modal Sheet</span>
    <Badge label="999+" />
  </Action>
  <Action
    @click="sheetInsetModal = !sheetInsetModal"
    ref="sheetInsetModalTrigger"
  >
    <span>Toggle Inset Modal</span>
    <Badge label="999+" />
  </Action>
  <Action
    @click="sheet = !sheet"
    ref="sheetTrigger"
  >
    <span>Toggle Sheet</span>
    <Badge label="999+" />
  </Action>
  <Sheet
    v-model="sheetModal"
    :trigger-element="sheetModalTrigger?.$el"
    headline="Modal Sheet label"
    variant="modal"
    placement="left"
  >
    <template #default>
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
  <Sheet
    v-model="sheetInsetModal"
    :trigger-element="sheetInsetModalTrigger?.$el"
    headline="Modal Inset Sheet label"
    variant="inset-modal"
    placement="left"
  >
    <template #default>
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
  <Sheet
    v-model="sheet"
    :trigger-element="sheetTrigger?.$el"
    headline="Sheet label"
    variant="standard"
  >
    <template #default>
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
  const sheetModalTrigger = useTemplateRef("sheetModalTrigger");
  const sheetModal = ref(false);

  const sheetInsetModalTrigger = useTemplateRef("sheetInsetModalTrigger");
  const sheetInsetModal = ref(false);

  const sheetTrigger = useTemplateRef("sheetTrigger");
  const sheet = ref(false);
</script>
