<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Fixed Tabs Component Test</h1>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Fixed Tabs with TabPanel</h2>
      <div class="mb-2">Current active tab: {{ activeFixedTab }}</div>
      
      <Card class="p-4 mb-6">
        <TabsFixed v-model="activeFixedTab" @change="logTabChange">
          <TabPanelFixed label="First Tab">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This is content from the fixed tabs implementation.</p>
              <div class="mt-3">
                <button @click="logComponentState" class="px-3 py-1 bg-primary-100 dark:bg-primary-900 rounded">
                  Log Component State
                </button>
              </div>
            </div>
          </TabPanelFixed>
          
          <TabPanelFixed label="Second Tab" badge="New">
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This is content from the second tab using the fixed implementation.</p>
            </div>
          </TabPanelFixed>
          
          <TabPanelFixed label="Third Tab">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </template>
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-md">
              <h3 class="font-medium mb-2">Third Tab Content</h3>
              <p>This is content from the third tab with a custom icon.</p>
            </div>
          </TabPanelFixed>
        </TabsFixed>
      </Card>
      
      <div class="flex space-x-2 mb-8">
        <button 
          v-for="i in 3" 
          :key="i" 
          @click="activeFixedTab = i-1"
          class="px-3 py-1 rounded"
          :class="activeFixedTab === i-1 ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'"
        >
          Select Tab {{ i }}
        </button>
      </div>
    </div>
    
    <!-- Original Tabs for comparison -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Original Tabs Component</h2>
      <div class="mb-2">Current active tab: {{ activeOriginalTab }}</div>
      
      <Card class="p-4 mb-6">
        <Tabs v-model="activeOriginalTab" @change="logOriginalTabChange" ref="originalTabsRef">
          <TabPanel label="First Tab">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This is content from the original tabs implementation.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Second Tab" badge="New">
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This is content from the second tab using the original implementation.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Third Tab">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </template>
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-md">
              <h3 class="font-medium mb-2">Third Tab Content</h3>
              <p>This is content from the third tab.</p>
            </div>
          </TabPanel>
        </Tabs>
      </Card>
      
      <div class="flex space-x-2">
        <button 
          v-for="i in 3" 
          :key="i" 
          @click="activeOriginalTab = i-1"
          class="px-3 py-1 rounded"
          :class="activeOriginalTab === i-1 ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'"
        >
          Select Tab {{ i }}
        </button>
      </div>
    </div>
    
    <!-- Programmatic API Test -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Programmatic API Test</h2>
      <div class="mb-2">Current active tab: {{ activeProgrammaticTab }}</div>
      
      <Card class="p-4 mb-6">
        <TabsFixed :tabs="programmaticTabs" v-model="activeProgrammaticTab">
          <template #tab-content-0>
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h3 class="font-medium mb-2">Programmatic First Tab</h3>
              <p>This content is from the programmatic API using fixed tabs.</p>
            </div>
          </template>
          <template #tab-content-1>
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h3 class="font-medium mb-2">Programmatic Second Tab</h3>
              <p>This is the second tab content.</p>
            </div>
          </template>
        </TabsFixed>
      </Card>
      
      <div class="flex space-x-2">
        <button 
          v-for="i in 2" 
          :key="i" 
          @click="activeProgrammaticTab = i-1"
          class="px-3 py-1 rounded"
          :class="activeProgrammaticTab === i-1 ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'"
        >
          Select Tab {{ i }}
        </button>
      </div>
    </div>
    
    <!-- Event Log -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Event Log</h2>
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md max-h-60 overflow-y-auto">
        <div v-if="logs.length === 0" class="text-gray-500">No events logged yet</div>
        <div 
          v-for="(log, index) in logs" 
          :key="index"
          class="py-1 border-b border-gray-200 dark:border-gray-700 last:border-0 text-sm"
        >
          <span class="font-mono text-gray-500">{{ log.time }}</span>
          <span class="mx-1">-</span>
          <span>{{ log.message }}</span>
        </div>
      </div>
      <button 
        @click="logs = []" 
        class="mt-3 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Clear Logs
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Tab state
const activeFixedTab = ref(0);
const activeOriginalTab = ref(0);
const activeProgrammaticTab = ref(0);
const originalTabsRef = ref(null);

// Programmatic tabs data
const programmaticTabs = [
  { label: 'Programmatic 1' },
  { label: 'Programmatic 2', badge: 'New' }
];

// Event logging
const logs = ref([]);

// Log tab changes for fixed tabs
function logTabChange(index) {
  addLog(`Fixed tabs changed to index: ${index}`);
}

// Log tab changes for original tabs
function logOriginalTabChange(index) {
  addLog(`Original tabs changed to index: ${index}`);
}

// Log component state
function logComponentState() {
  addLog(`Current active fixed tab: ${activeFixedTab.value}`);
  
  // Check DOM for content
  const panels = document.querySelectorAll('[role="tabpanel"]');
  addLog(`Found ${panels.length} tab panels in the DOM`);
  
  // Log visible panels
  const visiblePanels = Array.from(panels).filter(panel => 
    window.getComputedStyle(panel).display !== 'none'
  );
  addLog(`${visiblePanels.length} tab panels are visible`);
  
  // Check if our content is actually in the DOM
  const headings = document.querySelectorAll('.font-medium');
  const activeHeadings = Array.from(headings).filter(h => 
    window.getComputedStyle(h.closest('[role="tabpanel"]') || h).display !== 'none'
  );
  
  if (activeHeadings.length > 0) {
    addLog(`Active heading text: "${activeHeadings[0].textContent}"`);
  } else {
    addLog('No visible headings found in active tab');
  }
}

// Add a log entry
function addLog(message) {
  const now = new Date();
  const timeStr = [
    now.getHours().toString().padStart(2, '0'),
    now.getMinutes().toString().padStart(2, '0'),
    now.getSeconds().toString().padStart(2, '0')
  ].join(':');
  
  logs.value.unshift({
    time: timeStr,
    message
  });
  
  // Limit log size
  if (logs.value.length > 50) {
    logs.value = logs.value.slice(0, 50);
  }
}
</script>