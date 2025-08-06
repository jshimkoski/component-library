<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">TreeItem</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The TreeItem component represents individual nodes within a Tree component. It handles the display of hierarchical data items with support for expansion/collapse, icons, and various interaction states. TreeItem components work together to create nested tree structures for navigation, file systems, or any hierarchical data.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="treeItems" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="treeItems" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const treeItems = [
  {
    id: 'folder1',
    label: 'Documents',
    children: [
      { id: 'file1', label: 'Report.pdf' },
      { id: 'file2', label: 'Presentation.pptx' }
    ]
  },
  {
    id: 'folder2', 
    label: 'Images',
    children: [
      { id: 'img1', label: 'photo1.jpg' },
      { id: 'img2', label: 'photo2.png' }
    ]
  }
];
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>item</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Object</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Tree item data object containing all item properties.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>level</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Nesting level of the tree item (used for indentation).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>hideIcons</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to hide file/folder icons next to items.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>expandedKeys</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of item IDs that are currently expanded.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>activeItemId</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String | Number | null</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">ID of the currently active/selected tree item.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Tree Item Data Structure</h2>
      
      <Prose>
        <p>interface TreeItem {</p>
        <p>id: string | number;           // Unique identifier</p>
        <p>label: string;                 // Display text</p>
        <p>icon?: string;                 // Icon for the item</p>
        <p>iconOpen?: string;             // Icon when expanded (overrides icon)</p>
        <p>iconClose?: string;            // Icon when collapsed (overrides icon)</p>
        <p>children?: TreeItem[];         // Child items</p>
        <p>to?: string;                   // Vue Router path</p>
        <p>href?: string;                 // External URL</p>
        <p>action?: Function;             // Click handler function</p>
        <p>onClick?: Function;            // Alternative click handler</p>
        <p>[key: string]: any;            // Additional custom properties</p>
        <p>}</p>
      </Prose>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:expanded</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(itemId: string | number)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when tree item expand/collapse state changes.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>item-click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(item: TreeItem)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when tree item is clicked.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">File System Tree</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="fileSystemItems" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="fileSystemItems" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const fileSystemItems = [
  {
    id: 'root',
    label: 'Project Root',
    icon: 'material-symbols:folder',
    iconOpen: 'material-symbols:folder-open',
    children: [
      {
        id: 'src',
        label: 'src',
        icon: 'material-symbols:folder',
        iconOpen: 'material-symbols:folder-open',
        children: [
          {
            id: 'components',
            label: 'components',
            icon: 'material-symbols:folder',
            iconOpen: 'material-symbols:folder-open',
            children: [
              { id: 'button', label: 'Button.vue', icon: 'material-symbols:code' },
              { id: 'input', label: 'Input.vue', icon: 'material-symbols:code' }
            ]
          },
          { id: 'main', label: 'main.js', icon: 'material-symbols:javascript' },
          { id: 'app', label: 'App.vue', icon: 'material-symbols:code' }
        ]
      },
      {
        id: 'public',
        label: 'public',
        icon: 'material-symbols:folder',
        iconOpen: 'material-symbols:folder-open',
        children: [
          { id: 'index', label: 'index.html', icon: 'material-symbols:html' },
          { id: 'favicon', label: 'favicon.ico', icon: 'material-symbols:image' }
        ]
      },
      { id: 'package', label: 'package.json', icon: 'material-symbols:settings' },
      { id: 'readme', label: 'README.md', icon: 'material-symbols:description' }
    ]
  }
];
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Navigation Tree</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="navigationItems" @item-click="handleNavigation" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="navigationItems" @item-click="handleNavigation" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'material-symbols:dashboard',
    to: '/dashboard'
  },
  {
    id: 'users',
    label: 'User Management',
    icon: 'material-symbols:people',
    children: [
      { id: 'all-users', label: 'All Users', to: '/users' },
      { id: 'add-user', label: 'Add User', to: '/users/add' },
      { id: 'user-roles', label: 'Roles &amp; Permissions', to: '/users/roles' }
    ]
  },
  {
    id: 'content',
    label: 'Content',
    icon: 'material-symbols:article',
    children: [
      {
        id: 'posts',
        label: 'Blog Posts',
        children: [
          { id: 'all-posts', label: 'All Posts', to: '/posts' },
          { id: 'draft-posts', label: 'Drafts', to: '/posts/drafts' },
          { id: 'published-posts', label: 'Published', to: '/posts/published' }
        ]
      },
      { id: 'pages', label: 'Pages', to: '/pages' },
      { id: 'media', label: 'Media Library', to: '/media' }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'material-symbols:settings',
    children: [
      { id: 'general', label: 'General', to: '/settings/general' },
      { id: 'security', label: 'Security', to: '/settings/security' },
      { id: 'integrations', label: 'Integrations', to: '/settings/integrations' }
    ]
  }
];

