<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Tabs Minimal Test</h1>
    
    <div class="mb-8 flex space-x-4">
      <button 
        @click="activeTab = 0" 
        class="px-3 py-1 rounded"
        :class="activeTab === 0 ? 'bg-primary-500 text-white' : 'bg-gray-200'"
      >
        Select Tab 1
      </button>
      <button 
        @click="activeTab = 1" 
        class="px-3 py-1 rounded"
        :class="activeTab === 1 ? 'bg-primary-500 text-white' : 'bg-gray-200'"
      >
        Select Tab 2
      </button>
      <button 
        @click="activeTab = 2" 
        class="px-3 py-1 rounded"
        :class="activeTab === 2 ? 'bg-primary-500 text-white' : 'bg-gray-200'"
      >
        Select Tab 3
      </button>
    </div>
    
    <Card class="p-4">
      <h2 class="text-lg font-semibold mb-4">Current active tab: {{ activeTab }}</h2>
      
      <div class="mb-10 border rounded p-4">
        <Tabs v-model="activeTab" ref="tabsRef">
          <TabPanel label="First Tab">
            <div class="p-4 bg-blue-100 rounded">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This is content from the first tab panel.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Second Tab" badge="New">
            <div class="p-4 bg-green-100 rounded">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This is content from the second tab panel.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Third Tab">
            <div class="p-4 bg-purple-100 rounded">
              <h3 class="font-medium mb-2">Third Tab Content</h3>
              <p>This is content from the third tab panel.</p>
              <div class="mt-2">
                <button 
                  @click="logTabState"
                  class="px-3 py-1 bg-gray-200 rounded"
                >
                  Log Tab State
                </button>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      
      <h2 class="text-lg font-semibold mb-4">Debug Information</h2>
      <div class="bg-gray-100 p-4 rounded-md mb-4">
        <pre class="whitespace-pre-wrap text-sm">{{ debugInfo }}</pre>
      </div>
      
      <div>
        <button 
          @click="analyzeTabsComponent"
          class="px-3 py-1 bg-primary-500 text-white rounded mb-4"
        >
          Analyze Component State
        </button>
        
        <div v-if="events.length > 0" class="border-t pt-4 mt-4">
          <h3 class="font-medium mb-2">Event Log:</h3>
          <div class="bg-gray-100 p-3 rounded max-h-40 overflow-y-auto">
            <div 
              v-for="(event, index) in events" 
              :key="index"
              class="py-1 text-sm border-b border-gray-200 last:border-0"
            >
              <span class="font-mono">{{ event.time }}</span>
              <span class="text-gray-600 mx-1">-</span>
              <span>{{ event.message }}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref(0);
const tabsRef = ref(null);
const debugInfo = ref('Click "Analyze Component State" to see debug info');
const events = ref([]);

function analyzeTabsComponent() {
  if (!tabsRef.value) {
    addEvent('No tabs reference available');
    return;
  }

  try {
    // Extract component data for debugging
    const tabsComponent = tabsRef.value;
    const setupState = tabsComponent._setupState || {};
    
    const data = {
      activeTabIndex: tabsComponent.getActiveIndex?.() || activeTab.value,
      modelValue: setupState.modelValue?.value,
      allTabsCount: setupState.allTabs?.value?.length || 0,
      panelItemsCount: setupState.tabPanelItems?.value?.length || 0,
      renderedTabs: setupState.renderedTabs?.value ? Array.from(setupState.renderedTabs.value) : [],
      panelComponentsKeys: Object.keys(setupState.panelComponents?.value || {})
    };
    
    // Store visible tab panels in the DOM
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    data.visibleTabPanelsCount = Array.from(tabPanels).filter(panel => 
      panel.style.display !== 'none'
    ).length;
    
    debugInfo.value = JSON.stringify(data, null, 2);
    addEvent(`Component analyzed: Found ${data.allTabsCount} tabs, active tab: ${data.activeTabIndex}`);
  } catch (error) {
    debugInfo.value = `Error: ${error.message}`;
    addEvent(`Analysis error: ${error.message}`);
  }
}

function logTabState() {
  const index = activeTab.value;
  addEvent(`Current active tab index: ${index}`);
  
  if (tabsRef.value) {
    const activeTabObj = tabsRef.value.getActiveTab?.();
    const label = activeTabObj?.label || 'unknown';
    addEvent(`Active tab label: ${label}`);
  }
  
  // Check DOM state
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');
  const visiblePanels = Array.from(tabPanels).filter(panel => 
    panel.style.display !== 'none'
  );
  
  addEvent(`Found ${tabPanels.length} tab panels in DOM, ${visiblePanels.length} visible`);
}

function addEvent(message) {
  const now = new Date();
  const timeStr = [
    now.getHours().toString().padStart(2, '0'),
    now.getMinutes().toString().padStart(2, '0'),
    now.getSeconds().toString().padStart(2, '0')
  ].join(':');
  
  events.value.unshift({
    time: timeStr,
    message
  });
  
  // Limit number of events
  if (events.value.length > 50) {
    events.value = events.value.slice(0, 50);
  }
}
</script>