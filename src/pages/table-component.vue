<template>
  <div class="content">
    <Prose>
      <h1>Table</h1>
      <h2>Overview</h2>
      <p>The Table component provides a feature-rich data table with support for sorting, selection, expansion, and custom cell rendering. It's designed to handle tabular data efficiently while maintaining accessibility and providing a flexible API for customization.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const fields = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' }
];

const items = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' }
];
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>fields</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of field definitions that define table columns.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>items</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of data objects to display in the table.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Selected items when selectable is true (v-model).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>selectable</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether rows can be selected with checkboxes.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>expandable</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether rows can be expanded to show additional content.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>striped</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to apply striped row styling.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>hover</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether rows have hover effects.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>bordered</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show borders around the table.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>small</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to use compact row spacing.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>caption</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional table caption for accessibility.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(selected: Array)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when selection changes.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>row-clicked</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(item: Object, index: Number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a row is clicked.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>row-expanded</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(item: Object)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a row is expanded.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>row-collapsed</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(item: Object)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a row is collapsed.</td>
          </tr>
        </tbody>
      </table>
      <h2>Field Definition</h2>
      <pre><code class="language-typescript">interface TableField {
  key: string;           // Property key in data object
  label: string;         // Column header text
  sortable?: boolean;    // Whether column is sortable
  visible?: boolean;     // Whether column is visible (default: true)
  width?: string;        // CSS width value
  class?: string;        // CSS classes for header cell
  headerClass?: string;  // CSS classes for header cell
  cellClass?: string;    // CSS classes for data cells
  formatter?: Function;  // Function to format cell values
}</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>controls</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content displayed above the table (e.g., search, filters, actions).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>cell-{key}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for cells in the specified column. Receives <code>{ value, item, field }</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>header-{key}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the header cell in the specified column. Receives <code>{ field }</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>expanded-content</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content displayed when a row is expanded. Receives <code>{ item, index }</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>empty</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content displayed when no items are provided.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>loading</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content displayed during loading state.</td>
          </tr>
        </tbody>
      </table>
      <h2>Selectable Table</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    v-model="selected"
    :fields="fields"
    :items="items"
    selectable
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selected = ref([]);
// When items are selected, they will be available in the selected array
&lt;/script&gt;</code></pre>
      <h2>Expandable Rows</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
    expandable
  &gt;
    &lt;template #expanded-content="{ item }"&gt;
      &lt;div class="p-4 bg-base-50 dark:bg-base-800"&gt;
        &lt;h4 class="font-semibold mb-2"&gt;Additional Details&lt;/h4&gt;
        &lt;p&gt;More information about &#123;&#123; item.name &#125;&#125;...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Table&gt;
&lt;/template&gt;</code></pre>
      <h2>Custom Cell Rendering</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
  &gt;
    &lt;template #cell-status="{ value }"&gt;
      &lt;Badge 
        :label="value" 
        :kind="value === 'Active' ? 'success' : 'warning'"
        size="sm"
      /&gt;
    &lt;/template&gt;
    &lt;template #cell-actions="{ item }"&gt;
      &lt;Action size="xs" variant="ghost" @click="editItem(item)"&gt;Edit&lt;/Action&gt;
      &lt;Action size="xs" variant="ghost" kind="danger" @click="deleteItem(item)"&gt;Delete&lt;/Action&gt;
    &lt;/template&gt;
  &lt;/Table&gt;
&lt;/template&gt;</code></pre>
      <h2>With Controls</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="filteredItems"
  &gt;
    &lt;template #controls&gt;
      &lt;TextField 
        v-model="searchTerm"
        placeholder="Search users..."
        icon="material-symbols:search"
        class="max-w-sm"
      /&gt;
      &lt;Action kind="primary"&gt;Add User&lt;/Action&gt;
    &lt;/template&gt;
  &lt;/Table&gt;
&lt;/template&gt;</code></pre>
      <h2>Table Styling Options</h2>
      <h3>Striped Rows</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
    striped
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Bordered Table</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
    bordered
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Compact Table</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Table 
    :fields="fields"
    :items="items"
    small
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Define clear, descriptive field labels for table headers</li>
        <li>Use sortable columns for data that users might want to organize</li>
        <li>Implement pagination for large datasets to maintain performance</li>
        <li>Use custom cell rendering for complex data types (dates, status badges, actions)</li>
        <li>Provide empty state messaging when no data is available</li>
        <li>Use selection carefully - only when bulk actions are available</li>
        <li>Consider responsive design for mobile viewports</li>
        <li>Use hover effects to improve usability</li>
        <li>Implement loading states for async data</li>
        <li>Group related actions in the controls slot</li>
      </ul>
      <h2>Examples</h2>
      <h3>User Management Table</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;Table 
      v-model="selectedUsers"
      :fields="userFields"
      :items="users"
      selectable
      expandable
      striped
      @row-clicked="handleRowClick"
      @sort="handleSort"
    &gt;
      &lt;template #controls&gt;
        &lt;div class="flex gap-4"&gt;
          &lt;TextField 
            v-model="search"
            placeholder="Search users..."
            icon="material-symbols:search"
          /&gt;
          &lt;Select 
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Filter by status"
          /&gt;
          &lt;Action 
            v-if="selectedUsers.length &gt; 0" 
            @click="bulkAction"
            variant="outline"
          &gt;
            Bulk Edit (&#123;&#123; selectedUsers.length &#125;&#125;)
          &lt;/Action&gt;
          &lt;Action kind="primary" @click="addUser"&gt;Add User&lt;/Action&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;template #cell-avatar="{ item }"&gt;
        &lt;Avatar :src="item.avatar" :alt="item.name" size="sm" /&gt;
      &lt;/template&gt;

      &lt;template #cell-status="{ value }"&gt;
        &lt;Badge 
          :label="value" 
          :kind="getStatusKind(value)"
          size="sm"
        /&gt;
      &lt;/template&gt;

      &lt;template #cell-lastLogin="{ value }"&gt;
        &#123;&#123; formatDate(value) &#125;&#125;
      &lt;/template&gt;

      &lt;template #cell-actions="{ item }"&gt;
        &lt;Menu label="Actions" auto-width&gt;
          &lt;MenuItem label="View Profile" @click="viewProfile(item)" /&gt;
          &lt;MenuItem label="Edit User" @click="editUser(item)" /&gt;
          &lt;MenuDivider /&gt;
          &lt;MenuItem 
            label="Deactivate" 
            @click="deactivateUser(item)"
            :disabled="item.status === 'Inactive'"
          /&gt;
        &lt;/Menu&gt;
      &lt;/template&gt;

      &lt;template #expanded-content="{ item }"&gt;
        &lt;div class="p-4 bg-base-50 dark:bg-base-800 space-y-2"&gt;
          &lt;div&gt;&lt;strong&gt;Department:&lt;/strong&gt; &#123;&#123; item.department &#125;&#125;&lt;/div&gt;
          &lt;div&gt;&lt;strong&gt;Location:&lt;/strong&gt; &#123;&#123; item.location &#125;&#125;&lt;/div&gt;
          &lt;div&gt;&lt;strong&gt;Phone:&lt;/strong&gt; &#123;&#123; item.phone &#125;&#125;&lt;/div&gt;
          &lt;div&gt;&lt;strong&gt;Notes:&lt;/strong&gt; &#123;&#123; item.notes || 'No notes available' &#125;&#125;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;

      &lt;template #empty&gt;
        &lt;div class="text-center py-8"&gt;
          &lt;p class="text-base-500"&gt;No users found matching your criteria.&lt;/p&gt;
          &lt;Action kind="primary" @click="addUser" class="mt-2"&gt;
            Add First User
          &lt;/Action&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/Table&gt;
    
    &lt;div class="mt-4 flex justify-between items-center"&gt;
      &lt;p class="text-sm text-base-600"&gt;
        Showing &#123;&#123; users.length &#125;&#125; of &#123;&#123; totalUsers &#125;&#125; users
      &lt;/p&gt;
      &lt;Paginator 
        v-model="currentPage"
        :total-pages="totalPages"
        :total-items="totalUsers"
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selectedUsers = ref([]);
const search = ref('');
const statusFilter = ref('');
const currentPage = ref(1);

const userFields = [
  { key: 'avatar', label: '', width: '48px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'lastLogin', label: 'Last Login', sortable: true },
  { key: 'actions', label: 'Actions', width: '100px' }
];

function getStatusKind(status) {
  const kindMap = {
    'Active': 'success',
    'Inactive': 'warning',
    'Suspended': 'danger'
  };
  return kindMap[status] || 'secondary';
}
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>