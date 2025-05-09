<template>
  <div>
    <Prose>
      <h1>Navigation</h1>
      <p class="mb-4">
        The Navigation components provide a flexible system for creating
        responsive navigation menus, supporting both regular dropdown menus and
        mega menus. The component suite includes specialized components that
        work together to create comprehensive navigation experiences.
      </p>

      <h2>Basic Usage</h2>
      <p>
        This example shows a basic navigation bar with regular navigation items
        and a dropdown menu.
      </p>
    </Prose>

    <Navigation variant="secondary">
      <template #logo>
        <div class="text-xl font-bold">Logo</div>
      </template>

      <NavigationItem
        label="Home"
        href="#"
        active
      />
      <NavigationItem
        label="About"
        href="#"
      />
      <NavigationItem
        label="Services"
        :hasChildren="true"
      >
        <template #dropdown>
          <MenuItem label="Web Design" />
          <MenuItem label="App Development" />
          <MenuItem label="Consulting" />
          <MenuDivider />
          <MenuItem label="View All Services" />
        </template>
      </NavigationItem>
      <NavigationItem
        label="Contact"
        href="#"
      />

      <template #right>
        <Action
          variant="ghost"
          size="sm"
          >Login</Action
        >
        <Action
          kind="primary"
          size="sm"
          >Sign Up</Action
        >
      </template>
    </Navigation>

    <Prose>
      <h2>Navigation with Mega Menu</h2>
      <p>
        This example demonstrates a navigation bar with a mega menu. The mega
        menu provides a grid layout that can display more complex navigation
        options.
      </p>
    </Prose>

    <Navigation variant="primary">
      <template #logo>
        <div class="text-xl font-bold">Logo</div>
      </template>

      <NavigationItem
        label="Home"
        href="#"
        active
      />
      <NavigationItem
        label="Products"
        href="#"
      />

      <MegaMenu
        label="Solutions"
        columns="3"
        width="lg"
      >
        <div>
          <h3 class="font-bold mb-2">Development</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="hover:underline"
                >Web Development</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Mobile Development</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Backend Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >API Integration</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-2">Design</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="hover:underline"
                >UI/UX Design</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Brand Identity</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Prototyping</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Design Systems</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-2">Consulting</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="hover:underline"
                >Digital Strategy</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Technology Audit</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Process Optimization</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:underline"
                >Performance Analysis</a
              >
            </li>
          </ul>
        </div>
        <template #footer>
          <div class="flex justify-between items-center">
            <p class="text-sm">Explore our comprehensive solution catalog</p>
            <Action
              kind="primary"
              size="sm"
              >View All Solutions</Action
            >
          </div>
        </template>
      </MegaMenu>

      <NavigationItem
        label="Resources"
        :hasChildren="true"
      >
        <template #dropdown>
          <MenuItem label="Documentation" />
          <MenuItem label="Tutorials" />
          <MenuItem label="Blog" />
        </template>
      </NavigationItem>

      <NavigationItem
        label="Contact"
        href="#"
      />

      <template #right>
        <Action
          variant="ghost"
          size="sm"
          >Login</Action
        >
        <Action
          kind="primary"
          size="sm"
          >Sign Up</Action
        >
      </template>
    </Navigation>

    <Prose>
      <h2>Responsive Navigation</h2>
      <p>
        The Navigation component is fully responsive by default. On smaller
        screens, it transforms into a mobile-friendly menu with a hamburger
        toggle button.
      </p>
    </Prose>

    <Navigation
      variant="subtle"
      position="sticky"
      items-alignment="space-between"
    >
      <template #logo>
        <div class="text-xl font-bold">Logo</div>
      </template>

      <NavigationItem
        label="Home"
        href="#"
        active
      />
      <NavigationItem
        label="About"
        href="#"
      />
      <NavigationItem
        label="Products"
        href="#"
      />
      <NavigationItem
        label="Services"
        :hasChildren="true"
      >
        <template #dropdown>
          <MenuItem label="Consulting" />
          <MenuItem label="Training" />
          <MenuItem label="Support" />
        </template>
      </NavigationItem>
      <NavigationItem
        label="Contact"
        href="#"
      />

      <template #right>
        <Action
          kind="primary"
          size="sm"
          >Get Started</Action
        >
      </template>
    </Navigation>

    <Prose>
      <h2>API Reference</h2>

      <h3>Navigation Component</h3>
      <p>The main container for navigation elements.</p>

      <h4>Props</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Type</th>
              <th class="px-4 py-2 text-left">Default</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">variant</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'primary'</td>
              <td class="px-4 py-2">
                The visual style of the navigation. Options: 'primary',
                'secondary', 'subtle'
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">responsive</td>
              <td class="px-4 py-2">Boolean</td>
              <td class="px-4 py-2">true</td>
              <td class="px-4 py-2">
                Whether the navigation should adapt to different screen sizes
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">position</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'static'</td>
              <td class="px-4 py-2">
                Position of the navigation. Options: 'static', 'sticky', 'fixed'
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">itemsSpacing</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'normal'</td>
              <td class="px-4 py-2">
                Spacing between navigation items. Options: 'normal', 'wide',
                'compact'
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">itemsAlignment</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'left'</td>
              <td class="px-4 py-2">
                Alignment of navigation items. Options: 'left', 'center',
                'right', 'space-between', 'space-around'
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Slots</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">default</td>
              <td class="px-4 py-2">Main content area for navigation items</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">logo</td>
              <td class="px-4 py-2">Area for branding or logo</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">right</td>
              <td class="px-4 py-2">
                Area for right-aligned content like action buttons
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>NavigationItem Component</h3>
      <p>Used for individual navigation links or dropdown triggers.</p>

      <h4>Props</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Type</th>
              <th class="px-4 py-2 text-left">Default</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">label</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">''</td>
              <td class="px-4 py-2">Text label for the navigation item</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">href</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">undefined</td>
              <td class="px-4 py-2">URL for the navigation item link</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">target</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">''</td>
              <td class="px-4 py-2">Target attribute for the link</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">rel</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">''</td>
              <td class="px-4 py-2">Rel attribute for the link</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">active</td>
              <td class="px-4 py-2">Boolean</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">
                Whether the navigation item is currently active
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">disabled</td>
              <td class="px-4 py-2">Boolean</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Whether the navigation item is disabled</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">hasChildren</td>
              <td class="px-4 py-2">Boolean</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">
                Whether the navigation item has a dropdown menu
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">activeIndicator</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'underline'</td>
              <td class="px-4 py-2">
                Style of the active indicator. Options: 'none', 'underline',
                'background'
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">placement</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'bottom-start'</td>
              <td class="px-4 py-2">Placement of the dropdown menu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Slots</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">default</td>
              <td class="px-4 py-2">
                Content of the navigation item (replaces label)
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">trigger</td>
              <td class="px-4 py-2">Custom content for dropdown trigger</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">dropdown</td>
              <td class="px-4 py-2">Content of the dropdown menu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>MegaMenu Component</h3>
      <p>Used for complex navigation dropdowns with multiple columns.</p>

      <h4>Props</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Type</th>
              <th class="px-4 py-2 text-left">Default</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">label</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">''</td>
              <td class="px-4 py-2">Text label for the mega menu trigger</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">disabled</td>
              <td class="px-4 py-2">Boolean</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Whether the mega menu is disabled</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">columns</td>
              <td class="px-4 py-2">Number</td>
              <td class="px-4 py-2">2</td>
              <td class="px-4 py-2">
                Number of columns in the mega menu (1-4)
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">width</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'lg'</td>
              <td class="px-4 py-2">
                Width of the mega menu. Options: 'auto', 'md', 'lg', 'xl',
                'full'
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">placement</td>
              <td class="px-4 py-2">String</td>
              <td class="px-4 py-2">'bottom-start'</td>
              <td class="px-4 py-2">Placement of the mega menu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Slots</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">default</td>
              <td class="px-4 py-2">
                Main content area for the mega menu (columns)
              </td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">trigger</td>
              <td class="px-4 py-2">Custom content for mega menu trigger</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">footer</td>
              <td class="px-4 py-2">Footer area of the mega menu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Events</h4>
      <div class="overflow-visible">
        <table class="w-full border-collapse my-4">
          <thead
            class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
          >
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-200 dark:divide-base-800">
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">open</td>
              <td class="px-4 py-2">Emitted when the mega menu is opened</td>
            </tr>
            <tr class="hover:bg-base-50 dark:hover:bg-base-900">
              <td class="px-4 py-2">close</td>
              <td class="px-4 py-2">Emitted when the mega menu is closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Prose>
  </div>
</template>

<script setup lang="ts">
  import {
    Navigation,
    NavigationItem,
    MegaMenu,
  } from "../components/navigation";
  import MenuItem from "../components/MenuItem.vue";
  import MenuDivider from "../components/MenuDivider.vue";
  import Action from "../components/Action.vue";

  import Prose from "../components/Prose.vue";
</script>
