<template>
  <div :class="['tabs-container', { 'tabs-vertical': vertical }]">
    <!-- Tab headers -->
    <div
      :class="[
        vertical ? 'flex-col' : 'inline-flex',
        'gap-1 rounded-lg p-1 mb-4 bg-base-100 dark:bg-base-800',
        { [headerClass]: !!headerClass },
      ]"
      role="tablist"
    >
      <!-- Custom tab headers slot -->
      <slot name="tab-headers">
        <button
          v-for="(tab, index) in allTabs"
          :key="index"
          role="tab"
          :aria-selected="modelValue === index"
          :aria-controls="`tab-panel-${id}-${index}`"
          :id="`tab-${id}-${index}`"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors"
          :class="[
            modelValue === index
              ? activeTabClass ||
                'bg-white dark:bg-base-900 text-primary-700 dark:text-primary-300 shadow-sm'
              : inactiveTabClass ||
                'text-base-700 dark:text-base-300 hover:text-primary-600 dark:hover:text-primary-400',
            { 'opacity-50 cursor-not-allowed': disabled || tab.disabled },
          ]"
          @click="updateSelectedTab(index)"
          :disabled="disabled || tab.disabled"
          @keydown.right="vertical ? null : focusNextTab"
          @keydown.left="vertical ? null : focusPrevTab"
          @keydown.down="vertical ? focusNextTab : null"
          @keydown.up="vertical ? focusPrevTab : null"
          @keydown.home="focusFirstTab"
          @keydown.end="focusLastTab"
          :ref="(el) => (tabRefs[index] = el)"
        >
          <!-- Tab icon slot with fallback -->
          <slot
            :name="`tab-icon-${index}`"
            :tab="tab"
            :index="index"
          >
            <component
              :is="tab.icon"
              v-if="tab.icon"
              class="w-5 h-5"
            />
            <!-- Icon slot from TabPanel -->
            <span v-else-if="tab.tabPanelId !== undefined && iconSlots[tab.tabPanelId]">
              <component 
                :is="{ render: () => h('div', {}, [iconSlots[tab.tabPanelId]()]) }" 
              />
            </span>
          </slot>

          <!-- Tab label with optional slot override -->
          <slot
            :name="`tab-label-${index}`"
            :tab="tab"
            :index="index"
          >
            {{ tab.label }}
          </slot>

          <!-- Badge with slot override option -->
          <slot
            :name="`tab-badge-${index}`"
            :tab="tab"
            :index="index"
          >
            <Badge
              v-if="tab.badge"
              :label="tab.badge"
              :kind="tab.badgeKind || 'primary'"
            />
          </slot>
        </button>
      </slot>
    </div>

    <!-- TabPanel components slot -->
    <slot></slot>

    <!-- Tab content -->
    <div
      class="tab-content"
      :class="{ [contentClass]: !!contentClass }"
    >
      <template
        v-for="(tab, index) in allTabs"
        :key="index"
      >
        <div
          v-if="shouldRenderTab(index)"
          role="tabpanel"
          :id="`tab-panel-${id}-${index}`"
          :aria-labelledby="`tab-${id}-${index}`"
          v-show="modelValue === index"
          class="transition-opacity duration-200"
          :class="{
            'opacity-0': modelValue !== index,
            'opacity-100': modelValue === index,
            [panelClass]: !!panelClass,
          }"
        >
          <!-- Main tab content -->
          <slot
            :name="`tab-content-${index}`"
            :tab="tab"
            :index="index"
          >
            <!-- Programmatic API: render slot from tabs prop -->
            <slot
              v-if="tab.slot"
              :name="tab.slot"
            ></slot>
            <component
              v-else-if="tab.component"
              :is="tab.component"
              v-bind="tab.props || {}"
            />
            <div
              v-else-if="tab.content"
              v-html="tab.content"
            ></div>
            
            <!-- Declarative API: render TabPanel content -->
            <template v-else-if="tab.tabPanelId !== undefined">
              <component
                :is="{
                  render: () => {
                    // Find the corresponding tabPanel's slot
                    const slot = tabPanelSlots[tab.tabPanelId];
                    if (slot && typeof slot === 'function') {
                      return h('div', {}, [slot()]);
                    } else if (slot && typeof slot.default === 'function') {
                      return h('div', {}, [slot.default()]);
                    } else {
                      return h('div', {}, ['No content available']);
                    }
                  }
                }"
              />
            </template>
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { h } from "vue";

  export interface TabItem {
    label: string;
    content?: string;
    badge?: string;
    badgeKind?:
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "danger";
    icon?: Component | string;
    disabled?: boolean;
    slot?: string;
    component?: Component;
    props?: Record<string, any>;
    id?: string | number;
    meta?: any;
    tabPanelId?: number; // ID for TabPanel integration
  }

  const props = defineProps({
    // Primary tab configuration
    tabs: {
      type: Array as PropType<TabItem[]>,
      default: () => [],
    },

    // State and behavior
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    keepAlive: {
      type: Boolean,
      default: false,
    },
    defaultTab: {
      type: Number,
      default: 0,
    },

    // Styling customizations
    headerClass: {
      type: String,
      default: "",
    },
    contentClass: {
      type: String,
      default: "",
    },
    panelClass: {
      type: String,
      default: "",
    },
    activeTabClass: {
      type: String,
      default: "",
    },
    inactiveTabClass: {
      type: String,
      default: "",
    },

    // Advanced options
    transitionDuration: {
      type: Number,
      default: 200,
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits([
    "update:modelValue",
    "change",
    "before-change",
    "tab-click",
  ]);
  const modelValue = defineModel<number>({ default: undefined });

  // Initialize with defaultTab if model is undefined
  if (modelValue.value === undefined) {
    modelValue.value = props.defaultTab;
  }

  // Generate a unique ID for ARIA purposes
  const id = useId();

  // Keep track of rendered tabs for lazy loading
  const renderedTabs = ref<Set<number>>(new Set([modelValue.value]));

  // Refs for tab elements for keyboard navigation
  const tabRefs = shallowRef<(HTMLElement | null)[]>([]);

  // TabPanel related refs
  const tabPanels = ref<TabItem[]>([]);
  const tabPanelSlots = ref<Record<number, any>>({});
  const iconSlots = ref<Record<number, any>>({});

  // Determine if we should render a particular tab
  const shouldRenderTab = (index: number) => {
    // Always render the active tab
    if (modelValue.value === index) {
      return true;
    }
    
    // For other tabs, follow lazy/keepAlive rules
    if (!props.lazy || props.keepAlive) return true;
    return renderedTabs.value.has(index);
  };

  // Combine tabs from props and TabPanel components
  const allTabs = computed(() => {
    // First add tabs from props
    const combinedTabs = [...props.tabs];
    
    // Then add tabs from TabPanel components
    tabPanels.value.forEach((panel, index) => {
      combinedTabs.push({
        ...panel,
        tabPanelId: index // Store the index of the TabPanel for content rendering
      });
    });
    
    return combinedTabs;
  });

  // Provide context for TabPanel components
  provide("registerTabPanel", (panel: any) => {
    // If updating an existing panel
    if ("_id" in panel && typeof panel._id === "number") {
      const index = panel._id;
      
      // Update the panel data
      tabPanels.value[index] = { 
        ...tabPanels.value[index],
        label: panel.label,
        disabled: panel.disabled,
        badge: panel.badge,
        badgeKind: panel.badgeKind,
        icon: panel.icon,
        id: panel.id
      };
      
      // Update slots if provided
      if (panel.slot) {
        tabPanelSlots.value[index] = panel.slot;
      }
      
      if (panel.iconSlot) {
        iconSlots.value[index] = panel.iconSlot;
      }
      
      return index;
    }

    // Add a new panel
    const index = tabPanels.value.length;
    
    // Store the panel data
    tabPanels.value.push({
      label: panel.label,
      disabled: panel.disabled,
      badge: panel.badge,
      badgeKind: panel.badgeKind,
      icon: panel.icon,
      id: panel.id
    });
    
    // Store slots
    if (panel.slot) {
      tabPanelSlots.value[index] = panel.slot;
    }
    
    if (panel.iconSlot) {
      iconSlots.value[index] = panel.iconSlot;
    }
    
    // Ensure this tab is rendered if it's active
    if (modelValue.value === props.tabs.length + index && props.lazy) {
      renderedTabs.value.add(props.tabs.length + index);
    }
    
    return index;
  });

  provide("unregisterTabPanel", (index: number) => {
    if (index >= 0 && index < tabPanels.value.length) {
      // Remove the panel
      tabPanels.value.splice(index, 1);
      
      // Clean up slots
      delete tabPanelSlots.value[index];
      delete iconSlots.value[index];
      
      // Remap higher indices
      for (let i = index + 1; i < tabPanels.value.length + 1; i++) {
        if (tabPanelSlots.value[i]) {
          tabPanelSlots.value[i-1] = tabPanelSlots.value[i];
          delete tabPanelSlots.value[i];
        }
        
        if (iconSlots.value[i]) {
          iconSlots.value[i-1] = iconSlots.value[i];
          delete iconSlots.value[i];
        }
      }

      // If the active tab was removed, select another tab
      const totalTabsCount = props.tabs.length + tabPanels.value.length;
      if (modelValue.value >= totalTabsCount) {
        modelValue.value = Math.max(0, totalTabsCount - 1);
      }
    }
  });

  provide("activeTabId", computed(() => {
    // Calculate the active TabPanel ID
    const activeIndex = modelValue.value;
    if (activeIndex >= props.tabs.length) {
      return activeIndex - props.tabs.length;
    }
    return -1; // Not a TabPanel
  }));
  
  provide("isTabsParentLazy", computed(() => props.lazy));

  // Update the selected tab
  const updateSelectedTab = (index: number) => {
    // Don't do anything if disabled
    if (props.disabled || allTabs.value[index]?.disabled) return;

    // Emit before-change for potential prevention
    const allowChange = emit("before-change", {
      from: modelValue.value,
      to: index,
    });
    if (allowChange === false) return;

    // Add to rendered set for lazy loading
    if (props.lazy) {
      renderedTabs.value.add(index);
    }

    // Update the model and emit events
    modelValue.value = index;
    
    nextTick(() => {
      emit("change", index);
      emit("tab-click", allTabs.value[index], index);
    });
  };

  // Focus management for keyboard navigation
  const focusTab = (index: number) => {
    if (index >= 0 && index < tabRefs.value.length && tabRefs.value[index]) {
      tabRefs.value[index]?.focus();
    }
  };

  const focusNextTab = () => {
    const nextIndex = (modelValue.value + 1) % allTabs.value.length;
    if (!allTabs.value[nextIndex]?.disabled) {
      updateSelectedTab(nextIndex);
      nextTick(() => focusTab(nextIndex));
    } else {
      // Find the next non-disabled tab
      for (let i = 1; i < allTabs.value.length; i++) {
        const index = (modelValue.value + i) % allTabs.value.length;
        if (!allTabs.value[index]?.disabled) {
          updateSelectedTab(index);
          nextTick(() => focusTab(index));
          break;
        }
      }
    }
  };

  const focusPrevTab = () => {
    const prevIndex =
      (modelValue.value - 1 + allTabs.value.length) % allTabs.value.length;
    if (!allTabs.value[prevIndex]?.disabled) {
      updateSelectedTab(prevIndex);
      nextTick(() => focusTab(prevIndex));
    } else {
      // Find the previous non-disabled tab
      for (let i = 1; i < allTabs.value.length; i++) {
        const index =
          (modelValue.value - i + allTabs.value.length) % allTabs.value.length;
        if (!allTabs.value[index]?.disabled) {
          updateSelectedTab(index);
          nextTick(() => focusTab(index));
          break;
        }
      }
    }
  };

  const focusFirstTab = () => {
    for (let i = 0; i < allTabs.value.length; i++) {
      if (!allTabs.value[i]?.disabled) {
        updateSelectedTab(i);
        nextTick(() => focusTab(i));
        break;
      }
    }
  };

  const focusLastTab = () => {
    for (let i = allTabs.value.length - 1; i >= 0; i--) {
      if (!allTabs.value[i]?.disabled) {
        updateSelectedTab(i);
        nextTick(() => focusTab(i));
        break;
      }
    }
  };

  // Reset tab refs before update
  onBeforeUpdate(() => {
    tabRefs.value = [];
  });

  // Watch for external changes to tabs array
  watch(
    () => props.tabs,
    () => {
      // If the current tab index is out of bounds after tabs change, reset to first tab
      if (modelValue.value >= allTabs.value.length) {
        updateSelectedTab(0);
      }
    },
    { deep: true },
  );

  // Expose API methods
  defineExpose({
    selectTab: updateSelectedTab,
    getActiveTab: () => allTabs.value[modelValue.value],
    getActiveIndex: () => modelValue.value,
    focusTab,
    focusNextTab,
    focusPrevTab,
    focusFirstTab,
    focusLastTab,
  });
</script>