<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Snackbar</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Snackbar component displays brief messages at the bottom or top of the screen. It's commonly used for providing feedback about an operation, such as confirming an action was completed, alerting users to a condition, or providing a brief message with an optional action.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Action @click="basicSnackbar = true">Show Snackbar</Action>
        <Snackbar
        v-model="basicSnackbar"
        message="This is a basic snackbar message"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const basicSnackbar = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="basicSnackbar = true"&gt;Show Snackbar&lt;/Action&gt;
  &lt;Snackbar 
    v-model="basicSnackbar"
    message="This is a basic snackbar message"
  /&gt;
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>message</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The main text content of the snackbar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>title</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional title text to display above the main message.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot; | &amp;quot;success&amp;quot; | &amp;quot;info&amp;quot; | &amp;quot;warning&amp;quot; | &amp;quot;danger&amp;quot; | &amp;quot;secondary&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The style variant of the snackbar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>position</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;top&amp;quot; | &amp;quot;bottom&amp;quot; | &amp;quot;top-left&amp;quot; | &amp;quot;top-right&amp;quot; | &amp;quot;bottom-left&amp;quot; | &amp;quot;bottom-right&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;bottom-right&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Position of the snackbar on the screen.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showIcon</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to display the status icon.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismissible</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the snackbar can be manually closed by the user.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>autoClose</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the snackbar should automatically close after a certain duration.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>duration</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>5000</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Time in milliseconds before the snackbar automatically closes (when autoClose is true).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text for an optional action button.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>action</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">None</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the action button is clicked.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismiss</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">None</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the snackbar is dismissed (either manually or automatically).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>close</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">None</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the snackbar is closed automatically due to the duration timeout.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">v-model</h2>
      
      <Prose>
        <p>The component supports v-model for controlling the snackbar's visibility.</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Main content of the snackbar. Falls back to the <code>message</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Different Kinds</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Action @click="primarySnackbar = true">Primary</Action>
        <Snackbar
        v-model="primarySnackbar"
        kind="primary"
        message="This is a primary snackbar"
        />
        <Action @click="successSnackbar = true">Success</Action>
        <Snackbar
        v-model="successSnackbar"
        kind="success"
        message="Operation completed successfully"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const primarySnackbar = ref(false);
const successSnackbar = ref(false);
const infoSnackbar = ref(false);
const warningSnackbar = ref(false);
const dangerSnackbar = ref(false);
const secondarySnackbar = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="primarySnackbar = true"&gt;Primary&lt;/Action&gt;
  &lt;Snackbar 
    v-model="primarySnackbar"
    kind="primary"
    message="This is a primary snackbar"
  /&gt;

  &lt;Action @click="successSnackbar = true"&gt;Success&lt;/Action&gt;
  &lt;Snackbar 
    v-model="successSnackbar"
    kind="success"
    message="Operation completed successfully"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Keep snackbar messages concise and clear</li>
          <li>Use the appropriate <code>kind</code> to reflect the nature of the message:</li>
          <li><code>success</code>: For successful operations</li>
          <li><code>info</code>: For neutral informational messages</li>
          <li><code>warning</code>: For potential issues that need attention</li>
          <li><code>danger</code>: For errors or critical issues</li>
          <li><code>primary</code>: For general application messages</li>
          <li><code>secondary</code>: For less important notifications</li>
          <li>Position snackbars consistently throughout your application</li>
          <li>For important messages that shouldn't be missed, consider using <code>:auto-close="false"</code></li>
          <li>Avoid showing multiple snackbars simultaneously, as it can overwhelm users</li>
          <li>Include an action button only when there's a clear and immediate action the user might want to take</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>Snackbars use <code>role="status"</code> and <code>aria-live="polite"</code> to ensure they're announced by screen readers</li>
          <li>The component automatically pauses its auto-close timer when hovered or focused, allowing users more time to read</li>
          <li>Dismissible snackbars have a properly labeled close button</li>
          <li>The component handles focus management appropriately</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Form Submission Feedback</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const formSubmitSnackbar = ref(false);

function showFormSubmitSnackbar() {
  // Form validation and submission logic would go here
  formSubmitSnackbar.value = true;
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form class="space-y-4" @submit.prevent="showFormSubmitSnackbar"&gt;
    &lt;TextField v-model="name" label="Name" required /&gt;
    &lt;TextField v-model="email" label="Email" type="email" required /&gt;
    &lt;Action kind="primary" type="submit"&gt;Submit Form&lt;/Action&gt;
  &lt;/form&gt;
  &lt;Snackbar 
    v-model="formSubmitSnackbar"
    title="Form Submitted"
    message="Thank you for your submission!"
    kind="success"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Action from '../components/Action.vue';

const basicSnackbar = ref(false);
</script>