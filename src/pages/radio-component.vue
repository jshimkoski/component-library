<template>
  <div class="content">
    <Prose>
      <h1>Radio</h1>
      <h2>Overview</h2>
      <p>The Radio component allows users to select a single option from a set of mutually exclusive choices. It's commonly used in forms, surveys, or any interface where users need to make a single selection from a group of options.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Radio v-model="selectedOption" label="Option 1" name="example" value="option1" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label associated with the radio button.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the radio input. Should be the same for all radio buttons in a group.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the radio button is disabled and cannot be changed.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, marks the radio button as required in a form.</td>
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
      <p>The component supports v-model for two-way binding of the selected value.</p>
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
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Radio 
    v-model="shippingMethod"
    label="Standard Shipping" 
    description="7-10 business days (Free)"
    name="shipping"
    value="standard"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Radio</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Radio 
    v-model="agreement"
    label="I agree to the terms and conditions" 
    required
    showMarker
    name="agreement"
    value="agreed"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Radio 
    v-model="selection"
    label="Unavailable option" 
    disabled
    name="disabled-example"
    value="unavailable"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use clear, concise labels that accurately describe each option</li>
        <li>Group related radio buttons together visually and with the same <code>name</code> attribute</li>
        <li>Use the description prop for additional explanation when needed</li>
        <li>Place most commonly used options at the top of a list</li>
        <li>Use radio buttons (not checkboxes) when users must select exactly one option</li>
        <li>Avoid using radio buttons for optional selections; consider checkboxes instead</li>
        <li>For lists with more than 7 options, consider using a Select component instead</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component automatically generates a unique ID to associate the label with the radio input</li>
        <li>Labels are properly associated with the input for screen readers</li>
        <li>The component supports keyboard navigation and operation</li>
        <li>The required attribute is applied to the input when the required prop is true</li>
        <li>Radio groups should be grouped together semantically (typically using RadioGroup component)</li>
      </ul>
      <h2>Examples</h2>
      <h3>Radio Group for Shipping Options</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const shippingMethod = ref('standard');
&lt;/script&gt;

&lt;template&gt;
  &lt;h3 class="font-semibold text-lg mb-2"&gt;Select Shipping Method&lt;/h3&gt;
  &lt;Radio 
    v-model="shippingMethod" 
    name="shipping-method" 
    value="standard" 
    label="Standard Shipping" 
    description="Delivery in 5-7 business days (Free)"
  /&gt;

  &lt;Radio 
    v-model="shippingMethod" 
    name="shipping-method" 
    value="express" 
    label="Express Shipping" 
    description="Delivery in 2-3 business days ($5.99)"
  /&gt;

  &lt;Radio 
    v-model="shippingMethod" 
    name="shipping-method" 
    value="overnight" 
    label="Overnight Shipping" 
    description="Next business day delivery ($12.99)"
  /&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>