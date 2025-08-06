<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Switch</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Switch component provides a toggleable control that allows users to choose between two states. It's commonly used for enabling or disabling features, turning settings on or off, or toggling between binary options. The switch visually represents its state, making it easy for users to understand the current selection.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Switch v-model="notificationsEnabled" label="Enable notifications" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const notificationsEnabled = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Switch v-model="notificationsEnabled" label="Enable notifications" /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot; | &amp;quot;secondary&amp;quot; | &amp;quot;success&amp;quot; | &amp;quot;info&amp;quot; | &amp;quot;warning&amp;quot; | &amp;quot;danger&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The color theme of the switch when in the on state.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label associated with the switch.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the underlying input element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the switch is disabled and cannot be toggled.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, marks the switch as required in a form.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and required is true, displays an asterisk (*) next to the label.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">v-model</h2>
      
      <Prose>
        <p>The component supports v-model for two-way binding of the switch state (true for on, false for off).</p>
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
      <h2 class="text-xl font-semibold mb-4">Different Kinds</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Switch v-model="primaryState" kind="primary" label="Primary Switch" />
        <Switch v-model="secondaryState" kind="secondary" label="Secondary Switch" />
        <Switch v-model="successState" kind="success" label="Success Switch" />
        <Switch v-model="infoState" kind="info" label="Info Switch" />
        <Switch v-model="warningState" kind="warning" label="Warning Switch" />
        <Switch v-model="dangerState" kind="danger" label="Danger Switch" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Switch v-model="primaryState" kind="primary" label="Primary Switch" /&gt;
  &lt;Switch v-model="secondaryState" kind="secondary" label="Secondary Switch" /&gt;
  &lt;Switch v-model="successState" kind="success" label="Success Switch" /&gt;
  &lt;Switch v-model="infoState" kind="info" label="Info Switch" /&gt;
  &lt;Switch v-model="warningState" kind="warning" label="Warning Switch" /&gt;
  &lt;Switch v-model="dangerState" kind="danger" label="Danger Switch" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Switch
        v-model="darkMode"
        label="Dark Mode"
        description="Enable dark theme across the application"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Switch 
    v-model="darkMode"
    label="Dark Mode" 
    description="Enable dark theme across the application"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Required Switch</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Switch
        v-model="termsAgreed"
        label="I agree to the terms and conditions"
        required
        showMarker
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Switch 
    v-model="termsAgreed"
    label="I agree to the terms and conditions" 
    required
    showMarker
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
  &lt;Switch 
    v-model="disabledOffOption"
    label="Disabled off state" 
    disabled
  /&gt;

  &lt;Switch 
    v-model="disabledOnOption"
    label="Disabled on state" 
    disabled
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use clear, concise labels that describe the effect of enabling the switch</li>
          <li>Use the description prop when additional context or explanation is needed</li>
          <li>Choose colors that align with the meaning of the action:</li>
          <li><code>primary</code>: For main features or standard toggles</li>
          <li><code>success</code>: For enabling positive or beneficial features</li>
          <li><code>danger</code>: For risky or potentially destructive toggles</li>
          <li>Other variants as appropriate for your context</li>
          <li>Position switches consistently in your application</li>
          <li>Consider the default state carefully (is the feature opt-in or opt-out?)</li>
          <li>For critical options, consider using the required and showMarker props</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The component uses <code>role="switch"</code> for proper semantic meaning</li>
          <li>Labels are properly associated with the input for screen readers</li>
          <li>The component supports keyboard navigation and operation</li>
          <li>Focus states are clearly visible for keyboard users</li>
          <li>The disabled state is properly communicated to assistive technologies</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Feature Toggles</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const accountSettings = reactive({
  twoFactor: false,
  emailNotifications: true,
  dataSharing: false
});
&lt;/script&gt;

&lt;template&gt;
  &lt;h3&gt;Account Settings&lt;/h3&gt;
  &lt;Switch 
    v-model="accountSettings.twoFactor"
    kind="info"
    label="Two-factor authentication" 
    description="Add an extra layer of security to your account"

  &lt;Switch 
    v-model="accountSettings.emailNotifications"
    kind="primary"
    label="Email notifications" 
    description="Receive updates about account activity"
  /&gt;
  &lt;Switch 
    v-model="accountSettings.dataSharing"
    kind="warning"
    label="Usage data sharing" 
    description="Help us improve by sharing anonymous usage data"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const notificationsEnabled = ref(false);
</script>