<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Checkbox</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Checkbox component allows users to select one or more items from a set of options. It's commonly used in forms, settings panels, and preference lists to toggle options on and off.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Checkbox v-model="subscribed" label="Subscribe to newsletter" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox v-model="subscribed" label="Subscribe to newsletter" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label associated with the checkbox.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the checkbox input.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the checkbox is disabled and cannot be changed.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, marks the checkbox as required in a form.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and required is true, displays an asterisk (*) next to the label.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>indeterminate</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, shows the checkbox in an indeterminate state.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>value</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean | String | Number | Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The value to use when the checkbox is used in a group.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>trueValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean | String | Number | Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The value when checked.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>falseValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean | String | Number | Object</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The value when unchecked.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">v-model</h2>
      
      <Prose>
        <p>The component supports v-model for two-way binding of the checkbox state.</p>
      </Prose>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Replaces the label text. Falls back to the <code>label</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Checkbox
        v-model="productUpdates"
        label="Send me product updates"
        description="You'll receive occasional emails about product updates and new features"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox 
    v-model="productUpdates"
    label="Send me product updates" 
    description="You'll receive occasional emails about product updates and new features"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Required Checkbox</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Checkbox
        v-model="termsAgreed"
        label="I agree to the terms and conditions"
        required
        showMarker
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox 
    v-model="termsAgreed"
    label="I agree to the terms and conditions" 
    required
    showMarker
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Indeterminate State</h2>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox 
    v-model="selectAll"
    label="Select all items" 
    :indeterminate="indeterminate"
    @change="updateIndeterminateState"
  /&gt;

  &lt;div class="mt-2 ml-6 space-y-1"&gt;
    &lt;Checkbox 
      v-for="item in items" 
      :key="item.id"
      v-model="item.selected"
      :label="item.name"
      @change="updateIndeterminateState"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const selectAll = ref(false);
const indeterminate = ref(true);
const items = ref([
  { id: 1, selected: true, name: 'Item 1' },
  { id: 2, selected: false, name: 'Item 2' },
  { id: 3, selected: true, name: 'Item 3' },
]);

// Update indeterminate state based on selected items
function updateIndeterminateState() {
  const selectedCount = items.value.filter(item =&gt; item.selected).length;
  indeterminate.value = selectedCount &gt; 0 &amp;&amp; selectedCount &lt; items.value.length;
  selectAll.value = selectedCount === items.value.length;
}

// Toggle all items when selectAll changes
watch(selectAll, (newValue) =&gt; {
  items.value.forEach(item =&gt; item.selected = newValue);
  indeterminate.value = false;
});
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom True/False Values</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Checkbox
        v-model="shippingMethod"
        label="Express shipping"
        true-value="express"
        false-value="standard"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox 
    v-model="shippingMethod"
    label="Express shipping" 
    true-value="express"
    false-value="standard"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox 
    label="Disabled unchecked" 
    disabled
    v-model="option1"
  /&gt;

  &lt;Checkbox 
    label="Disabled checked" 
    disabled
    v-model="option2"
  /&gt;

  &lt;Checkbox 
    label="Disabled indeterminate" 
    disabled
    indeterminate
    v-model="option3"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use clear, concise labels that accurately describe the option</li>
          <li>Group related checkboxes together visually</li>
          <li>Use the description prop for additional explanation when needed</li>
          <li>Consider using indeterminate state for parent checkboxes that control a group of child checkboxes</li>
          <li>Place most commonly used options at the top of a list</li>
          <li>Use checkboxes (not radio buttons) when users can select multiple options</li>
          <li>Use checkboxes (not toggle switches) for optional form submissions</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The component automatically generates a unique ID to associate the label with the checkbox input</li>
          <li>Labels are properly associated with the input for screen readers</li>
          <li>The component supports keyboard navigation and operation</li>
          <li>The required attribute is applied to the input when the required prop is true</li>
          <li>Indeterminate state is properly communicated to assistive technologies</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Checkbox Group for Preferences</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;h3 class="font-semibold text-lg mb-2"&gt;Notification Preferences&lt;/h3&gt;
  &lt;Checkbox v-model="preferences.email" label="Email notifications" /&gt;
  &lt;Checkbox v-model="preferences.push" label="Push notifications" /&gt;
  &lt;Checkbox v-model="preferences.sms" label="SMS alerts" /&gt;
  &lt;Checkbox 
    v-model="preferences.digest"
    label="Weekly digest" 
    description="Receive a summary of all activity once per week"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Form with Required Checkbox</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;form @submit.prevent="submitForm" class="space-y-4"&gt;
    &lt;div&gt;
      &lt;TextField v-model="formData.email" label="Email" type="email" required showMarker /&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;Checkbox 
        v-model="formData.agreedToPrivacy"
        label="I agree to the privacy policy" 
        required
        showMarker
      /&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;Action kind="primary" type="submit"&gt;Subscribe&lt;/Action&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
const formData = reactive({
  email: '',
  agreedToPrivacy: false
});

function submitForm() {
  if (formData.agreedToPrivacy) {
    // Process form submission
  }
}
&lt;/script&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Custom Label Content</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Checkbox v-model="agreedToTerms"&gt;
    &lt;div&gt;
      I agree to the &lt;Action href="/terms"&gt;Terms of Service&lt;/Action&gt; and &lt;Action href="/privacy"&gt;Privacy Policy&lt;/Action&gt;
    &lt;/div&gt;
  &lt;/Checkbox&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const subscribed = ref(null);
</script>