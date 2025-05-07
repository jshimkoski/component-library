<template>
  <div class="space-y-8">
    <section class="space-y-4">
      <h2 class="text-xl font-bold">Basic Table</h2>
      <Table
        :fields="basicFields"
        :items="basicItems"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Selectable Rows</h2>
      <Table
        v-model="selectedUsers"
        :fields="userFields"
        :items="users"
        selectable
      >
        <template #controls>
          <span
            v-if="selectedUsers.length > 0"
            class="text-sm text-base-600 dark:text-base-400"
          >
            {{ selectedUsers.length }} users selected
          </span>
        </template>
      </Table>
      <div
        v-if="selectedUsers.length > 0"
        class="mt-4 p-4 bg-base-50 dark:bg-base-900 rounded-base"
      >
        <h3 class="font-medium mb-2">Selected Users:</h3>
        <ul class="ml-4 list-disc space-y-1">
          <li
            v-for="user in selectedUsers"
            :key="user.id"
          >
            {{ user.name }} ({{ user.email }})
          </li>
        </ul>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Sortable Columns</h2>
      <p class="text-base-600 dark:text-base-400">
        Click on a column header to sort.
      </p>
      <Table
        :fields="productFields"
        :items="products"
        @sort="onProductSort"
      >
        <template #cell-price="{ value }">
          <span class="font-medium">{{ formatCurrency(value) }}</span>
        </template>
        <template #cell-stock="{ value }">
          <span
            :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              value > 50
                ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200'
                : value > 10
                  ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200'
                  : 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-200',
            ]"
          >
            {{ value }} in stock
          </span>
        </template>
      </Table>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Expandable Rows</h2>
      <Table
        :fields="orderFields"
        :items="orders"
        expandable
      >
        <template #row-actions="{ item }">
          <button
            class="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
            @click="viewOrder(item)"
          >
            View
          </button>
        </template>
        <template #expanded-content="{ item }">
          <div class="p-4 space-y-4">
            <h3 class="font-medium">Order Items</h3>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="product in item.products"
                :key="product.id"
                class="p-3 bg-white dark:bg-base-800 rounded-base flex items-center space-x-3"
              >
                <div
                  class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-base flex items-center justify-center"
                >
                  <span
                    class="text-primary-700 dark:text-primary-300 font-medium"
                    >{{ product.id.slice(0, 2) }}</span
                  >
                </div>
                <div>
                  <div class="font-medium">{{ product.name }}</div>
                  <div class="text-sm text-base-500 dark:text-base-400">
                    {{ formatCurrency(product.price) }} x {{ product.quantity }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-between items-center pt-2 border-t border-base-200 dark:border-base-700"
            >
              <span class="text-base-600 dark:text-base-400"
                >Shipped to: {{ item.shippingAddress }}</span
              >
              <span class="font-medium"
                >Total: {{ formatCurrency(item.total) }}</span
              >
            </div>
          </div>
        </template>
      </Table>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Complete Example</h2>
      <Table
        v-model="selectedEmployees"
        :fields="employeeFields"
        :items="employees"
        selectable
        expandable
        :loading-items="loading"
      >
        <template #controls>
          <button
            class="px-3 py-1 text-sm bg-primary-500 text-white hover:bg-primary-600 rounded-base"
            @click="loading = !loading"
          >
            {{ loading ? "Stop loading" : "Simulate loading" }}
          </button>
        </template>
        <template #cell-status="{ value }">
          <span
            :class="[
              'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
              value === 'Active'
                ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200'
                : value === 'On Leave'
                  ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200'
                  : 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-200',
            ]"
          >
            <span
              class="w-1.5 h-1.5 rounded-full mr-1"
              :class="[
                value === 'Active'
                  ? 'bg-success-500'
                  : value === 'On Leave'
                    ? 'bg-warning-500'
                    : 'bg-danger-500',
              ]"
            ></span>
            {{ value }}
          </span>
        </template>
        <template #cell-skills="{ value }">
          <div class="flex flex-wrap gap-1">
            <span
              v-for="skill in value"
              :key="skill"
              class="px-2 py-0.5 text-xs bg-base-100 dark:bg-base-800 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </template>
        <template #row-actions="{ item }">
          <div class="flex items-center space-x-2">
            <button
              class="p-1 text-base-500 hover:text-primary-600 dark:text-base-400 dark:hover:text-primary-400"
              @click.stop="editEmployee(item)"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              class="p-1 text-base-500 hover:text-danger-600 dark:text-base-400 dark:hover:text-danger-400"
              @click.stop="deleteEmployee(item)"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </template>
        <template #expanded-content="{ item }">
          <div class="p-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="font-medium mb-2">Employment Details</h3>
                <dl class="space-y-2">
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">
                      Department:
                    </dt>
                    <dd>{{ item.department }}</dd>
                  </div>
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">Manager:</dt>
                    <dd>{{ item.manager }}</dd>
                  </div>
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">
                      Start Date:
                    </dt>
                    <dd>{{ formatDate(item.startDate) }}</dd>
                  </div>
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">Salary:</dt>
                    <dd>{{ formatCurrency(item.salary) }}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 class="font-medium mb-2">Contact Information</h3>
                <dl class="space-y-2">
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">Email:</dt>
                    <dd>{{ item.email }}</dd>
                  </div>
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">Phone:</dt>
                    <dd>{{ item.phone }}</dd>
                  </div>
                  <div class="flex justify-between">
                    <dt class="text-base-500 dark:text-base-400">Address:</dt>
                    <dd>{{ item.address }}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              class="mt-4 pt-4 border-t border-base-200 dark:border-base-700"
            >
              <h3 class="font-medium mb-2">Performance</h3>
              <div
                class="h-10 bg-base-100 dark:bg-base-800 rounded-base overflow-hidden"
              >
                <div
                  class="h-full bg-primary-500"
                  :style="{ width: `${item.performance * 10}%` }"
                ></div>
              </div>
            </div>
          </div>
        </template>
        <template #pagination>
          <div class="flex justify-between items-center">
            <span class="text-sm text-base-500 dark:text-base-400"
              >Showing 1-{{ employees.length }} of
              {{ employees.length }} items</span
            >
            <div class="flex space-x-1">
              <button
                class="px-3 py-1 text-sm bg-white dark:bg-base-800 border border-base-300 dark:border-base-700 rounded-base"
              >
                Previous
              </button>
              <button
                class="px-3 py-1 text-sm bg-primary-500 text-white rounded-base"
              >
                1
              </button>
              <button
                class="px-3 py-1 text-sm bg-white dark:bg-base-800 border border-base-300 dark:border-base-700 rounded-base"
              >
                Next
              </button>
            </div>
          </div>
        </template>
      </Table>
    </section>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Component Usage</h2>
      <pre
        class="bg-base-100 dark:bg-base-900 p-4 rounded-base overflow-x-auto text-sm"
      ><code>&lt;!-- Basic usage --&gt;
