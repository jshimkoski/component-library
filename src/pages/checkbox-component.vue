<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Checkbox Components</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Checkbox and CheckboxGroup components provide selectable controls for users to choose one or more options from a set.
        These components are designed for flexibility and accessibility, supporting various states and customization options.
      </p>
    </section>

    <section id="checkbox" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Checkbox Component</h2>
      <p class="mb-4">
        The Checkbox component is a standalone selectable control that can be used individually or within a CheckboxGroup.
      </p>

      <h3 class="text-lg font-medium mt-6 mb-3">Basic Usage</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="grid gap-2">
          <Checkbox
            v-model="singleCheckbox"
            label="Accept terms and conditions"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Checkbox
  v-model="acceptTerms"
  label="Accept terms and conditions"
/&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">With Description</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="grid gap-2">
          <Checkbox
            v-model="descCheckbox"
            label="Subscribe to newsletter"
            description="Receive weekly updates and special offers"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Checkbox
  v-model="subscribe"
  label="Subscribe to newsletter"
  description="Receive weekly updates and special offers"
/&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Multiple Selection</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="grid gap-2">
          <Checkbox
            v-model="multiSelect"
            label="Apple"
            value="apple"
          />
          <Checkbox
            v-model="multiSelect"
            label="Orange"
            value="orange"
          />
          <Checkbox
            v-model="multiSelect"
            label="Banana"
            value="banana"
          />
        </div>
        <p class="mt-2 text-sm text-base-600 dark:text-base-400">Selected fruits: {{ multiSelect.join(', ') }}</p>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Checkbox
  v-model="selectedFruits"
  label="Apple"
  value="apple"
/&gt;
&lt;Checkbox
  v-model="selectedFruits"
  label="Orange"
  value="orange"
/&gt;
&lt;Checkbox
  v-model="selectedFruits"
  label="Banana"
  value="banana"
/&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Checkbox States</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="grid gap-3">
          <Checkbox
            v-model="checkboxStates.normal"
            label="Normal checkbox"
          />
          <Checkbox
            v-model="checkboxStates.checked"
            label="Checked checkbox"
          />
          <Checkbox
            v-model="checkboxStates.disabled"
            label="Disabled checkbox"
            disabled
          />
          <Checkbox
            v-model="checkboxStates.disabledChecked"
            label="Disabled & checked"
            disabled
          />
          <Checkbox
            v-model="checkboxStates.indeterminate"
            label="Indeterminate state"
            indeterminate
          />
          <Checkbox
            v-model="checkboxStates.required"
            label="Required checkbox"
            required
            showMarker
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Checkbox Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean, Array, String, Number, Object</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current value(s) of the checkbox (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the checkbox</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the label</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the input field</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the checkbox is disabled</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the checkbox is required</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show an asterisk (*) marker for required fields</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>indeterminate</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to display the checkbox in an indeterminate state</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>value</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean, String, Number, Object</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Value of the checkbox when used in a group</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>trueValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean, String, Number, Object</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">true</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Value when the checkbox is checked</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>falseValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean, String, Number, Object</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Value when the checkbox is unchecked</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Checkbox Slots</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom label content. Replaces the <code>label</code> prop when provided</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="checkbox-group" class="mb-10">
      <h2 class="text-xl font-semibold mb-4">CheckboxGroup Component</h2>
      <p class="mb-4">
        The CheckboxGroup component provides a convenient way to group related checkboxes and manage their state collectively.
      </p>

      <h3 class="text-lg font-medium mt-6 mb-3">Basic Usage</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <CheckboxGroup
            v-model="groupSelection"
            :options="basicOptions"
            label="Select Preferred Technologies"
          />
          <p class="mt-2 text-sm text-base-600 dark:text-base-400">Selected: {{ groupSelection.join(', ') }}</p>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;CheckboxGroup
  v-model="selectedTechnologies"
  :options="[
    { label: 'Vue', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' }
  ]"
  label="Select Preferred Technologies"
/&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">With Description and Disabled Options</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <CheckboxGroup
            v-model="advancedSelection"
            :options="advancedOptions"
            label="Privacy Settings"
            description="Control how we use your data"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;CheckboxGroup
  v-model="privacySettings"
  :options="[
    { label: 'Essential cookies', value: 'essential', disabled: true, description: 'Required for the website to function' },
    { label: 'Analytics', value: 'analytics', description: 'Help us improve our website' },
    { label: 'Marketing', value: 'marketing', description: 'Personalized ads and content' }
  ]"
  label="Privacy Settings"
  description="Control how we use your data"
