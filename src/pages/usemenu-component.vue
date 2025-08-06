<template>
  <div class="content">
    <Prose>
      <h1>useMenu</h1>
      <h2>Overview</h2>
      <p>The <code>useMenu</code> composable provides a comprehensive solution for managing hierarchical menu state across your Vue 3 application. It handles opening, closing, and coordinating between multiple menu levels, ensuring that only appropriate menus are open at any given time and providing proper cleanup functionality.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="open = !open"&gt;
      Toggle Menu
    &lt;/button&gt;
    
    &lt;div v-if="open" class="menu"&gt;
      &lt;div class="menu-item"&gt;Item 1&lt;/div&gt;
      &lt;div class="menu-item"&gt;Item 2&lt;/div&gt;
      &lt;div class="menu-item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useMenu } from '@jasonshimmy/components';

const { open, menuId, level } = useMenu();
&lt;/script&gt;</code></pre>
      <h2>API Reference</h2>
      <h3>Parameters</h3>
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
        </tbody>
      </table>
      <h3>Return Value</h3>
      <p>The composable returns an object with the following properties and methods:</p>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>menuId</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>string</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Unique identifier for this menu instance.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>open</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>WritableComputedRef&lt;boolean&gt;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Reactive reference to control menu open/closed state.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>level</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>number</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Nesting level of the menu (0 for root menus).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>openMenu</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>() =&gt; void</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Function to programmatically open the menu.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>closeMenu</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>() =&gt; void</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Function to programmatically close the menu.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>cleanup</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>() =&gt; void</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Function to clean up menu state when component unmounts.</td>
          </tr>
        </tbody>
      </table>
      <h2>Global Functions</h2>
      <h3>closeAllMenus()</h3>
      <p>Closes all currently open menus across the application.</p>
      <pre><code class="language-typescript">import { closeAllMenus } from '@jasonshimmy/components';

// Close all menus (useful for escape key handlers)
closeAllMenus();</code></pre>
      <h3>getOpenMenus()</h3>
      <p>Returns an array of all currently open menu states for debugging or utility purposes.</p>
      <pre><code class="language-typescript">import { getOpenMenus } from '@jasonshimmy/components';

const openMenus = getOpenMenus();
console.log('Currently open menus:', openMenus);</code></pre>
      <h2>Features</h2>
      <h3>Automatic Sibling Menu Management</h3>
      <p>When a menu opens, all sibling menus at the same level automatically close to prevent UI conflicts.</p>
      <h3>Hierarchical Menu Support</h3>
      <p>Supports nested menu structures with proper parent-child relationships and level tracking.</p>
      <h3>Root Menu Coordination</h3>
      <p>Root-level menus (level 0) automatically close other root menus when opened.</p>
      <h3>Child Menu Cleanup</h3>
      <p>When a parent menu closes, all of its child menus are automatically closed as well.</p>
      <h2>Advanced Usage</h2>
      <h3>Nested Menus</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Root menu --&gt;
    &lt;button @click="rootMenu.open = !rootMenu.open"&gt;
      Main Menu
    &lt;/button&gt;
    
    &lt;div v-if="rootMenu.open" class="menu"&gt;
      &lt;div class="menu-item"&gt;Item 1&lt;/div&gt;
      
      &lt;!-- Nested submenu --&gt;
      &lt;div class="menu-item"&gt;
        &lt;button @click="subMenu.open = !subMenu.open"&gt;
          Submenu ▶
        &lt;/button&gt;
        
        &lt;div v-if="subMenu.open" class="submenu"&gt;
          &lt;div class="menu-item"&gt;Sub Item 1&lt;/div&gt;
          &lt;div class="menu-item"&gt;Sub Item 2&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useMenu } from '@jasonshimmy/components';
import { onUnmounted } from 'vue';

const rootMenu = useMenu();
const subMenu = useMenu(rootMenu.menuId);

// Cleanup on unmount
onUnmounted(() =&gt; {
  rootMenu.cleanup();
  subMenu.cleanup();
});
&lt;/script&gt;</code></pre>
      <h3>Global Menu Control</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Multiple independent menus --&gt;
    &lt;button @click="menu1.open = !menu1.open"&gt;Menu 1&lt;/button&gt;
    &lt;button @click="menu2.open = !menu2.open"&gt;Menu 2&lt;/button&gt;
    &lt;button @click="closeAll"&gt;Close All&lt;/button&gt;
    
    &lt;div v-if="menu1.open" class="menu"&gt;Menu 1 Content&lt;/div&gt;
    &lt;div v-if="menu2.open" class="menu"&gt;Menu 2 Content&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useMenu, closeAllMenus } from '@jasonshimmy/components';

const menu1 = useMenu();
const menu2 = useMenu();

const closeAll = () =&gt; {
  closeAllMenus();
};
&lt;/script&gt;</code></pre>
      <h2>Integration with Menu Components</h2>
      <p>The <code>useMenu</code> composable is designed to work seamlessly with the Menu, MenuItem, and related components in this library:</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Menu&gt;
    &lt;MenuItem @click="handleMenuAction"&gt;Action Item&lt;/MenuItem&gt;
    &lt;MenuDivider /&gt;
    &lt;MenuItem @click="menu.closeMenu"&gt;Close Menu&lt;/MenuItem&gt;
  &lt;/Menu&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useMenu } from '@jasonshimmy/components';

const menu = useMenu();

const handleMenuAction = () =&gt; {
  // Perform action
  console.log('Action performed');
  
  // Close menu after action
  menu.closeMenu();
};
&lt;/script&gt;</code></pre>
      <h2>TypeScript Support</h2>
      <p>The composable includes full TypeScript support with proper type definitions:</p>
      <pre><code class="language-typescript">import { useMenu, type MenuState } from '@jasonshimmy/components';

const menu = useMenu();
// menu.menuId is typed as string
// menu.open is typed as WritableComputedRef&lt;boolean&gt;
// menu.level is typed as number</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Always call <code>cleanup()</code> in <code>onUnmounted</code> to prevent memory leaks</li>
        <li>Use hierarchical menus for complex navigation structures</li>
        <li>Leverage <code>closeAllMenus()</code> for global menu control (e.g., escape key handlers)</li>
        <li>Consider menu level depth for proper UI spacing and styling</li>
        <li>Use descriptive parent IDs when creating nested menu structures</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Ensure proper ARIA attributes are set on menu elements</li>
        <li>Handle keyboard navigation (arrow keys, escape, enter)</li>
        <li>Provide focus management when menus open and close</li>
        <li>Consider screen reader announcements for menu state changes</li>
      </ul>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>