&lt;Table :fields="fields" :items="items" /&gt;

&lt;!-- Selectable rows --&gt;
&lt;Table
  v-model="selected"
  :fields="fields"
  :items="items"
  selectable
/&gt;

&lt;!-- Expandable rows --&gt;
&lt;Table
  :fields="fields"
  :items="items"
  expandable
&gt;
  &lt;template #expanded-content="{ item }"&gt;
    &lt;div&gt;Additional content for { { item.name } }&lt;/div&gt;
  &lt;/template&gt;
&lt;/Table&gt;

&lt;!-- Custom cell rendering --&gt;
&lt;Table :fields="fields" :items="items"&gt;
  &lt;template #cell-status="{ value }"&gt;
    &lt;span :class="getStatusClass(value)"&gt;{ { value } }&lt;/span&gt;
  &lt;/template&gt;
&lt;/Table&gt;

&lt;!-- Full example --&gt;
&lt;Table
  v-model="selected"
  :fields="fields"
  :items="items"
  selectable
  expandable
&gt;
  &lt;template #controls&gt;
    &lt;button @click="addItem"&gt;Add Item&lt;/button&gt;
  &lt;/template&gt;

  &lt;template #cell-price="{ value }"&gt;
    { { formatCurrency(value) } }
  &lt;/template&gt;

  &lt;template #row-actions="{ item }"&gt;
    &lt;button @click="editItem(item)"&gt;Edit&lt;/button&gt;
    &lt;button @click="deleteItem(item)"&gt;Delete&lt;/button&gt;
  &lt;/template&gt;

  &lt;template #expanded-content="{ item }"&gt;
    &lt;div&gt;Expanded details for { { item.name } }&lt;/div&gt;
  &lt;/template&gt;

  &lt;template #pagination&gt;
    &lt;div&gt;Custom pagination controls&lt;/div&gt;
  &lt;/template&gt;