/&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Required Group</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <CheckboxGroup
            v-model="requiredSelection"
            :options="requiredOptions"
            label="Terms and Conditions"
            required
            showMarker
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;CheckboxGroup
  v-model="termsAccepted"
  :options="[
    { label: 'I accept the Terms of Service', value: 'tos' },
    { label: 'I accept the Privacy Policy', value: 'privacy' }
  ]"
  label="Terms and Conditions"
  required
  showMarker
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">CheckboxGroup Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of selected values (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>options</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of checkbox options with properties like label, value, disabled, etc.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the checkbox group</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the group label</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the fieldset</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>form</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Form attribute for the fieldset</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the entire checkbox group is disabled</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the checkbox group is required</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show an asterisk (*) marker for required fields</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Use Case Example: Form with Checkboxes</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <form class="max-w-md grid gap-4">
          <TextField
            v-model="formExample.email"
            label="Email Address"
            type="email"
            required
            showMarker
            placeholder="your@email.com"
          />
          
          <CheckboxGroup
            v-model="formExample.interests"
            :options="formExample.interestOptions"
            label="Topics of Interest"
            description="Select all that apply"
          />
          
          <Checkbox
            v-model="formExample.terms"
            label="I agree to the Terms and Conditions"
            required
            showMarker
          />
          
          <div class="mt-4">
            <Action 
              label="Subscribe" 
              kind="primary" 
              :disabled="!formExample.email || !formExample.terms || formExample.interests.length === 0" 
            />
          </div>
        </form>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Use checkboxes for binary choices or multiple selections from a list</li>
        <li>Use a single checkbox for a binary option (e.g., "I agree to the terms")</li>
        <li>Use CheckboxGroup for related options that can be selected independently</li>
        <li>Provide clear, concise labels for each checkbox</li>
        <li>Use descriptions to provide additional context when necessary</li>
        <li>Group related checkboxes together for better organization</li>
        <li>Clearly indicate which fields are required using the <code>required</code> and <code>showMarker</code> props</li>
        <li>Pre-select the most common or recommended options when appropriate</li>
        <li>Consider using indeterminate state for "select all" parent checkboxes</li>
        <li>Ensure checkboxes are large enough to be easily clickable on touch devices</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Checkbox examples
  const singleCheckbox = ref(false);
  const descCheckbox = ref(true);
  const multiSelect = ref(['apple']);
  
  // Checkbox states
  const checkboxStates = reactive({
    normal: false,
    checked: true,
    disabled: false,
    disabledChecked: true,
    indeterminate: true,
    required: false
  });
  
  // CheckboxGroup examples
  const basicOptions = [
    { label: 'Vue', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' }
  ];
  
  const groupSelection = ref(['vue', 'svelte']);
  
  const advancedOptions = [
    { 
      label: 'Essential cookies', 
      value: 'essential', 
      disabled: true, 
      description: 'Required for the website to function' 
    },
    { 
      label: 'Analytics', 
      value: 'analytics', 
      description: 'Help us improve our website' 
    },
    { 
      label: 'Marketing', 
      value: 'marketing', 
      description: 'Personalized ads and content' 
    }
  ];
  
  const advancedSelection = ref(['essential', 'analytics']);
  
  const requiredOptions = [
    { label: 'I accept the Terms of Service', value: 'tos' },
    { label: 'I accept the Privacy Policy', value: 'privacy' }
  ];
  
  const requiredSelection = ref([]);
  
  // Form example
  const formExample = reactive({
    email: '',
    interests: ['frontend'],
    interestOptions: [
      { label: 'Frontend Development', value: 'frontend' },
      { label: 'Backend Development', value: 'backend' },
      { label: 'UI/UX Design', value: 'design' },
      { label: 'DevOps', value: 'devops' },
      { label: 'Data Science', value: 'data' }
    ],
    terms: false
  });
</script>