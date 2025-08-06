<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">MenuItem</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The MenuItem component represents an individual interactive item within a Menu. It can function as a clickable action, a navigation link, or a trigger for nested menus. MenuItem supports various states including disabled and active, and can contain custom content through slots.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="Actions">
        <MenuItem label="Edit Document" />
        <MenuItem label="Share" />
        <MenuItem label="Download" />
        </Menu>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Actions"&gt;
    &lt;MenuItem label="Edit Document" /&gt;
    &lt;MenuItem label="Share" /&gt;
    &lt;MenuItem label="Download" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the menu item.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for link behavior. When provided, renders as anchor tag.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for links (e.g., &quot;_blank&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for links (e.g., &quot;noopener noreferrer&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu item is disabled.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>active</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the menu item appears in active state.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>type</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;button&amp;quot; | &amp;quot;submit&amp;quot; | &amp;quot;reset&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;button&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Button type when rendered as a button element.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
            <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Parameters</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: MouseEvent)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the menu item is clicked (only for button behavior).</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the menu item. Overrides the label prop.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Menu Items with Actions</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="Document Actions">
        <MenuItem label="Edit" @click="handleEdit" />
        <MenuItem label="Duplicate" @click="handleDuplicate" />
        <MenuItem label="Move to Trash" @click="handleDelete" />
        </Menu>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Document Actions"&gt;
    &lt;MenuItem label="Edit" @click="handleEdit" /&gt;
    &lt;MenuItem label="Duplicate" @click="handleDuplicate" /&gt;
    &lt;MenuItem label="Move to Trash" @click="handleDelete" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;

&lt;script setup&gt;
function handleEdit() {
  console.log('Edit clicked');
}

function handleDuplicate() {
  console.log('Duplicate clicked');
}

function handleDelete() {
  console.log('Delete clicked');
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Menu Items as Links</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="Navigation">
        <MenuItem label="Home" href="/" />
        <MenuItem label="About" href="/about" />
        <MenuItem label="Contact" href="/contact" />
        <MenuItem
        label="External Link"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        />
        </Menu>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Navigation"&gt;
    &lt;MenuItem label="Home" href="/" /&gt;
    &lt;MenuItem label="About" href="/about" /&gt;
    &lt;MenuItem label="Contact" href="/contact" /&gt;
    &lt;MenuItem 
      label="External Link" 
      href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
    /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Menu Items with Custom Content</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu label="User Options">
        <MenuItem>
        <div class="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center">
        ✓
        <span>Mark as Complete</span>
        </div>
        </MenuItem>
        <MenuItem>
        <div class="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center">
        !
        <span>Flag as Important</span>
        </div>
        </MenuItem>
        </Menu>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="User Options"&gt;
    &lt;MenuItem&gt;
      &lt;div class="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center"&gt;
          ✓
        &lt;span&gt;Mark as Complete&lt;/span&gt;
      &lt;/div&gt;
    &lt;/MenuItem&gt;
    &lt;MenuItem&gt;
      &lt;div class="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center"&gt;
          !
        &lt;span&gt;Flag as Important&lt;/span&gt;
      &lt;/div&gt;
    &lt;/MenuItem&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled Menu Items</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Mixed States"&gt;
    &lt;MenuItem label="Available Action" /&gt;
    &lt;MenuItem label="Disabled Action" disabled /&gt;
    &lt;MenuItem label="Active Action" active /&gt;
    &lt;MenuItem label="Disabled Link" href="/disabled" disabled /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Keep menu item labels concise and action-oriented</li>
          <li>Use consistent terminology throughout your application</li>
          <li>Group related actions together using MenuDivider</li>
          <li>Use disabled state for actions that are temporarily unavailable</li>
          <li>Use active state to indicate the current selection or state</li>
          <li>When using href, always provide appropriate target and rel attributes for external links</li>
          <li>Use custom content sparingly to maintain menu consistency</li>
          <li>Provide clear visual feedback for interactive states (hover, focus, active)</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Conditional Menu Items</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Actions"&gt;
    &lt;MenuItem v-if="canEdit" label="Edit" @click="handleEdit" /&gt;
    &lt;MenuItem v-if="canDelete" label="Delete" @click="handleDelete" /&gt;
    &lt;MenuItem v-if="!isLoggedIn" label="Login" href="/login" /&gt;
    &lt;MenuItem v-else label="Logout" @click="handleLogout" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;

&lt;script setup&gt;
const canEdit = ref(true);
const canDelete = ref(false);
const isLoggedIn = ref(true);
&lt;/script&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Menu Item with Keyboard Shortcuts</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Menu label="Edit"&gt;
    &lt;MenuItem @click="undo"&gt;
      &lt;span&gt;Undo&lt;/span&gt;
        &lt;kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded"&gt;⌘Z&lt;/kbd&gt;
    &lt;/MenuItem&gt;

    &lt;MenuItem @click="redo"&gt;
      &lt;span&gt;Redo&lt;/span&gt;
        &lt;kbd class="text-xs bg-base-200 dark:bg-base-700 px-2 py-1 rounded"&gt;⌘⇧Z&lt;/kbd&gt;
    &lt;/MenuItem&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Menu from '../components/Menu.vue';

</script>