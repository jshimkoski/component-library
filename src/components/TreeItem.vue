<template>
  <li class="relative">
    <button
      type="button"
      :data-expanded="isExpanded || undefined"
      :data-has-children="hasChildren || undefined"
      :data-active="
        active || props.activeItemId === props.item.id ? 'true' : undefined
      "
      :class="[
        'tree-item-content',
        'flex items-center gap-1 w-full cursor-pointer py-1.5 text-sm rounded-base hover:bg-base-50 dark:hover:bg-base-900 transition',
        'text-base-700 dark:text-base-300 hover:text-black dark:hover:text-white',
        '[&[data-active]]:text-primary-700 dark:[&[data-active]]:text-primary-300 [&[data-active]]:hover:text-primary-800 dark:[&[data-active]]:hover:text-primary-200',
        '[&[data-expanded]]:text-black [&[data-expanded]]:dark:text-white',
        '[&[data-has-children]]:font-semibold [&[data-active]]:font-semibold',
      ]"
      :style="{
        paddingLeft: `${level === 0 ? 1 : level + 0.75}rem`,
        paddingRight: '1rem',
      }"
      @click="itemClickHandler"
    >
      <template v-if="!hideIcons">
        <div
          v-if="hasChildren"
          class="tree-folder-icon shrink-0 flex items-center justify-center"
        >
          <Icon
            :icon="
              isExpanded
                ? item.iconOpen || item.icon || 'ic:outline-folder-open'
                : item.iconClose || item.icon || 'ic:outline-folder'
            "
            class="shrink-0 w-4 h-4 transition-transform"
          />
        </div>
        <div
          v-else
          class="tree-file-icon shrink-0 flex items-center justify-center"
        >
          <Icon
            :icon="item.icon || 'ic:outline-insert-drive-file'"
            class="shrink-0 w-4 h-4 transition-transform"
          />
        </div>
      </template>

      <!-- Label slot -->
      <slot
        :item="item"
        :level="level"
      >
        <span class="tree-item-label">{{ item.label }}</span>
      </slot>

      <!-- Right side expand/collapse button -->
      <div
        v-if="hasChildren"
        class="shrink-0 ml-auto"
      >
        <Icon
          icon="ic:baseline-keyboard-arrow-up"
          class="w-5 h-5 transition-transform"
          :class="{ 'rotate-180': isExpanded }"
        />
      </div>
    </button>

    <!-- Children -->
    <Transition
      enter-active-class="transition-all duration-300 overflow-hidden"
      leave-active-class="transition-all duration-300 overflow-hidden"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[1000px] opacity-100"
      leave-from-class="max-h-[1000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <ul v-if="hasChildren && isExpanded">
        <TreeItem
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          :level="level + 1"
          :hide-icons="hideIcons"
          :expanded-keys="expandedKeys"
          :active-item-id="activeItemId"
          @update:expanded="onChildExpanded"
          @item-click="emitItemClick"
        >
          <template
            #default="slotScope: SlotScope"
            v-if="$slots.default"
          >
            <slot
              :item="slotScope.item"
              :level="slotScope.level"
            ></slot>
          </template>
        </TreeItem>
      </ul>
    </Transition>
  </li>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  interface SlotScope {
    item: TreeItem;
    level: number;
  }

  const props = defineProps({
    item: {
      type: Object as PropType<TreeItem>,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    hideIcons: {
      type: Boolean,
      default: false,
    },
    expandedKeys: {
      type: Array as PropType<Array<string | number>>,
      default: () => [],
    },
    activeItemId: {
      type: [String, Number] as PropType<string | number | null>,
      default: null,
    },
  });

  const emit = defineEmits<{
    (e: "update:expanded", itemId: string | number): void;
    (e: "item-click", item: TreeItem): void;
  }>();

  const active = ref(false);

  const hasChildren = computed(() => {
    return props.item.children && props.item.children.length > 0;
  });

  const isExpanded = computed(() => {
    return props.expandedKeys.includes(props.item.id);
  });

  // Determine if the item has a specific action (like navigation)
  const hasSpecificAction = computed(() => {
    return (
      props.item.to ||
      props.item.action ||
      props.item.href ||
      props.item.onClick
    );
  });

  function onToggleExpand(event: MouseEvent) {
    if (event instanceof MouseEvent) {
      event.stopPropagation(); // Prevent event bubbling
    }
    emit("update:expanded", props.item.id);
  }

  function onChildExpanded(itemId: string | number) {
    emit("update:expanded", itemId);
  }

  function onItemClick(event: MouseEvent) {
    if (event) {
      event.stopPropagation(); // Prevent parent items from receiving the click
    }
    emit("item-click", props.item);
  }

  function emitItemClick(item: TreeItem) {
    emit("item-click", item);
  }

  function itemClickHandler(event: MouseEvent) {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
    }

    if (hasSpecificAction.value) {
      onItemClick(event);
    } else if (hasChildren.value) {
      onToggleExpand(event);
    } else {
      onItemClick(event);
    }
  }
</script>