function handleNavigation(item) {
  if (item.to) {
    // Navigate using Vue Router
    router.push(item.to);
  }
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Interactive Tree with Actions</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="actionItems" @item-click="handleItemClick" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="actionItems" @item-click="handleItemClick" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const actionItems = [
  {
    id: 'projects',
    label: 'Projects',
    icon: 'material-symbols:work',
    children: [
      {
        id: 'project1',
        label: 'Website Redesign',
        icon: 'material-symbols:web',
        action: () =&gt; openProject('project1'),
        children: [
          { 
            id: 'task1', 
            label: 'Design Phase', 
            icon: 'material-symbols:palette',
            action: () =&gt; openTask('task1')
          },
          { 
            id: 'task2', 
            label: 'Development Phase', 
            icon: 'material-symbols:code',
            action: () =&gt; openTask('task2')
          }
        ]
      },
      {
        id: 'project2',
        label: 'Mobile App',
        icon: 'material-symbols:phone-android',
        action: () =&gt; openProject('project2'),
        children: [
          { 
            id: 'task3', 
            label: 'UI Design', 
            icon: 'material-symbols:design-services',
            action: () =&gt; openTask('task3')
          }
        ]
      }
    ]
  },
  {
    id: 'archive',
    label: 'Archived Projects',
    icon: 'material-symbols:archive',
    children: [
      { 
        id: 'old-project', 
        label: 'Legacy System', 
        icon: 'material-symbols:history',
        action: () =&gt; viewArchived('old-project')
      }
    ]
  }
];

function handleItemClick(item) {
  if (item.action) {
    item.action();
  }
}

function openProject(projectId) {
  console.log('Opening project:', projectId);
}

function openTask(taskId) {
  console.log('Opening task:', taskId);
}

function viewArchived(id) {
  console.log('Viewing archived item:', id);
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Item Rendering</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Tree :items="customItems">
        <template #default="{ item, level }">
        <div
        v-if="item.status"
        class="w-2 h-2 rounded-full"
        :class="{
        'bg-success-500': item.status === 'completed',
        'bg-warning-500': item.status === 'in-progress',
        'bg-base-300': item.status === 'pending'
        }"
        >
        <Icon v-if="item.icon" :icon="item.icon" class="text-sm" />
        {{ item.label }}
        <Badge
        v-if="item.count"
        :label="item.count"
        size="xs"
        kind="secondary"
        />
        <Menu v-if="item.id !== 'root'" auto-width>
        <MenuItem label="Edit" @click="editItem(item)" />
        <MenuItem label="Delete" @click="deleteItem(item)" />
        </Menu>
        </div>
      </div>
      <Prose>
        <p>TreeItem can be customized through slots in the parent Tree component:</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="customItems"&gt;
    &lt;template #default="{ item, level }"&gt;
      &lt;div 
        v-if="item.status" 
        class="w-2 h-2 rounded-full"
        :class="{
          'bg-success-500': item.status === 'completed',
          'bg-warning-500': item.status === 'in-progress',
          'bg-base-300': item.status === 'pending'
        }"
      &gt;

        &lt;Icon v-if="item.icon" :icon="item.icon" class="text-sm" /&gt;

        &#123;&#123; item.label &#125;&#125;

        &lt;Badge 
          v-if="item.count" 
          :label="item.count" 
          size="xs" 
          kind="secondary" 
        /&gt;
        &lt;Menu v-if="item.id !== 'root'" auto-width&gt;
          &lt;MenuItem label="Edit" @click="editItem(item)" /&gt;
          &lt;MenuItem label="Delete" @click="deleteItem(item)" /&gt;
        &lt;/Menu&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #icon="{ item, level }"&gt;
      &lt;div 
        class="w-4 h-4 rounded-full mr-2"
        :class="{
          'bg-blue-500': item.type === 'folder',
          'bg-green-500': item.type === 'file',
          'bg-red-500': item.type === 'error'
        }"
      &gt;&lt;/div&gt;
    &lt;/template&gt;
  &lt;/Tree&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use meaningful and descriptive labels for tree items</li>
          <li>Provide appropriate icons to enhance visual recognition</li>
          <li>Use consistent iconography throughout the tree structure</li>
          <li>Consider performance for large trees - implement lazy loading when necessary</li>
          <li>Provide clear visual hierarchy through proper indentation and styling</li>
          <li>Handle click events appropriately based on item type (navigation, action, etc.)</li>
          <li>Use different icons for expanded/collapsed states when helpful</li>
          <li>Ensure keyboard navigation support through the parent Tree component</li>
          <li>Group related items logically within the tree structure</li>
          <li>Consider providing context menus for item-specific actions</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Documentation Structure</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Tree :items="docsStructure" @item-click="navigateToDoc"&gt;
    &lt;template #default="{ item }"&gt;
      &lt;Icon 
        :icon="getDocIcon(item)" 
        class="text-sm"
        :class="getDocIconColor(item)"

      &#123;&#123; item.label &#125;&#125;
      
      &lt;div class="flex items-center gap-1"&gt;
        &lt;Badge 
          v-if="item.isNew" 
          label="New" 
          size="xs" 
          kind="success"
        /&gt;

        &lt;Badge 
          v-if="item.difficulty" 
          :label="item.difficulty" 
          size="xs" 
          :kind="getDifficultyKind(item.difficulty)"
        /&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Tree&gt;
