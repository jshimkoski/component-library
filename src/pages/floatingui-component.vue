<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">FloatingUi</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The FloatingUi component is a low-level utility component that provides floating element positioning using the Floating UI library. It's primarily used internally by other components like Tooltip, Menu, and Dialog to create properly positioned popover content. This component handles complex positioning logic, collision detection, and responsive placement.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <FloatingUi
        v-model:open="isOpen"
        text="This is a floating element"
        placement="top"
        >
        <Action @click="isOpen = !isOpen">Toggle Floating Element</Action>
        </FloatingUi>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Simple text content for the floating element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>type</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;plain&amp;quot; | &amp;quot;rich&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;plain&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Visual style type of the floating element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Placement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;top&amp;quot;</code></td>
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
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Placement Options</h2>
      
      <Prose>
        <p>The <code>placement</code> prop accepts any valid Floating UI placement:</p>
        <ul>
          <li><code>top</code>, <code>top-start</code>, <code>top-end</code></li>
          <li><code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code></li>
          <li><code>left</code>, <code>left-start</code>, <code>left-end</code></li>
          <li><code>right</code>, <code>right-start</code>, <code>right-end</code></li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
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
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Plain vs Rich Styling</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Plain style (tooltip-like) -->
        <FloatingUi
        v-model:open="plainOpen"
        text="Plain tooltip style"
        type="plain"
        placement="top"
        >
        <Action @click="plainOpen = !plainOpen">Plain Style</Action>
        </FloatingUi>
        <!-- Rich style (popover-like) -->
        <FloatingUi
        v-model:open="richOpen"
        type="rich"
        placement="top"
        >
        <Action @click="richOpen = !richOpen">Rich Style</Action>
        <template #popover>
        <div class="p-3">
        <h4 class="font-semibold mb-1">Rich Content</h4>
        <p class="text-sm">This supports complex content with styling.</p>
        </div>
      </div>
      <Prose>
        <p>v-model:open="plainOpen"</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Different Placements</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <FloatingUi v-model:open="topOpen" text="Top placement" placement="top">
        <Action @click="topOpen = !topOpen">Top</Action>
        </FloatingUi>
        <FloatingUi v-model:open="bottomOpen" text="Bottom placement" placement="bottom">
        <Action @click="bottomOpen = !bottomOpen">Bottom</Action>
        </FloatingUi>
        <FloatingUi v-model:open="leftOpen" text="Left placement" placement="left">
        <Action @click="leftOpen = !leftOpen">Left</Action>
        </FloatingUi>
        <FloatingUi v-model:open="rightOpen" text="Right placement" placement="right">
        <Action @click="rightOpen = !rightOpen">Right</Action>
        </FloatingUi>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Content</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <FloatingUi
        v-model:open="customOpen"
        type="rich"
        placement="bottom-start"
        >
        <Action @click="customOpen = !customOpen">User Profile</Action>
        <template #popover="{ close }">
        <div class="p-4 min-w-64">
        <Avatar src="https://i.pravatar.cc/40" size="sm" />
        <div>
        <div class="font-semibold">John Doe
        <div class="text-sm text-base-500">john@example.com</div>
        </div>
        </div>
        <Action variant="ghost" size="sm" class="w-full justify-start">
        View Profile
        </Action>
        <Action variant="ghost" size="sm" class="w-full justify-start">
        Settings
        </Action>
        <Action variant="ghost" size="sm" class="w-full justify-start" @click="close">
        Sign Out
        </Action>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Without Arrow</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <FloatingUi
        v-model:open="isOpen"
        type="rich"
        placement="top"
        hide-arrow
        >
        <Action @click="isOpen = !isOpen">No Arrow</Action>
        <template #popover>
        <div class="p-3">
        <p class="text-sm">This floating element has no arrow pointer.</p>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Advanced Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <FloatingUi
        v-model:open="programmaticOpen"
        type="rich"
        placement="bottom"
        >
        <Action>Hover Target</Action>
        <template #popover="{ isOpen }">
        <div class="p-3">
        <p class="text-sm mb-2">Programmatically controlled</p>
        <p class="text-xs text-base-500">State: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
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
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Tooltip-like Information</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Context Menu Implementation</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Action from '../components/Action.vue';
import Avatar from '../components/Avatar.vue';

const isOpen = ref(false);
</script>