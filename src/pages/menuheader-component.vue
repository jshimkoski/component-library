<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">MenuHeader</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The MenuHeader component provides section headers within menus to organize and categorize menu items. It renders as a non-interactive text label that helps users understand the grouping of related menu options.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="User Account">
        <MenuHeader label="Account Settings" />
        <MenuItem label="Profile" />
        <MenuItem label="Preferences" />
        <MenuDivider />
        <MenuHeader label="Actions" />
        <MenuItem label="Log Out" />
        </Menu>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="User Account"&gt;
    &lt;MenuHeader label="Account Settings" /&gt;
    &lt;MenuItem label="Profile" /&gt;
    &lt;MenuItem label="Preferences" /&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuHeader label="Actions" /&gt;
    &lt;MenuItem label="Log Out" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
            <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content for the menu header.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
            <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>default</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the menu header. Overrides the label prop.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Headers with Custom Content</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="Developer Tools">
        <MenuHeader>
        <Icon icon="material-symbols:code" class="text-primary-500" />
        Development
        </MenuHeader>
        <MenuItem label="Code Editor" />
        <MenuItem label="Terminal" />
        <MenuDivider />
        <MenuHeader>
        <Icon icon="material-symbols:bug-report" class="text-warning-500" />
        Debugging
        </MenuHeader>
        <MenuItem label="Debugger" />
        <MenuItem label="Inspector" />
        </Menu>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Developer Tools"&gt;
    &lt;MenuHeader&gt;
      &lt;Icon icon="material-symbols:code" class="text-primary-500" /&gt;
      Development
    &lt;/MenuHeader&gt;
    &lt;MenuItem label="Code Editor" /&gt;
    &lt;MenuItem label="Terminal" /&gt;

    &lt;MenuDivider /&gt;

    &lt;MenuHeader&gt;
      &lt;Icon icon="material-symbols:bug-report" class="text-warning-500" /&gt;
        Debugging
    &lt;/MenuHeader&gt;
    &lt;MenuItem label="Debugger" /&gt;
    &lt;MenuItem label="Inspector" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Multi-level Organization</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="File Manager" auto-width>
        <MenuHeader label="Recent Files" />
        <MenuItem label="document.pdf" />
        <MenuItem label="spreadsheet.xlsx" />
        <MenuItem label="image.png" />
        <MenuDivider />
        <MenuHeader label="Quick Actions" />
        <MenuItem label="New Folder" />
        <MenuItem label="Upload File" />
        <MenuItem label="Share Link" />
        <MenuDivider />
        <MenuHeader label="View Options" />
        <MenuItem label="List View" />
        <MenuItem label="Grid View" />
        <MenuItem label="Details" />
        </Menu>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="File Manager" auto-width&gt;
    &lt;MenuHeader label="Recent Files" /&gt;
    &lt;MenuItem label="document.pdf" /&gt;
    &lt;MenuItem label="spreadsheet.xlsx" /&gt;
    &lt;MenuItem label="image.png" /&gt;

    &lt;MenuDivider /&gt;

    &lt;MenuHeader label="Quick Actions" /&gt;
    &lt;MenuItem label="New Folder" /&gt;
    &lt;MenuItem label="Upload File" /&gt;
    &lt;MenuItem label="Share Link" /&gt;

    &lt;MenuDivider /&gt;

    &lt;MenuHeader label="View Options" /&gt;
    &lt;MenuItem label="List View" /&gt;
    &lt;MenuItem label="Grid View" /&gt;
    &lt;MenuItem label="Details" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use MenuHeader to group related menu items logically</li>
          <li>Keep header labels short and descriptive</li>
          <li>Use sentence case for headers (e.g., "Account settings" not "Account Settings")</li>
          <li>Follow headers with relevant MenuItems or MenuContent</li>
          <li>Use MenuDivider to separate different header sections</li>
          <li>Consider using icons in custom header content for better visual hierarchy</li>
          <li>Don't use too many headers in a single menu as it can become cluttered</li>
          <li>Headers should be informational only - they are not interactive elements</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Contextual Menu Organization</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Text Editor"&gt;
    &lt;MenuHeader label="Edit" /&gt;
    &lt;MenuItem label="Cut" @click="cut" /&gt;
    &lt;MenuItem label="Copy" @click="copy" /&gt;
    &lt;MenuItem label="Paste" @click="paste" /&gt;

    &lt;MenuDivider /&gt;

    &lt;MenuHeader label="Format" /&gt;
    &lt;MenuItem label="Bold" @click="toggleBold" /&gt;
    &lt;MenuItem label="Italic" @click="toggleItalic" /&gt;
    &lt;MenuItem label="Underline" @click="toggleUnderline" /&gt;

    &lt;MenuDivider /&gt;

    &lt;MenuHeader label="Insert" /&gt;
    &lt;MenuItem label="Link" @click="insertLink" /&gt;
    &lt;MenuItem label="Image" @click="insertImage" /&gt;
    &lt;MenuItem label="Table" @click="insertTable" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Status-based Headers</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Notifications" auto-width&gt;
    &lt;MenuHeader v-if="unreadCount &gt; 0"&gt;
      &lt;span&gt;Unread&lt;/span&gt;
      &lt;Badge :label="unreadCount" kind="primary" size="xs" /&gt;
    &lt;/MenuHeader&gt;
    
    &lt;MenuItem 
      v-for="notification in unreadNotifications" 
      :key="notification.id"
      @click="markAsRead(notification.id)"
    &gt;
      &#123;&#123; notification.title &#125;&#125;
      &#123;&#123; notification.message &#125;&#125;
    &lt;/MenuItem&gt;
    
    &lt;MenuDivider v-if="unreadCount &gt; 0 &amp;&amp; readNotifications.length &gt; 0" /&gt;
    
    &lt;MenuHeader v-if="readNotifications.length &gt; 0" label="Earlier" /&gt;
    &lt;MenuItem 
      v-for="notification in readNotifications" 
      :key="notification.id"
    &gt;
      &#123;&#123; notification.title &#125;&#125;
    &lt;/MenuItem&gt;
  &lt;/Menu&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Header with Action</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Bookmarks" auto-width&gt;
    &lt;MenuHeader&gt;
      &lt;span&gt;Recent Bookmarks&lt;/span&gt;
        &lt;Action 
          size="xs" 
          variant="ghost" 
          @click="clearRecent"
          class="text-xs"
        &gt;
          Clear
        &lt;/Action&gt;
    &lt;/MenuHeader&gt;

    &lt;MenuItem label="Homepage" href="/" /&gt;
    &lt;MenuItem label="Documentation" href="/docs" /&gt;
    &lt;MenuItem label="GitHub" href="https://github.com" target="_blank" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';
import MenuDivider from '../components/MenuDivider.vue';
import { Icon } from '@iconify/vue';

</script>