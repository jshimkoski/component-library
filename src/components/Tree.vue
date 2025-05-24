<template>
  <div>
    <ul class="tree-list">
      <TreeItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :level="0"
        :expanded-keys="expandedKeys"
        :hide-icons="hideIcons"
        :active-item-id="activeItemId"
        @update:expanded="toggleExpand"
        @item-click="onItemClick"
      >
        <template
          #icon
          v-if="$slots.icon"
        >
          <slot
            name="icon"
            :item="item"
            :level="0"
          ></slot>
        </template>
        <template
          #default
          v-if="$slots.default"
        >
          <slot
            :item="item"
            :level="0"
          ></slot>
        </template>
      </TreeItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    items: {
      type: Array as PropType<TreeItem[]>,
      required: true,
      default: () => [],
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    defaultExpandedKeys: {
      type: Array as PropType<Array<string | number>>,
      default: () => [],
    },
    hideIcons: {
      type: Boolean,
      default: false,
    },
    activeItemId: {
      type: [String, Number] as PropType<string | number | null>,
      default: null,
    },
  });

  const emit = defineEmits<{
    (e: "node-click", node: TreeItem): void;
    (e: "node-expanded", node: TreeItem): void;
    (e: "node-collapsed", node: TreeItem): void;
  }>();

  // Handle item click event
  function onItemClick(item: TreeItem) {
    emit("node-click", item);
  }

  // Keep track of expanded nodes by their ID
  const expandedKeys = ref<Array<string | number>>(
    props.defaultExpandAll
      ? getAllItemIds(props.items)
      : [...props.defaultExpandedKeys],
  );

  // Get all item IDs (for default expand all functionality)
  function getAllItemIds(items: TreeItem[]): Array<string | number> {
    return items.reduce(
      (ids, item) => {
        ids.push(item.id);
        if (item.children && item.children.length > 0) {
          ids.push(...getAllItemIds(item.children));
        }
        return ids;
      },
      [] as Array<string | number>,
    );
  }

  // Toggle expanded state of a node
  function toggleExpand(itemId: string | number) {
    const index = expandedKeys.value.indexOf(itemId);

    if (index === -1) {
      expandedKeys.value.push(itemId);
      const node = findNodeById(props.items, itemId);
      if (node) emit("node-expanded", node);
    } else {
      expandedKeys.value.splice(index, 1);
      const node = findNodeById(props.items, itemId);
      if (node) emit("node-collapsed", node);
    }
  }

  // Helper function to find a node by ID
  function findNodeById(
    items: TreeItem[],
    id: string | number,
  ): TreeItem | null {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const found = findNodeById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  }
</script>

<script lang="ts">
  import TreeItem from "./TreeItem.vue";

  export default {
    components: {
      TreeItem,
    },
  };
</script>
