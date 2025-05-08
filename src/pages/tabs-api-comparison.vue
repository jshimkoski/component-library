<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Tabs API Comparison</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Declarative API -->
      <div class="border p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Declarative API (TabPanel)</h2>
        <div class="mb-4 bg-base-100 dark:bg-base-900 p-4 rounded">
          <code class="whitespace-pre-wrap text-sm">
&lt;Tabs v-model="activeTab"&gt;
  &lt;TabPanel label="First Tab"&gt;
    Content for first tab
  &lt;/TabPanel&gt;
  &lt;TabPanel label="Second Tab" badge="New"&gt;
    Content for second tab
  &lt;/TabPanel&gt;
&lt;/Tabs&gt;
          </code>
        </div>
        
        <Tabs 
          v-model="activeDeclarativeTab" 
          class="mb-4"
          @change="logTabChange('declarative', $event)"
        >
          <TabPanel label="First Tab">
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This content comes from the declarative API using TabPanel components.</p>
              <div class="mt-3 p-3 bg-base-100 dark:bg-base-800 rounded">
                <pre>Active tab: {{ activeDeclarativeTab }}</pre>
              </div>
            </div>
          </TabPanel>
          
          <TabPanel label="Second Tab" badge="New" badgeKind="success">
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This tab has a badge to show it's new.</p>
              <button 
                @click="checkSlots"
                class="mt-2 px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
              >
                Check Slots
              </button>
            </div>
          </TabPanel>
          
          <TabPanel label="With Icon">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </template>
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">Tab With Icon</h3>
              <p>This tab includes a custom icon in the header.</p>
            </div>
          </TabPanel>
        </Tabs>
        
        <div>
          <button 
            v-for="i in 3" 
            :key="`decl-${i}`" 
            @click="activeDeclarativeTab = i-1"
            class="mr-2 px-3 py-1 bg-base-200 dark:bg-base-800 rounded hover:bg-base-300 dark:hover:bg-base-700"
            :class="{'bg-primary-100 dark:bg-primary-900': activeDeclarativeTab === i-1}"
          >
            Go to Tab {{ i }}
          </button>
        </div>
      </div>
      
      <!-- Programmatic API -->
      <div class="border p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Programmatic API (tabs prop)</h2>
        <div class="mb-4 bg-base-100 dark:bg-base-900 p-4 rounded">
          <code class="whitespace-pre-wrap text-sm">
&lt;Tabs 
  :tabs="[
    { label: 'First Tab' },
    { label: 'Second Tab', badge: 'New' }
  ]"
  v-model="activeTab"
&gt;
  &lt;template #tab-content-0&gt;
    Content for first tab
  &lt;/template&gt;
  &lt;template #tab-content-1&gt;
    Content for second tab
  &lt;/template&gt;
&lt;/Tabs&gt;
          </code>
        </div>
        
        <Tabs 
          :tabs="programmaticTabs" 
          v-model="activeProgrammaticTab"
          class="mb-4"
          @change="logTabChange('programmatic', $event)"
        >
          <template #tab-content-0>
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">First Tab Content</h3>
              <p>This content comes from the programmatic API using tabs prop and named slots.</p>
              <div class="mt-3 p-3 bg-base-100 dark:bg-base-800 rounded">
                <pre>Active tab: {{ activeProgrammaticTab }}</pre>
              </div>
            </div>
          </template>
          
          <template #tab-content-1>
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">Second Tab Content</h3>
              <p>This tab also has a badge to show it's new.</p>
            </div>
          </template>
          
          <template #tab-content-2>
            <div class="p-4 bg-base-50 dark:bg-base-900 rounded-md">
              <h3 class="font-medium mb-2">Tab With Icon</h3>
              <p>This tab includes a custom icon via the tabs configuration.</p>
            </div>
          </template>
        </Tabs>
        
        <div>
          <button 
            v-for="i in 3" 
            :key="`prog-${i}`" 
            @click="activeProgrammaticTab = i-1"
            class="mr-2 px-3 py-1 bg-base-200 dark:bg-base-800 rounded hover:bg-base-300 dark:hover:bg-base-700"
            :class="{'bg-primary-100 dark:bg-primary-900': activeProgrammaticTab === i-1}"
          >
            Go to Tab {{ i }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Events Log -->
    <div class="mt-8 border p-6 rounded-lg shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Events Log</h2>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-md max-h-60 overflow-y-auto">
        <div v-if="events.length === 0" class="text-base-500">No events yet</div>
        <div 
          v-for="(event, index) in events" 
          :key="index" 
          class="text-sm py-1 border-b border-base-200 dark:border-base-800 last:border-0"
        >
          <span class="font-mono">[{{ event.time }}]</span> 
          <span class="font-medium mx-1">{{ event.type }}:</span> 
          <span>{{ event.message }}</span>
        </div>
      </div>
      <button 
        @click="events = []" 
        class="mt-3 px-3 py-1 bg-base-200 dark:bg-base-800 rounded hover:bg-base-300 dark:hover:bg-base-700"
      >
        Clear Log
      </button>
    </div>
    
    <!-- Debug Information -->
    <div class="mt-8 border p-6 rounded-lg shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Debug Information</h2>
      <TabsDebug :tabs-ref="declarativeTabsRef" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State for declarative API
const declarativeTabsRef = ref(null);
const activeDeclarativeTab = ref(0);

// State for programmatic API
const activeProgrammaticTab = ref(0);
const programmaticTabs = [
  { label: 'First Tab' },
  { label: 'Second Tab', badge: 'New', badgeKind: 'success' },
  { 
    label: 'With Icon', 
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      `
    } 
  }
];

// Event logging
const events = ref([]);

function logTabChange(apiType, tabIndex) {
  addEvent('change', `${apiType} API tab changed to index ${tabIndex}`);
}

function addEvent(type, message) {
  const now = new Date();
  const timeStr = [
    now.getHours().toString().padStart(2, '0'),
    now.getMinutes().toString().padStart(2, '0'),
    now.getSeconds().toString().padStart(2, '0')
  ].join(':');
  
  events.value.unshift({
    time: timeStr,
    type,
    message
  });
  
  // Limit number of events
  if (events.value.length > 100) {
    events.value = events.value.slice(0, 100);
  }
}

function checkSlots() {
  // Access the Tabs component to check internal state
  const tabsComponent = declarativeTabsRef.value;
  
  if (!tabsComponent) {
    addEvent('error', 'Could not access tabs component');
    return;
  }
  
  try {
    // Try to access internal state (this is for debugging only)
    const setupState = tabsComponent._setupState || {};
    const panelItems = setupState.tabPanelItems?.value || [];
    const allTabs = setupState.allTabs?.value || [];
    const panelComponents = setupState.panelComponents?.value || {};
    
    addEvent('info', `Found ${panelItems.length} panel items, ${allTabs.length} total tabs`);
    addEvent('info', `Panel components keys: ${Object.keys(panelComponents).join(', ')}`);
    
    // Check if slots are functions
    for (const key in panelComponents) {
      const slot = panelComponents[key];
      addEvent('debug', `Slot ${key} type: ${typeof slot}`);
      if (typeof slot === 'object') {
        addEvent('debug', `Slot ${key} has default: ${!!slot.default}`);
      }
    }
  } catch (error) {
    addEvent('error', `Error checking slots: ${error.message}`);
  }
}
</script>