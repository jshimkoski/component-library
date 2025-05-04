<template>
  <TextEditor
    v-model="texteditor"
    label="Text Editor"
    description="This is a text editor"
    name="text-editor"
    placeholder="Type something..."
    class="border border-base-300 dark:border-base-700 rounded-md p-2"
    required
    show-marker
  />
</template>

<script setup lang="ts">
  const texteditor = ref("");
</script>
