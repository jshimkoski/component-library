<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">CheckboxGroup Component</h1>
    
    <p class="mb-6">
      The CheckboxGroup component documentation has been consolidated with the Checkbox component documentation.
    </p>
    
    <div class="mb-10">
      <Action 
        label="Go to Checkbox Documentation" 
        kind="primary"
        href="/checkbox-component#checkbox-group"
      />
    </div>
    
    <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
      <CheckboxGroup
        v-model="checkboxgroup"
        :options="checkboxgroupoptions"
        label="Checkbox Group Example"
        description="This is a preview of the CheckboxGroup component"
      />
    </div>
  </div>
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