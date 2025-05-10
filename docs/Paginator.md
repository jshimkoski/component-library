# Paginator

The Paginator component provides a standardized way to implement pagination for large datasets, allowing users to navigate through pages of content with various configuration options.

## Overview

The Paginator offers a comprehensive solution for dividing large datasets into manageable pages. It supports multiple display modes, customizable controls, and localization options to fit various application needs.

## Basic Usage

```vue
<template>
  <Paginator 
    :total-items="100" 
    v-model:page="currentPage" 
    v-model:items-per-page="itemsPerPage"
    @page-change="handlePageChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const currentPage = ref(1);
const itemsPerPage = ref(10);

const handlePageChange = (page) => {
  console.log(`Navigated to page ${page}`);
};
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `Number` | `1` | Current page number |
| `totalItems` | `Number` | *Required* | Total number of items in the dataset |
| `itemsPerPage` | `Number` | `10` | Number of items to display per page |
| `disabled` | `Boolean` | `false` | Disables all pagination controls |
| `showFirstLastButtons` | `Boolean` | `false` | Shows buttons to navigate to first/last pages |
| `showInfo` | `Boolean` | `true` | Shows information about the current items range |
| `visiblePageButtonLimit` | `Number` | `5` | Maximum number of page buttons to display in buttons mode |
| `mode` | `'buttons' \| 'input'` | `'buttons'` | Display mode: buttons for multiple page buttons, input for a page number input |
| `showPageSizeSelector` | `Boolean` | `false` | Shows a dropdown to select the items per page |
| `availablePageSizes` | `Number[]` | `[5, 10, 25, 50, 100]` | Available options for items per page selector |
| `buttonClass` | `String` | *See source* | Custom class for pagination buttons |
| `itemRangeText` | `String` | `'Showing {start} to {end} of {total} items'` | Template for the items range text |
| `pageSizeLabel` | `String` | `'Items per page:'` | Label for the page size selector |
| `pageLabel` | `String` | `'Page'` | Label for the page input in input mode |
| `ofLabel` | `String` | `'of'` | Text for the "of" label in input mode |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:page` | `(page: number)` | Emitted when the current page changes |
| `update:itemsPerPage` | `(size: number)` | Emitted when the items per page changes |
| `pageChange` | `(page: number)` | Emitted after the page has changed |

## Slots

| Name | Description |
|------|-------------|
| `first-page-icon` | Custom icon for the first page button |
| `previous-page-icon` | Custom icon for the previous page button |
| `next-page-icon` | Custom icon for the next page button |
| `last-page-icon` | Custom icon for the last page button |

## Variants

### Button Mode (Default)

Displays numbered page buttons for navigation.

```vue
<Paginator 
  :total-items="100" 
  mode="buttons"
  :visible-page-button-limit="5"
/>
```

### Input Mode

Uses a number input field to enter the desired page number.

```vue
<Paginator 
  :total-items="100" 
  mode="input"
/>
```

### With First/Last Buttons

```vue
<Paginator 
  :total-items="100" 
  :show-first-last-buttons="true"
/>
```

### With Page Size Selector

```vue
<Paginator 
  :total-items="100" 
  :show-page-size-selector="true"
  :available-page-sizes="[10, 20, 50, 100]"
/>
```

## Best Practices

- Use the Paginator for datasets with more than 10-20 items
- Position the Paginator below the content it controls
- For mobile views, consider using a more compact layout or fewer visible page buttons
- Provide clear visual feedback for the current page
- Maintain the same page position when changing page size
- Consider accessibility: ensure the component is usable with keyboard navigation

## Examples

### Table Pagination

```vue
<template>
  <Table 
    :fields="fields" 
    :items="displayedItems" 
    :loading-items="loading"
  />
  
  <Paginator 
    :total-items="totalItems" 
    v-model:page="currentPage" 
    v-model:items-per-page="itemsPerPage"
    :show-page-size-selector="true"
    @page-change="fetchItems"
  />
</template>

<script setup>
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

const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return allItems.value.slice(start, end);
});

const fetchItems = async () => {
  loading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would be an API call with pagination params
  loading.value = false;
};

onMounted(() => {
  fetchItems();
});
</script>
```

### Custom Buttons

```vue
<Paginator 
  :total-items="100" 
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
```