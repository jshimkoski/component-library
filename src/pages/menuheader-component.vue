<template>
  <div class="content">
    <Prose>
      <h1>Menu Header</h1>
      <h2>Overview</h2>
      <p>The MenuHeader component provides section headers within menus to organize and categorize menu items. It renders as a non-interactive text label that helps users understand the grouping of related menu options.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="User Account"&gt;
    &lt;MenuHeader label="Account Settings" /&gt;
    &lt;MenuItem label="Profile" /&gt;
    &lt;MenuItem label="Preferences" /&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuHeader label="Actions" /&gt;
    &lt;MenuItem label="Log Out" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content for the menu header.</td>
          </tr>
        </tbody>
      </table>
      <h2>Slots</h2>
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
      <h2>Headers with Custom Content</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Multi-level Organization</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Best Practices</h2>
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
      <h2>Examples</h2>
      <h3>Contextual Menu Organization</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h3>Status-based Headers</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
  &lt;/Menu&gt;
</code></pre>
      <h3>Header with Action</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>