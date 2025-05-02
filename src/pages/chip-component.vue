<template>
  <div class="flex gap-2">
    <Chip
      v-for="kind in kinds"
      :kind="kind"
      label="Chip"
    />
  </div>
</template>

<script setup lang="ts">
  const kinds = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ] as Kind[];
</script>
