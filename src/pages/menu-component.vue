<template>
  <div class="flex flex-wrap items-center gap-1">
    <Menu auto-width>
      <MenuHeader label="Menu Header" />
      <MenuContent>
        <p>This is just arbitrary content inside a menu.</p>
      </MenuContent>
      <MenuDivider />
      <MenuItem href="#">Home page</MenuItem>
      <MenuItem disabled>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
    <Menu label="Another Menu">
      <MenuItem>Item 1</MenuItem>
      <MenuDivider />
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
    <Menu
      label="Another Menu"
      disabled
    >
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  </div>
</template>

<script setup lang="ts"></script>
