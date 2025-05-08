<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Badge Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Badge component is a small visual indicator typically used to highlight status, show counts, or mark new items.
        Badges can be used standalone or positioned relative to other components to provide additional context.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex items-center gap-4">
          <Badge label="1" />
          <Badge label="New" kind="success" />
          <Badge kind="warning" />
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Badge label="1" /&gt;
&lt;Badge label="New" kind="success" /&gt;
&lt;Badge kind="warning" /&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text content for the badge. When not provided, the badge renders as a small dot</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"danger"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Semantic type and color variant. Options: primary, secondary, success, info, warning, danger</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Kinds</h2>
      <p class="mb-4">The Badge component supports multiple kinds that convey different semantic meanings.</p>
      
      <h3 class="text-lg font-medium mb-3">Dot Badges</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex gap-6 items-center">
          <div class="flex flex-col items-center gap-2">
            <Badge kind="primary" />
            <span class="text-xs">primary</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Badge kind="secondary" />
            <span class="text-xs">secondary</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Badge kind="success" />
            <span class="text-xs">success</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Badge kind="info" />
            <span class="text-xs">info</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Badge kind="warning" />
            <span class="text-xs">warning</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Badge kind="danger" />
            <span class="text-xs">danger</span>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Text Badges</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Badge kind="primary" label="Primary" />
          <Badge kind="secondary" label="Secondary" />
          <Badge kind="success" label="Success" />
          <Badge kind="info" label="Info" />
          <Badge kind="warning" label="Warning" />
          <Badge kind="danger" label="Danger" />
        </div>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Numeric Badges</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Badge kind="primary" label="1" />
          <Badge kind="secondary" label="2" />
          <Badge kind="success" label="3" />
          <Badge kind="info" label="4" />
          <Badge kind="warning" label="5" />
          <Badge kind="danger" label="6" />
        </div>
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;!-- Dot Badges --&gt;
&lt;Badge kind="primary" /&gt;
&lt;Badge kind="secondary" /&gt;
&lt;Badge kind="success" /&gt;
&lt;Badge kind="info" /&gt;
&lt;Badge kind="warning" /&gt;
&lt;Badge kind="danger" /&gt;

&lt;!-- Text Badges --&gt;
&lt;Badge kind="primary" label="Primary" /&gt;
&lt;Badge kind="secondary" label="Secondary" /&gt;
&lt;!-- etc. --&gt;

&lt;!-- Numeric Badges --&gt;
&lt;Badge kind="primary" label="1" /&gt;
&lt;Badge kind="secondary" label="2" /&gt;
&lt;!-- etc. --&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Positioning Badges</h2>
      <p class="mb-4">Badges can be positioned relative to other elements using CSS positioning.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative">
            <Action label="Messages" kind="secondary" />
            <Badge class="absolute -top-2 -right-2" label="5" />
          </div>
          
          <div class="relative">
            <Action label="Notifications" kind="secondary" />
            <Badge class="absolute -top-2 -right-2" kind="warning" />
          </div>
          
          <div class="relative inline-block">
            <span class="text-xl">📬</span>
            <Badge class="absolute -top-2 -right-2" label="99+" />
          </div>
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;div class="relative"&gt;
  &lt;Action label="Messages" kind="secondary" /&gt;
  &lt;Badge class="absolute -top-2 -right-2" label="5" /&gt;
&lt;/div&gt;

&lt;div class="relative"&gt;
  &lt;Action label="Notifications" kind="secondary" /&gt;
  &lt;Badge class="absolute -top-2 -right-2" kind="warning" /&gt;
&lt;/div&gt;

&lt;div class="relative inline-block"&gt;
  &lt;span class="text-xl"&gt;📬&lt;/span&gt;
  &lt;Badge class="absolute -top-2 -right-2" label="99+" /&gt;
&lt;/div&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Use badges sparingly to avoid visual noise in your interface</li>
        <li>Choose badge kinds that match their semantic meaning (e.g., use <code>danger</code> for critical notifications, <code>success</code> for completed items)</li>
        <li>Keep badge text concise, preferably using numbers or very short text</li>
        <li>For large numbers, consider using a consistent format like "99+" instead of exact values</li>
        <li>Ensure proper contrast between the badge and its background for readability</li>
        <li>Consider using the dot variant (without a label) for subtle indicators</li>
        <li>Position badges consistently across your application for better user experience</li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Application Menu with Badges</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-col w-64 gap-2 border border-base-200 dark:border-base-800 rounded-lg p-4">
          <div class="relative flex items-center p-2 rounded hover:bg-base-200 dark:hover:bg-base-800 cursor-pointer">
            <span>Dashboard</span>
          </div>
          <div class="relative flex items-center p-2 rounded hover:bg-base-200 dark:hover:bg-base-800 cursor-pointer">
            <span>Messages</span>
            <Badge class="ml-2" kind="primary" label="3" />
          </div>
          <div class="relative flex items-center p-2 rounded hover:bg-base-200 dark:hover:bg-base-800 cursor-pointer">
            <span>Notifications</span>
            <Badge class="ml-2" kind="danger" label="12" />
          </div>
          <div class="relative flex items-center p-2 rounded hover:bg-base-200 dark:hover:bg-base-800 cursor-pointer">
            <span>Settings</span>
            <Badge class="ml-2" kind="warning" />
          </div>
        </div>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Feature Status Badges</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-col gap-3">
          <div class="flex items-center">
            <span class="w-32">User Profiles:</span>
            <Badge kind="success" label="Live" />
          </div>
          <div class="flex items-center">
            <span class="w-32">Analytics:</span>
            <Badge kind="warning" label="Beta" />
          </div>
          <div class="flex items-center">
            <span class="w-32">API Access:</span>
            <Badge kind="info" label="Coming Soon" />
          </div>
          <div class="flex items-center">
            <span class="w-32">Old Feature:</span>
            <Badge kind="danger" label="Deprecated" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  const kinds = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ] as Kind[];
</script>