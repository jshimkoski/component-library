<template>
  <div class="tabs-debug">
    <div v-if="showDebug" class="p-2 m-2 border border-base-300 dark:border-base-700 rounded-md bg-base-50 dark:bg-base-900">
      <div class="text-sm font-semibold mb-2">Tabs Debug Information</div>
      <div class="text-xs text-base-600 dark:text-base-400 mb-1">
        <span class="font-medium">Active Tab Index:</span> {{ activeIndex }}
      </div>
      <div class="text-xs text-base-600 dark:text-base-400 mb-1">
        <span class="font-medium">Total Tabs:</span> {{ tabs?.length || 0 }}
      </div>
      <div class="text-xs text-base-600 dark:text-base-400 mb-1">
        <span class="font-medium">Registered TabPanels:</span> {{ tabPanelItems?.length || 0 }}
      </div>
      <div class="text-xs text-base-600 dark:text-base-400">
        <span class="font-medium">Tab Configuration:</span>
        <pre class="mt-1 p-2 text-2xs bg-base-100 dark:bg-base-800 rounded overflow-auto max-h-40">{{ JSON.stringify(allTabsInfo, null, 2) }}</pre>
      </div>
      <button 
        @click="showDebug = false" 
        class="mt-2 text-2xs px-2 py-1 bg-base-200 dark:bg-base-800 rounded"
      >
        Hide Debug Info
      </button>
    </div>
    <button 
      v-else
      @click="showDebug = true" 
      class="text-2xs px-2 py-1 bg-base-200 dark:bg-base-800 rounded opacity-50 hover:opacity-100"
    >
      Show Debug Info
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';

const props = defineProps({
  tabsRef: {
    type: Object,
    required: true
  }
});

const showDebug = ref(false);

// Try to get information from tabs
const activeIndex = computed(() => {
  return props.tabsRef?.getActiveIndex?.() ?? -1;
});

const tabs = computed(() => {
  if (props.tabsRef?._props?.tabs) {
    return props.tabsRef._props.tabs;
  }
  return [];
});

const tabPanelItems = computed(() => {
  if (props.tabsRef?._setupState?.tabPanelItems?.value) {
    return props.tabsRef._setupState.tabPanelItems.value;
  }
  return [];
});

const allTabsInfo = computed(() => {
  if (props.tabsRef?._setupState?.allTabs?.value) {
    // Sanitize the data to make it more readable
    return props.tabsRef._setupState.allTabs.value.map((tab: any, idx: number) => {
      return {
        index: idx,
        label: tab.label,
        disabled: tab.disabled || false,
        badge: tab.badge,
        isActive: idx === activeIndex.value,
        hasSlot: !!tab.slot,
        hasIcon: !!tab.icon,
        componentType: tab.component ? tab.component.name || 'Anonymous Component' : null
      };
    });
  }
  return [];
});
</script>

<style scoped>
.text-2xs {
  font-size: 0.65rem;
  line-height: 1rem;
}
</style>