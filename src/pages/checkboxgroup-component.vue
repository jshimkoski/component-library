<template>
  <CheckboxGroup
    v-model="checkboxgroup"
    :options="checkboxgroupoptions"
    label="Checkbox Group Label"
    description="This is a checkbox group"
  />
</template>

<script setup lang="ts">
  const checkboxgroup = ref(["Jason"]);
  const checkboxgroupoptions = ref([
    { label: "Jason", value: "Jason", description: "This is a description." },
    { label: "Amy", value: "Amy", disabled: true },
    { label: "Ada", value: "Ada" },
    { label: "Sadie", value: "Sadie" },
  ]);
</script>
