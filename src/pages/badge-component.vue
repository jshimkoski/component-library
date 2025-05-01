<template>
  <div class="flex gap-2">
    <Badge
      v-for="kind in kinds"
      :kind="kind"
      label="Badge"
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
