<template>
  <TextEditor
    v-model="texteditor"
    label="Text Editor"
    description="This is a text editor"
    name="text-editor"
    placeholder="Type something..."
    required
    show-marker
  />
</template>

<script setup lang="ts">
  const texteditor = ref("");
</script>
