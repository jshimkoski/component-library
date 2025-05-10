<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Paginator Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Paginator component provides a standardized way to implement pagination for large datasets, allowing users to navigate
        through pages of content efficiently. It supports multiple display modes and customization options to fit various application needs.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="currentPage"
            v-model:items-per-page="itemsPerPage"
            :total-items="totalItems"
            @page-change="handlePageChange"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  v-model:items-per-page="itemsPerPage"
  :total-items="totalItems"
  @page-change="handlePageChange"
/&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>page</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">1</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current page number (v-model:page)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>totalItems</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Total number of items in the dataset</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>itemsPerPage</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">10</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number of items displayed per page (v-model:items-per-page)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Disables all pagination controls</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>mode</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">'buttons'</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Display mode: 'buttons' or 'input'</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showFirstLastButtons</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows first and last page buttons</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showInfo</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">true</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows information about current items range</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showPageSizeSelector</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows dropdown to select items per page</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:page</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">(page: number)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when current page changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:itemsPerPage</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">(size: number)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when items per page changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>pageChange</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">(page: number)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted after page has changed</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>first-page-icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for the first page button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>previous-page-icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for the previous page button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>next-page-icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for the next page button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>last-page-icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for the last page button</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Display Modes</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Button Mode (Default)</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="buttonModeExample.page"
            :total-items="buttonModeExample.totalItems"
            :items-per-page="buttonModeExample.itemsPerPage"
            mode="buttons"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  mode="buttons"
/&gt;</code></pre>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Input Mode</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="inputModeExample.page"
            :total-items="inputModeExample.totalItems"
            :items-per-page="inputModeExample.itemsPerPage"
            mode="input"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  mode="input"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">With First/Last Buttons</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="firstLastExample.page"
            :total-items="firstLastExample.totalItems"
            :items-per-page="firstLastExample.itemsPerPage"
            :show-first-last-buttons="true"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  :show-first-last-buttons="true"
/&gt;</code></pre>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">With Page Size Selector</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="pageSizeExample.page"
            v-model:items-per-page="pageSizeExample.itemsPerPage"
            :total-items="pageSizeExample.totalItems"
            :show-page-size-selector="true"
            :available-page-sizes="[5, 10, 20, 50, 100]"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  v-model:items-per-page="itemsPerPage"
  :total-items="totalItems"
  :show-page-size-selector="true"
  :available-page-sizes="[5, 10, 20, 50, 100]"
/&gt;</code></pre>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Without Info Text</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="noInfoExample.page"
            :total-items="noInfoExample.totalItems"
            :items-per-page="noInfoExample.itemsPerPage"
            :show-info="false"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  :show-info="false"
/&gt;</code></pre>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled State</h3>
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="disabledExample.page"
            :total-items="disabledExample.totalItems"
            :items-per-page="disabledExample.itemsPerPage"
            disabled
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  disabled
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Full-Featured Example</h2>
      <p class="mb-4">This example combines several features to demonstrate a comprehensive pagination solution.</p>
      
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-2xl">
          <div class="mb-4">
            <!-- Simulated table -->
            <table class="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">ID</th>
                  <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
                  <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Email</th>
                  <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in paginatedItems" :key="item.id">
                  <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">{{ item.id }}</td>
                  <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">{{ item.name }}</td>
                  <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">{{ item.email }}</td>
                  <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
                    <Badge :label="item.status" :kind="getStatusColor(item.status)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <Paginator
            v-model:page="fullExample.page"
            v-model:items-per-page="fullExample.itemsPerPage"
            :total-items="fullExample.totalItems"
            :show-first-last-buttons="true"
            :show-page-size-selector="true"
            @page-change="loadItems"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;div class="mb-4"&gt;
  &lt;!-- Your table or content goes here --&gt;
  &lt;table&gt;...&lt;/table&gt;
&lt;/div&gt;

&lt;Paginator
  v-model:page="currentPage"
  v-model:items-per-page="itemsPerPage"
  :total-items="totalItems"
  :show-first-last-buttons="true"
  :show-page-size-selector="true"
  @page-change="loadItems"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Navigation Icons</h2>
      <p class="mb-4">You can customize the navigation icons using slots.</p>
      
      <div class="bg-base-50 dark:bg-base-950 p-6 rounded-lg mb-4">
        <div class="max-w-xl">
          <Paginator
            v-model:page="customIconsExample.page"
            :total-items="customIconsExample.totalItems"
            :items-per-page="customIconsExample.itemsPerPage"
            :show-first-last-buttons="true"
          >
            <template #first-page-icon>
              <span class="text-xs">First</span>
            </template>
            <template #previous-page-icon>
              <span class="text-xs">Prev</span>
            </template>
            <template #next-page-icon>
              <span class="text-xs">Next</span>
            </template>
            <template #last-page-icon>
              <span class="text-xs">Last</span>
            </template>
          </Paginator>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-950 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Paginator
  v-model:page="currentPage"
  :total-items="totalItems"
  :items-per-page="itemsPerPage"
  :show-first-last-buttons="true"
