<template>
  <div class="content">
    <Prose>
      <h1>Switch</h1>
      <h2>Overview</h2>
      <p>The Switch component provides a toggleable control that allows users to choose between two states. It's commonly used for enabling or disabling features, turning settings on or off, or toggling between binary options. The switch visually represents its state, making it easy for users to understand the current selection.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const notificationsEnabled = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Switch v-model="notificationsEnabled" label="Enable notifications" /&gt;
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
      <h2>v-model</h2>
      <p>The component supports v-model for two-way binding of the switch state (true for on, false for off).</p>
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
      <h2>Different Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Switch v-model="primaryState" kind="primary" label="Primary Switch" /&gt;
  &lt;Switch v-model="secondaryState" kind="secondary" label="Secondary Switch" /&gt;
  &lt;Switch v-model="successState" kind="success" label="Success Switch" /&gt;
  &lt;Switch v-model="infoState" kind="info" label="Info Switch" /&gt;
  &lt;Switch v-model="warningState" kind="warning" label="Warning Switch" /&gt;
  &lt;Switch v-model="dangerState" kind="danger" label="Danger Switch" /&gt;
&lt;/template&gt;</code></pre>
      <h2>With Description</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Switch 
    v-model="darkMode"
    label="Dark Mode" 
    description="Enable dark theme across the application"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Required Switch</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Switch 
    v-model="termsAgreed"
    label="I agree to the terms and conditions" 
    required
    showMarker
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>States</h2>
      <h3>Disabled</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Best Practices</h2>
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
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses <code>role="switch"</code> for proper semantic meaning</li>
        <li>Labels are properly associated with the input for screen readers</li>
        <li>The component supports keyboard navigation and operation</li>
        <li>Focus states are clearly visible for keyboard users</li>
        <li>The disabled state is properly communicated to assistive technologies</li>
      </ul>
      <h2>Examples</h2>
      <h3>Feature Toggles</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
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
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>