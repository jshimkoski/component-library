<template>
  <div class="grid grid-cols-2 gap-6">
    <Tooltip text="Hello world">
      <p class="p-8 bg-red-400">Show a tooltip</p>
    </Tooltip>
    <Tooltip type="rich">
      <template #text>
        <div>
          <p class="text-neutral-500 font-semibold text-sm">Hello world</p>
          <p>This is a rich content tooltip.</p>
        </div>
      </template>
      <p class="p-8 bg-red-400">Show a rich tooltip</p>
    </Tooltip>
  </div>
</template>

<script setup lang="ts"></script>
