<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Menu Components</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Menu components provide a flexible system for creating dropdown
        menus, navigation menus, and context menus. The component suite includes
        several specialized components that work together to create rich,
        interactive menu experiences.
      </p>
      <p class="mb-4">The Menu components consist of:</p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>
          <strong>Menu</strong> - The main container that manages the menu state
          and positioning
        </li>
        <li>
          <strong>MenuItem</strong> - Interactive menu options that users can
          click or select
        </li>
        <li><strong>MenuHeader</strong> - Section headers within a menu</li>
        <li>
          <strong>MenuContent</strong> - Container for arbitrary content within
          a menu
        </li>
        <li>
          <strong>MenuDivider</strong> - Visual separator between menu sections
        </li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Menu>
            <MenuItem label="Edit" />
            <MenuItem label="Duplicate" />
            <MenuDivider />
            <MenuItem label="Archive" />
            <MenuItem label="Delete" />
          </Menu>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Menu&gt;
  &lt;MenuItem label="Edit" /&gt;
  &lt;MenuItem label="Duplicate" /&gt;
  &lt;MenuDivider /&gt;
  &lt;MenuItem label="Archive" /&gt;
  &lt;MenuItem label="Delete" /&gt;
&lt;/Menu&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Menu Props</h2>
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
              <code>variant</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "standard"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Menu style variant. Options: standard, nested
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>label</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              ""
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Text for the menu trigger button
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>disabled</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the menu trigger is disabled
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>placement</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "bottom-start"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Position of the menu relative to the trigger. Options include:
              top, top-start, top-end, right, right-start, right-end, bottom,
              bottom-start, bottom-end, left, left-start, left-end
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>autoWidth</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the menu width should adjust to its content
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>open</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Controls the open state of the menu (v-model:open)
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">MenuItem Props</h2>
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
              <code>label</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              ""
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Text for the menu item
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>href</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              URL for link menu items. When provided, renders as an anchor tag
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>target</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              ""
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Target attribute for anchor menu items
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>rel</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              ""
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Rel attribute for anchor menu items
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>disabled</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the menu item is disabled
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>active</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the menu item is in active state
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>type</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "button"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Button type attribute. Options: button, submit, reset
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">MenuHeader Props</h2>
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
              <code>label</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              ""
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Text for the menu section header
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events and Slots</h2>

      <h3 class="text-lg font-medium mt-6 mb-3">MenuItem Events</h3>
      <table class="w-full text-left border-collapse mb-6">
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
              <code>click</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              (event: MouseEvent)
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when a menu item is clicked
            </td>
          </tr>
        </tbody>
      </table>

      <h3 class="text-lg font-medium mt-6 mb-3">Menu Slot Props</h3>
      <p class="mb-4">
        The default slot of the Menu component provides these props:
      </p>
      <table class="w-full text-left border-collapse mb-6">
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
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>isOpen</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Current state of the menu
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>open</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function to open the menu
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>close</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function to close the menu
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>toggle</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Function to toggle the menu's open state
            </td>
          </tr>
        </tbody>
      </table>

      <h3 class="text-lg font-medium mt-6 mb-3">Component Slots</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Component
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Slot Name
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
              Menu
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              default
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Menu items and content
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              MenuItem
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              default
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom content for menu item. Replaces the <code>label</code> prop
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              MenuHeader
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              default
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom content for menu header. Replaces the
              <code>label</code> prop
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              MenuContent
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              default
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Arbitrary content to display in the menu
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>

      <h3 class="text-lg font-medium mt-6 mb-3">Basic Menu with Items</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Menu label="Actions">
            <MenuItem
              label="Edit"
              @click="console.log('edit')"
            />
            <MenuItem
              label="Duplicate"
              @click="console.log('duplicate')"
            />
            <MenuDivider />
            <MenuItem
              label="Archive"
              @click="console.log('archive')"
            />
            <MenuItem
              label="Delete"
              disabled
              @click="console.log('delete')"
            />
          </Menu>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Menu label="Actions"&gt;
  &lt;MenuItem label="Edit" @click="handleEdit" /&gt;
  &lt;MenuItem label="Duplicate" @click="handleDuplicate" /&gt;
  &lt;MenuDivider /&gt;
  &lt;MenuItem label="Archive" @click="handleArchive" /&gt;
  &lt;MenuItem label="Delete" disabled @click="handleDelete" /&gt;
