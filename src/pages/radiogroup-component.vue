<template>
  <RadioGroup
    v-model="radiogroup"
    :options="radioogroupoptions"
    label="Radio Group Label"
    description="This is a radio group"
  />
</template>

<script setup lang="ts">
  const radiogroup = ref("Jason");
  const radioogroupoptions = ref([
    { label: "Jason", value: "Jason", description: "This is a description." },
    { label: "Amy", value: "Amy", disabled: true },
    { label: "Ada", value: "Ada" },
    { label: "Sadie", value: "Sadie" },
  ]);
</script>
