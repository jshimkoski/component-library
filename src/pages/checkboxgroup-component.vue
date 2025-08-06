<template>
  <div class="content">
    <Prose>
      <h1>Checkbox Group</h1>
      <h2>Overview</h2>
      <p>The CheckboxGroup component is designed to manage collections of related Checkbox components. It provides a semantic grouping with a label, optional description, and consistent styling, making it ideal for multiple-choice selections in forms.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="selectedInterests"
    label="Select your interests"
    :options="[
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'travel', label: 'Travel' }
    ]"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selectedInterests = ref([]);
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The label for the checkbox group.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Additional descriptive text displayed below the label.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the fieldset element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>form</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Specifies which form the fieldset belongs to.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables all checkboxes in the group.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, indicates that at least one option must be selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and required is true, displays an asterisk (*) next to the label.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>options</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of objects defining the checkboxes in the group.</td>
          </tr>
        </tbody>
      </table>
      <h3>Options Array Structure</h3>
      <p>Each object in the options array supports the following properties:</p>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Property</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Type</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>value</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Any</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The value associated with the option when selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The display label for the option.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional description text for the option.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>class</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional CSS class names to apply to the option.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional name attribute for the individual checkbox.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables this specific option.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, marks this specific option as required.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Controls the display of the required marker for this option.</td>
          </tr>
        </tbody>
      </table>
      <h2>v-model</h2>
      <p>The component supports v-model for two-way binding of selected values. The v-model binds to an array containing the values of the selected checkboxes.</p>
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="notificationPreferences"
    label="Notification Preferences"
    description="Choose which notifications you'd like to receive"
    :options="[
      { value: 'email', label: 'Email notifications' },
      { value: 'push', label: 'Push notifications' },
      { value: 'sms', label: 'SMS notifications' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Group</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="selectedOptions"
    label="Choose at least one option"
    required
    showMarker
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Options with Descriptions</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="selectedPlans"
    label="Subscription Plans"
    :options="[
      { 
        value: 'basic', 
        label: 'Basic Plan', 
        description: 'Essential features for individuals'
      },
      { 
        value: 'pro', 
        label: 'Pro Plan', 
        description: 'Advanced features for professionals'
      },
      { 
        value: 'enterprise', 
        label: 'Enterprise Plan', 
        description: 'Complete solution for large organizations'
      }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled Group</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="disabledOptions"
    label="This group is disabled"
    disabled
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h3>Mixed Disabled States</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="mixedStateOptions"
    label="Some options are disabled"
    :options="[
      { value: 'option1', label: 'Available Option' },
      { value: 'option2', label: 'Disabled Option', disabled: true },
      { value: 'option3', label: 'Another Available Option' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use meaningful labels for both the group and individual options</li>
        <li>Group related options together for better cognitive organization</li>
        <li>Include descriptions when options might need additional explanation</li>
        <li>Keep the number of options reasonable (generally less than 7-10 per group)</li>
        <li>Consider using spacing or visual separators for groups with many options</li>
        <li>Arrange options in a logical order (alphabetical, most common first, etc.)</li>
        <li>Use required and showMarker together to properly indicate required selections</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses proper semantic HTML with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements</li>
        <li>The disabled state is properly communicated to assistive technologies</li>
        <li>Group-level requirements are semantically associated with the fieldset</li>
        <li>Labels are properly formatted and associated with each checkbox</li>
      </ul>
      <h2>Examples</h2>
      <h3>Feature Selection</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;CheckboxGroup
    v-model="selectedFeatures"
    label="Choose additional features"
    description="Select the features you'd like to add to your package"
    :options="[
      { 
        value: 'backup', 
        label: 'Automated Backups', 
        description: 'Daily backups of all your data' 
      },
      { 
        value: 'analytics', 
        label: 'Advanced Analytics', 
        description: 'Detailed insights and reporting tools' 
      },
      { 
        value: 'support', 
        label: 'Priority Support', 
        description: 'Get help within 1 business hour' 
      },
      { 
        value: 'domains', 
        label: 'Custom Domains', 
        description: 'Use your own domain names' 
      }
    ]"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selectedFeatures = ref([]);

// Watch for changes to calculate total price
watch(selectedFeatures, (newValues) =&gt; {
  calculateTotalPrice(newValues);
});
&lt;/script&gt;</code></pre>
      <h3>Terms Acceptance</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;form @submit.prevent="submitForm" class="space-y-5"&gt;
    &lt;TextField v-model="email" label="Email" type="email" /&gt;
    &lt;CheckboxGroup
      v-model="agreements"
      label="Terms and Agreements"
      required
      showMarker
      :options="[
        { 
          value: 'terms', 
          label: 'I agree to the Terms of Service',
          required: true 
        },
        { 
          value: 'privacy', 
          label: 'I agree to the Privacy Policy',
          required: true 
        },
        { 
          value: 'marketing', 
          label: 'I would like to receive marketing emails',
          required: false
        }
      ]"
    /&gt;
    &lt;div&gt;
      &lt;Action kind="primary" type="submit"&gt;Sign Up&lt;/Action&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
const agreements = ref([]);
const email = ref('');

function submitForm() {
  // Validation: Check if required agreements are accepted
  const requiredValues = ['terms', 'privacy'];
  const allRequiredAccepted = requiredValues.every(val =&gt; 
    agreements.value.includes(val)
  );
  
  if (allRequiredAccepted) {
    // Process form submission
  }
}
&lt;/script&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>