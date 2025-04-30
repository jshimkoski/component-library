<template>
  <div class="flex items-center gap-1">
    <Switch
      v-model="toggleSwitch"
      label="Switch 1"
      description="This is a Switch"
    />
    <Switch
      v-model="toggleSwitch"
      label="Switch 2"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
  const toggleSwitch = ref(false);
</script>
