<template>
  <div class="content">
    <Prose>
      <h1>Floating UI</h1>
      <h2>Overview</h2>
      <p>The FloatingUi component is a low-level utility component that provides floating element positioning using the Floating UI library. It's primarily used internally by other components like Tooltip, Menu, and Dialog to create properly positioned popover content. This component handles complex positioning logic, collision detection, and responsive placement.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi 
    v-model:open="isOpen"
    text="This is a floating element"
    placement="top"
  &gt;
    &lt;Action @click="isOpen = !isOpen"&gt;Toggle Floating Element&lt;/Action&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;

&lt;script setup&gt;
const isOpen = ref(false);
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>open</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the floating element is visible (v-model).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Simple text content for the floating element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;top&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Preferred placement of the floating element relative to the trigger.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>hideArrow</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to hide the arrow pointer.</td>
          </tr>
        </tbody>
      </table>
      <h2>Placement Options</h2>
      <p>The <code>placement</code> prop accepts any valid Floating UI placement:</p>
      <ul>
        <li><code>top</code>, <code>top-start</code>, <code>top-end</code></li>
        <li><code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code></li>
        <li><code>left</code>, <code>left-start</code>, <code>left-end</code></li>
        <li><code>right</code>, <code>right-start</code>, <code>right-end</code></li>
      </ul>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Trigger element that activates the floating UI. Receives props: <code>isOpen</code>, <code>open()</code>, <code>close()</code>, <code>toggle()</code>.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>popover</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content of the floating element. Receives props: <code>isOpen</code>, <code>open()</code>, <code>close()</code>, <code>toggle()</code>.</td>
          </tr>
        </tbody>
      </table>
      <h2>Plain vs Rich Styling</h2>
      <p>v-model:open="plainOpen"</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Plain style (tooltip-like) --&gt;
  &lt;FloatingUi 
    v-model:open="plainOpen"
    text="Plain tooltip style"
    type="plain"
    placement="top"
  &gt;
    &lt;Action @click="plainOpen = !plainOpen"&gt;Plain Style&lt;/Action&gt;
  &lt;/FloatingUi&gt;

  &lt;!-- Rich style (popover-like) --&gt;
  &lt;FloatingUi 
    v-model:open="richOpen"
    type="rich"
    placement="top"
  &gt;
    &lt;Action @click="richOpen = !richOpen"&gt;Rich Style&lt;/Action&gt;
    &lt;template #popover&gt;
      &lt;div class="p-3"&gt;
        &lt;h4 class="font-semibold mb-1"&gt;Rich Content&lt;/h4&gt;
        &lt;p class="text-sm"&gt;This supports complex content with styling.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;</code></pre>
      <h2>Different Placements</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi v-model:open="topOpen" text="Top placement" placement="top"&gt;
    &lt;Action @click="topOpen = !topOpen"&gt;Top&lt;/Action&gt;
  &lt;/FloatingUi&gt;

  &lt;FloatingUi v-model:open="bottomOpen" text="Bottom placement" placement="bottom"&gt;
    &lt;Action @click="bottomOpen = !bottomOpen"&gt;Bottom&lt;/Action&gt;
  &lt;/FloatingUi&gt;

  &lt;FloatingUi v-model:open="leftOpen" text="Left placement" placement="left"&gt;
    &lt;Action @click="leftOpen = !leftOpen"&gt;Left&lt;/Action&gt;
  &lt;/FloatingUi&gt;

  &lt;FloatingUi v-model:open="rightOpen" text="Right placement" placement="right"&gt;
    &lt;Action @click="rightOpen = !rightOpen"&gt;Right&lt;/Action&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;</code></pre>
      <h2>Custom Content</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi 
    v-model:open="customOpen"
    type="rich"
    placement="bottom-start"
  &gt;
    &lt;Action @click="customOpen = !customOpen"&gt;User Profile&lt;/Action&gt;
    &lt;template #popover="{ close }"&gt;
      &lt;div class="p-4 min-w-64"&gt;
        &lt;Avatar src="https://i.pravatar.cc/40" size="sm" /&gt;
          &lt;div&gt;
            &lt;div class="font-semibold"&gt;John Doe
            &lt;div class="text-sm text-base-500"&gt;john@example.com&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;Action variant="ghost" size="sm" class="w-full justify-start"&gt;
            View Profile
          &lt;/Action&gt;
          &lt;Action variant="ghost" size="sm" class="w-full justify-start"&gt;
            Settings
          &lt;/Action&gt;
          &lt;Action variant="ghost" size="sm" class="w-full justify-start" @click="close"&gt;
            Sign Out
          &lt;/Action&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;</code></pre>
      <h2>Without Arrow</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi 
    v-model:open="isOpen"
    type="rich"
    placement="top"
    hide-arrow
  &gt;
    &lt;Action @click="isOpen = !isOpen"&gt;No Arrow&lt;/Action&gt;
    &lt;template #popover&gt;
      &lt;div class="p-3"&gt;
        &lt;p class="text-sm"&gt;This floating element has no arrow pointer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;</code></pre>
      <h2>Advanced Usage</h2>
      <h3>Programmatic Control</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi 
    v-model:open="programmaticOpen"
    type="rich"
    placement="bottom"
  &gt;
    &lt;Action&gt;Hover Target&lt;/Action&gt;
    &lt;template #popover="{ isOpen }"&gt;
      &lt;div class="p-3"&gt;
        &lt;p class="text-sm mb-2"&gt;Programmatically controlled&lt;/p&gt;
        &lt;p class="text-xs text-base-500"&gt;State: &#123;&#123; isOpen ? 'Open' : 'Closed' &#125;&#125;&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/FloatingUi&gt;
    
  &lt;Action @click="programmaticOpen = true" variant="outline"&gt;Show&lt;/Action&gt;
  &lt;Action @click="programmaticOpen = false" variant="outline"&gt;Hide&lt;/Action&gt;
  &lt;Action @click="programmaticOpen = !programmaticOpen" variant="outline"&gt;Toggle&lt;/Action&gt;