&lt;/Table&gt;</code></pre>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Props</h2>
      <Table
        :fields="propFields"
        :items="propItems"
      />
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Events</h2>
      <Table
        :fields="eventFields"
        :items="eventItems"
      />
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Slots</h2>
      <Table
        :fields="slotFields"
        :items="slotItems"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TableField } from "../components/Table.vue";

  // Basic example
  const basicFields: TableField[] = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
  ];

  const basicItems = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  // Selectable rows example
  const userFields: TableField[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "active", label: "Active", type: "boolean" },
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      active: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      active: true,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Viewer",
      active: false,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Editor",
      active: true,
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "Viewer",
      active: true,
    },
  ];

  const selectedUsers = ref<typeof users>([]);

  // Sortable columns example
  const productFields: TableField[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Product Name", sortable: true },
    { key: "category", label: "Category", sortable: true },
    { key: "price", label: "Price", type: "number", sortable: true },
    { key: "stock", label: "Stock", type: "number", sortable: true },
    { key: "createdAt", label: "Created At", type: "date", sortable: true },
  ];

  const products = [
    {
      id: "P001",
      name: "Wireless Headphones",
      category: "Electronics",
      price: 129.99,
      stock: 45,
      createdAt: "2023-01-15",
    },
    {
      id: "P002",
      name: "Smartphone",
      category: "Electronics",
      price: 899.99,
      stock: 12,
      createdAt: "2023-02-20",
    },
    {
      id: "P003",
      name: "Running Shoes",
      category: "Clothing",
      price: 89.99,
      stock: 78,
      createdAt: "2023-03-10",
    },
    {
      id: "P004",
      name: "Coffee Maker",
      category: "Kitchen",
      price: 59.99,
      stock: 23,
      createdAt: "2023-04-05",
    },
    {
      id: "P005",
      name: "Desk Lamp",
      category: "Home Office",
      price: 39.99,
      stock: 67,
      createdAt: "2023-05-12",
    },
  ];

  function onProductSort(field: string, direction: "asc" | "desc") {
    console.log(`Sorting by ${field} in ${direction} order`);
  }

  // Expandable rows example
  const orderFields: TableField[] = [
    { key: "id", label: "Order ID" },
    { key: "customer", label: "Customer" },
    { key: "date", label: "Order Date", type: "date" },
    { key: "status", label: "Status" },
    { key: "total", label: "Total", type: "number" },
  ];

  const orders = [
    {
      id: "ORD-1001",
      customer: "John Doe",
      date: "2023-06-15",
      status: "Delivered",
      total: 235.87,
      shippingAddress: "123 Main St, Anytown, USA",
      products: [
        { id: "P001", name: "Wireless Headphones", price: 129.99, quantity: 1 },
        { id: "P005", name: "Desk Lamp", price: 39.99, quantity: 2 },
      ],
    },
    {
      id: "ORD-1002",
      customer: "Jane Smith",
      date: "2023-06-17",
      status: "Shipped",
      total: 899.99,
      shippingAddress: "456 Oak Ave, Somewhere, USA",
      products: [
        { id: "P002", name: "Smartphone", price: 899.99, quantity: 1 },
      ],
    },
    {
      id: "ORD-1003",
      customer: "Bob Johnson",
      date: "2023-06-18",
      status: "Processing",
      total: 149.98,
      shippingAddress: "789 Pine St, Nowhere, USA",
      products: [
        { id: "P004", name: "Coffee Maker", price: 59.99, quantity: 1 },
        { id: "P005", name: "Desk Lamp", price: 39.99, quantity: 1 },
        { id: "P006", name: "Notebook", price: 12.99, quantity: 2 },
      ],
    },
  ];

  function viewOrder(order: any) {
    console.log("Viewing order:", order.id);
  }

  // Complete example
  const employeeFields: TableField[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name", sortable: true },
    { key: "position", label: "Position", sortable: true },
    { key: "department", label: "Department", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "skills", label: "Skills" },
  ];

  const employees = [
    {
      id: "EMP001",
      name: "John Doe",
      position: "Senior Developer",
      department: "Engineering",
      status: "Active",
      skills: ["JavaScript", "Vue", "Node.js"],
      manager: "Jane Smith",
      email: "john@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Anytown, USA",
      startDate: "2020-03-15",
      salary: 85000,
      performance: 8.5,
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      position: "Engineering Manager",
      department: "Engineering",
      status: "Active",
      skills: ["Leadership", "Project Management", "Architecture"],
      manager: "Michael Brown",
      email: "jane@example.com",
      phone: "(555) 234-5678",
      address: "456 Oak Ave, Somewhere, USA",
      startDate: "2018-06-10",
      salary: 110000,
      performance: 9.2,
    },
    {
      id: "EMP003",
      name: "Bob Johnson",
      position: "UX Designer",
      department: "Design",
      status: "On Leave",
      skills: ["UI/UX", "Figma", "User Research"],
      manager: "Sarah Williams",
      email: "bob@example.com",
      phone: "(555) 345-6789",
      address: "789 Pine St, Nowhere, USA",
      startDate: "2021-01-20",
      salary: 75000,
      performance: 7.8,
    },
    {
      id: "EMP004",
      name: "Alice Brown",
      position: "Marketing Specialist",
      department: "Marketing",
      status: "Active",
      skills: ["SEO", "Content Strategy", "Analytics"],
      manager: "David Clark",
      email: "alice@example.com",
      phone: "(555) 456-7890",
      address: "101 Elm St, Elsewhere, USA",
      startDate: "2022-05-05",
      salary: 68000,
      performance: 8.1,
    },
    {
      id: "EMP005",
      name: "Charlie Wilson",
      position: "QA Engineer",
      department: "Engineering",
      status: "Terminated",
      skills: ["Test Automation", "Manual Testing", "QA Processes"],
      manager: "Jane Smith",
      email: "charlie@example.com",
      phone: "(555) 567-8901",
      address: "202 Cedar Dr, Anytown, USA",
      startDate: "2019-11-12",
      salary: 72000,
      performance: 6.4,
    },
  ];

  const selectedEmployees = ref<typeof employees>([]);
  const loading = ref(false);

  function editEmployee(employee: any) {
    console.log("Editing employee:", employee.id);
  }

  function deleteEmployee(employee: any) {
    console.log("Deleting employee:", employee.id);
  }

  // Documentation tables
  const propFields: TableField[] = [
    { key: "name", label: "Prop Name" },
    { key: "type", label: "Type" },
    { key: "default", label: "Default" },
    { key: "description", label: "Description" },
  ];

  const propItems = [
    {
      name: "fields",
      type: "TableField[]",
      default: "[]",
      description: "Array of column definitions",
    },
    {
      name: "items",
      type: "any[]",
      default: "[]",
      description: "Array of data items to display in the table",
    },
    {
      name: "selectable",
      type: "Boolean",
      default: "false",
      description: "Enable row selection",
    },
    {
      name: "expandable",
      type: "Boolean",
      default: "false",
      description: "Enable expandable rows",
    },
    {
      name: "sortable",
      type: "Boolean",
      default: "true",
      description: "Enable column sorting",
    },
    {
      name: "idField",
      type: "String",
      default: "id",
      description: "Field to use as unique identifier",
    },
    {
      name: "modelValue",
      type: "any[]",
      default: "[]",
      description: "Selected items (v-model)",
    },
    {
      name: "loadingItems",
      type: "Boolean",
      default: "false",
      description: "Show loading state",
    },
  ];

  const eventFields: TableField[] = [
    { key: "name", label: "Event Name" },
    { key: "parameters", label: "Parameters" },
    { key: "description", label: "Description" },
  ];

  const eventItems = [
    {
      name: "update:modelValue",
      parameters: "value: any[]",
      description: "Emitted when the selection changes",
    },
    {
      name: "row-click",
      parameters: "item: any",
      description: "Emitted when a row is clicked",
    },
    {
      name: "row-expanded",
      parameters: "item: any",
      description: "Emitted when a row is expanded",
    },
    {
      name: "row-collapsed",
      parameters: "item: any",
      description: "Emitted when a row is collapsed",
    },
    {
      name: "sort",
      parameters: 'field: string, direction: "asc" | "desc"',
      description: "Emitted when a column is sorted",
    },
  ];

  const slotFields: TableField[] = [
    { key: "name", label: "Slot Name" },
    { key: "props", label: "Slot Props" },
    { key: "description", label: "Description" },
  ];

  const slotItems = [
    {
      name: "controls",
      props: "-",
      description: "Custom controls to display above the table",
    },
    {
      name: "cell-{fieldKey}",
      props: "{ item, value, field }",
      description: "Custom cell rendering for specific column",
    },
    {
      name: "row-actions",
      props: "{ item, index }",
      description: "Actions to display for each row",
    },
    {
      name: "expanded-content",
      props: "{ item, index }",
      description: "Content to display when a row is expanded",
    },
    {
      name: "empty-state",
      props: "-",
      description: "Content to display when there are no items",
    },
    {
      name: "loading-state",
      props: "-",
      description: "Content to display when the table is loading",
    },
    {
      name: "pagination",
      props: "-",
      description: "Custom pagination controls",
    },
  ];

  // Helper functions
  function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
</script>
