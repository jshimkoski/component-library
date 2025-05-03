<template>
  <DocsLayout>
    <template #header>
      <div class="flex items-center space-x-3">
        <span class="font-medium text-xl">AJS Design System</span>
      </div>
      <nav class="hidden md:flex gap-2">
        <RouterLink
          v-slot="{ href, isExactActive }"
          to="/"
          custom
        >
          <Action
            :href="href"
            :active="isExactActive"
            variant="ghost"
            label="Home"
          />
        </RouterLink>
      </nav>
    </template>
    <template #left-bar>
      <div class="flex items-center space-x-3 mb-4">
        <span
          class="font-bold text-xs uppercase text-neutral-600 dark:text-neutral-400"
          >Components</span
        >
      </div>
      <nav class="space-y-2">
        <RouterLink
          v-for="c in components"
          v-slot="{ href, isExactActive }"
          :to="c.to"
          custom
        >
          <Action
            :href="href"
            :active="isExactActive"
            :label="c.label"
            active-kind="primary"
            variant="ghost"
            class="w-full"
          />
        </RouterLink>
      </nav>
    </template>
    <template #content>
      <RouterView />
    </template>
    <template #right-bar>
      <nav>
        <div
          class="font-bold text-xs uppercase text-neutral-600 dark:text-neutral-400 mb-4"
        >
          On this page
        </div>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="#getting-started"
              class="block px-2 py-1 rounded hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >Getting Started</a
            >
          </li>
        </ul>
      </nav>
    </template>
    <template #footer>
      <span class="text-neutral-500">© 2025 AJS Communications</span>
    </template>
  </DocsLayout>
</template>

<script setup lang="ts">
  const components = [
    { to: "action-component", label: "Action" },
    { to: "avatar-component", label: "Avatar" },
    { to: "badge-component", label: "Badge" },
    { to: "card-component", label: "Card" },
    // // { to: "carousel-component", label: "Carousel" },
    { to: "checkbox-component", label: "Checkbox" },
    { to: "checkboxgroup-component", label: "Checkbox Group" },
    { to: "chip-component", label: "Chip" },
    // // // { to: "datepicker-component", label: "Datepicker" },
    { to: "dialog-component", label: "Dialog" },
    // // // { to: "docslayout-component", label: "Docs Layout" },
    // // // { to: "list-component", label: "List" },
    { to: "menu-component", label: "Menu" },
    { to: "progress-component", label: "Progress" },
    { to: "prose-component", label: "Prose" },
    { to: "radio-component", label: "Radio" },
    { to: "radiogroup-component", label: "Radio Group" },
    { to: "select-component", label: "Select" },
    // { to: "sheet-component", label: "Sheet" },
    // { to: "slider-component", label: "Slider" },
    // { to: "snackbar-component", label: "Snackbar" },
    { to: "switch-component", label: "Switch" },
    // { to: "table-component", label: "Table" },
    // { to: "tabs-component", label: "Tabs" },
    { to: "texteditor-component", label: "Text Editor" },
    { to: "textfield-component", label: "Text Field" },
    { to: "tooltip-component", label: "Tooltip" },
  ];
</script>
