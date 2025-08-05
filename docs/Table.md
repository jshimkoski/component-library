# Table

## Overview

The Table component provides a feature-rich data table with support for sorting, selection, expansion, and custom cell rendering. It's designed to handle tabular data efficiently while maintaining accessibility and providing a flexible API for customization.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="basicFields"
    :items="basicItems"
  />
</div>

```vue
<template>
  <Table 
    :fields="fields"
    :items="items"
  />
</template>

<script setup>
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
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | Array | `[]` | Array of field definitions that define table columns. |
| `items` | Array | `[]` | Array of data objects to display in the table. |
| `modelValue` | Array | `[]` | Selected items when selectable is true (v-model). |
| `selectable` | Boolean | `false` | Whether rows can be selected with checkboxes. |
| `expandable` | Boolean | `false` | Whether rows can be expanded to show additional content. |
| `striped` | Boolean | `false` | Whether to apply striped row styling. |
| `hover` | Boolean | `true` | Whether rows have hover effects. |
| `bordered` | Boolean | `false` | Whether to show borders around the table. |
| `small` | Boolean | `false` | Whether to use compact row spacing. |
| `caption` | String | `undefined` | Optional table caption for accessibility. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `(selected: Array)` | Emitted when selection changes. |
| `row-clicked` | `(item: Object, index: Number)` | Emitted when a row is clicked. |
| `row-expanded` | `(item: Object)` | Emitted when a row is expanded. |
| `row-collapsed` | `(item: Object)` | Emitted when a row is collapsed. |
| `sort` | `(field: String, direction: "asc" \| "desc")` | Emitted when column sorting changes. |

## Field Definition

```typescript
interface TableField {
  key: string;           // Property key in data object
  label: string;         // Column header text
  sortable?: boolean;    // Whether column is sortable
  visible?: boolean;     // Whether column is visible (default: true)
  width?: string;        // CSS width value
  class?: string;        // CSS classes for header cell
  headerClass?: string;  // CSS classes for header cell
  cellClass?: string;    // CSS classes for data cells
  formatter?: Function;  // Function to format cell values
}
```

## Slots

| Name | Description |
|------|-------------|
| `controls` | Content displayed above the table (e.g., search, filters, actions). |
| `cell-{key}` | Custom content for cells in the specified column. Receives `{ value, item, field }`. |
| `header-{key}` | Custom content for the header cell in the specified column. Receives `{ field }`. |
| `expanded-content` | Content displayed when a row is expanded. Receives `{ item, index }`. |
| `empty` | Content displayed when no items are provided. |
| `loading` | Content displayed during loading state. |

## Variants/Options

### Selectable Table

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    v-model="selectedItems"
    :fields="selectableFields"
    :items="selectableItems"
    selectable
  />
</div>

```vue
<template>
  <Table 
    v-model="selected"
    :fields="fields"
    :items="items"
    selectable
  />
</template>

<script setup>
const selected = ref([]);
// When items are selected, they will be available in the selected array
</script>
```

### Expandable Rows

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="expandableFields"
    :items="expandableItems"
    expandable
  >
    <template #expanded-content="{ item }">
      <div class="p-4 bg-base-50 dark:bg-base-800">
        <h4 class="font-semibold mb-2">Additional Details</h4>
        <p>More information about {{ item.name }}...</p>
      </div>
    </template>
  </Table>
</div>

```vue
<Table 
  :fields="fields"
  :items="items"
  expandable
>
  <template #expanded-content="{ item }">
    <div class="p-4 bg-base-50 dark:bg-base-800">
      <h4 class="font-semibold mb-2">Additional Details</h4>
      <p>More information about {{ item.name }}...</p>
    </div>
  </template>
</Table>
```

### Custom Cell Rendering

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="customFields"
    :items="customItems"
  >
    <template #cell-status="{ value }">
      <Badge 
        :label="value" 
        :kind="value === 'Active' ? 'success' : 'warning'"
        size="sm"
      />
    </template>
    
    <template #cell-actions="{ item }">
      <div class="flex gap-2">
        <Action size="xs" variant="ghost" @click="editItem(item)">Edit</Action>
        <Action size="xs" variant="ghost" kind="danger" @click="deleteItem(item)">Delete</Action>
      </div>
    </template>
  </Table>
</div>

```vue
<Table 
  :fields="fields"
  :items="items"
>
  <template #cell-status="{ value }">
    <Badge 
      :label="value" 
      :kind="value === 'Active' ? 'success' : 'warning'"
      size="sm"
    />
  </template>
  
  <template #cell-actions="{ item }">
    <div class="flex gap-2">
      <Action size="xs" variant="ghost" @click="editItem(item)">Edit</Action>
      <Action size="xs" variant="ghost" kind="danger" @click="deleteItem(item)">Delete</Action>
    </div>
  </template>
</Table>
```

### With Controls

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="controlFields"
    :items="filteredItems"
  >
    <template #controls>
      <div class="flex justify-between items-center mb-4">
        <TextField 
          v-model="searchTerm"
          placeholder="Search users..."
          icon="material-symbols:search"
          class="max-w-sm"
        />
        <Action kind="primary">Add User</Action>
      </div>
    </template>
  </Table>
</div>

```vue
<Table 
  :fields="fields"
  :items="filteredItems"
