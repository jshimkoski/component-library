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
          class="font-bold text-xs uppercase text-base-600 dark:text-base-400"
          >Components</span
        >
      </div>
      <nav>
        <TreeView
          :items="navigationItems"
          :show-icons="false"
          :active-item-id="activeItemId"
          :default-expanded-keys="defaultExpandedKeys"
          @node-click="handleNavigation"
        />
      </nav>
    </template>
    <template #default>
      <RouterView />
    </template>
    <template #right-bar>
      <nav>
        <div
          class="font-bold text-xs uppercase text-base-600 dark:text-base-400 mb-4"
        >
          On this page
        </div>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="#getting-started"
              class="block px-2 py-1 rounded hover:bg-base-50 dark:hover:bg-base-900"
              >Getting Started</a
            >
          </li>
        </ul>
      </nav>
    </template>
    <template #footer>
      <div class="text-center">
        <span class="text-base-600 dark:text-base-400"
          >© 2025 AJS Communications</span
        >
      </div>
    </template>
  </DocsLayout>
</template>

<script setup lang="ts">
  import { ref, computed } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import TreeView from "./components/TreeView.vue";

  const router = useRouter();
  const route = useRoute();

  // Original flat list of components for reference
  const components = [
    { to: "action-component", label: "Action" },
    { to: "avatar-component", label: "Avatar" },
    { to: "badge-component", label: "Badge" },
    { to: "card-component", label: "Card" },
    // // { to: "carousel-component", label: "Carousel" },
    { to: "checkboxgroup-component", label: "Checkbox Group" },
    { to: "chip-component", label: "Chip" },
    { to: "datepicker-component", label: "Datepicker" },
    { to: "dialog-component", label: "Dialog" },
    // { to: "divider-component", label: "Divider" },
    // // // { to: "docslayout-component", label: "Docs Layout" },
    // // // { to: "list-component", label: "List" },
    { to: "menu-component", label: "Menu" },
    // { to: "paginator-component", label: "Paginator" },
    { to: "progress-component", label: "Progress" },
    { to: "prose-component", label: "Prose" },
    { to: "radiogroup-component", label: "Radio Group" },
    { to: "select-component", label: "Select" },
    { to: "sheet-component", label: "Sheet" },
    { to: "slider-component", label: "Slider" },
    { to: "snackbar-component", label: "Snackbar" },
    { to: "switch-component", label: "Switch" },
    { to: "table-component", label: "Table" },
    { to: "tabs-component", label: "Tabs" },
    { to: "texteditor-component", label: "Text Editor" },
    { to: "textfield-component", label: "Text Field" },
    { to: "tooltip-component", label: "Tooltip" },
    { to: "tree-view-component", label: "Tree View" },
  ];

  // Organized navigation items for TreeView
  const navigationItems = [
    {
      id: "home",
      label: "Home",
      to: "/",
    },
    {
      id: "inputs",
      label: "Input Components",
      // No 'to' property, so entire heading is clickable for expand/collapse
      children: [
        { id: "action-component", label: "Action", to: "action-component" },
        {
          id: "checkbox-group",
          label: "Checkbox Group",
          to: "checkboxgroup-component",
        },
        { id: "datepicker", label: "Datepicker", to: "datepicker-component" },
        { id: "radio-group", label: "Radio Group", to: "radiogroup-component" },
        { id: "select", label: "Select", to: "select-component" },
        { id: "slider", label: "Slider", to: "slider-component" },
        { id: "switch", label: "Switch", to: "switch-component" },
        { id: "text-editor", label: "Text Editor", to: "texteditor-component" },
        { id: "text-field", label: "Text Field", to: "textfield-component" },
      ],
    },
    {
      id: "display",
      label: "Display Components",
      // No 'to' property, so entire heading is clickable for expand/collapse
      children: [
        { id: "avatar", label: "Avatar", to: "avatar-component" },
        { id: "badge", label: "Badge", to: "badge-component" },
        { id: "card", label: "Card", to: "card-component" },
        { id: "chip", label: "Chip", to: "chip-component" },
        { id: "progress", label: "Progress", to: "progress-component" },
        { id: "prose", label: "Prose", to: "prose-component" },
        { id: "table", label: "Table", to: "table-component" },
      ],
    },
    {
      id: "navigation",
      label: "Navigation Components",
      // No 'to' property, so entire heading is clickable for expand/collapse
      children: [
        { id: "menu", label: "Menu", to: "menu-component" },
        { id: "tabs", label: "Tabs", to: "tabs-component" },
        { id: "tree-view", label: "Tree View", to: "tree-view-component" },
      ],
    },
    {
      id: "overlay",
      label: "Overlay Components",
      // No 'to' property, so entire heading is clickable for expand/collapse
      children: [
        { id: "dialog", label: "Dialog", to: "dialog-component" },
        { id: "sheet", label: "Sheet", to: "sheet-component" },
        { id: "snackbar", label: "Snackbar", to: "snackbar-component" },
        { id: "tooltip", label: "Tooltip", to: "tooltip-component" },
      ],
    },
  ];

  // Default expanded categories for navigation
  const defaultExpandedKeys = ref([
    "inputs",
    "display",
    "navigation",
    "overlay",
  ]);

  // Get current active item ID based on route
  const activeItemId = computed(() => {
    // Get current path
    const currentPath = route.path;

    // Handle home route
    if (currentPath === "/") {
      return "home";
    }

    // Find the matching navigation item
    const findActiveItem = (items) => {
      for (const item of items) {
        // Check if route matches the component path
        if (item.to && "/" + item.to === currentPath) {
          return item.id;
        }
        // Recursively check children
        if (item.children) {
          const childResult = findActiveItem(item.children);
          if (childResult) return childResult;
        }
      }
      return null;
    };

    return findActiveItem(navigationItems);
  });

  // Handle navigation when tree node is clicked
  function handleNavigation(node) {
    if (node.to) {
      // Check if the path already starts with a slash
      const path = node.to.startsWith("/") ? node.to : "/" + node.to;
      router.push(path);
    }
  }
</script>