&lt;/Menu&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">
        Menu with Header and Custom Content
      </h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Menu
            label="More Options"
            auto-width
          >
            <MenuHeader label="User Account" />
            <MenuContent>
              <div class="flex items-center gap-2 py-2">
                <div
                  class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
                >
                  <span class="text-primary-600 font-medium">JD</span>
                </div>
                <div>
                  <div class="font-medium">John Doe</div>
                  <div class="text-xs text-base-500">john.doe@example.com</div>
                </div>
              </div>
            </MenuContent>
            <MenuDivider />
            <MenuItem label="Profile Settings" />
            <MenuItem label="Preferences" />
            <MenuDivider />
            <MenuItem label="Log Out" />
          </Menu>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre
          class="text-sm overflow-x-auto"
        ><code>&lt;Menu label="More Options" auto-width&gt;
  &lt;MenuHeader label="User Account" /&gt;
  &lt;MenuContent&gt;
    &lt;div class="flex items-center gap-2 py-2"&gt;
      &lt;div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"&gt;
        &lt;span class="text-primary-600 font-medium"&gt;JD&lt;/span&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;div class="font-medium"&gt;John Doe&lt;/div&gt;
        &lt;div class="text-xs text-base-500"&gt;john.doe@example.com&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/MenuContent&gt;
  &lt;MenuDivider /&gt;
  &lt;MenuItem label="Profile Settings" /&gt;
  &lt;MenuItem label="Preferences" /&gt;
  &lt;MenuDivider /&gt;
  &lt;MenuItem label="Log Out" /&gt;
&lt;/Menu&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Nested Menus</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Menu label="File">
            <MenuItem label="New" />
            <MenuItem label="Open" />
            <MenuDivider />
            <Menu
              label="Export As"
              placement="right-start"
              variant="nested"
            >
              <MenuItem label="PDF" />
              <MenuItem label="Excel" />
              <MenuItem label="CSV" />
              <MenuItem label="Image" />
            </Menu>
            <Menu
              label="Share"
              placement="right-start"
              variant="nested"
            >
              <MenuItem label="Email" />
              <MenuItem label="Link" />
              <Menu
                label="Social Media"
                placement="right-start"
                variant="nested"
              >
                <MenuItem label="Twitter" />
                <MenuItem label="LinkedIn" />
                <MenuDivider />
                <Menu
                  label="Meta"
                  placement="right-start"
                  variant="nested"
                >
                  <MenuItem label="Facebook" />
                  <MenuItem label="Instagram" />
                </Menu>
              </Menu>
            </Menu>
          </Menu>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Menu label="File"&gt;
  &lt;MenuItem label="New" /&gt;
  &lt;MenuItem label="Open" /&gt;
  &lt;MenuDivider /&gt;
  &lt;Menu
    label="Export As"
    placement="right-start"
    variant="nested"
  &gt;
    &lt;MenuItem label="PDF" /&gt;
    &lt;MenuItem label="Excel" /&gt;
    &lt;MenuItem label="CSV" /&gt;
    &lt;MenuItem label="Image" /&gt;
  &lt;/Menu&gt;
  &lt;Menu
    label="Share"
    placement="right-start"
    variant="nested"
  &gt;
    &lt;MenuItem label="Email" /&gt;
    &lt;MenuItem label="Link" /&gt;
    &lt;Menu
      label="Social Media"
      placement="right-start"
      variant="nested"
    &gt;
      &lt;MenuItem label="Twitter" /&gt;
      &lt;MenuItem label="Facebook" /&gt;
      &lt;MenuItem label="LinkedIn" /&gt;
    &lt;/Menu&gt;
  &lt;/Menu&gt;
&lt;/Menu&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Menu with Links</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Menu label="Documentation">
            <MenuItem
              label="Getting Started"
              href="https://example.com/getting-started"
              target="_blank"
              rel="noopener noreferrer"
            />
            <MenuItem
              label="API Reference"
              href="https://example.com/api"
              target="_blank"
              rel="noopener noreferrer"
            />
            <MenuItem
              label="Examples"
              href="https://example.com/examples"
              target="_blank"
              rel="noopener noreferrer"
            />
            <MenuDivider />
            <MenuItem
              label="GitHub Repository"
              href="https://github.com/example/repo"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Menu>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre
          class="text-sm overflow-x-auto"
        ><code>&lt;Menu label="Documentation"&gt;
  &lt;MenuItem
    label="Getting Started"
    href="https://example.com/getting-started"
    target="_blank"
    rel="noopener noreferrer"
  /&gt;
  &lt;MenuItem
    label="API Reference"
    href="https://example.com/api"
    target="_blank"
    rel="noopener noreferrer"
  /&gt;
  &lt;MenuItem
    label="Examples"
    href="https://example.com/examples"
    target="_blank"
    rel="noopener noreferrer"
  /&gt;
  &lt;MenuDivider /&gt;
  &lt;MenuItem
    label="GitHub Repository"
    href="https://github.com/example/repo"
    target="_blank"
    rel="noopener noreferrer"
  /&gt;
&lt;/Menu&gt;</code></pre>
      </div>
    </section>
  </div>
</template>
