<template>
  <div
    class="w-full overflow-x-auto bg-white dark:bg-base-950 border border-base-200 dark:border-base-800 rounded-base radius-xl:rounded-xl"
  >
    <!-- Table controls -->
    <div
      v-if="$slots.controls || selectable"
      class="p-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <Checkbox
          v-if="selectable"
          v-model="allSelected"
          :indeterminate="someSelected && !allSelected"
          @update:model-value="toggleSelectAll"
        />
        <slot name="controls"></slot>
      </div>
      <div v-if="selectedItems.length > 0">
        <span class="text-sm text-base-600 dark:text-base-400"
          >{{ selectedItems.length }} selected</span
        >
      </div>
    </div>

    <table class="w-full border-collapse text-left">
      <thead
        class="bg-base-50 dark:bg-base-900 border-b border-base-200 dark:border-base-800"
      >
        <tr>
          <!-- Selection column -->
          <th
            v-if="selectable"
            class="px-4 py-3 w-[40px]"
          >
            <!-- No header content for checkbox column -->
          </th>

          <!-- Expand/collapse column -->
          <th
            v-if="expandable"
            class="px-4 py-3 w-[40px]"
          >
            <!-- No header content for expand column -->
          </th>

          <!-- Sortable column headers -->
          <th
            v-for="field in visibleFields"
            :key="field.key"
            class="px-4 py-3 font-medium text-sm whitespace-nowrap"
            :class="[
              field.sortable ? 'cursor-pointer select-none' : '',
              field.class,
            ]"
            @click="field.sortable && sortByField(field.key)"
          >
            <div class="flex items-center gap-1">
              {{ field.label }}
              <span
                v-if="field.sortable"
                class="text-base-400"
              >
                <svg
                  v-if="sortBy === field.key && sortDir === 'asc'"
                  class="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    d="M4.5 10.5L8 7l3.5 3.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
                <svg
                  v-else-if="sortBy === field.key && sortDir === 'desc'"
                  class="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    d="M4.5 6L8 9.5 11.5 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
                <svg
                  v-else
                  class="w-4 h-4 text-base-300 dark:text-base-700"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    d="M4.5 6L8 9.5 11.5 6M4.5 10.5L8 7l3.5 3.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </div>
          </th>

          <!-- Actions column -->
          <th
            v-if="$slots['row-actions']"
            class="px-4 py-3"
          >
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-base-200 dark:divide-base-800">
        <template
          v-for="(item, index) in sortedItems"
          :key="getItemId(item)"
        >
          <!-- Data row -->
          <tr
            :class="[
              'hover:bg-base-50 dark:hover:bg-base-900 transition',
              isSelected(item) ? 'bg-primary-50 dark:bg-primary-950' : '',
              expandedRows.includes(getItemId(item)) ? 'border-b-0' : '',
            ]"
          >
            <!-- Selection cell -->
            <td
              v-if="selectable"
              class="px-4 py-3"
            >
              <Checkbox
                :model-value="isSelected(item)"
                @update:model-value="toggleSelect(item)"
              />
            </td>

            <!-- Expand/collapse cell -->
            <td
              v-if="expandable"
              class="px-4 py-3"
            >
              <button
                v-if="hasExpandableContent(item)"
                @click="toggleExpand(item)"
                class="p-1 rounded-full hover:bg-base-100 dark:hover:bg-base-800"
              >
                <svg
                  class="w-4 h-4 transition-transform"
                  :class="{
                    'rotate-180': expandedRows.includes(getItemId(item)),
                  }"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.5 6L8 9.5 11.5 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </td>

            <!-- Data cells -->
            <td
              v-for="field in visibleFields"
              :key="field.key"
              class="px-4 py-3 whitespace-nowrap"
              :class="field.class"
            >
              <!-- Use dynamic slot if available -->
              <slot
                :name="`cell-${field.key}`"
                :item="item"
                :value="getItemValue(item, field.key)"
                :field="field"
              >
                <!-- Format the value based on field type -->
                <span v-if="field.type === 'number'">{{
                  formatNumber(getItemValue(item, field.key))
                }}</span>
                <span v-else-if="field.type === 'date'">{{
                  formatDate(getItemValue(item, field.key))
                }}</span>
                <span v-else-if="field.type === 'boolean'">
                  <svg
                    v-if="getItemValue(item, field.key)"
                    class="w-4 h-4 text-success-500"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-4 h-4 text-base-400"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L8 6.586l2.293-2.293a1 1 0 111.414 1.414L9.414 8l2.293 2.293a1 1 0 01-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L6.586 8 4.293 5.707a1 1 0 010-1.414z"
                    />
                  </svg>
                </span>
                <span v-else>{{ getItemValue(item, field.key) }}</span>
              </slot>
            </td>

            <!-- Actions cell -->
            <td
              v-if="$slots['row-actions']"
              class="px-4 py-3 whitespace-nowrap"
            >
              <slot
                name="row-actions"
                :item="item"
                :index="index"
              ></slot>
            </td>
          </tr>

          <!-- Expandable drawer row -->
          <tr
            v-if="expandable && expandedRows.includes(getItemId(item))"
            class="bg-base-50 dark:bg-base-900"
          >
            <td
              :colspan="colspan"
              class="px-4 py-3 border-t border-base-100 dark:border-base-800"
            >
              <slot
                name="expanded-content"
                :item="item"
                :index="index"
              >
                <pre class="text-sm whitespace-pre-wrap">{{
                  JSON.stringify(item, null, 2)
                }}</pre>
              </slot>
            </td>
          </tr>
        </template>

        <!-- Empty state -->
        <tr v-if="!loadingItems && items.length === 0">
          <td
            :colspan="colspan"
            class="px-4 py-6 text-center text-base-500 dark:text-base-400"
          >
            <slot name="empty-state">
              <div class="flex flex-col items-center justify-center py-6">
                <svg
                  class="w-10 h-10 mb-2 text-base-300 dark:text-base-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p>No items to display</p>
              </div>
            </slot>
          </td>
        </tr>

        <!-- Loading state -->
        <tr v-if="loadingItems">
          <td
            :colspan="colspan"
            class="px-4 py-6 text-center text-base-500 dark:text-base-400"
          >
            <slot name="loading-state">
              <div class="flex justify-center items-center py-6">
                <svg
                  class="animate-spin h-6 w-6 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span class="ml-2">Loading...</span>
              </div>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div
      v-if="$slots.pagination"
      class="border-t border-base-200 dark:border-base-800 p-4"
    >
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue";

  export interface TableField {
    key: string;
    label: string;
    sortable?: boolean;
    type?: "text" | "number" | "date" | "boolean";
    visible?: boolean;
    class?: string;
    // Function to extract the value from an item (useful for nested properties)
    getValue?: (item: any) => any;
  }

  export interface TableProps {
    fields: TableField[];
    items: any[];
    selectable?: boolean;
    expandable?: boolean;
    sortable?: boolean;
    idField?: string;
    modelValue?: any[];
    loadingItems?: boolean;
  }

  const props = withDefaults(defineProps<TableProps>(), {
    selectable: false,
    expandable: false,
    sortable: true,
    idField: "id",
    modelValue: () => [],
    loadingItems: false,
  });

  const emit = defineEmits<{
    (e: "update:modelValue", value: any[]): void;
    (e: "row-click", item: any): void;
    (e: "row-expanded", item: any): void;
    (e: "row-collapsed", item: any): void;
    (e: "sort", field: string, direction: "asc" | "desc"): void;
  }>();

  // Selection state
  const selectedItems = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });

  // Computed values for selection
  const allSelected = computed(
    () =>
      props.items.length > 0 &&
      selectedItems.value.length === props.items.length,
  );

  const someSelected = computed(
    () =>
      selectedItems.value.length > 0 &&
      selectedItems.value.length < props.items.length,
  );

  // Expanded rows tracking
  const expandedRows = ref<Array<string | number>>([]);

  // Sorting state
  const sortBy = ref<string | null>(null);
  const sortDir = ref<"asc" | "desc">("asc");

  // Filter visible fields
  const visibleFields = computed(() =>
    props.fields.filter((field) => field.visible !== false),
  );

  // Calculate total columns (including selection and actions)
  const colspan = computed(() => {
    let count = visibleFields.value.length;
    if (props.selectable) count++;
    if (props.expandable) count++;
    if (slots["row-actions"]) count++;
    return count;
  });

  // Sorted items based on current sort settings
  const sortedItems = computed(() => {
    if (!sortBy.value) return props.items;

    return [...props.items].sort((a, b) => {
      const field = props.fields.find((f) => f.key === sortBy.value);
      let valueA = getItemValue(a, sortBy.value);
      let valueB = getItemValue(b, sortBy.value);

      // Handle different data types
      if (field?.type === "number") {
        valueA = Number(valueA) || 0;
        valueB = Number(valueB) || 0;
      } else if (field?.type === "date") {
        valueA = valueA ? new Date(valueA).getTime() : 0;
        valueB = valueB ? new Date(valueB).getTime() : 0;
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDir.value === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return sortDir.value === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
          ? 1
          : -1;
    });
  });

  // Get unique identifier for an item
  function getItemId(item: any): string | number {
    return item[props.idField] || props.items.indexOf(item);
  }

  // Get value from an item for a given field
  function getItemValue(item: any, key: string): any {
    const field = props.fields.find((f) => f.key === key);
    if (field?.getValue) {
      return field.getValue(item);
    }

    // Handle dot notation for nested properties
    if (key.includes(".")) {
      return key.split(".").reduce((o, p) => (o ? o[p] : undefined), item);
    }

    return item[key];
  }

  // Check if an item has expandable content
  function hasExpandableContent(item: any): boolean {
    // Check if the expandable-content slot is provided or return true by default
    return true;
  }

  // Selection methods
  function isSelected(item: any): boolean {
    return selectedItems.value.some(
      (selected) => getItemId(selected) === getItemId(item),
    );
  }

  function toggleSelect(item: any): void {
    if (isSelected(item)) {
      selectedItems.value = selectedItems.value.filter(
        (selected) => getItemId(selected) !== getItemId(item),
      );
    } else {
      selectedItems.value = [...selectedItems.value, item];
    }
  }

  function toggleSelectAll(): void {
    if (allSelected.value) {
      selectedItems.value = [];
    } else {
      selectedItems.value = [...props.items];
    }
  }

  // Expand/collapse methods
  function toggleExpand(item: any): void {
    const id = getItemId(item);
    const index = expandedRows.value.indexOf(id);

    if (index === -1) {
      expandedRows.value.push(id);
      emit("row-expanded", item);
    } else {
      expandedRows.value.splice(index, 1);
      emit("row-collapsed", item);
    }
  }

  // Sorting method
  function sortByField(key: string): void {
    if (sortBy.value === key) {
      // Toggle direction if clicking the same field
      sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
    } else {
      // Set new field and default to ascending
      sortBy.value = key;
      sortDir.value = "asc";
    }

    emit("sort", key, sortDir.value);
  }

  // Formatting helpers
  function formatNumber(value: any): string {
    if (value === null || value === undefined) return "";
    return Number(value).toLocaleString();
  }

  function formatDate(value: any): string {
    if (!value) return "";
    return new Date(value).toLocaleDateString();
  }

  // Make slots accessible in the template
  const slots = useSlots();
</script>
