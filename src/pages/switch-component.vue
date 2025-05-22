<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Switch Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Switch component provides a toggle control that enables users to quickly turn an option on or off.
        It's commonly used for binary settings or preferences in forms and configuration interfaces.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <Switch
            v-model="basicSwitch"
            label="Enable notifications"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch
  v-model="enableNotifications"
  label="Enable notifications"
/&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">false</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current value of the switch (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"primary"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Color theme of the switch. Options: primary, secondary, success, info, warning, danger</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the switch</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the switch is disabled</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the switch is required in a form</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show an asterisk (*) marker for required switches</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom label content. Replaces the <code>label</code> prop when provided</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Color Variants</h2>
      <p class="mb-4">The Switch component supports different color variants through the <code>kind</code> prop to convey different meanings.</p>
      
      <div class="grid gap-4 max-w-md mb-4">
        <Switch v-model="colorSwitches.primary" label="Primary" kind="primary" />
        <Switch v-model="colorSwitches.secondary" label="Secondary" kind="secondary" />
        <Switch v-model="colorSwitches.success" label="Success" kind="success" />
        <Switch v-model="colorSwitches.info" label="Info" kind="info" />
        <Switch v-model="colorSwitches.warning" label="Warning" kind="warning" />
        <Switch v-model="colorSwitches.danger" label="Danger" kind="danger" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch v-model="isPrimary" label="Primary" kind="primary" /&gt;
&lt;Switch v-model="isSecondary" label="Secondary" kind="secondary" /&gt;
&lt;Switch v-model="isSuccess" label="Success" kind="success" /&gt;
&lt;Switch v-model="isInfo" label="Info" kind="info" /&gt;
&lt;Switch v-model="isWarning" label="Warning" kind="warning" /&gt;
&lt;Switch v-model="isDanger" label="Danger" kind="danger" /&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <p class="mb-4">Add helper text below the switch label to provide additional context or instructions.</p>
      
      <div class="max-w-md mb-4">
        <Switch
          v-model="withDescription"
          label="Dark Mode"
          description="Enable dark mode to reduce eye strain in low-light environments."
          kind="primary"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch
  v-model="darkMode"
  label="Dark Mode"
  description="Enable dark mode to reduce eye strain in low-light environments."
  kind="primary"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Required Switch</h2>
      <p class="mb-4">Show a required indicator for switches that must be turned on.</p>
      
      <div class="max-w-md mb-4">
        <Switch
          v-model="requiredSwitch"
          label="Accept Terms and Conditions"
          required
          showMarker
          kind="primary"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch
  v-model="acceptTerms"
  label="Accept Terms and Conditions"
  required
  showMarker
  kind="primary"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Disabled State</h2>
      <p class="mb-4">Use the disabled prop to indicate that a switch is not available for interaction.</p>
      
      <div class="max-w-md mb-4 grid gap-4">
        <Switch
          v-model="disabledOff"
          label="Disabled (Off)"
          disabled
          kind="primary"
        />
        
        <Switch
          v-model="disabledOn"
          label="Disabled (On)"
          disabled
          kind="primary"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch
  v-model="disabledValue"
  label="Disabled (Off)"
  disabled
  kind="primary"
/&gt;

&lt;Switch
  v-model="disabledOnValue"
  label="Disabled (On)"
  disabled
  kind="primary"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Label Content</h2>
      <p class="mb-4">Use the default slot to provide custom content for the switch label.</p>
      
      <div class="max-w-md mb-4">
        <Switch v-model="customLabelSwitch" kind="primary">
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
            <span>Custom label with icon</span>
          </span>
        </Switch>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Switch v-model="customLabel" kind="primary"&gt;
  &lt;span class="flex items-center gap-2"&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"&gt;
      &lt;path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /&gt;
    &lt;/svg&gt;
    &lt;span&gt;Custom label with icon&lt;/span&gt;
  &lt;/span&gt;
&lt;/Switch&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Form Example</h2>
      <p class="mb-4">Example of Switch components used in a settings form.</p>
      
      <div class="max-w-md p-6 border border-base-200 dark:border-base-800 rounded-lg mb-4">
        <h3 class="text-lg font-medium mb-4">Notification Settings</h3>
        <form class="grid gap-4">
          <Switch
            v-model="formSettings.emailNotifications"
            label="Email Notifications"
            description="Receive updates and alerts via email"
            kind="primary"
          />
          
          <Switch
            v-model="formSettings.pushNotifications"
            label="Push Notifications"
            description="Receive notifications on your device"
            kind="primary"
          />
          
          <Switch
            v-model="formSettings.marketingEmails"
            label="Marketing Communications"
            description="Receive promotional offers and news"
            kind="primary"
          />
          
          <Switch
            v-model="formSettings.newsletter"
            label="Weekly Newsletter"
            description="Get weekly updates on new features"
            disabled
            kind="primary"
          />
          
          <div class="mt-4">
            <Action label="Save Preferences" kind="primary" />
          </div>
        </form>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Use switches for binary choices that take immediate effect</li>
        <li>Prefer checkboxes over switches for binary choices in forms that require a submit button</li>
        <li>Use clear, concise labels that describe the effect of enabling the switch</li>
        <li>Provide descriptions for switches when additional context is needed</li>
        <li>Choose appropriate colors based on the semantic meaning of the option</li>
        <li>Group related switches together for a better user experience</li>
        <li>Consider the default state carefully - only pre-enable switches for settings most users would want</li>
        <li>Make sure the interactive area is large enough for comfortable use on touch devices</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Sample data for examples
  const basicSwitch = ref(true);
  
  const colorSwitches = reactive({
    primary: true,
    secondary: true,
    success: true,
    info: true,
    warning: true,
    danger: true
  });
  
  const withDescription = ref(true);
  const requiredSwitch = ref(false);
  const disabledOff = ref(false);
  const disabledOn = ref(true);
  const customLabelSwitch = ref(true);
  
  // Form example data
  const formSettings = reactive({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    newsletter: true
  });
</script>