<template>
  <Prose>
    <h1>Tabs</h1>
    <p>
      The Tabs component provides a way to organize content into selectable
      views, displaying only one view at a time.
    </p>
  </Prose>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
    <Card class="p-6">
      <Tabs
        ref="basicTabsRef"
        :tabs="basicTabs"
        v-model="activeBasicTab"
      >
        <template #tab-content-0>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">First Tab Content</h3>
            <p>
              This is the content for the first tab. You can put any components
              or content here.
            </p>
          </div>
        </template>
        <template #tab-content-1>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Second Tab Content</h3>
            <p>
              This is the content for the second tab, displayed when the tab is
              selected.
            </p>
          </div>
        </template>
        <template #tab-content-2>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Third Tab Content</h3>
            <p>
              This is the content for the third tab. Each tab can have
              completely different content.
            </p>
          </div>
        </template>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ basicTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Declarative API with TabPanel</h2>
    <Card class="p-6">
      <Tabs ref="tabPanelsRef" v-model="activeTabPanels">
        <TabPanel label="Account">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Account Information</h3>
            <p>User account settings and preferences go here.</p>
          </div>
        </TabPanel>

        <TabPanel
          label="Privacy"
          badge="New"
          badgeKind="success"
        >
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Privacy Settings</h3>
            <p>Control your privacy settings and permissions.</p>
          </div>
        </TabPanel>

        <TabPanel label="Notifications">
          <template #icon>
            <IconMdiBell class="w-5 h-5" />
          </template>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Notification Preferences</h3>
            <p>Manage how you receive notifications.</p>
          </div>
        </TabPanel>

        <TabPanel
          label="Disabled Tab"
          disabled
        >
          <div class="p-4">
            <p>This content is not accessible because the tab is disabled.</p>
          </div>
        </TabPanel>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ declarativeTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Tabs with Icons</h2>
    <Card class="p-6">
      <Tabs
        ref="iconTabsRef"
        :tabs="iconTabs"
        v-model="activeIconTab"
      >
        <template #tab-icon-0>
          <IconMdiHome class="w-5 h-5" />
        </template>
        <template #tab-icon-1>
          <IconMdiCog class="w-5 h-5" />
        </template>
        <template #tab-icon-2>
          <IconMdiAccount class="w-5 h-5" />
        </template>

        <template #tab-content-0>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Home</h3>
            <p>Welcome to the home tab with icon.</p>
          </div>
        </template>
        <template #tab-content-1>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Settings</h3>
            <p>Configure your settings here.</p>
          </div>
        </template>
        <template #tab-content-2>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Profile</h3>
            <p>View and edit your profile information.</p>
          </div>
        </template>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>{{ iconTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Vertical Tabs</h2>
    <Card class="p-6">
      <Tabs
        ref="verticalTabsRef"
        vertical
        v-model="activeVerticalTab"
      >
        <TabPanel label="Dashboard">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Dashboard</h3>
            <p>Vertical tabs are great for side navigation patterns.</p>
          </div>
        </TabPanel>
        <TabPanel label="Reports">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Reports</h3>
            <p>Report content goes here.</p>
          </div>
        </TabPanel>
        <TabPanel label="Analytics">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Analytics</h3>
            <p>View your analytics here.</p>
          </div>
        </TabPanel>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ verticalTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Tabs with Badges</h2>
    <Card class="p-6">
      <Tabs
        :tabs="badgeTabs"
        v-model="activeBadgeTab"
      >
        <template #tab-content-0>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Inbox</h3>
            <p>You have 3 unread messages.</p>
          </div>
        </template>
        <template #tab-content-1>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Sent</h3>
            <p>Your sent messages will appear here.</p>
          </div>
        </template>
        <template #tab-content-2>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Drafts</h3>
            <p>You have 5 saved drafts.</p>
          </div>
        </template>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ badgeTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Lazy Loading Tabs</h2>
    <Card class="p-6">
      <Tabs
        lazy
        v-model="activeLazyTab"
      >
        <TabPanel label="Fast Tab">
          <div class="p-4">
            <p>This content is simple and loads quickly.</p>
          </div>
        </TabPanel>
        <TabPanel label="Slow Tab">
          <div class="p-4">
            <p>
              This tab content would only be loaded when you select this tab.
            </p>
            <p class="mt-2">Great for tabs with heavy components or data.</p>
          </div>
        </TabPanel>
        <TabPanel label="Another Slow Tab">
          <div class="p-4">
            <p>This tab content is also lazily loaded.</p>
          </div>
        </TabPanel>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre class="text-sm overflow-x-auto"><code>{{ lazyTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Custom Styled Tabs</h2>
    <Card class="p-6">
      <Tabs
        v-model="activeCustomTab"
        headerClass="bg-base-200 p-2 rounded-xl"
        contentClass="mt-6 p-4 bg-base-50 rounded-lg shadow-sm"
        activeTabClass="bg-primary-100 text-primary-800 font-bold"
        inactiveTabClass="text-base-600 hover:bg-base-100"
      >
        <TabPanel label="Custom Tab 1">
          <div>
            <p>Custom styled tab content 1.</p>
          </div>
        </TabPanel>
        <TabPanel label="Custom Tab 2">
          <div>
            <p>Custom styled tab content 2.</p>
          </div>
        </TabPanel>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ customStyledTabsCode }}</code></pre>
    </div>
  </div>

  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Disabled Tabs</h2>
    <Card class="p-6">
      <Tabs
        :tabs="basicTabs"
        v-model="activeDisabledTab"
        disabled
      >
        <template #tab-content-0>
          <div class="p-4">
            <p>This tab content is not accessible because tabs are disabled.</p>
          </div>
        </template>
        <template #tab-content-1>
          <div class="p-4">
            <p>This tab content is not accessible because tabs are disabled.</p>
          </div>
        </template>
        <template #tab-content-2>
          <div class="p-4">
            <p>This tab content is not accessible because tabs are disabled.</p>
          </div>
        </template>
      </Tabs>
    </Card>
    <div class="mt-4 bg-base-100 dark:bg-base-900 p-4 rounded-lg">
      <pre
        class="text-sm overflow-x-auto"
      ><code>{{ disabledTabsCode }}</code></pre>
    </div>
  </div>
  
  <div class="mt-8 mb-12">
    <h2 class="text-xl font-semibold mb-4">Debugging Tabs</h2>
    <Card class="p-6">
      <div class="space-y-4">
        <div>
          <h3 class="text-base font-medium mb-2">Basic Tabs Debug</h3>
          <TabsDebug :tabs-ref="basicTabsRef" />
        </div>
        <div>
          <h3 class="text-base font-medium mb-2">TabPanel API Debug</h3>
          <TabsDebug :tabs-ref="tabPanelsRef" />
        </div>
        <div>
          <h3 class="text-base font-medium mb-2">Icon Tabs Debug</h3>
          <TabsDebug :tabs-ref="iconTabsRef" />
        </div>
        <div>
          <h3 class="text-base font-medium mb-2">Vertical Tabs Debug</h3>
          <TabsDebug :tabs-ref="verticalTabsRef" />
        </div>
      </div>
    </Card>
  </div>

  <Prose>
    <h2>API Reference</h2>
    <h3>Props</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>tabs</code></td>
          <td><code>Array&lt;TabItem&gt;</code></td>
          <td><code>[]</code></td>
          <td>Array of tab objects with label, content, badge properties</td>
        </tr>
        <tr>
          <td><code>modelValue</code></td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>Index of the active tab (use with v-model)</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>When true, disables all tab interactions</td>
        </tr>
        <tr>
          <td><code>vertical</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>When true, tabs display vertically</td>
        </tr>
        <tr>
          <td><code>lazy</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>When true, only renders tab content when tab is active</td>
        </tr>
        <tr>
          <td><code>headerClass</code></td>
          <td><code>String</code></td>
          <td><code>''</code></td>
          <td>Custom CSS class for tab headers container</td>
        </tr>
        <tr>
          <td><code>contentClass</code></td>
          <td><code>String</code></td>
          <td><code>''</code></td>
          <td>Custom CSS class for tab content container</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Parameters</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>update:modelValue</code></td>
          <td><code>(index: number)</code></td>
          <td>Emitted when the active tab changes</td>
        </tr>
        <tr>
          <td><code>change</code></td>
          <td><code>(index: number)</code></td>
          <td>Emitted when the active tab changes</td>
        </tr>
        <tr>
          <td><code>before-change</code></td>
          <td><code>({ from: number, to: number })</code></td>
          <td>Emitted before tab change, can be prevented</td>
        </tr>
      </tbody>
    </table>

    <h3>Slots</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>default</code></td>
          <td>Contains TabPanel components when using declarative API</td>
        </tr>
        <tr>
          <td><code>tab-headers</code></td>
          <td>Slot to customize all tab headers</td>
        </tr>
        <tr>
          <td><code>tab-icon-{index}</code></td>
          <td>Custom icon for the tab at the specified index</td>
        </tr>
        <tr>
          <td><code>tab-content-{index}</code></td>
          <td>Content for the tab panel at the specified index</td>
        </tr>
      </tbody>
    </table>

    <h3>TabPanel Props</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>label</code></td>
          <td><code>String</code></td>
          <td>Required</td>
          <td>Label text for the tab</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>When true, disables this specific tab</td>
        </tr>
        <tr>
          <td><code>badge</code></td>
          <td><code>String</code></td>
          <td><code>undefined</code></td>
          <td>Badge text to display in the tab</td>
        </tr>
        <tr>
          <td><code>badgeKind</code></td>
          <td><code>String</code></td>
          <td><code>'primary'</code></td>
          <td>Badge style variant</td>
        </tr>
      </tbody>
    </table>
  </Prose>
</template>

<script setup>
  import { ref } from "vue";

  // References to the tabs components
  const basicTabsRef = ref(null);
  const tabPanelsRef = ref(null);
  const iconTabsRef = ref(null);
  const verticalTabsRef = ref(null);
  
  // Basic tabs example
  const activeBasicTab = ref(0);
  const basicTabs = [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" },
  ];

  // TabPanel examples
  const activeTabPanels = ref(0);

  // Icon tabs example
  const activeIconTab = ref(0);
  const iconTabs = [
    { label: "Home" },
    { label: "Settings" },
    { label: "Profile" },
  ];

  // Vertical tabs
  const activeVerticalTab = ref(0);

  // Badge tabs example
  const activeBadgeTab = ref(0);
  const badgeTabs = [
    { label: "Inbox", badge: "3", badgeKind: "primary" },
    { label: "Sent" },
    { label: "Drafts", badge: "5", badgeKind: "warning" },
  ];

  // Lazy loading tabs
  const activeLazyTab = ref(0);

  // Custom styled tabs
  const activeCustomTab = ref(0);

  // Disabled tabs example
  const activeDisabledTab = ref(0);
</script>
