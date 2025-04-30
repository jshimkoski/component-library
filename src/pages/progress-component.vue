<template>
  <Progress
    v-model="progress"
    :max="100"
    label="Progress"
    description="This is a progress indicator"
  />
</template>

<script setup lang="ts">
  const progress = ref(50);
</script>
