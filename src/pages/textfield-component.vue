<template>
  <div class="grid gap-6">
    <TextField
      v-model="text"
      label="Text Field"
      description="This is a text field"
      name="text-field"
      placeholder="Type something..."
      required
      showMarker
      class="border border-base-300 dark:border-base-700 rounded-md p-2"
    />
    <TextField
      v-model="email"
      label="Email Field"
      name="email-field"
      type="email"
      placeholder="Type an email..."
      required
      showMarker
      class="border border-base-300 dark:border-base-700 rounded-md p-2"
    />
  </div>
</template>

<script setup lang="ts">
  const text = ref("");
  const email = ref("");
</script>
