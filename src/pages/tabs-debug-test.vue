<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">Tabs Declarative API Debug</h1>

    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Simple Tabs with Logging</h2>
      <div class="mb-2">
        <button 
          @click="showTabsStructure = !showTabsStructure" 
          class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
        >
          {{ showTabsStructure ? 'Hide' : 'Show' }} Tabs Structure
        </button>
      </div>
      
      <div v-if="showTabsStructure" class="p-3 mb-4 bg-gray-100 dark:bg-gray-800 rounded-md">
        <pre>{{ tabsStructure }}</pre>
      </div>
      
      <Card class="p-6">
        <Tabs ref="tabsRef" v-model="activeTab" @change="handleTabChange">
          <TabPanel label="First Tab" id="tab1">
            <div class="p-4 border rounded">
              <h3 class="text-lg font-medium">First Tab Content</h3>
              <p>This is the content for the first tab.</p>
              <button 
                @click="logTabPanelState" 
                class="mt-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                Log Tab State
              </button>
            </div>
          </TabPanel>
          
          <TabPanel label="Second Tab" badge="New" id="tab2">
            <div class="p-4 border rounded">
              <h3 class="text-lg font-medium">Second Tab Content</h3>
              <p>This is content for the second tab with a badge.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Third Tab" id="tab3">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.27.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.83.308-1.278 0-1.641-1.359-3-3-3-.448 0-.888.118-1.277.309L9.428 8.015c.776-.264 1.644-.413 2.572-.413 5.351 0 7.424 3.846 7.926 5-1.326 2.681-2.965 4.355-4.954 4.956z"/>
              </svg>
            </template>
            <div class="p-4 border rounded">
              <h3 class="text-lg font-medium">Third Tab Content</h3>
              <p>This tab has a custom icon.</p>
            </div>
          </TabPanel>
        </Tabs>
      </Card>
    </div>

    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Component Structure</h2>
      <Card class="p-6">
        <div v-if="tabPanelInfo.length > 0">
          <h3 class="text-lg font-medium mb-3">TabPanel Information:</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li v-for="(panel, index) in tabPanelInfo" :key="index">
              <strong>Panel {{ index }}:</strong>
              <ul class="list-circle pl-5 mt-1">
                <li>Label: {{ panel.label }}</li>
                <li>ID: {{ panel.id }}</li>
                <li>Tab ID: {{ panel.tabId }}</li>
                <li>Is Active: {{ panel.isActive }}</li>
                <li>Has Slot: {{ panel.hasSlot ? 'Yes' : 'No' }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div v-else class="text-gray-500">
          No TabPanel information available
        </div>
      </Card>
    </div>

    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">DOM Structure Debug</h2>
      <Card class="p-6">
        <button 
          @click="analyzeDomStructure" 
          class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
        >
          Analyze DOM Structure
        </button>
        
        <div v-if="domStructure" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
          <pre class="whitespace-pre-wrap">{{ domStructure }}</pre>
        </div>
      </Card>
    </div>
    
    <div class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Debug Actions</h2>
      <Card class="p-6 flex flex-wrap gap-3">
        <button 
          @click="activeTab = 0" 
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Select Tab 1
        </button>
        <button 
          @click="activeTab = 1" 
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Select Tab 2
        </button>
        <button 
          @click="activeTab = 2" 
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Select Tab 3
        </button>
        <button 
          @click="refreshTabPanelInfo" 
          class="px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
        >
          Refresh Tab Info
        </button>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

const activeTab = ref(0);
const tabsRef = ref(null);
const tabPanelInfo = ref([]);
const showTabsStructure = ref(false);
const domStructure = ref('');

const tabRefs = ref([]);

// Get internal tab structure for debugging
const tabsStructure = computed(() => {
  if (!tabsRef.value) return 'No tabs ref available';
  
  // Clone the structure while removing circular references
  const getCleanObject = (obj, depth = 0) => {
    if (depth > 2) return '[Object]'; // Limit depth
    if (!obj) return null;
    
    if (Array.isArray(obj)) {
      return obj.map(item => getCleanObject(item, depth + 1));
    }
    
    if (typeof obj === 'object') {
      const result = {};
      for (const key in obj) {
        // Skip Vue internal properties and functions
        if (key.startsWith('_') || typeof obj[key] === 'function') continue;
        // Skip slots that may contain circular references
        if (key === 'slots' || key === 'instance') {
          result[key] = '[Instance/Slots Object]';
        } else {
          result[key] = getCleanObject(obj[key], depth + 1);
        }
      }
      return result;
    }
    
    return obj;
  };
  
  try {
    // Safely extract tab data
    const setupState = tabsRef.value._setupState || {};
    const data = {
      modelValue: setupState.modelValue?.value,
      allTabs: getCleanObject(setupState.allTabs?.value),
      tabPanelItems: getCleanObject(setupState.tabPanelItems?.value),
      panelComponents: Object.keys(setupState.panelComponents?.value || {}).length + ' entries',
      iconSlots: Object.keys(setupState.iconSlots?.value || {}).length + ' entries',
      renderedTabs: Array.from(setupState.renderedTabs?.value || []),
    };
    
    return JSON.stringify(data, null, 2);
  } catch (error) {
    return `Error getting tab structure: ${error.message}`;
  }
});

// Handle tab change
function handleTabChange(index) {
  console.log(`Tab changed to index: ${index}`);
  refreshTabPanelInfo();
}

// Log the state of the current tab panel
function logTabPanelState() {
  const allTabRefs = document.querySelectorAll('[role="tab"]');
  console.log('All tab elements:', allTabRefs);
  
  const allPanels = document.querySelectorAll('[role="tabpanel"]');
  console.log('All tabpanel elements:', allPanels);
  
  // Log the active panel
  const activePanel = Array.from(allPanels).find(panel => 
    panel.style.display !== 'none' && !panel.hidden
  );
  console.log('Active panel:', activePanel);
  
  console.log('Current active tab index:', tabsRef.value?.getActiveIndex?.());
}

// Analyze the DOM structure of tabs
function analyzeDomStructure() {
  if (!tabsRef.value) {
    domStructure.value = 'No tabs reference available';
    return;
  }
  
  // Helper function to get a simplified representation of an element
  const getElementInfo = (el, depth = 0) => {
    if (!el || depth > 10) return '';
    
    const indent = '  '.repeat(depth);
    let result = `${indent}<${el.tagName.toLowerCase()}`;
    
    // Add important attributes
    if (el.id) result += ` id="${el.id}"`;
    if (el.role) result += ` role="${el.role}"`;
    if (el.className && el.className.length > 0) {
      result += ` class="${el.className}"`;
    }
    
    // Handle children
    if (el.children.length === 0) {
      if (el.textContent.trim()) {
        result += `> ${el.textContent.trim().substring(0, 40)}${el.textContent.length > 40 ? '...' : ''} </${el.tagName.toLowerCase()}>`;
      } else {
        result += ' />';
      }
    } else {
      result += '>\n';
      for (let i = 0; i < Math.min(el.children.length, 20); i++) {
        result += getElementInfo(el.children[i], depth + 1);
      }
      if (el.children.length > 20) {
        result += `${indent}  ... ${el.children.length - 20} more elements\n`;
      }
      result += `${indent}</${el.tagName.toLowerCase()}>\n`;
    }
    
    return result;
  };
  
  // Get the tabs container element
  const tabsContainer = tabsRef.value.$el;
  if (tabsContainer) {
    domStructure.value = getElementInfo(tabsContainer);
  } else {
    domStructure.value = 'Could not find tabs container element';
  }
}

// Refresh information about TabPanel components
function refreshTabPanelInfo() {
  // Check if we can access the tabsRef
  if (!tabsRef.value) {
    console.error('No tabs reference available');
    return;
  }
  
  // Get the tab panel elements
  const panels = [];
  
  // Try to use exposed API if available
  if (typeof tabsRef.value.getActiveIndex === 'function') {
    const activeIndex = tabsRef.value.getActiveIndex();
    console.log('Active tab index from API:', activeIndex);
    
    // Get all tabs if possible
    if (tabsRef.value._setupState?.allTabs?.value) {
      const allTabs = tabsRef.value._setupState.allTabs.value;
      console.log('All tabs from internal state:', allTabs);
      
      allTabs.forEach((tab, index) => {
        panels.push({
          label: tab.label || `Tab ${index + 1}`,
          id: tab.id || `unknown-${index}`,
          tabId: index,
          isActive: index === activeIndex,
          hasSlot: !!tab.slot
        });
      });
    }
  }
  
  tabPanelInfo.value = panels;
}

onMounted(async () => {
  // Wait for components to be fully mounted
  await nextTick();
  refreshTabPanelInfo();
});
</script>