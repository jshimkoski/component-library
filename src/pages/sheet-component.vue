<template>
  <div class="content">
    <Prose>
      <h1>Sheet</h1>
      <h2>Overview</h2>
      <p>The Sheet component creates a sliding panel that appears from the left or right side of the screen. It's commonly used for secondary navigation, detail panels, or forms that don't require the full screen. The Sheet component offers various configuration options including different variants, placements, and styling capabilities.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const standardSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="standardSheetOpen = true"&gt;
    Open standard sheet
  &lt;/button&gt;
  
  &lt;Sheet v-model="standardSheetOpen" headline="Standard Sheet"&gt;
    &lt;div class="p-4"&gt;
      &lt;p&gt;This is a standard sheet that slides in from the right side.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The title displayed in the sheet header.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Main content of the sheet.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom headline content (replaces the headline prop).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>footer</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Footer content for buttons or actions. Receives close function to dismiss the sheet.</td>
          </tr>
        </tbody>
      </table>
      <h2>v-model</h2>
      <p>The component supports v-model for controlling the sheet's visibility.</p>
      <h2>Modal Variant</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const modalSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="modalSheetOpen = true"&gt;
    Open modal sheet
  &lt;/button&gt;
  
  &lt;Sheet v-model="modalSheetOpen" variant="modal" headline="Modal Sheet"&gt;
    &lt;div class="p-4"&gt;
      &lt;p&gt;This modal sheet includes an overlay and edge alignment.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
      <h2>Inset Modal Variant</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const insetModalSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="insetModalSheetOpen = true"&gt;
    Open inset modal sheet
  &lt;/button&gt;
  
  &lt;Sheet v-model="insetModalSheetOpen" variant="inset-modal" headline="Inset Modal Sheet"&gt;
    &lt;div class="p-4"&gt;
      &lt;p&gt;This inset modal sheet includes an overlay and inset margins for a floating appearance.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
      <h2>Left Placement</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const leftSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="leftSheetOpen = true"&gt;
    Open left sheet
  &lt;/button&gt;
  
  &lt;Sheet v-model="leftSheetOpen" placement="left" headline="Left Sheet"&gt;
    &lt;div class="p-4"&gt;
      &lt;p&gt;This sheet slides in from the left side of the screen.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
      <h2>Using the Footer Slot</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const formSheetOpen = ref(false);

function saveForm(close) {
  // Save form data
  close(); // Close the sheet
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="formSheetOpen = true"&gt;
    Open form sheet
  &lt;/button&gt;
  
  &lt;Sheet v-model="formSheetOpen" variant="modal" headline="Edit Profile"&gt;
    &lt;div class="p-4 space-y-4"&gt;
      &lt;div&gt;
        &lt;label class="block mb-1"&gt;Name&lt;/label&gt;
        &lt;input v-model="name" type="text" class="border rounded px-2 py-1 w-full" /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label class="block mb-1"&gt;Email&lt;/label&gt;
        &lt;input v-model="email" type="email" class="border rounded px-2 py-1 w-full" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;template #footer="{ close }"&gt;
      &lt;button 
        class="px-3 py-1 border rounded"
        @click="close"
      &gt;
        Cancel
      &lt;/button&gt;
      &lt;button 
        class="px-3 py-1 bg-primary-500 text-white rounded"
        @click="saveForm(close)"
      &gt;
        Save
      &lt;/button&gt;
    &lt;/template&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
      <h2>Custom Headline</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const customHeadlineSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="customHeadlineSheetOpen = true"&gt;
    Open sheet with custom headline
  &lt;/button&gt;
  
  &lt;Sheet v-model="customHeadlineSheetOpen"&gt;
    &lt;template #headline&gt;
      &lt;div class="w-6 h-6 rounded-full bg-green-500"&gt;
        &lt;span&gt;User is Online&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;div class="p-4"&gt;
      &lt;p&gt;This sheet has a custom headline with an indicator.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use the appropriate variant based on the content importance and user flow:</li>
        <li>**Standard**: For non-critical content like site navigation or settings that don't require user decisions</li>
        <li>**Modal**: For content that requires user attention or decision</li>
        <li>**Inset Modal**: For more prominent content that visually appears more elevated/important</li>
        <li>Consider which side the sheet should appear from:</li>
        <li>**Right**: Better for detail views, settings, or forms (common default)</li>
        <li>**Left**: Better for navigation menus or structure-related content</li>
        <li>Always provide a clear headline to indicate the purpose of the sheet</li>
        <li>For sheets with forms or actions, use the footer slot to provide consistent action buttons</li>
        <li>Pass the <code>triggerElement</code> when possible to improve accessibility by returning focus properly</li>
        <li>Keep content organized and scrollable for longer content</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses <code>aria-modal="true"</code> to indicate its role to assistive technologies</li>
        <li>Focus is trapped within the sheet when modal variants are used, preventing users from accidentally interacting with content behind the overlay</li>
        <li>The Escape key can be used to close modal variants</li>
        <li>Focus returns to the triggering element when the sheet is closed (if <code>triggerElement</code> is provided)</li>
        <li>Clicking outside the sheet will close modal variants</li>
      </ul>
      <h2>Examples</h2>
      <h3>Navigation Menu</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const navSheetOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="navSheetOpen = true"&gt;
    &lt;span&gt;Menu&lt;/span&gt;
  &lt;/button&gt;
  
  &lt;Sheet v-model="navSheetOpen" placement="left" headline="Navigation"&gt;
    &lt;div class="divide-y"&gt;
      &lt;a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800"&gt;Home&lt;/a&gt;
      &lt;a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800"&gt;Products&lt;/a&gt;
      &lt;a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800"&gt;Services&lt;/a&gt;
      &lt;a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800"&gt;About Us&lt;/a&gt;
      &lt;a href="#" class="block p-4 hover:bg-base-200 dark:hover:bg-base-800"&gt;Contact&lt;/a&gt;
    &lt;/div&gt;
  &lt;/Sheet&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>