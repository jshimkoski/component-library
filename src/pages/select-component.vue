<template>
  <div class="content">
    <Prose>
      <h1>Select</h1>
      <h2>Overview</h2>
      <p>The Select component provides a dropdown interface for selecting one or multiple options from a predefined list. It supports icons, descriptions, validation states, and both single and multiple selection modes, making it suitable for forms and data entry scenarios.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="selection"
    label="Choose an option"
    :options="options"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selection = ref('');
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>options</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>[]</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of option objects with <code>label</code>, <code>value</code>, and optional <code>disabled</code> properties.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label text displayed above the select.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the select.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>icon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Icon name to display inside the select input.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the select is disabled.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the select is required for form validation.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>multiple</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether multiple options can be selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for form submission.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show the required marker (*) when required is true.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: Event)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Native change event from the select element.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the label. Overrides the label prop.</td>
          </tr>
        </tbody>
      </table>
      <h2>Option Object Structure</h2>
      <pre><code class="language-typescript">interface SelectOption {
  label: string;      // Display text for the option
  value: any;         // Value to be selected
  disabled?: boolean; // Whether this option is disabled
}</code></pre>
      <h2>With Icon</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="country"
    label="Select Country"
    icon="material-symbols:public"
    :options="countryOptions"
    description="Choose your country"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Multiple Selection</h2>
      <p>/&gt;</p>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="skills"
    label="Select Skills"
    :options="skillOptions"
    multiple
    description="Hold Ctrl/Cmd to select multiple options"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const skills = ref([]);
const skillOptions = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' }
];
&lt;/script&gt;</code></pre>
      <h2>With Disabled Options</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="plan"
    label="Select Plan"
    :options="planOptions"
    description="Some plans may not be available"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const plan = ref('');
const planOptions = [
  { label: 'Free Plan', value: 'free' },
  { label: 'Basic Plan - $9/month', value: 'basic' },
  { label: 'Pro Plan - $29/month', value: 'pro' },
  { label: 'Enterprise Plan', value: 'enterprise', disabled: true }
];
&lt;/script&gt;</code></pre>
      <h2>Required Field</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="priority"
    label="Priority Level"
    :options="priorityOptions"
    required
    description="This field is required"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled Select</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Select 
    v-model="selection"
    label="Disabled Select"
    :options="options"
    disabled
    description="This select is disabled"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Provide clear, descriptive labels for the select and its options</li>
        <li>Use logical grouping and ordering of options (alphabetical, by frequency, or by importance)</li>
        <li>Include descriptions when the purpose or constraints aren't immediately obvious</li>
        <li>Use icons to enhance recognition but ensure they're meaningful and consistent</li>
        <li>For long option lists, consider using a search/filter mechanism or grouping</li>
        <li>Mark required fields clearly with the required prop and appropriate messaging</li>
        <li>Provide feedback for form validation states</li>
        <li>Use multiple selection sparingly - consider other UI patterns for complex multi-selection</li>
        <li>Ensure disabled options are clearly distinguishable and provide context when possible</li>
      </ul>
      <h2>Examples</h2>
      <h3>Search and Filter Integration</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;TextField
    v-model="searchTerm"
    placeholder="Search options..."
    icon="material-symbols:search"
  /&gt;
  &lt;Select 
    v-model="selection"
    label="Select Option"
    :options="filteredOptions"
    description="Type above to filter options"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const searchTerm = ref('');
const selection = ref('');

const allOptions = [
  { label: 'JavaScript Development', value: 'js-dev' },
  { label: 'Python Programming', value: 'python-prog' },
  { label: 'Web Design', value: 'web-design' },
  { label: 'Database Management', value: 'db-mgmt' }
];

const filteredOptions = computed(() =&gt; {
  if (!searchTerm.value) return allOptions;
  
  return allOptions.filter(option =&gt; 
    option.label.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>