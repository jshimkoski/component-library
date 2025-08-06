<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Avatar</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Avatar component displays a user or entity's profile image with flexible sizing and styling options. It's commonly used in user interfaces for representing people, accounts, or other entities with a visual identity.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Avatar
        src="https://i.pravatar.cc/300"
        alt="User Avatar"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Avatar 
    src="https://i.pravatar.cc/300" 
    alt="User Avatar" 
  /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>src</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL of the avatar image.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>alt</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;Avatar&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Alternative text for the image for accessibility.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>size</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;xs&amp;quot; | &amp;quot;sm&amp;quot; | &amp;quot;md&amp;quot; | &amp;quot;lg&amp;quot; | &amp;quot;xl&amp;quot; | &amp;quot;2xl&amp;quot; | &amp;quot;3xl&amp;quot; | &amp;quot;4xl&amp;quot; | &amp;quot;5xl&amp;quot; | &amp;quot;6xl&amp;quot; | &amp;quot;7xl&amp;quot; | &amp;quot;8xl&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;md&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Size of the avatar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>shape</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;circle&amp;quot; | &amp;quot;square&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;circle&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shape of the avatar.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" />
        <Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Shapes</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" />
        <Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Error Handling</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Avatar
        src="https://invalid-url-that-will-fail.com/image.jpg"
        alt="Fallback Example"
        />
      </div>
      <Prose>
        <p>The Avatar component automatically displays a fallback image if the provided image URL fails to load.</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Avatar 
    src="https://invalid-url-that-will-fail.com/image.jpg" 
    alt="Fallback Example" 
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Always provide a meaningful <code>alt</code> attribute for accessibility</li>
          <li>Choose an appropriate size based on the context where the avatar is displayed</li>
          <li>Use consistent avatar sizes for similar contexts (e.g., same size for all avatars in a user list)</li>
          <li>Consider using the circle shape for user avatars and square shape for organization or entity avatars</li>
          <li>Ensure the source image has an appropriate aspect ratio (preferably 1:1) to avoid distortion</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The component uses the <code>alt</code> attribute to provide an accessible name for the image</li>
          <li>Screen readers will announce the image using the <code>alt</code> text</li>
          <li>Ensure the <code>alt</code> text is descriptive but concise (e.g., "Profile picture of John Doe")</li>
          <li>For decorative avatars, consider passing an empty string as the <code>alt</code> attribute</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">User Profile Header</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Avatar 
    src="https://i.pravatar.cc/300" 
    size="xl"
    alt="Jane Doe's profile picture"
  /&gt;

  &lt;div&gt;
    &lt;h3&gt;Jane Doe&lt;/h3&gt;
    &lt;p&gt;Product Designer&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">User List</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div v-for="user in users" :key="user.id"&gt;
    &lt;Avatar :src="user.avatarUrl" size="sm" :alt="`${user.name}'s avatar`" /&gt;
    &#123;&#123; user.name &#125;&#125;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>