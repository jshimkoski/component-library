<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Scrollspy</h1>

    <Prose>
      <h2>Overview</h2>
      <p>Scrollspy is a navigation aid that provides visual feedback about which section of content is currently in the viewport. It's especially useful for long-form content, documentation pages, or single-page applications with multiple sections.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Scrollspy>
        <!-- Content with sections -->
        <div>
        <section id="section1" data-scrollspy>
        <h2 data-scrollspy-title>Section 1</h2>
        <p>Content for section 1...</p>
        </section>
        <section id="section2" data-scrollspy>
        <h2 data-scrollspy-title>Section 2</h2>
        <p>Content for section 2...</p>
        </section>
        <section id="section3" data-scrollspy>
        <h2 data-scrollspy-title>Section 3</h2>
        <p>Content for section 3...</p>
        </section>
        </div>
        </Scrollspy>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy&gt;
    &lt;!-- Content with sections --&gt;
    &lt;div&gt;
      &lt;section id="section1" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 1&lt;/h2&gt;
        &lt;p&gt;Content for section 1...&lt;/p&gt;
      &lt;/section&gt;
      
      &lt;section id="section2" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 2&lt;/h2&gt;
        &lt;p&gt;Content for section 2...&lt;/p&gt;
      &lt;/section&gt;
      
      &lt;section id="section3" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 3&lt;/h2&gt;
        &lt;p&gt;Content for section 3...&lt;/p&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>selector</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;[data-scrollspy]&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">CSS selector for identifying sections</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>offset</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>100</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Offset in pixels to trigger active state change</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>autoDetect</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Automatically detect sections on mount</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>sections</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>ScrollspySection[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Manual configuration of sections</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>navClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*See source*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for the navigation container</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>listClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;space-y-1&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for the list element</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>itemClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*See source*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for list items</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>activeItemClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*See source*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for active list item</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>linkClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">*See source*</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for navigation links</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>contentClass</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;#39;flex-grow&amp;#39;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom class for the content container</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>smooth</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Enable smooth scrolling when clicking navigation links</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>throttleInterval</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>100</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Throttle interval for scroll event handling</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>change</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(id: string, index: number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the active section changes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:activeId</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(id: string)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the active section ID changes</td>
          </tr>
        </tbody>
      </table>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content area containing the sections to spy on</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom icon for navigation items. Scoped slot with <code>section</code> and <code>active</code> properties</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>title</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom title for navigation items. Scoped slot with <code>section</code> and <code>active</code> properties</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Types</h2>
      
      <Prose>
        <p>interface ScrollspySection {</p>
        <p>id: string;</p>
        <p>title: string;</p>
        <p>icon?: Component;</p>
        <p>}</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Auto-Detected Sections (Default)</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy&gt;
    &lt;div&gt;
      &lt;section id="introduction" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Introduction&lt;/h2&gt;
        &lt;!-- Content --&gt;
      &lt;/section&gt;
      &lt;!-- More sections --&gt;
    &lt;/div&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Manually Defined Sections</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy :sections="sections" :auto-detect="false"&gt;
    &lt;div&gt;
      &lt;section id="intro"&gt;
        &lt;h2&gt;Introduction&lt;/h2&gt;
        &lt;!-- Content --&gt;
      &lt;/section&gt;
      &lt;section id="features"&gt;
        &lt;h2&gt;Features&lt;/h2&gt;
        &lt;!-- Content --&gt;
      &lt;/section&gt;
      &lt;section id="api"&gt;
        &lt;h2&gt;API Reference&lt;/h2&gt;
        &lt;!-- Content --&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/Scrollspy&gt;

&lt;script setup&gt;
const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'features', title: 'Features' },
  { id: 'api', title: 'API Reference' }
];
&lt;/script&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">With Custom Icons</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy :sections="sections"&gt;
    &lt;template #icon="{ section, active }"&gt;
      &lt;component 
        :is="section.icon" 
        :class="active ? 'text-primary-500' : 'text-base-400'"
        class="w-5 h-5 mr-2"
      /&gt;
    &lt;/template&gt;

    &lt;!-- Content sections --&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { IconMdiHome, IconMdiCog, IconMdiInformation } from '@iconify/vue';

const sections = [
  { id: 'home', title: 'Home', icon: IconMdiHome },
  { id: 'settings', title: 'Settings', icon: IconMdiCog },
  { id: 'about', title: 'About', icon: IconMdiInformation }
];
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Ensure each section has a unique ID</li>
          <li>Apply sufficient spacing between sections for clear distinction</li>
          <li>Use descriptive section titles for better navigation</li>
          <li>For longer pages, consider using a sticky position for the navigation</li>
          <li>Set an appropriate offset based on your header height and layout</li>
          <li>Ensure the component works with keyboard navigation for accessibility</li>
          <li>Consider different viewport sizes in your implementation</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Documentation Page Layout</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;!-- Sticky sidebar with Scrollspy --&gt;
  &lt;Scrollspy 
    nav-class="sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto pr-6 w-64"
    active-item-class="border-l-2 border-primary-500 text-primary-600 font-medium"
  &gt;
    &lt;div class="prose max-w-3xl mx-auto py-8"&gt;
      &lt;h1&gt;Documentation&lt;/h1&gt;
      
      &lt;section id="getting-started" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Getting Started&lt;/h2&gt;
        &lt;p&gt;This guide will help you get started with our library...&lt;/p&gt;
        &lt;!-- More content --&gt;
      &lt;/section&gt;
      
      &lt;section id="installation" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Installation&lt;/h2&gt;
        &lt;p&gt;You can install our library using npm or yarn...&lt;/p&gt;
        &lt;!-- More content --&gt;
      &lt;/section&gt;
      
      &lt;section id="configuration" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Configuration&lt;/h2&gt;
        &lt;p&gt;Configure the library to suit your needs...&lt;/p&gt;
        &lt;!-- More content --&gt;
      &lt;/section&gt;
      
      &lt;section id="api-reference" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;API Reference&lt;/h2&gt;
        &lt;p&gt;Detailed API documentation...&lt;/p&gt;
        &lt;!-- More content --&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Programmatic Control</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;div class="mb-4 flex gap-2"&gt;
      &lt;Action v-for="section in sections" :key="section.id" @click="scrollTo(section.id)"&gt;
        &#123;&#123; section.title &#125;&#125;
      &lt;/Action&gt;
    &lt;/div&gt;
    
    &lt;Scrollspy ref="scrollspy" v-model:active-id="activeSection"&gt;
      &lt;!-- Content sections --&gt;
      &lt;section v-for="section in sections" :key="section.id" :id="section.id" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;&#123;&#123; section.title &#125;&#125;&lt;/h2&gt;
        &lt;p&gt;Content for &#123;&#123; section.title &#125;&#125;...&lt;/p&gt;
        &lt;!-- More content with sufficient height to enable scrolling --&gt;
      &lt;/section&gt;
    &lt;/Scrollspy&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'features', title: 'Features' },
  { id: 'usage', title: 'Usage' },
  { id: 'api', title: 'API' }
];

const scrollspy = ref(null);
const activeSection = ref('intro');

const scrollTo = (id) =&gt; {
  scrollspy.value.scrollToSection(id);
};
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>