&lt;/template&gt;

&lt;script setup&gt;
const programmaticOpen = ref(false);
&lt;/script&gt;</code></pre>
      <h3>With Form Content</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;FloatingUi 
    v-model:open="formOpen"
    type="rich"
    placement="bottom-start"
    hide-arrow
  &gt;
    &lt;Action @click="formOpen = !formOpen"&gt;Quick Add&lt;/Action&gt;
    &lt;template #popover="{ close }"&gt;
      &lt;form @submit.prevent="handleSubmit" class="p-4 min-w-80"&gt;
        &lt;h3 class="font-semibold mb-3"&gt;Add New Item&lt;/h3&gt;
        
        &lt;TextField 
          v-model="formData.title"
          label="Title"
          required
        /&gt;
        &lt;TextField 
          v-model="formData.description"
          label="Description"
          rows="3"
        /&gt;
        &lt;Select 
          v-model="formData.category"
          label="Category"
          :options="categoryOptions"
        /&gt;

        &lt;Action @click="close" variant="outline" size="sm"&gt;Cancel&lt;/Action&gt;
        &lt;Action type="submit" kind="primary" size="sm"&gt;Add Item&lt;/Action&gt;
      &lt;/form&gt;
    &lt;/template&gt;
  &lt;/FloatingUi&gt;
&lt;/template&gt;

&lt;script setup&gt;
const formOpen = ref(false);
const formData = reactive({
  title: '',
  description: '',
  category: ''
});

function handleSubmit() {
  console.log('Form submitted:', formData);
  formOpen.value = false;
  // Reset form
  Object.assign(formData, { title: '', description: '', category: '' });
}
&lt;/script&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use <code>type="plain"</code> for simple tooltips and informational content</li>
        <li>Use <code>type="rich"</code> for complex interactive content like menus or forms</li>
        <li>Consider the <code>hideArrow</code> option for content that doesn't need visual connection to the trigger</li>
        <li>Choose appropriate placement based on the context and available space</li>
        <li>Use the slot props (<code>isOpen</code>, <code>open</code>, <code>close</code>, <code>toggle</code>) for dynamic content and interactions</li>
        <li>Avoid nesting FloatingUi components deeply as it can cause positioning issues</li>
        <li>Test different placements to ensure content remains visible on various screen sizes</li>
        <li>Use this component as a foundation for building higher-level components rather than directly in application code</li>
        <li>Consider accessibility when building interactive floating content</li>
      </ul>
      <h2>Examples</h2>
      <h3>Tooltip-like Information</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Hover over these elements for information:&lt;/span&gt;
    
    &lt;FloatingUi 
      text="This is a username field"
      placement="top"
      type="plain"
    &gt;
      &lt;TextField placeholder="Username" /&gt;
    &lt;/FloatingUi&gt;
    
    &lt;FloatingUi 
      placement="top"
      type="rich"
    &gt;
      &lt;Icon icon="material-symbols:help" class="text-base-500 cursor-help" /&gt;
      &lt;template #popover&gt;
        &lt;div class="p-3 max-w-xs"&gt;
          &lt;h4 class="font-semibold mb-1"&gt;Password Requirements&lt;/h4&gt;
          &lt;ul class="text-sm space-y-1"&gt;
            &lt;li&gt;• At least 8 characters&lt;/li&gt;
            &lt;li&gt;• Include uppercase and lowercase&lt;/li&gt;
            &lt;li&gt;• Include at least one number&lt;/li&gt;
            &lt;li&gt;• Include at least one symbol&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/FloatingUi&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup&gt;</code></pre>
      <h3>Context Menu Implementation</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div 
    @contextmenu.prevent="showContextMenu"
    class="p-8 border-2 border-dashed border-base-300 rounded-lg cursor-pointer"
  &gt;
    &lt;p class="text-center text-base-500"&gt;Right-click for context menu&lt;/p&gt;
    
    &lt;FloatingUi 
      v-model:open="contextMenuOpen"
      type="rich"
      :placement="contextMenuPlacement"
      hide-arrow
    &gt;
      &lt;div&gt;&lt;/div&gt; &lt;!-- Empty trigger --&gt;
      &lt;template #popover="{ close }"&gt;
        &lt;div class="py-2"&gt;
          &lt;MenuItem label="Cut" @click="close" /&gt;
          &lt;MenuItem label="Copy" @click="close" /&gt;
          &lt;MenuItem label="Paste" @click="close" /&gt;
          &lt;MenuDivider /&gt;
          &lt;MenuItem label="Delete" @click="close" /&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/FloatingUi&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const contextMenuOpen = ref(false);
const contextMenuPlacement = ref('bottom-start');

function showContextMenu(event) {
  // Determine best placement based on mouse position
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;
  
  if (clientX &gt; innerWidth / 2) {
    contextMenuPlacement.value = clientY &gt; innerHeight / 2 ? 'top-end' : 'bottom-end';
  } else {
    contextMenuPlacement.value = clientY &gt; innerHeight / 2 ? 'top-start' : 'bottom-start';
  }
  
  contextMenuOpen.value = true;
}
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>