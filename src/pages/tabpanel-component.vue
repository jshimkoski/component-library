<template>
  <div class="content">
    <Prose>
      <h1>Tab Panel</h1>
      <h2>Overview</h2>
      <p>The TabPanel component represents individual content panels within a Tabs component. Each TabPanel contains the content that will be displayed when its corresponding tab is active. It's designed to work seamlessly with the declarative API of the Tabs component.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs&gt;
    &lt;TabPanel label="First Tab"&gt;
      &lt;p&gt;Content for the first tab panel.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Second Tab"&gt;
      &lt;p&gt;Content for the second tab panel.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Third Tab"&gt;
      &lt;p&gt;Content for the third tab panel.&lt;/p&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h2>Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the tab header.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>badge</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional badge text displayed next to the label.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the tab is disabled and cannot be selected.</td>
          </tr>
        </tbody>
      </table>
      <h2>Slots</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>default</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to display when this tab panel is active.</td>
          </tr>
        </tbody>
      </table>
      <h2>TabPanel with Icons</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs&gt;
    &lt;TabPanel label="Dashboard" icon="material-symbols:dashboard"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-semibold mb-2"&gt;Dashboard Overview&lt;/h3&gt;
        &lt;p&gt;Welcome to your dashboard. Here you can see an overview of your account.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Settings" icon="material-symbols:settings"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-semibold mb-2"&gt;Settings&lt;/h3&gt;
        &lt;p&gt;Configure your account settings and preferences here.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Profile" icon="material-symbols:person"&gt;
      &lt;div class="p-4"&gt;
        &lt;h3 class="text-lg font-semibold mb-2"&gt;User Profile&lt;/h3&gt;
        &lt;p&gt;Manage your personal information and profile details.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled TabPanel</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs&gt;
    &lt;TabPanel label="Available"&gt;
      &lt;p class="p-4"&gt;This tab is available and can be selected.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Coming Soon" disabled&gt;
      &lt;p class="p-4"&gt;This content is coming soon.&lt;/p&gt;
    &lt;/TabPanel&gt;
    &lt;TabPanel label="Premium Feature" disabled badge="Pro" badge-kind="warning"&gt;
      &lt;p class="p-4"&gt;This feature requires a premium subscription.&lt;/p&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Keep tab labels concise and descriptive</li>
        <li>Use icons to enhance recognition and improve usability</li>
        <li>Use badges sparingly to highlight important information (counts, status, etc.)</li>
        <li>Organize content logically within each panel</li>
        <li>Consider lazy loading for complex content in tabs that aren't immediately visible</li>
        <li>Ensure disabled tabs provide clear feedback about why they're unavailable</li>
        <li>Use consistent padding and spacing within tab panels</li>
        <li>Group related content together in the same tab panel</li>
        <li>Avoid nesting tabs within tabs for better user experience</li>
      </ul>
      <h2>Examples</h2>
      <h3>Settings Panel with Multiple Sections</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs&gt;
    &lt;TabPanel label="General" icon="material-symbols:settings"&gt;
      &lt;div class="p-6 space-y-6"&gt;
        &lt;div&gt;
          &lt;h3 class="text-lg font-semibold mb-4"&gt;Account Information&lt;/h3&gt;
          &lt;TextField label="First Name" /&gt;
          &lt;TextField label="Last Name" /&gt;
          &lt;TextField label="Email" type="email" /&gt;
          &lt;TextField label="Phone" type="tel" /&gt;
        &lt;/div&gt;

        &lt;div&gt;
          &lt;h3 class="text-lg font-semibold mb-4"&gt;Preferences&lt;/h3&gt;
          &lt;Switch label="Email notifications" /&gt;
          &lt;Switch label="SMS notifications" /&gt;
          &lt;Switch label="Marketing emails" /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;

    &lt;TabPanel label="Security" icon="material-symbols:security" badge="2" badge-kind="warning"&gt;
      &lt;div class="p-6 space-y-6"&gt;
        &lt;div&gt;
          &lt;h3 class="text-lg font-semibold mb-4"&gt;Password&lt;/h3&gt;
          &lt;TextField label="Current Password" type="password" /&gt;
          &lt;TextField label="New Password" type="password" /&gt;
          &lt;TextField label="Confirm Password" type="password" /&gt;
          &lt;Action kind="primary"&gt;Update Password&lt;/Action&gt;
        &lt;/div&gt;

        &lt;div&gt;
          &lt;h3 class="text-lg font-semibold mb-4"&gt;Two-Factor Authentication&lt;/h3&gt;
          &lt;div class="p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg"&gt;
            &lt;p class="text-warning-700 dark:text-warning-300 mb-2"&gt;
              Two-factor authentication is not enabled
            &lt;/p&gt;
            &lt;Action kind="warning"&gt;Enable 2FA&lt;/Action&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;

    &lt;TabPanel label="Billing" icon="material-symbols:credit-card"&gt;
      &lt;div class="p-6"&gt;
        &lt;h3 class="text-lg font-semibold mb-4"&gt;Subscription&lt;/h3&gt;
        &lt;Card&gt;
          &lt;div&gt;
            &lt;h4 class="font-semibold"&gt;Pro Plan&lt;/h4&gt;
            &lt;p class="text-sm text-base-600"&gt;$29/month&lt;/p&gt;
            &lt;Badge label="Active" kind="success" /&gt;
          &lt;/div&gt;
        &lt;/Card&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
      <h3>Dynamic Content Loading</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Tabs @tab-change="handleTabChange"&gt;
    &lt;TabPanel 
      v-for="category in categories" 
      :key="category.id"
      :label="category.name"
      :badge="category.count"
      :icon="category.icon"
    &gt;
      &lt;div class="p-4"&gt;
        &lt;div v-if="loading[category.id]" class="text-center py-8"&gt;
          &lt;Progress :model-value="50" size="sm" class="max-w-xs mx-auto mb-2" /&gt;
          &lt;p class="text-base-500"&gt;Loading &#123;&#123; category.name.toLowerCase() &#125;&#125;...&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;div v-else-if="content[category.id]" class="space-y-4"&gt;
          &lt;div 
            v-for="item in content[category.id]" 
            :key="item.id"
            class="p-4 border rounded-lg"
          &gt;
            &lt;h4 class="font-semibold"&gt;&#123;&#123; item.title &#125;&#125;&lt;/h4&gt;
            &lt;p class="text-sm text-base-600 mt-1"&gt;&#123;&#123; item.description &#125;&#125;&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div v-else class="text-center py-8"&gt;
          &lt;p class="text-base-500"&gt;No &#123;&#123; category.name.toLowerCase() &#125;&#125; available.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/TabPanel&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
const categories = [
  { id: 'articles', name: 'Articles', icon: 'material-symbols:article', count: '12' },
  { id: 'videos', name: 'Videos', icon: 'material-symbols:play-circle', count: '8' },
  { id: 'tutorials', name: 'Tutorials', icon: 'material-symbols:school', count: '5' }
];

const loading = ref({});
const content = ref({});

async function handleTabChange(tabIndex) {
  const category = categories[tabIndex];
  if (!content.value[category.id] &amp;&amp; !loading.value[category.id]) {
    loading.value[category.id] = true;
    try {
      const data = await fetchCategoryContent(category.id);
      content.value[category.id] = data;
    } finally {
      loading.value[category.id] = false;
    }
  }
}
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>