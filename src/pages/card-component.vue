<template>
  <div class="grid gap-6">
    <Card
      label="Card label"
      description="Card description"
      href="https://google.com"
      target="_blank"
      variant="outlined"
      action-label="Perform action"
    >
      <template #content>
        <p>Outlined (default) Card Content</p>
      </template>
    </Card>
    <Card
      label="Card label"
      description="Card description"
      href="https://google.com"
      target="_blank"
      variant="filled"
      action-label="Perform action"
    >
      <template #content>
        <p>Filled Card Content</p>
      </template>
    </Card>
    <Card
      label="Card label"
      description="Card description"
      href="https://google.com"
      target="_blank"
      variant="elevated"
      action-label="Perform action"
    >
      <template #content>
        <p>Elevated Card Content</p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts"></script>
