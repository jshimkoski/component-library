<template>
  <li class="tree-item">
    <div 
      :class="[
        'tree-item-content',
        'flex items-center gap-1 py-1.5 px-2 rounded-base cursor-pointer hover:bg-base-50 dark:hover:bg-base-900 transition',
        { 'active-item': active || props.activeItemId === props.item.id }
      ]"
      :style="{ paddingLeft: controlsPosition === 'left' ? `${(level * 0.75) + 0.5}rem` : '0.5rem' }"
      @click="onItemClick"
    >
      <!-- Left side expand/collapse button -->
      <Action 
        v-if="hasChildren && controlsPosition === 'left'"
        @click.stop="onToggleExpand"
        variant="ghost" 
        square 
        size="xs"
        class="mr-1"
        :aria-expanded="isExpanded ? 'true' : 'false'"
        :aria-label="isExpanded ? 'Collapse' : 'Expand'"
      >
        <svg 
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-90': isExpanded }"
          viewBox="0 0 24 24" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Action>
      
      <!-- Empty space for indentation when no expand button on left side -->
      <div v-else-if="controlsPosition === 'left'" class="w-6"></div>
      
      <!-- Icon slot -->
      <slot name="icon" :item="item" :level="level" v-if="showIcons">
        <div 
          v-if="hasChildren" 
          class="tree-folder-icon w-5 h-5 flex items-center justify-center"
        >
          <svg 
            v-if="isExpanded" 
            class="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 11V5C2 3.89543 2.89543 3 4 3H10L12 5H20C21.1046 5 22 5.89543 22 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V13H2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg 
            v-else 
            class="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div 
          v-else 
          class="tree-file-icon w-5 h-5 flex items-center justify-center"
        >
          <svg 
            class="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </slot>

      <!-- Label slot -->
      <slot :item="item" :level="level">
        <span class="tree-item-label">{{ item.label }}</span>
      </slot>
      
      <!-- Right side expand/collapse button -->
      <div class="ml-auto" v-if="controlsPosition === 'right'">
        <Action 
          v-if="hasChildren"
          @click.stop="onToggleExpand"
          variant="ghost" 
          square 
          size="xs"
          :aria-expanded="isExpanded ? 'true' : 'false'"
          :aria-label="isExpanded ? 'Collapse' : 'Expand'"
        >
          <svg 
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-90': isExpanded }"
            viewBox="0 0 24 24" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Action>
      </div>
    </div>

    <!-- Children -->
    <transition name="expand">
      <ul v-if="hasChildren && isExpanded" class="tree-children">
        <TreeViewItem 
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          :level="level + 1"
          :expanded-keys="expandedKeys"
          :show-icons="showIcons"
          :controls-position="controlsPosition"
          :active-item-id="activeItemId"
          @update:expanded="onChildExpanded"
          @item-click="$emit('item-click', $event)"
        >
          <template #icon="slotProps" v-if="$slots.icon">
            <slot name="icon" :item="slotProps.item" :level="slotProps.level"></slot>
          </template>
          <template #default="slotProps" v-if="$slots.default">
            <slot :item="slotProps.item" :level="slotProps.level"></slot>
          </template>
        </TreeViewItem>
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Action from './Action.vue';

interface TreeItem {
  id: string | number;
  label: string;
  children?: TreeItem[];
  [key: string]: any; // Allow additional properties
}

const props = defineProps({
  item: {
    type: Object as PropType<TreeItem>,
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  expandedKeys: {
    type: Array as PropType<Array<string | number>>,
    default: () => []
  },
  showIcons: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  activeItemId: {
    type: [String, Number] as PropType<string | number | null>,
    default: null
  }
});

const emit = defineEmits<{
  (e: 'update:expanded', itemId: string | number): void;
  (e: 'item-click', item: TreeItem): void;
}>();

const active = ref(false);

const hasChildren = computed(() => {
  return props.item.children && props.item.children.length > 0;
});

const isExpanded = computed(() => {
  return props.expandedKeys.includes(props.item.id);
});

function onToggleExpand() {
  emit('update:expanded', props.item.id);
}

function onChildExpanded(itemId: string | number) {
  emit('update:expanded', itemId);
}

function onItemClick(event) {
  event.stopPropagation(); // Prevent parent items from receiving the click
  emit('item-click', props.item);
}
</script>

<style>
.tree-item {
  position: relative;
}

.tree-children {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.active-item {
  background-color: var(--color-primary-50);
  color: var(--color-primary-600);
  font-weight: 500;
}

.dark .active-item {
  background-color: var(--color-primary-900);
  color: var(--color-primary-300);
  font-weight: 500;
}

/* Expand/collapse animation */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>