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
      <p>Outlined (default) Card Content</p>
    </Card>
    <Card
      label="Card label"
      description="Card description"
      href="https://google.com"
      target="_blank"
      variant="filled"
      action-label="Perform action"
    >
      <p>Filled Card Content</p>
    </Card>
    <Card
      label="Card label"
      description="Card description"
      href="https://google.com"
      target="_blank"
      variant="elevated"
      action-label="Perform action"
    >
      <p>Elevated Card Content</p>
    </Card>
  </div>
</template>

<script setup lang="ts"></script>
