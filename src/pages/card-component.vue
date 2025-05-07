<template>
  <div class="grid grid-cols-2 gap-6">
    <Card
      headline="Headline"
      subhead="Subhead"
      text="Explain more about the topic shown in the headline and subhead through supporting text."
    />
    <Card
      headline="Card headline"
      subhead="Card subhead"
      href="https://google.com"
      target="_blank"
      variant="outlined"
      action-label="Perform action"
    >
      <p>Outlined (default) Card Content</p>
    </Card>
    <Card
      headline="Card headline"
      subhead="Card subhead"
      href="https://google.com"
      target="_blank"
      variant="filled"
      action-label="Perform action"
    >
      <p>Filled Card Content</p>
    </Card>
    <Card
      headline="Card headline"
      subhead="Card subhead"
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
