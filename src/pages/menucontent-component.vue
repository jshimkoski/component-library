<template>
  <div class="content">
    <Prose>
      <h1>Menu Content</h1>
      <h2>Overview</h2>
      <p>The MenuContent component provides a flexible container for custom content within menus. It adds appropriate padding and styling to ensure content fits seamlessly within the menu structure while maintaining consistent spacing with other menu components.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="User Profile" auto-width&gt;
    &lt;MenuContent&gt;
      &lt;Avatar 
          src="https://i.pravatar.cc/32" 
          size="sm" 
          alt="User Avatar" 

        &lt;div&gt;
          &lt;div class="font-medium"&gt;John Doe
          &lt;div class="text-sm text-base-500"&gt;john.doe@example.com&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/MenuContent&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Account Settings" /&gt;
    &lt;MenuItem label="Sign Out" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Props</h2>
      <p>MenuContent doesn't accept any props - it's a simple container component.</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Any custom content to display within the menu. Receives appropriate padding and styling.</td>
          </tr>
        </tbody>
      </table>
      <h2>Forms within Menus</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Quick Search" auto-width&gt;
    &lt;MenuContent&gt;
      &lt;div class="py-2"&gt;
        &lt;TextField 
          placeholder="Search items..." 
          size="sm"
          class="min-w-48"
        /&gt;
      &lt;/div&gt;
    &lt;/MenuContent&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Advanced Search" /&gt;
    &lt;MenuItem label="Search History" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use MenuContent for custom layouts that don't fit the standard MenuItem pattern</li>
        <li>Always wrap content in appropriate spacing (py-2 is recommended)</li>
        <li>Combine with MenuDivider to separate custom content from menu items</li>
        <li>Keep content focused and avoid overwhelming users with too much information</li>
        <li>Ensure custom content maintains accessibility standards</li>
        <li>Use <code>auto-width</code> on the parent Menu when content has specific width requirements</li>
        <li>Consider the menu's purpose - complex content might be better in a Dialog or Sheet</li>
        <li>Test content at different screen sizes to ensure it remains usable</li>
      </ul>
      <h2>Examples</h2>
      <h3>Interactive Content</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Quick Actions" auto-width&gt;
    &lt;MenuContent&gt;
      &lt;div class="py-2"&gt;
        &lt;div class="text-sm font-medium mb-3"&gt;Bulk Actions&lt;/div&gt;
        &lt;Action size="xs" @click="selectAll"&gt;Select All&lt;/Action&gt;
        &lt;Action size="xs" variant="outline" @click="clearSelection"&gt;Clear&lt;/Action&gt;
        &lt;div class="mt-2 text-xs text-base-500"&gt;
          &#123;&#123; selectedCount &#125;&#125; items selected
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/MenuContent&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="Edit Selected" :disabled="selectedCount === 0" /&gt;
    &lt;MenuItem label="Delete Selected" :disabled="selectedCount === 0" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
      <h3>Notification Panel</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu label="Notifications" auto-width&gt;
    &lt;MenuContent&gt;
      &lt;div class="py-2"&gt;
        Recent Notifications
          &lt;Action size="xs" variant="ghost" @click="markAllRead"&gt;
            Mark all read
          &lt;/Action&gt;
        &lt;div class="max-h-48 overflow-y-auto space-y-2"&gt;
          &lt;div 
            v-for="notification in notifications" 
            :key="notification.id"
            class="p-2 bg-base-100 dark:bg-base-800 rounded text-sm"
          &gt;
            &lt;div class="font-medium"&gt;&#123;&#123; notification.title &#125;&#125;&lt;/div&gt;
            &lt;div class="text-base-500 text-xs mt-1"&gt;&#123;&#123; notification.time &#125;&#125;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/MenuContent&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem label="View All Notifications" /&gt;
    &lt;MenuItem label="Notification Settings" /&gt;
  &lt;/Menu&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>