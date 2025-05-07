<template>
  <Action
    @click="dialog = !dialog"
    ref="dialogTrigger"
  >
    <span>Open Dialog</span>
    <Badge label="999+" />
  </Action>
  <Action
    @click="dialogFullscreen = !dialogFullscreen"
    ref="dialogFullscreenTrigger"
  >
    <span>Open Fullscreen Dialog</span>
  </Action>
  <Dialog
    v-model="dialog"
    :trigger-element="dialogTrigger?.$el"
    headline="Dialog label"
    variant="basic"
    text="This is the text for the dialog."
    action-label="Do something"
    dismiss-label="Cancel"
    @click="onClick"
    @dismiss="onDismiss"
  >
    <p>This is the default slot content.</p>
  </Dialog>
  <Dialog
    v-model="dialogFullscreen"
    :trigger-element="dialogFullscreenTrigger?.$el"
    headline="Dialog label"
    variant="fullscreen"
    text="This is the text for the dialog."
    action-label="Do something"
    dismiss-label="Cancel"
    @click="onClick"
    @dismiss="onDismiss"
  >
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
    <p>This is the default slot content.</p>
  </Dialog>
</template>

<script setup lang="ts">
  const dialogTrigger = useTemplateRef("dialogTrigger");
  const dialog = ref(false);

  const dialogFullscreenTrigger = useTemplateRef("dialogFullscreenTrigger");
  const dialogFullscreen = ref(false);

  const onClick = () => {
    console.log("do something");
    dialog.value = false;
    dialogFullscreen.value = false;
  };

  const onDismiss = async () => {
    console.log("dismissed");
    dialog.value = false;
    dialogFullscreen.value = false;
  };
</script>
