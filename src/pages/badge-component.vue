<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2">
      <Badge
        v-for="kind in kinds"
        :kind="kind"
      />
    </div>
    <div class="flex gap-2">
      <Badge
        v-for="kind in kinds"
        :kind="kind"
        label="1"
      />
    </div>
    <div class="flex gap-2">
      <Badge
        v-for="kind in kinds"
        :kind="kind"
        label="999+"
      />
    </div>
    <div class="flex gap-2">
      <div class="relative">
        <Action
          label="Action button"
          kind="secondary"
        />
        <Badge
          class="absolute -top-2 -right-4"
          label="999+"
        />
      </div>
    </div>
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
