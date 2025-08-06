<template>
  <div class="content">
    <Prose>
      <h1>Tabs</h1>
      <p>The Tabs component provides a way to organize content into selectable views, displaying only one view at a time.</p>
      <h2>Overview</h2>
      <p>The Tabs component is used to alternate between views within the same context, saving screen space while maintaining user awareness of available options. It consists of tab headers that serve as controls and corresponding content panels.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs :tabs="tabs" v-model="activeTab" @change="handleTabChange"&gt;
    &lt;template #tab-content-0&gt;
      &lt;p&gt;This is the content for the first tab.&lt;/p&gt;
    &lt;/template&gt;

    &lt;template #tab-content-1&gt;
      &lt;p&gt;This is the content for the second tab.&lt;/p&gt;
    &lt;/template&gt;

    &lt;template #tab-content-2&gt;
      &lt;p&gt;This is the content for the third tab.&lt;/p&gt;
    &lt;/template&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const activeTab = ref(0);

const tabs = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' }
];

const handleTabChange = (index) =&gt; {
  console.log(`Tab changed to ${index}`);
};
&lt;/script&gt;</code></pre>
      <h2>Declarative TabPanel API (Recommended)</h2>
      <p>The declarative API using <code>TabPanel</code> components provides a more intuitive way to define tabs:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs v-model="activeTab" @change="handleTabChange"&gt;
    &lt;TabPanel label="Account"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-medium mb-2"&gt;Account Information&lt;/h3&gt;
        &lt;p&gt;User account settings and preferences go here.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
    
    &lt;TabPanel label="Privacy" badge="New" badgeKind="success"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-medium mb-2"&gt;Privacy Settings&lt;/h3&gt;
        &lt;p&gt;Control your privacy settings and permissions.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
    
    &lt;TabPanel label="Notifications" icon="IconMdiBell"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-medium mb-2"&gt;Notification Preferences&lt;/h3&gt;
        &lt;p&gt;Manage how you receive notifications.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
    
    &lt;TabPanel label="Disabled Tab" disabled&gt;
      &lt;div class="p-4"&gt;
        &lt;p&gt;This content is not accessible because the tab is disabled.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const activeTab = ref(0);

