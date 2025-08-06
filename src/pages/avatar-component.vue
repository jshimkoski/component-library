<template>
  <div class="content">
    <Prose>
      <h1>Avatar</h1>
      <h2>Overview</h2>
      <p>The Avatar component displays a user or entity's profile image with flexible sizing and styling options. It's commonly used in user interfaces for representing people, accounts, or other entities with a visual identity.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Avatar 
    src="https://i.pravatar.cc/300" 
    alt="User Avatar" 
  /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>src</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL of the avatar image.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>alt</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;Avatar&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Alternative text for the image for accessibility.</td>
          </tr>
        </tbody>
      </table>
      <h2>Sizes</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Shapes</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" /&gt;
  &lt;Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" /&gt;
&lt;/template&gt;</code></pre>
      <h2>Error Handling</h2>
      <p>The Avatar component automatically displays a fallback image if the provided image URL fails to load.</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Avatar 
    src="https://invalid-url-that-will-fail.com/image.jpg" 
    alt="Fallback Example" 
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Always provide a meaningful <code>alt</code> attribute for accessibility</li>
        <li>Choose an appropriate size based on the context where the avatar is displayed</li>
        <li>Use consistent avatar sizes for similar contexts (e.g., same size for all avatars in a user list)</li>
        <li>Consider using the circle shape for user avatars and square shape for organization or entity avatars</li>
        <li>Ensure the source image has an appropriate aspect ratio (preferably 1:1) to avoid distortion</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses the <code>alt</code> attribute to provide an accessible name for the image</li>
        <li>Screen readers will announce the image using the <code>alt</code> text</li>
        <li>Ensure the <code>alt</code> text is descriptive but concise (e.g., "Profile picture of John Doe")</li>
        <li>For decorative avatars, consider passing an empty string as the <code>alt</code> attribute</li>
      </ul>
      <h2>Examples</h2>
      <h3>User Profile Header</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h3>User List</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div v-for="user in users" :key="user.id"&gt;
    &lt;Avatar :src="user.avatarUrl" size="sm" :alt="`${user.name}'s avatar`" /&gt;
    &#123;&#123; user.name &#125;&#125;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>