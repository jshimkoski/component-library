<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Simplified Tabs Test</h1>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Simplified Tabs Component</h2>
      <div class="mb-2">Current active tab: {{ activeSimpleTab }}</div>
      
      <Card class="p-4 mb-6">
        <SimpleTabs v-model="activeSimpleTab" @change="logTabChange">
          <SimpleTabPanel label="First Tab">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This is content from the simplified tabs implementation.</p>
              <div class="mt-3">
                <button @click="logSlotContent" class="px-3 py-1 bg-primary-100 dark:bg-primary-900 rounded">
                  Log Slot Info
                </button>
              </div>
            </div>
          </SimpleTabPanel>
          
          <SimpleTabPanel label="Second Tab">
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This is content from the second tab using the simplified implementation.</p>
            </div>
          </SimpleTabPanel>
          
          <SimpleTabPanel label="Third Tab">
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-md">
              <h3 class="font-medium mb-2">Third Tab Content</h3>
              <p>This is content from the third tab.</p>
            </div>
          </SimpleTabPanel>
        </SimpleTabs>
      </Card>
      
      <div class="flex space-x-2 mb-8">
        <button 
          v-for="i in 3" 
          :key="i" 
          @click="activeSimpleTab = i-1"
          class="px-3 py-1 rounded"
          :class="activeSimpleTab === i-1 ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'"
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
        <Tabs v-model="activeOriginalTab" @change="logOriginalTabChange">
          <TabPanel label="First Tab">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This is content from the original tabs implementation.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Second Tab">
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This is content from the second tab using the original implementation.</p>
            </div>
          </TabPanel>
          
          <TabPanel label="Third Tab">
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
const activeSimpleTab = ref(0);
const activeOriginalTab = ref(0);

// Event logging
const logs = ref([]);

// Log tab changes for simplified tabs
function logTabChange(index) {
  addLog(`Simplified tab changed to index: ${index}`);
}

// Log tab changes for original tabs
function logOriginalTabChange(index) {
  addLog(`Original tab changed to index: ${index}`);
}

// Log info about slot content
function logSlotContent() {
  addLog('Examining slot content for simplified tab...');
  
  // Find all tab panels in the DOM
  const panels = document.querySelectorAll('.tab-panel');
  addLog(`Found ${panels.length} tab panels in the DOM`);
  
  // Check visibility
  const visiblePanels = Array.from(panels).filter(panel => 
    window.getComputedStyle(panel).display !== 'none'
  );
  addLog(`${visiblePanels.length} panels are visible`);
  
  // Log information about the active tab
  addLog(`Current active tab index: ${activeSimpleTab.value}`);
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