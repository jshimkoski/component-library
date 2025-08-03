<template>
  <Select
    v-model="select"
    :options="[
      { label: 'Option 1', value: { name: 'Jason' } },
      { label: 'Option 2', value: { name: 'Amy' } },
      { label: 'Option 3', value: { name: 'Ada' }, disabled: true },
    ]"
    label="Select"
    description="This is a select field"
    name="select"
    placeholder="Select an option..."
    required
    showMarker
    icon="material-symbols:bubble-chart"
  />
</template>

<script setup lang="ts">
  const select = ref("option1");
</script>
