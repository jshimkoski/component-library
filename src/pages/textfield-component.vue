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
    />
    <TextField
      v-model="email"
      label="Email Field"
      name="email-field"
      type="email"
      placeholder="Type an email..."
      required
      showMarker
    />
  </div>
</template>

<script setup lang="ts">
  const text = ref("");
  const email = ref("");
</script>
