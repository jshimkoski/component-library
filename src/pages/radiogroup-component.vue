<template>
  <div class="content">
    <Prose>
      <h1>Radio Group</h1>
      <h2>Overview</h2>
      <p>The RadioGroup component simplifies the management of related Radio components by grouping them together. It provides a semantic grouping with a label, optional description, and consistent styling, making it ideal for selecting a single option from a list of choices.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const selectedOption = ref('option1');
&lt;/script&gt;

&lt;template&gt;
  &lt;RadioGroup
    v-model="selectedOption"
    label="Select an option"
    :options="[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The label for the radio group.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, disables all radio buttons in the group.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, indicates that a selection is required.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Array of objects defining the radio buttons in the group.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional name attribute for the individual radio button.</td>
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
      <p>The component supports v-model for two-way binding of the selected value.</p>
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RadioGroup
    v-model="shippingMethod"
    label="Shipping Method"
    description="Choose how you want your order delivered"
    :options="[
      { value: 'standard', label: 'Standard Shipping', description: '5-7 business days (Free)' },
      { value: 'express', label: 'Express Shipping', description: '2-3 business days ($5.99)' },
      { value: 'overnight', label: 'Overnight Shipping', description: 'Next business day ($12.99)' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Group</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RadioGroup
    v-model="selectedPlan"
    label="Select a plan"
    required
    showMarker
    :options="[
      { value: 'basic', label: 'Basic' },
      { value: 'premium', label: 'Premium' },
      { value: 'enterprise', label: 'Enterprise' }
    ]"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled Group</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RadioGroup
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
  &lt;RadioGroup
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
        <li>RadioGroup should be used for mutually exclusive choices (only one selection allowed)</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses proper semantic HTML with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements</li>
        <li>The disabled state is properly communicated to assistive technologies</li>
        <li>Group-level requirements are semantically associated with the fieldset</li>
        <li>Labels are properly formatted and associated with each radio button</li>
        <li>The component provides proper keyboard navigation between options</li>
      </ul>
      <h2>Examples</h2>
      <h3>Payment Method Selection</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const paymentMethod = ref('credit-card');

function submitForm() {
  // Process payment
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="submitForm" class="space-y-4"&gt;
    &lt;RadioGroup
      v-model="paymentMethod"
      label="Payment Method"
      required
      showMarker
      :options="[
        { 
          value: 'credit-card', 
          label: 'Credit Card', 
          description: 'Visa, Mastercard, American Express' 
        },
        { 
          value: 'paypal', 
          label: 'PayPal', 
          description: 'Secure online payment' 
        },
        { 
          value: 'bank-transfer', 
          label: 'Bank Transfer', 
          description: 'Direct payment from your bank account' 
        }
      ]"
    /&gt;
    &lt;Action kind="primary" type="submit"&gt;Continue to Payment&lt;/Action&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>