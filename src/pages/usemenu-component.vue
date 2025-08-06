<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">useMenu</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The `useMenu` composable provides a comprehensive solution for managing hierarchical menu state across your Vue 3 application. It handles opening, closing, and coordinating between multiple menu levels, ensuring that only appropriate menus are open at any given time and providing proper cleanup functionality.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
        <button @click="open = !open">
        Toggle Menu
        </button>
        <div v-if="open" class="menu">
        <div class="menu-item">Item 1</div>
        <div class="menu-item">Item 2</div>
        <div class="menu-item">Item 3</div>
        </div>
        </div>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">API Reference</h2>
      
      <Prose>
        <p>| Name | Type | Default | Description |</p>
        <p>|------|------|---------|-------------|</p>
        <p>| <code>parentId</code> | <code>string \| undefined</code> | <code>undefined</code> | ID of the parent menu for hierarchical menu structures. |</p>
        <p>The composable returns an object with the following properties and methods:</p>
        <p>| Name | Type | Description |</p>
        <p>|------|------|-------------|</p>
        <p>| <code>menuId</code> | <code>string</code> | Unique identifier for this menu instance. |</p>
        <p>| <code>open</code> | <code>WritableComputedRef&lt;boolean&gt;</code> | Reactive reference to control menu open/closed state. |</p>
        <p>| <code>level</code> | <code>number</code> | Nesting level of the menu (0 for root menus). |</p>
        <p>| <code>openMenu</code> | <code>() =&gt; void</code> | Function to programmatically open the menu. |</p>
        <p>| <code>closeMenu</code> | <code>() =&gt; void</code> | Function to programmatically close the menu. |</p>
        <p>| <code>cleanup</code> | <code>() =&gt; void</code> | Function to clean up menu state when component unmounts. |</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Global Functions</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        ### getOpenMenus()
        Returns an array of all currently open menu states for debugging or utility purposes.
      </div>
      <Prose>
        <p>Closes all currently open menus across the application.</p>
        <p>Returns an array of all currently open menu states for debugging or utility purposes.</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>### getOpenMenus()

Returns an array of all currently open menu states for debugging or utility purposes.</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Features</h2>
      
      <Prose>
        <p>When a menu opens, all sibling menus at the same level automatically close to prevent UI conflicts.</p>
        <p>Supports nested menu structures with proper parent-child relationships and level tracking.</p>
        <p>Root-level menus (level 0) automatically close other root menus when opened.</p>
        <p>When a parent menu closes, all of its child menus are automatically closed as well.</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Advanced Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
        <!-- Root menu -->
        <button @click="rootMenu.open = !rootMenu.open">
        Main Menu
        </button>
        <div v-if="rootMenu.open" class="menu">
        <div class="menu-item">Item 1</div>
        <!-- Nested submenu -->
        <div class="menu-item">
        <button @click="subMenu.open = !subMenu.open">
        Submenu ▶
        </button>
        <div v-if="subMenu.open" class="submenu">
        <div class="menu-item">Sub Item 1</div>
        <div class="menu-item">Sub Item 2</div>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Integration with Menu Components</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Menu>
        <MenuItem @click="handleMenuAction">Action Item</MenuItem>
        <MenuDivider />
        <MenuItem @click="menu.closeMenu">Close Menu</MenuItem>
        </Menu>
      </div>
      <Prose>
        <p>The <code>useMenu</code> composable is designed to work seamlessly with the Menu, MenuItem, and related components in this library:</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">TypeScript Support</h2>
      
      <Prose>
        <p>The composable includes full TypeScript support with proper type definitions:</p>
        <p>import { useMenu, type MenuState } from '@jasonshimmy/components';</p>
        <p>const menu = useMenu();</p>
        <p>// menu.menuId is typed as string</p>
        <p>// menu.open is typed as WritableComputedRef<boolean></p>
        <p>// menu.level is typed as number</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Always call <code>cleanup()</code> in <code>onUnmounted</code> to prevent memory leaks</li>
          <li>Use hierarchical menus for complex navigation structures</li>
          <li>Leverage <code>closeAllMenus()</code> for global menu control (e.g., escape key handlers)</li>
          <li>Consider menu level depth for proper UI spacing and styling</li>
          <li>Use descriptive parent IDs when creating nested menu structures</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>Ensure proper ARIA attributes are set on menu elements</li>
          <li>Handle keyboard navigation (arrow keys, escape, enter)</li>
          <li>Provide focus management when menus open and close</li>
          <li>Consider screen reader announcements for menu state changes</li>
        </ul>
      </Prose>
    </section>
  </div>
</template>

<script setup lang="ts">
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';
import MenuDivider from '../components/MenuDivider.vue';

</script>