>
  <template #controls>
    <div class="flex justify-between items-center mb-4">
      <TextField 
        v-model="searchTerm"
        placeholder="Search users..."
        icon="material-symbols:search"
        class="max-w-sm"
      />
      <Action kind="primary">Add User</Action>
    </div>
  </template>
</Table>
```

## Table Styling Options

### Striped Rows

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="styleFields"
    :items="styleItems"
    striped
  />
</div>

```vue
<Table 
  :fields="fields"
  :items="items"
  striped
/>
```

### Bordered Table

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="styleFields"
    :items="styleItems"
    bordered
  />
</div>

```vue
<Table 
  :fields="fields"
  :items="items"
  bordered
/>
```

### Compact Table

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Table 
    :fields="styleFields"
    :items="styleItems"
    small
  />
</div>

```vue
<Table 
  :fields="fields"
  :items="items"
  small
/>
```

## Best Practices

- Define clear, descriptive field labels for table headers
- Use sortable columns for data that users might want to organize
- Implement pagination for large datasets to maintain performance
- Use custom cell rendering for complex data types (dates, status badges, actions)
- Provide empty state messaging when no data is available
- Use selection carefully - only when bulk actions are available
- Consider responsive design for mobile viewports
- Use hover effects to improve usability
- Implement loading states for async data
- Group related actions in the controls slot

## Examples

### User Management Table

```vue
<template>
  <div>
    <Table 
      v-model="selectedUsers"
      :fields="userFields"
      :items="users"
      selectable
      expandable
      striped
      @row-clicked="handleRowClick"
      @sort="handleSort"
    >
      <template #controls>
        <div class="flex justify-between items-center mb-4">
          <div class="flex gap-4">
            <TextField 
              v-model="search"
              placeholder="Search users..."
              icon="material-symbols:search"
            />
            <Select 
              v-model="statusFilter"
              :options="statusOptions"
              placeholder="Filter by status"
            />
          </div>
          
          <div class="flex gap-2">
            <Action 
              v-if="selectedUsers.length > 0" 
              @click="bulkAction"
              variant="outline"
            >
              Bulk Edit ({{ selectedUsers.length }})
            </Action>
            <Action kind="primary" @click="addUser">Add User</Action>
          </div>
        </div>
      </template>
      
      <template #cell-avatar="{ item }">
        <Avatar :src="item.avatar" :alt="item.name" size="sm" />
      </template>
      
      <template #cell-status="{ value }">
        <Badge 
          :label="value" 
          :kind="getStatusKind(value)"
          size="sm"
        />
      </template>
      
      <template #cell-lastLogin="{ value }">
        <span class="text-sm text-base-600 dark:text-base-400">
          {{ formatDate(value) }}
        </span>
      </template>
      
      <template #cell-actions="{ item }">
        <Menu label="Actions" auto-width>
          <MenuItem label="View Profile" @click="viewProfile(item)" />
          <MenuItem label="Edit User" @click="editUser(item)" />
          <MenuDivider />
          <MenuItem 
            label="Deactivate" 
            @click="deactivateUser(item)"
            :disabled="item.status === 'Inactive'"
          />
        </Menu>
      </template>
      
      <template #expanded-content="{ item }">
        <div class="p-4 bg-base-50 dark:bg-base-800 space-y-2">
          <div><strong>Department:</strong> {{ item.department }}</div>
          <div><strong>Location:</strong> {{ item.location }}</div>
          <div><strong>Phone:</strong> {{ item.phone }}</div>
          <div><strong>Notes:</strong> {{ item.notes || 'No notes available' }}</div>
        </div>
      </template>
      
      <template #empty>
        <div class="text-center py-8">
          <p class="text-base-500">No users found matching your criteria.</p>
          <Action kind="primary" @click="addUser" class="mt-2">
            Add First User
          </Action>
        </div>
      </template>
    </Table>
    
    <div class="mt-4 flex justify-between items-center">
      <p class="text-sm text-base-600">
        Showing {{ users.length }} of {{ totalUsers }} users
      </p>
      <Paginator 
        v-model="currentPage"
        :total-pages="totalPages"
        :total-items="totalUsers"
      />
    </div>
  </div>
</template>

<script setup>
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
</script>
```

### Data Analytics Table

```vue
<template>
  <Table 
    :fields="analyticsFields"
    :items="analyticsData"
    bordered
    small
  >
    <template #controls>
      <Card>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">Performance Metrics</h3>
          <div class="flex gap-2">
            <Select 
              v-model="timeRange"
              :options="timeRangeOptions"
              class="min-w-32"
            />
            <Action variant="outline" @click="exportData">Export</Action>
          </div>
        </div>
      </Card>
    </template>
    
    <template #cell-trend="{ value }">
      <div class="flex items-center gap-1">
        <Icon 
          :icon="value > 0 ? 'material-symbols:trending-up' : 'material-symbols:trending-down'"
          :class="value > 0 ? 'text-success-500' : 'text-danger-500'"
        />
        <span :class="value > 0 ? 'text-success-600' : 'text-danger-600'">
          {{ Math.abs(value) }}%
        </span>
      </div>
    </template>
    
    <template #cell-progress="{ value }">
      <div class="flex items-center gap-2">
        <Progress :model-value="value" :max="100" size="xs" class="flex-1" />
        <span class="text-xs text-base-500 min-w-12">{{ value }}%</span>
      </div>
    </template>
  </Table>
</template>
```
