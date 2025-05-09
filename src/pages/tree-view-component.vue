<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-2">Tree View Component</h1>
    <p class="mb-6 text-base-600 dark:text-base-400">
      A hierarchical tree component for displaying nested navigation items. Parent items without specific actions allow the entire heading to function as an expand/collapse toggle.
    </p>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Basic Example</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            @node-click="onNodeClick"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Custom Icons</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="customItems"
            @node-click="onNodeClick"
          >
            <template #icon="{ item }">
              <div class="w-5 h-5 flex items-center justify-center">
                <svg
                  v-if="item.type === 'folder'"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M8 4V2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 4V2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 9H22"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <svg
                  v-else-if="item.type === 'file'"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4L20 20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20 4L4 20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  v-else
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </template>
          </TreeView>
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Default Expanded</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            :default-expanded-keys="['docs', 'components']"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Expand All</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            :default-expand-all="true"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Without Icons</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            :show-icons="false"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Right Controls</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            controls-position="right"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Right Controls (No Icons)</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="basicItems"
            controls-position="right"
            :show-icons="false"
          />
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <Card>
        <template #header>
          <h2 class="text-xl font-semibold">Clickable Parent Items</h2>
        </template>
        <div class="p-4">
          <TreeView
            :items="parentClickableItems"
            @node-click="onNodeClick"
          />
        </div>
        <div class="px-4 pb-4 text-base-600 dark:text-base-400 text-sm">
          Note: Parent items without "to" or "action" properties allow the entire heading to function as the expand/collapse toggle.
        </div>
      </Card>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Type
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Default
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              items
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Array
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              []
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Array of tree items. Each item should have an id, label and
              optional children array. Items can also have a 'to', 'href', or other action
              property to indicate clickable behavior.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              defaultExpandAll
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether to expand all tree nodes by default.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              defaultExpandedKeys
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Array
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              []
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Array of item IDs that should be expanded by default.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              showIcons
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              true
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether to display file/folder icons next to items.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              controlsPosition
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              'left'
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Position of expand/collapse controls. Can be 'left' or 'right'.
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Parameters
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node-click
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node: Object
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when a node is clicked.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node-expanded
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node: Object
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when a node is expanded.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node-collapsed
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              node: Object
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when a node is collapsed.
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              default
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom content for each tree node. Slot props: item, level.
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              icon
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom icon for each tree node. Slot props: item, level.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
  const snackbar = useSnackbar();

  // Basic tree navigation
  const basicItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "docs",
      label: "Documentation",
      children: [
        {
          id: "getting-started",
          label: "Getting Started",
        },
        {
          id: "components",
          label: "Components",
          children: [
            {
              id: "buttons",
              label: "Buttons",
            },
            {
              id: "forms",
              label: "Forms",
            },
            {
              id: "navigation",
              label: "Navigation",
            },
          ],
        },
      ],
    },
    {
      id: "examples",
      label: "Examples",
      children: [
        {
          id: "basic",
          label: "Basic",
        },
        {
          id: "advanced",
          label: "Advanced",
        },
      ],
    },
    {
      id: "contact",
      label: "Contact Us",
    },
  ];

  // Custom items with type
  const customItems = [
    {
      id: "project",
      label: "Project",
      type: "folder",
      children: [
        {
          id: "src",
          label: "Source Code",
          type: "folder",
          children: [
            {
              id: "index",
              label: "index.js",
              type: "file",
            },
            {
              id: "styles",
              label: "styles.css",
              type: "file",
            },
          ],
        },
        {
          id: "tests",
          label: "Tests",
          type: "folder",
          children: [
            {
              id: "unit",
              label: "unit.js",
              type: "file",
            },
          ],
        },
        {
          id: "readme",
          label: "README.md",
          type: "file",
        },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      type: "default",
    },
  ];
  
  // Items showing clickable parent headings
  const parentClickableItems = [
    {
      id: "components",
      label: "Components",
      // No "to" property, so entire heading is clickable to expand/collapse
      children: [
        {
          id: "ui-components",
          label: "UI Components",
          // No "to" property, so entire heading is clickable to expand/collapse
          children: [
            {
              id: "button",
              label: "Button",
              to: "button-page" // Has "to" property, so clicking navigates
            },
            {
              id: "form",
              label: "Form",
              to: "form-page" // Has "to" property, so clicking navigates
            }
          ]
        },
        {
          id: "layout-components",
          label: "Layout Components",
          // No "to" property, so entire heading is clickable to expand/collapse
          children: [
            {
              id: "grid",
              label: "Grid",
              to: "grid-page" // Has "to" property, so clicking navigates
            }
          ]
        }
      ]
    },
    {
      id: "utilities",
      label: "Utilities",
      to: "utilities-page" // Has "to" property, so clicking navigates, separate expand button shown
      // This item demonstrates a parent with a navigation action
    }
  ];

  function onNodeClick(node: TreeItem) {
    snackbar.info(`Clicked on: ${node.label}`, {
      duration: 2000,
    });
  }
</script>
