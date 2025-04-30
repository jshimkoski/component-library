<template>
  <div class="grid">
    <Checkbox
      v-model="checkbox"
      label="Amy"
      value="Amy"
      description="This is a Checkbox with Amy value"
    />
    <Checkbox
      v-model="checkbox"
      label="Jason"
      value="Jason"
      disabled
      description="This is a Checkbox with Jason value"
    />
    <Checkbox
      v-model="checkbox"
      label="Ada"
      value="Ada"
    />
    <Checkbox
      v-model="checkbox"
      label="Sadie"
      value="Sadie"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
  const checkbox = ref(["Jason", "Sadie"]);
</script>
