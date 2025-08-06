<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Paginator</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Paginator offers a comprehensive solution for dividing large datasets into manageable pages. It supports multiple display modes, customizable controls, and localization options to fit various application needs.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Paginator
        :total-items="100"
        v-model:page="currentPage"
        v-model:items-per-page="itemsPerPage"
        @page-change="handlePageChange"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Paginator 
    :total-items="100" 
    v-model:page="currentPage" 
    v-model:items-per-page="itemsPerPage"
    @page-change="handlePageChange"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentPage = ref(1);
const itemsPerPage = ref(10);

const handlePageChange = (page) =&gt; {
  console.log(`Navigated to page ${page}`);
};
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>1</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current page number</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>totalItems</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*Required*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Total number of items in the dataset</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>itemsPerPage</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>10</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number of items to display per page</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Disables all pagination controls</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showFirstLastButtons</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows buttons to navigate to first/last pages</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showInfo</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows information about the current items range</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>visiblePageButtonLimit</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>5</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Maximum number of page buttons to display in buttons mode</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>mode</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;buttons&amp;#39; | &amp;#39;input&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;buttons&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Display mode: buttons for multiple page buttons, input for a page number input</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showPageSizeSelector</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shows a dropdown to select the items per page</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>availablePageSizes</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[5, 10, 25, 50, 100]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Available options for items per page selector</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>buttonClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*See source*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for pagination buttons</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>itemRangeText</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;Showing {start} to {end} of {total} items&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Template for the items range text</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>pageSizeLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;Items per page:&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label for the page size selector</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>pageLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;Page&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label for the page input in input mode</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>ofLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;of&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text for the &quot;of&quot; label in input mode</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(page: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the current page changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:itemsPerPage</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(size: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the items per page changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>pageChange</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(page: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted after the page has changed</td>
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
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Button Mode (Default)</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Paginator 
    :total-items="100" 
    mode="buttons"
    :visible-page-button-limit="5"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Input Mode</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Paginator 
    :total-items="100" 
    mode="input"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">With First/Last Buttons</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Paginator 
    :total-items="100" 
    :show-first-last-buttons="true"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">With Page Size Selector</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Paginator 
    :total-items="100" 
    :show-page-size-selector="true"
    :available-page-sizes="[10, 20, 50, 100]"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use the Paginator for datasets with more than 10-20 items</li>
          <li>Position the Paginator below the content it controls</li>
          <li>For mobile views, consider using a more compact layout or fewer visible page buttons</li>
          <li>Provide clear visual feedback for the current page</li>
          <li>Maintain the same page position when changing page size</li>
          <li>Consider accessibility: ensure the component is usable with keyboard navigation</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Table Pagination</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Table 
    :fields="fields" 
    :items="displayedItems" 
    :loading-items="loading"
  /&gt;
  &lt;Paginator 
    :total-items="totalItems" 
    v-model:page="currentPage" 
    v-model:items-per-page="itemsPerPage"
    :show-page-size-selector="true"
    @page-change="fetchItems"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, onMounted } from 'vue';

const fields = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' }
];

const totalItems = ref(0);
const allItems = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const loading = ref(false);

const displayedItems = computed(() =&gt; {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return allItems.value.slice(start, end);
});

const fetchItems = async () =&gt; {
  loading.value = true;
  // Simulate API call
  await new Promise(resolve =&gt; setTimeout(resolve, 500));
  
  // In a real app, this would be an API call with pagination params
  loading.value = false;
};

onMounted(() =&gt; {
  fetchItems();
});
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref(1);
const itemsPerPage = ref(10);
</script>