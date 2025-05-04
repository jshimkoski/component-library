<template>
  <div class="grid grid-cols-2 gap-6">
    <Tooltip text="Hello world">
      <Chip
        label="Show a tooltip"
        kind="secondary"
      />
    </Tooltip>
    <Tooltip type="rich">
      <template #text>
        <div>
          <p class="text-base-600 dark:text-base-400 font-semibold text-sm">
            Hello world
          </p>
          <p>This is a rich content tooltip.</p>
        </div>
      </template>
      <Chip
        label="Show a rich tooltip"
        kind="secondary"
      />
    </Tooltip>
  </div>
</template>

<script setup lang="ts"></script>
