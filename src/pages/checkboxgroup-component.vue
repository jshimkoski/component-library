<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">CheckboxGroup</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The CheckboxGroup component is designed to manage collections of related Checkbox components. It provides a semantic grouping with a label, optional description, and consistent styling, making it ideal for multiple-choice selections in forms.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <CheckboxGroup
        v-model="selectedInterests"
        label="Select your interests"
        :options="[
        { value: 'technology', label: 'Technology' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'travel', label: 'Travel' }
        ]"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">v-model</h2>
      
      <Prose>
        <p>The component supports v-model for two-way binding of selected values. The v-model binds to an array containing the values of the selected checkboxes.</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <CheckboxGroup
        v-model="notificationPreferences"
        label="Notification Preferences"
        description="Choose which notifications you'd like to receive"
        :options="[
        { value: 'email', label: 'Email notifications' },
        { value: 'push', label: 'Push notifications' },
        { value: 'sms', label: 'SMS notifications' }
        ]"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Required Group</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <CheckboxGroup
        v-model="selectedOptions"
        label="Choose at least one option"
        required
        showMarker
        :options="[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
        ]"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Options with Descriptions</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <CheckboxGroup
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
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled Group</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Mixed Disabled States</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use meaningful labels for both the group and individual options</li>
          <li>Group related options together for better cognitive organization</li>
          <li>Include descriptions when options might need additional explanation</li>
          <li>Keep the number of options reasonable (generally less than 7-10 per group)</li>
          <li>Consider using spacing or visual separators for groups with many options</li>
          <li>Arrange options in a logical order (alphabetical, most common first, etc.)</li>
          <li>Use required and showMarker together to properly indicate required selections</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The component uses proper semantic HTML with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements</li>
          <li>The disabled state is properly communicated to assistive technologies</li>
          <li>Group-level requirements are semantically associated with the fieldset</li>
          <li>Labels are properly formatted and associated with each checkbox</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Feature Selection</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Terms Acceptance</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedInterests = ref([]);
</script>