&lt;/template&gt;

&lt;script setup&gt;
function getDocIcon(item) {
  if (item.type === 'category') return 'material-symbols:folder';
  if (item.type === 'guide') return 'material-symbols:book';
  if (item.type === 'api') return 'material-symbols:code';
  if (item.type === 'example') return 'material-symbols:play-circle';
  return 'material-symbols:description';
}

function getDocIconColor(item) {
  const colors = {
    category: 'text-blue-500',
    guide: 'text-green-500',
    api: 'text-purple-500',
    example: 'text-orange-500'
  };
  return colors[item.type] || 'text-base-500';
}

function getDifficultyKind(difficulty) {
  const kinds = {
    'Beginner': 'success',
    'Intermediate': 'warning',
    'Advanced': 'danger'
  };
  return kinds[difficulty] || 'secondary';
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tree from '../components/Tree.vue';
import { Icon } from '@iconify/vue';
import Badge from '../components/Badge.vue';
import Menu from '../components/Menu.vue';
import MenuItem from '../components/MenuItem.vue';

const treeItems = ref([
  {
    id: 'folder1',
    label: 'Documents',
    children: [
      { id: 'file1', label: 'Report.pdf' },
      { id: 'file2', label: 'Presentation.pptx' }
    ]
  },
  {
    id: 'folder2', 
    label: 'Images',
    children: [
      { id: 'img1', label: 'photo1.jpg' },
      { id: 'img2', label: 'photo2.png' }
    ]
  }
]);
</script>