<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Select</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Select component provides a dropdown interface for selecting one or multiple options from a predefined list. It supports icons, descriptions, validation states, and both single and multiple selection modes, making it suitable for forms and data entry scenarios.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Select
        v-model="selection"
        label="Choose an option"
        :options="options"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String | Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Selected value(s). Use v-model for two-way binding.</td>
          </tr>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(value: string | string[])</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when selection changes.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>change</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: Event)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Native change event from the select element.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
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
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Option Object Structure</h2>
      
      <Prose>
        <p>interface SelectOption {</p>
        <p>label: string;      // Display text for the option</p>
        <p>value: any;         // Value to be selected</p>
        <p>disabled?: boolean; // Whether this option is disabled</p>
        <p>}</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Icon</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Select
        v-model="country"
        label="Select Country"
        icon="material-symbols:public"
        :options="countryOptions"
        description="Choose your country"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Select 
    v-model="country"
    label="Select Country"
    icon="material-symbols:public"
    :options="countryOptions"
    description="Choose your country"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Multiple Selection</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Select
        v-model="skills"
        label="Select Skills"
        :options="skillOptions"
        multiple
        description="Hold Ctrl/Cmd to select multiple options"
        />
      </div>
      <Prose>
        <p>/></p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Disabled Options</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Select
        v-model="plan"
        label="Select Plan"
        :options="planOptions"
        description="Some plans may not be available"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Required Field</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Select
        v-model="priority"
        label="Priority Level"
        :options="priorityOptions"
        required
        description="This field is required"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Select 
    v-model="priority"
    label="Priority Level"
    :options="priorityOptions"
    required
    description="This field is required"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled Select</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Select 
    v-model="selection"
    label="Disabled Select"
    :options="options"
    disabled
    description="This select is disabled"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
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
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Search and Filter Integration</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selection = ref('');
const options = ref([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]);
</script>