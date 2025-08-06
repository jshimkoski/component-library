<template>
  <div class="content">
    <Prose>
      <h1>Tree Item</h1>
      <h2>Overview</h2>
      <p>The TreeItem component represents individual nodes within a Tree component. It handles the display of hierarchical data items with support for expansion/collapse, icons, and various interaction states. TreeItem components work together to create nested tree structures for navigation, file systems, or any hierarchical data.</p>
      <h2>Basic Usage</h2>
      <p>TreeItem is typically used within a Tree component and is not commonly used in isolation:</p>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Props</h2>
      <p>TreeItem props are typically defined by the data structure passed to the parent Tree component:</p>
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
        </tbody>
      </table>
      <h2>Tree Item Data Structure</h2>
      <pre><code class="language-typescript">interface TreeItem {
  id: string | number;           // Unique identifier
  label: string;                 // Display text
  icon?: string;                 // Icon for the item
  iconOpen?: string;             // Icon when expanded (overrides icon)
  iconClose?: string;            // Icon when collapsed (overrides icon)
  children?: TreeItem[];         // Child items
  to?: string;                   // Vue Router path
  href?: string;                 // External URL
  action?: Function;             // Click handler function
  onClick?: Function;            // Alternative click handler
  [key: string]: any;            // Additional custom properties
}</code></pre>
      <h2>Events</h2>
      <p>TreeItem events are handled through the parent Tree component:</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>item-click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(item: TreeItem)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when tree item is clicked.</td>
          </tr>
        </tbody>
      </table>
      <h2>File System Tree</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Navigation Tree</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Interactive Tree with Actions</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Custom Item Rendering</h2>
      <p>TreeItem can be customized through slots in the parent Tree component:</p>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Best Practices</h2>
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
      <h2>Examples</h2>
      <h3>Documentation Structure</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>