const handleTabChange = (index) =&gt; {
  console.log(`Tab changed to ${index}`);
};
&lt;/script&gt;</code></pre>
      <h2>Props</h2>
      <h3>Tabs Component</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tabs</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Array&lt;TabItem&gt;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of tab objects (for programmatic API)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Index of the currently active tab (use with v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables all tab interactions</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>vertical</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, arranges tabs vertically instead of horizontally</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>lazy</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, only renders tab content when tab is active</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>keepAlive</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true with lazy loading, keeps tab content in DOM after initial render</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>defaultTab</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Default tab index to show when component mounts</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headerClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>''</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom CSS class for the tab header container</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>contentClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>''</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom CSS class for the tab content container</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>panelClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>''</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom CSS class for each tab panel</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>activeTabClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>''</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom CSS class for the active tab</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>inactiveTabClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>''</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom CSS class for inactive tabs</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>transitionDuration</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>200</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Duration of tab transition in milliseconds</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>autoHeight</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, content height adjusts to the current tab</td>
          </tr>
        </tbody>
      </table>
      <h3>TabPanel Component</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Default</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label text for the tab</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables this specific tab</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>lazy</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When defined, overrides parent Tabs lazy-loading setting for this tab</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>badge</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Badge text to display in the tab</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>badgeKind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>'primary'</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Badge style variant</td>
          </tr>
        </tbody>
      </table>
      <h3>TabItem Interface (Programmatic API)</h3>
      <pre><code class="language-typescript">interface TabItem {
  label: string;
  content?: string;
  badge?: string;
  badgeKind?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  icon?: Component | string;
  disabled?: boolean;
  slot?: string;
  component?: Component;
  props?: Record&lt;string, any&gt;;
  id?: string | number;
  meta?: any;
}</code></pre>
      <h2>Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Parameters</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(index: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the active tab changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>change</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(index: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the active tab changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>before-change</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>({ from: number, to: number })</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted before tab change, can be prevented by returning <code>false</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(tab: TabItem, index: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when a tab is clicked</td>
          </tr>
        </tbody>
      </table>
      <h2>Slots</h2>
      <h3>Tabs Component Slots</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">default</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Contains TabPanel components when using the declarative API</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-headers</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Slot to completely customize the tab headers</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-icon-{index}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for the tab at the specified index</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-label-{index}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom label content for the tab at the specified index</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-badge-{index}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom badge for the tab at the specified index</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>tab-content-{index}</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content for the tab panel at the specified index</td>
          </tr>
        </tbody>
      </table>
      <h3>TabPanel Component Slots</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">default</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to display when this tab is active</td>
          </tr>
        </tbody>
      </table>
      <h2>Exposed Methods</h2>
      <p>The Tabs component exposes the following methods when using template refs:</p>
      <pre><code class="language-typescript">// Using ref
const tabsRef = ref();

// Available methods
tabsRef.value.selectTab(index); // Programmatically select a tab
tabsRef.value.getActiveTab(); // Get the current active tab object
tabsRef.value.getActiveIndex(); // Get the current active tab index
tabsRef.value.focusTab(index); // Focus a specific tab
tabsRef.value.focusNextTab(); // Focus the next tab
tabsRef.value.focusPrevTab(); // Focus the previous tab
tabsRef.value.focusFirstTab(); // Focus the first tab
tabsRef.value.focusLastTab(); // Focus the last tab</code></pre>
      <h2>Variants</h2>
      <h3>Vertical Tabs</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs vertical v-model="activeTab"&gt;
    &lt;TabPanel label="Account"&gt;
      &lt;div class="p-4"&gt;Account content&lt;/div&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Settings"&gt;
      &lt;div class="p-4"&gt;Settings content&lt;/div&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Profile"&gt;
      &lt;div class="p-4"&gt;Profile content&lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h3>With Custom Styling</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs 
    v-model="activeTab" 
    headerClass="bg-base-200 p-2" 
    contentClass="p-4 bg-base-50" 
    activeTabClass="bg-primary-100 text-primary-800 font-bold" 
    inactiveTabClass="text-base-600 hover:bg-base-100"
  &gt;
    &lt;TabPanel label="Tab 1"&gt;
      &lt;div&gt;Tab 1 Content&lt;/div&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Tab 2"&gt;
      &lt;div&gt;Tab 2 Content&lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h3>With Dynamic Components</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs :tabs="dynamicTabs" v-model="activeTab" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';
import UserSettings from './UserSettings.vue';
import UserDashboard from './UserDashboard.vue';

const activeTab = ref(0);
const dynamicTabs = [
  {
    label: 'Dashboard',
    component: UserDashboard,
    props: { userId: 123 }
  },
  {
    label: 'Profile',
    component: UserProfile,
    props: { userId: 123, editable: true }
  },
  {
    label: 'Settings',
    component: UserSettings,
    props: { theme: 'dark' }
  }
];
&lt;/script&gt;</code></pre>
      <h2>Accessibility</h2>
      <ul>
        <li>The component implements full ARIA support for tab patterns</li>
        <li>Keyboard navigation is fully supported:</li>
        <li>Tab key to focus the tab list</li>
        <li>Arrow keys to navigate between tabs (left/right or up/down)</li>
        <li>Home/End keys to jump to first/last tab</li>
        <li>Space or Enter to select a tab</li>
        <li>Focus management automatically maintains position when tabs change</li>
        <li>Disabled tabs are properly excluded from keyboard navigation</li>
        <li>Screen readers will announce the tab selection and content changes</li>
      </ul>
      <h2>Best Practices</h2>
      <ul>
        <li>Keep tab labels short and clear</li>
        <li>Use icons to enhance recognition but not as the only identifier</li>
        <li>Limit the number of tabs to avoid overwhelming users (3-7 is optimal)</li>
        <li>Use lazy loading for tabs with expensive content</li>
        <li>Consider tab widths - either equal width or content-based depending on context</li>
        <li>Use badges sparingly to highlight new or updated content</li>
        <li>Maintain a consistent hierarchy - tabs shouldn't nest tabs within the same context</li>
        <li>Use vertical tabs for more complex hierarchies or when space permits</li>
      </ul>
      <h2>Examples</h2>
      <h3>Complex Tab Layout with Custom Rendering</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs v-model="activeTab"&gt;
    &lt;template #tab-headers&gt;
      &lt;div class="flex gap-2"&gt;
        &lt;button 
          v-for="(tab, i) in tabs" 
          :key="i"
          @click="activeTab = i"
          class="px-4 py-2 rounded"
          :class="activeTab === i ? 'bg-primary-500 text-white' : 'hover:bg-base-200'"
        &gt;
          &#123;&#123; tab.label &#125;&#125;
        &lt;/button&gt;
        &lt;button class="text-primary-600"&gt;
          &lt;Icon icon="material-symbols:add" /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;TabPanel label="Dashboard"&gt;
      &lt;DashboardContent /&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Analytics"&gt;
      &lt;AnalyticsContent /&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Reports"&gt;
      &lt;ReportsContent /&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>