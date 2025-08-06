<template>
  <div class="content">
    <Prose>
      <h1>Menu Divider</h1>
      <h2>Overview</h2>
      <p>The MenuDivider component provides a visual separator between sections of menu items. It renders as a horizontal line that helps organize menu content by creating clear visual breaks between related groups of items.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Edit Menu"&gt;
    &lt;MenuItem label="Cut" /&gt;
    &lt;MenuItem label="Copy" /&gt;
    &lt;MenuItem label="Paste" /&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Select All" /&gt;
    &lt;MenuItem label="Find" /&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Preferences" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Props</h2>
      <p>MenuDivider doesn't accept any props - it's a simple visual separator.</p>
      <h2>Slots</h2>
      <p>MenuDivider doesn't have any slots - it renders as a simple horizontal line.</p>
      <h2>Separating Different Action Types</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="File Operations"&gt;
    &lt;!-- Document creation/opening --&gt;
    &lt;MenuItem label="New Document" /&gt;
    &lt;MenuItem label="Open" /&gt;
    &lt;MenuItem label="Recent Files" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Saving operations --&gt;
    &lt;MenuItem label="Save" /&gt;
    &lt;MenuItem label="Save As" /&gt;
    &lt;MenuItem label="Export" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Printing operations --&gt;
    &lt;MenuItem label="Print" /&gt;
    &lt;MenuItem label="Print Preview" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Application control --&gt;
    &lt;MenuItem label="Close" /&gt;
    &lt;MenuItem label="Exit" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use MenuDivider to separate logically related groups of menu items</li>
        <li>Place dividers between different types of actions (e.g., creation vs. deletion actions)</li>
        <li>Use sparingly - too many dividers can make menus feel fragmented</li>
        <li>Combine with MenuHeader when you need both visual separation and labeled sections</li>
        <li>Always place dividers between MenuItems, MenuContent, or MenuHeader components</li>
        <li>Avoid placing dividers at the beginning or end of menus</li>
        <li>Group similar or related actions together before adding a divider</li>
        <li>Consider the visual weight - multiple consecutive dividers should be avoided</li>
      </ul>
      <h2>Examples</h2>
      <h3>Context Menu with Action Groups</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Item Actions"&gt;
    &lt;!-- View actions --&gt;
    &lt;MenuItem label="View Details" /&gt;
    &lt;MenuItem label="Preview" /&gt;
    &lt;MenuItem label="Open in New Tab" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Edit actions --&gt;
    &lt;MenuItem label="Edit" /&gt;
    &lt;MenuItem label="Rename" /&gt;
    &lt;MenuItem label="Duplicate" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Organization actions --&gt;
    &lt;MenuItem label="Move to Folder" /&gt;
    &lt;MenuItem label="Add to Collection" /&gt;
    &lt;MenuItem label="Share" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Destructive actions --&gt;
    &lt;MenuItem label="Archive" /&gt;
    &lt;MenuItem label="Delete" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h3>Settings Menu with Categories</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Settings" auto-width&gt;
    &lt;!-- Appearance --&gt;
    &lt;MenuHeader label="Appearance" /&gt;
    &lt;MenuItem label="Theme" /&gt;
    &lt;MenuItem label="Font Size" /&gt;
    &lt;MenuItem label="Layout" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Behavior --&gt;
    &lt;MenuHeader label="Behavior" /&gt;
    &lt;MenuItem label="Auto-save" /&gt;
    &lt;MenuItem label="Notifications" /&gt;
    &lt;MenuItem label="Keyboard Shortcuts" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Advanced --&gt;
    &lt;MenuHeader label="Advanced" /&gt;
    &lt;MenuItem label="Developer Tools" /&gt;
    &lt;MenuItem label="Export Settings" /&gt;
    &lt;MenuItem label="Reset to Defaults" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h3>Data Management Menu</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Data Options"&gt;
    &lt;!-- Import/Export --&gt;
    &lt;MenuItem label="Import Data" /&gt;
    &lt;MenuItem label="Export to CSV" /&gt;
    &lt;MenuItem label="Export to PDF" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Filtering --&gt;
    &lt;MenuItem label="Filter Data" /&gt;
    &lt;MenuItem label="Sort Options" /&gt;
    &lt;MenuItem label="Group By" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Bulk Operations --&gt;
    &lt;MenuItem label="Select All" /&gt;
    &lt;MenuItem label="Clear Selection" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Danger Zone --&gt;
    &lt;MenuItem label="Clear All Data" /&gt;
    &lt;MenuItem label="Reset View" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h3>Navigation Menu with Status</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Navigation"&gt;
    &lt;!-- Main pages --&gt;
    &lt;MenuItem label="Dashboard" active /&gt;
    &lt;MenuItem label="Projects" /&gt;
    &lt;MenuItem label="Tasks" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Secondary pages --&gt;
    &lt;MenuItem label="Reports" /&gt;
    &lt;MenuItem label="Analytics" /&gt;
    &lt;MenuDivider /&gt;

    &lt;!-- Admin (conditional) --&gt;
    &lt;MenuItem v-if="isAdmin" label="User Management" /&gt;
    &lt;MenuItem v-if="isAdmin" label="System Settings" /&gt;
    &lt;MenuDivider v-if="isAdmin" /&gt;

    &lt;!-- Account --&gt;
    &lt;MenuItem label="Profile" /&gt;
    &lt;MenuItem label="Logout" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>