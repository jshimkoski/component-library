<template>
  <div class="grid">
    <Radio
      v-model="radio"
      label="Amy"
      value="Amy"
      descripton="This is a Radio with Amy value"
    />
    <Radio
      v-model="radio"
      label="Jason"
      value="Jason"
      disabled
      description="This is a Radio with Jason value"
    />
    <Radio
      v-model="radio"
      label="Ada"
      value="Ada"
    />
    <Radio
      v-model="radio"
      label="Sadie"
      value="Sadie"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
  const radio = ref("Jason");
</script>