&gt;
  &lt;template #first-page-icon&gt;
    &lt;span class="text-xs"&gt;First&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #previous-page-icon&gt;
    &lt;span class="text-xs"&gt;Prev&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #next-page-icon&gt;
    &lt;span class="text-xs"&gt;Next&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #last-page-icon&gt;
    &lt;span class="text-xs"&gt;Last&lt;/span&gt;
  &lt;/template&gt;
&lt;/Paginator&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Use pagination for datasets with more than 10-20 items</li>
        <li>Position the paginator below the content it controls</li>
        <li>For mobile views, consider using a more compact layout or fewer visible page buttons</li>
        <li>Provide clear visual feedback for the current page</li>
        <li>Use the page size selector for datasets that may have widely varying sizes</li>
        <li>Maintain the same position in the dataset when changing page size (e.g., if viewing item 25, stay on the appropriate page)</li>
        <li>Include first/last page buttons for very large datasets</li>
        <li>Consider accessibility: ensure the component is usable with keyboard navigation</li>
        <li>Provide descriptive labels for screen readers</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

// Basic usage example
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(100);

const handlePageChange = (page: number) => {
  console.log(`Page changed to ${page}`);
};

// Mode examples
const buttonModeExample = reactive({
  page: 3,
  totalItems: 100,
  itemsPerPage: 10
});

const inputModeExample = reactive({
  page: 5,
  totalItems: 200,
  itemsPerPage: 10
});

// Variant examples
const firstLastExample = reactive({
  page: 4,
  totalItems: 150,
  itemsPerPage: 10
});

const pageSizeExample = reactive({
  page: 1,
  totalItems: 175,
  itemsPerPage: 10
});

const noInfoExample = reactive({
  page: 2,
  totalItems: 120,
  itemsPerPage: 10
});

const disabledExample = reactive({
  page: 3,
  totalItems: 110,
  itemsPerPage: 10
});

// Custom icons example
const customIconsExample = reactive({
  page: 2,
  totalItems: 100,
  itemsPerPage: 10
});

// Full-featured example
const fullExample = reactive({
  page: 1,
  itemsPerPage: 5,
  totalItems: 45,
  items: [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Pending' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'Active' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', status: 'Inactive' },
    { id: 7, name: 'Edward Norton', email: 'edward@example.com', status: 'Pending' },
    { id: 8, name: 'Fiona Apple', email: 'fiona@example.com', status: 'Active' },
    { id: 9, name: 'George Wilson', email: 'george@example.com', status: 'Inactive' },
    { id: 10, name: 'Helen Miller', email: 'helen@example.com', status: 'Active' },
    { id: 11, name: 'Ivan Reitman', email: 'ivan@example.com', status: 'Pending' },
    { id: 12, name: 'Julie Roberts', email: 'julie@example.com', status: 'Active' },
    { id: 13, name: 'Kevin Hart', email: 'kevin@example.com', status: 'Inactive' },
    { id: 14, name: 'Laura Palmer', email: 'laura@example.com', status: 'Active' },
    { id: 15, name: 'Mike Tyson', email: 'mike@example.com', status: 'Pending' },
    // Add more items as needed
  ]
});

// Generate all items
for (let i = 16; i <= 45; i++) {
  const statuses = ['Active', 'Inactive', 'Pending'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  fullExample.items.push({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`,
    status: randomStatus
  });
}

// Get paginated items for the table example
const paginatedItems = computed(() => {
  const startIndex = (fullExample.page - 1) * fullExample.itemsPerPage;
  const endIndex = startIndex + fullExample.itemsPerPage;
  return fullExample.items.slice(startIndex, endIndex);
});

// Simulate loading items from an API
const loadItems = (page: number) => {
  console.log(`Loading page ${page} with ${fullExample.itemsPerPage} items per page`);
  // In a real app, this would be an API call
};

// Helper function to get status color
const getStatusColor = (status: string): 'success' | 'info' | 'danger' | 'warning' => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'danger';
    case 'Pending':
      return 'warning';
    default:
      return 'info';
  }
};
</script>