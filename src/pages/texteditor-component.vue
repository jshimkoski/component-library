<template>
  <div class="content">
    <Prose>
      <h1>Text Editor</h1>
      <h2>Overview</h2>
      <p>The TextEditor component provides a multi-line text input field with supporting elements like labels and descriptions. It's designed for collecting longer text input from users while maintaining the design system's visual aesthetics and accessibility standards.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextEditor
    v-model="notes"
    label="Notes"
    placeholder="Enter your notes here"
    description="These notes will be visible to the team"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The label text for the textarea.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Explanatory text that appears below the textarea.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The name attribute for the textarea element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the textarea is disabled and visually dimmed.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Indicates if the field is required.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placeholder</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Placeholder text for the textarea.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, displays an asterisk (*) next to the label for required fields.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Replaces the label text. Falls back to the <code>label</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
      <h2>v-model</h2>
      <p>The component supports v-model for two-way binding of the textarea value.</p>
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextEditor
    v-model="aboutMe"
    label="About Me"
    placeholder="Tell us about yourself"
    description="This information will appear on your public profile"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Field</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextEditor
    v-model="feedback"
    label="Feedback"
    required
    showMarker
    placeholder="Please provide your feedback"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextEditor
    v-model="comments"
    label="Comments"
    disabled
    placeholder="Comments are currently disabled"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use clear, concise labels that describe what information is expected</li>
        <li>Include placeholder text to provide examples or additional context</li>
        <li>Use the description prop to clarify expectations or explain how the information will be used</li>
        <li>For required fields, enable both the <code>required</code> and <code>showMarker</code> props to provide visual indication</li>
        <li>Maintain consistent use of descriptions across your application's forms</li>
        <li>Consider the appropriate height for your use case (the default height is 6rem)</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component automatically generates a unique ID to associate the label with the textarea</li>
        <li>Labels are properly associated with the textarea for screen readers</li>
        <li>The required attribute is applied to the textarea when the required prop is true</li>
        <li>Focus states are clearly visible for keyboard navigation</li>
      </ul>
      <h2>Examples</h2>
      <h3>Form Integration</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;form @submit.prevent="submitForm"&gt;
    &lt;TextField v-model="name" label="Name" required showMarker /&gt;
    &lt;TextField v-model="email" label="Email" type="email" required showMarker /&gt;
    &lt;TextEditor
      v-model="message"
      label="Message"
      required
      showMarker
      placeholder="Please provide details about your inquiry"
      description="Be as specific as possible to help us assist you better"
    /&gt;
    &lt;Action type="submit" kind="primary"&gt;Submit&lt;/Action&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      <h3>Character Count</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const bio = ref('');
const maxLength = 150;

const charactersLeft = computed(() =&gt; {
  return maxLength - (bio.value?.length || 0);
});
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;TextEditor
      v-model="bio"
      label="Bio"
      placeholder="Tell us about yourself in 150 characters or less"
    /&gt;
    &lt;div class="text-right text-sm text-base-500"&gt;
      &lt;span&gt;&#123;&#123; maxLength - (bio?.length || 0) &#125;&#125;&lt;/span&gt;/&#123;&#123; maxLength &#125;&#125; characters
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>