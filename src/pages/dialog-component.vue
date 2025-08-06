<template>
  <div class="content">
    <Prose>
      <h1>Dialog</h1>
      <h2>Overview</h2>
      <p>The Dialog component presents content in a modal overlay, requiring user interaction before they can return to the main interface. Dialogs are useful for confirmations, alerts, form inputs, or displaying critical information that requires immediate attention.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const basicDialog = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="basicDialog = true"&gt;Open Basic Dialog&lt;/Action&gt;
  &lt;Dialog 
    v-model="basicDialog"
    headline="Dialog Title"
    text="This is a basic dialog with default settings."
    action-label="Confirm"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The title displayed in the dialog header.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The main content text of the dialog.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text for the primary action button. If not provided, only the dismiss button is shown.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismissLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;Close&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text for the dismissal button.</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: Event)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the primary action button is clicked.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismiss</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(event: Event)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the dialog is dismissed via the close button, clicking outside, or pressing Escape.</td>
          </tr>
        </tbody>
      </table>
      <h2>v-model</h2>
      <p>The component supports v-model for controlling the dialog's visibility.</p>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Main content area of the dialog. Falls back to the <code>text</code> prop if not provided.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom headline content. Falls back to the <code>headline</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
      <h2>Basic Dialog</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const standardDialog = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="standardDialog = true"&gt;Open Standard Dialog&lt;/Action&gt;
  &lt;Dialog 
    v-model="standardDialog"
    headline="Confirmation"
    action-label="Save Changes"
    action-kind="primary"
  &gt;
    &lt;p&gt;Are you sure you want to save these changes? This action cannot be undone.&lt;/p&gt;
  &lt;/Dialog&gt;
&lt;/template&gt;</code></pre>
      <h2>Fullscreen Dialog</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const fullscreenDialog = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="fullscreenDialog = true"&gt;Open Fullscreen Dialog&lt;/Action&gt;
  &lt;Dialog 
    v-model="fullscreenDialog"
    variant="fullscreen"
    headline="Terms and Conditions"
    action-label="Accept"
    action-kind="success"
  &gt;
    &lt;div class="prose prose-sm max-w-none"&gt;
      &lt;p&gt;This fullscreen dialog is ideal for displaying longer content that requires the user's full attention.&lt;/p&gt;
      &lt;p&gt;You can include extensive text, forms, or other complex content that benefits from using the entire screen.&lt;/p&gt;
      &lt;h3&gt;Section 1&lt;/h3&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/p&gt;
      &lt;h3&gt;Section 2&lt;/h3&gt;
      &lt;p&gt;Duis aute irure dolor in reprehenderit in voluptate velit...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/Dialog&gt;
&lt;/template&gt;</code></pre>
      <h2>Different Action Styles</h2>
      <pre><code class="language-vue">&lt;script setup&gt;
const primaryDialog = ref(false);
const warningDialog = ref(false);
const dangerDialog = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="primaryDialog = true"&gt;Primary Action&lt;/Action&gt;
  &lt;Dialog 
    v-model="primaryDialog"
    headline="Primary Action"
    action-label="Confirm"
    action-kind="primary"
    action-variant="solid"
  &gt;
    This dialog uses a solid primary button for high emphasis.
  &lt;/Dialog&gt;
  
  &lt;Action @click="warningDialog = true"&gt;Warning Action&lt;/Action&gt;
  &lt;Dialog 
    v-model="warningDialog"
    headline="Warning"
    action-label="Proceed"
    action-kind="warning"
    action-variant="outline"
  &gt;
    This action may have consequences. Please review carefully before proceeding.
  &lt;/Dialog&gt;
  
  &lt;Action @click="dangerDialog = true"&gt;Danger Action&lt;/Action&gt;
  &lt;Dialog 
    v-model="dangerDialog"
    headline="Delete Confirmation"
    action-label="Delete"
    action-kind="danger"
    action-variant="solid"
  &gt;
    Are you sure you want to delete this item? This action cannot be undone.
  &lt;/Dialog&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use dialogs sparingly to avoid disrupting the user's workflow</li>
        <li>Keep dialog content concise and focused on a single task or message</li>
        <li>Provide clear actions with descriptive labels (avoid generic terms like "OK")</li>
        <li>Use appropriate action colors to indicate the nature of the action:</li>
        <li><code>primary</code> for standard actions</li>
        <li><code>success</code> for positive confirmations</li>
        <li><code>warning</code> for actions requiring careful consideration</li>
        <li><code>danger</code> for destructive or irreversible actions</li>
        <li>Consider using the fullscreen variant for complex content that requires the user's full attention</li>
        <li>Ensure that dialogs can be dismissed via multiple methods (button, Escape key, clicking outside)</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>The component uses <code>aria-modal="true"</code> to indicate modal behavior to assistive technologies</li>
        <li>Focus is trapped within the dialog when open, preventing users from accidentally interacting with content behind the overlay</li>
        <li>The Escape key can be used to close the dialog</li>
        <li>Focus returns to the triggering element when the dialog is closed (if <code>triggerElement</code> is provided)</li>
        <li>The dialog has appropriate ARIA labeling via <code>aria-labelledby</code></li>
        <li>The component manages scroll locking to prevent background content scrolling</li>
      </ul>
      <h2>Examples</h2>
      <h3>Confirmation Dialog</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const confirmDialog = ref(false);

function handleDeleteConfirm() {
  // Perform delete action
  confirmDialog.value = false;
  // Show success notification or redirect
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="confirmDialog = true" kind="danger"&gt;Delete Account&lt;/Action&gt;
  &lt;Dialog 
    v-model="confirmDialog"
    headline="Delete Account"
    action-label="Delete Permanently"
    action-kind="danger"
    action-variant="solid"
    dismiss-label="Cancel"
    @click="handleDeleteConfirm"
  &gt;
    &lt;p class="mb-4"&gt;Are you sure you want to delete your account? This action cannot be undone and will:&lt;/p&gt;
    &lt;ul class="list-disc pl-5 space-y-1"&gt;
      &lt;li&gt;Permanently remove all your data&lt;/li&gt;
      &lt;li&gt;Cancel any active subscriptions&lt;/li&gt;
      &lt;li&gt;Remove access to all services&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/Dialog&gt;
&lt;/template&gt;</code></pre>
      <h3>Form Dialog</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
const formDialog = ref(false);
const newContact = reactive({
  name: '',
  email: '',
  phone: '',
  category: ''
});

function handleSaveContact() {
  // Validate and save contact
  formDialog.value = false;
  // Reset form or show success notification
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Action @click="formDialog = true"&gt;Add New Contact&lt;/Action&gt;
  &lt;Dialog 
    v-model="formDialog"
    headline="Add New Contact"
    action-label="Save"
    action-kind="primary"
    @click="handleSaveContact"
  &gt;
    &lt;TextField v-model="newContact.name" label="Name" placeholder="Enter full name" /&gt;
    &lt;TextField v-model="newContact.email" label="Email" type="email" placeholder="Enter email address" /&gt;
    &lt;TextField v-model="newContact.phone" label="Phone" type="tel" placeholder="Enter phone number" /&gt;
    &lt;Select 
      v-model="newContact.category"
      label="Category" 
      placeholder="Select a category"
      :options="[
        { value: 'personal', label: 'Personal' },
        { value: 'work', label: 'Work' },
        { value: 'other', label: 'Other' }
      ]"
    /&gt;
  &lt;/Dialog&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>