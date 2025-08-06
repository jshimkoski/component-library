<template>
  <div class="content">
    <Prose>
      <h1>Text Field</h1>
      <h2>Overview</h2>
      <p>The TextField component provides a standard input field for collecting text-based user input. It's designed with consistent styling, accessibility, and usability in mind, supporting various input types including text, number, email, password, and more.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField v-model="username" label="Username" placeholder="Enter your username" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Icon name from Iconify to display inside the input field.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The label text displayed above the input field.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Additional descriptive text displayed below the input field.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the input element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the input field is disabled and cannot be edited.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the input field is required in a form.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placeholder</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Placeholder text shown when the input is empty.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and required is true, displays an asterisk (*) next to the label.</td>
          </tr>
        </tbody>
      </table>
      <h2>v-model</h2>
      <p>The component supports v-model for two-way binding of the input value.</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Replaces the label text. Falls back to the <code>label</code> prop if not provided.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>suffix</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to display at the end of the input field (e.g., icons or buttons).</td>
          </tr>
        </tbody>
      </table>
      <h2>Different Input Types</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField v-model="text" label="Text" type="text" placeholder="Standard text input" /&gt;
  &lt;TextField v-model="email" label="Email" type="email" placeholder="email@example.com" /&gt;
  &lt;TextField v-model="password" label="Password" type="password" placeholder="Enter your password" /&gt;
  &lt;TextField v-model="number" label="Number" type="number" placeholder="123" /&gt;
  &lt;TextField v-model="phone" label="Telephone" type="tel" placeholder="(123) 456-7890" /&gt;
  &lt;TextField v-model="website" label="URL" type="url" placeholder="https://example.com" /&gt;
&lt;/template&gt;</code></pre>
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField 
    v-model="password"
    label="Password" 
    type="password" 
    placeholder="Create a password"
    description="Password must be at least 8 characters long and include a number"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Field</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField 
    v-model="email"
    label="Email" 
    type="email" 
    placeholder="Enter your email address"
    required
    showMarker
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>With Suffix Icon</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField 
    v-model="searchQuery"
    label="Search" 
    placeholder="Search for items..."
  &gt;
    &lt;template #suffix&gt;
      &lt;Icon icon="material-symbols:search" width="16" height="16" class="text-base-500" /&gt;
    &lt;/template&gt;
  &lt;/TextField&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField 
    v-model="username"
    label="Username" 
    placeholder="This field is disabled"
    disabled
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use clear, concise labels that describe what information is being requested</li>
        <li>Include placeholder text that provides an example of the expected input format</li>
        <li>Use the appropriate input type for the data being collected (email, password, etc.)</li>
        <li>Add descriptions when additional guidance about the field is needed</li>
        <li>For required fields, use both the <code>required</code> and <code>showMarker</code> props to provide visual indication</li>
        <li>Consider using the suffix slot for action buttons or validation indicators</li>
        <li>Keep labels consistent across your forms (e.g., capitalization, terminology)</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component automatically generates a unique ID to associate the label with the input</li>
        <li>Labels are properly associated with the input field for screen readers</li>
        <li>Required state is communicated both visually and through ARIA attributes</li>
        <li>Focus states are clearly visible for keyboard navigation</li>
        <li>The disabled state is properly communicated to assistive technologies</li>
      </ul>
      <h2>Examples</h2>
      <h3>Login Form</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
});

function submitLogin() {
  // Handle login submission
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="submitLogin" class="space-y-4"&gt;
    &lt;TextField 
      v-model="loginForm.email"
      label="Email" 
      type="email" 
      placeholder="your@email.com"
      required
      showMarker
    /&gt;

    &lt;TextField 
      v-model="loginForm.password"
      label="Password" 
      type="password" 
      placeholder="Enter your password"
      required
      showMarker
    /&gt;

    &lt;Checkbox v-model="loginForm.rememberMe" label="Remember me" /&gt;
      &lt;a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline"&gt;Forgot password?&lt;/a&gt;
    &lt;div&gt;
    &lt;Action kind="primary" type="submit" class="w-full"&gt;Sign In&lt;/Action&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      <h3>Search Field with Clear Button</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const searchQuery = ref('');

function clearSearch() {
  searchQuery.value = '';
}
&lt;/script&gt;

&lt;template&gt;
  &lt;TextField 
    v-model="searchQuery"
    label="Search Products" 
    placeholder="Type to search..."
  &gt;
    &lt;template #suffix&gt;
      &lt;Action 
        v-if="searchQuery"
        size="sm" 
        variant="ghost" 
        icon="material-symbols:close"
        @click="clearSearch"
      /&gt;
    &lt;/template&gt;
  &lt;/TextField&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>