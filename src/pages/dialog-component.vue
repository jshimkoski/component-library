<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Dialog Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Dialog component provides a modal interface for displaying content that requires user attention or interaction.
        Dialogs are useful for tasks such as confirmations, alerts, form inputs, or displaying additional information without
        navigating away from the current page.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-4">
          <div ref="basicDialogTrigger">
            <Action 
              @click="basicDialog = true"
              label="Open Basic Dialog"
              kind="primary"
            />
          </div>
          
          <Dialog
            v-model="basicDialog"
            :trigger-element="basicDialogTrigger"
            headline="Confirmation"
            text="Are you sure you want to continue with this action?"
            action-label="Confirm"
            dismiss-label="Cancel"
            @click="onBasicDialogConfirm"
            @dismiss="basicDialog = false"
          />
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;div ref="dialogTrigger"&gt;
  &lt;Action 
    @click="dialogOpen = true"
    label="Open Dialog"
    kind="primary"
  /&gt;
&lt;/div&gt;

&lt;Dialog
  v-model="dialogOpen"
  :trigger-element="dialogTrigger?.$el"
  headline="Confirmation"
  text="Are you sure you want to continue with this action?"
  action-label="Confirm"
  dismiss-label="Cancel"
  @click="onConfirm"
  @dismiss="dialogOpen = false"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Controls the visibility of the dialog (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>triggerElement</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">HTMLElement</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The element that triggered the dialog, focus returns here when dialog closes</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>variant</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"basic"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Dialog style variant. Options: basic, fullscreen</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Dialog title or heading</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Dialog content text</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionKind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"primary"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Kind for the action button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionVariant</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"ghost"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Variant for the action button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label for the action button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismissLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"Close"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Label for the dismiss button</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>click</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">(event: Event)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the action button is clicked</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>dismiss</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">(event: Event)</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the dismiss button is clicked, the dialog is closed via Escape key, or when clicking outside the dialog</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the dialog body. Replaces the <code>text</code> prop when provided</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the dialog title. Replaces the <code>headline</code> prop when provided</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <p class="mb-4">The Dialog component supports two variants: basic and fullscreen.</p>

      <h3 class="text-lg font-medium mt-6 mb-3">Basic Dialog</h3>
      <p class="mb-4">The basic variant displays content in a centered modal with a fixed width.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="basicVariantTrigger">
            <Action 
              @click="basicVariantDialog = true"
              label="Open Basic Dialog"
              kind="primary"
            />
          </div>
          
          <Dialog
            v-model="basicVariantDialog"
            :trigger-element="basicVariantTrigger"
            variant="basic"
            headline="Basic Dialog"
            action-label="Confirm"
            dismiss-label="Cancel"
            @click="basicVariantDialog = false"
            @dismiss="basicVariantDialog = false"
          >
            <p>This is a basic dialog with a centered layout and fixed width.</p>
            <p class="mt-2">It's suitable for simple confirmations, alerts, or short forms.</p>
          </Dialog>
        </div>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Fullscreen Dialog</h3>
      <p class="mb-4">The fullscreen variant takes up the entire screen, ideal for complex content or mobile interfaces.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="fullscreenTrigger">
            <Action 
              @click="fullscreenDialog = true"
              label="Open Fullscreen Dialog"
              kind="primary"
            />
          </div>
          
          <Dialog
            v-model="fullscreenDialog"
            :trigger-element="fullscreenTrigger"
            variant="fullscreen"
            headline="Fullscreen Dialog"
            action-label="Save"
            @click="fullscreenDialog = false"
            @dismiss="fullscreenDialog = false"
          >
            <p>This is a fullscreen dialog that takes up the entire viewport.</p>
            <p class="mt-2">It's ideal for complex forms, detailed content, or when optimizing for mobile interfaces.</p>
            <p class="mt-2">Notice that the action button appears in the header for fullscreen dialogs.</p>
          </Dialog>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Content</h2>
      <p class="mb-4">Dialogs can contain rich content beyond simple text, such as forms, images, or interactive elements.</p>
      
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="customContentTrigger">
            <Action 
              @click="customContentDialog = true"
              label="Open Dialog with Form"
              kind="primary"
            />
          </div>
          
          <Dialog
            v-model="customContentDialog"
            :trigger-element="customContentTrigger"
            headline="User Details"
            action-label="Submit"
            action-kind="success"
            dismiss-label="Cancel"
            @click="onCustomDialogSubmit"
            @dismiss="customContentDialog = false"
          >
            <form class="grid gap-4">
              <TextField
                v-model="formData.name"
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              
              <TextField
                v-model="formData.email"
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                required
              />
              
              <Checkbox
                v-model="formData.subscribe"
                label="Subscribe to newsletter"
              />
            </form>
          </Dialog>
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;div ref="formDialogTrigger"&gt;
  &lt;Action 
    @click="formDialog = true"
    label="Open Dialog with Form"
    kind="primary"
  /&gt;
&lt;/div&gt;

&lt;Dialog
  v-model="formDialog"
  :trigger-element="formDialogTrigger?.$el"
  headline="User Details"
  action-label="Submit"
  action-kind="success"
  dismiss-label="Cancel"
  @click="onSubmit"
  @dismiss="formDialog = false"
&gt;
  &lt;form class="grid gap-4"&gt;
    &lt;TextField
      v-model="formData.name"
      label="Full Name"
      placeholder="Enter your full name"
      required
    /&gt;
    
    &lt;TextField
      v-model="formData.email"
      label="Email Address"
      type="email"
      placeholder="your@email.com"
      required
    /&gt;
    
    &lt;Checkbox
      v-model="formData.subscribe"
      label="Subscribe to newsletter"
    /&gt;
  &lt;/form&gt;
&lt;/Dialog&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Contextual Dialog Examples</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Alert Dialog</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="alertTrigger">
            <Action 
              @click="alertDialog = true"
              label="Show Alert"
              kind="warning"
            />
          </div>
          
          <Dialog
            v-model="alertDialog"
            :trigger-element="alertTrigger"
            headline="Warning"
            text="Your session is about to expire in 30 seconds. Do you want to continue?"
            action-label="Continue Session"
            action-kind="warning"
            dismiss-label="Log Out"
            @click="alertDialog = false"
            @dismiss="alertDialog = false"
          />
        </div>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Confirmation Dialog</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="confirmationTrigger">
            <Action 
              @click="confirmationDialog = true"
              label="Delete Item"
              kind="danger"
            />
          </div>
          
          <Dialog
            v-model="confirmationDialog"
            :trigger-element="confirmationTrigger"
            headline="Confirm Deletion"
            action-label="Delete"
            action-kind="danger"
            action-variant="solid"
            dismiss-label="Cancel"
            @click="confirmationDialog = false"
            @dismiss="confirmationDialog = false"
          >
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          </Dialog>
        </div>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Information Dialog</h3>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
          <div ref="infoTrigger">
            <Action 
              @click="infoDialog = true"
              label="Show Info"
              kind="info"
            />
          </div>
          
          <Dialog
            v-model="infoDialog"
            :trigger-element="infoTrigger"
            headline="Information"
            dismiss-label="Got it"
            @dismiss="infoDialog = false"
          >
            <div class="prose">
              <p>The Dialog component includes these accessibility features:</p>
              <ul>
                <li>Focus is trapped within the dialog when open</li>
                <li>Escape key closes the dialog</li>
                <li>Focus returns to the trigger element when closed</li>
                <li>The dialog is properly labeled for screen readers</li>
                <li>Clicking outside the dialog dismisses it</li>
              </ul>
            </div>
          </Dialog>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Keep dialog content focused and minimal - address only one topic per dialog</li>
        <li>Use clear action labels that describe what happens when clicked (e.g., "Save Changes" instead of "OK")</li>
        <li>Position the primary action on the right for basic dialogs</li>
        <li>Use appropriate colors for contextual actions (e.g., danger for destructive actions)</li>
        <li>For mobile interfaces, consider using fullscreen dialogs for complex forms</li>
        <li>Provide a way to dismiss the dialog without taking action (e.g., Cancel button, close icon, or clicking outside)</li>
        <li>Ensure dialogs are accessible to keyboard and screen reader users</li>
        <li>Use dialogs sparingly - they interrupt the user's workflow</li>
        <li>For lengthy content, consider using a sheet or dedicated page instead of a dialog</li>
        <li>Return focus to the triggering element when the dialog is closed for better keyboard navigation</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Basic example
  const basicDialogTrigger = useTemplateRef("basicDialogTrigger");
  const basicDialog = ref(false);
  
  const onBasicDialogConfirm = () => {
    basicDialog.value = false;
    // Handle confirmation action
  };
  
  // Variants examples
  const basicVariantTrigger = useTemplateRef("basicVariantTrigger");
  const basicVariantDialog = ref(false);
  
  const fullscreenTrigger = useTemplateRef("fullscreenTrigger");
  const fullscreenDialog = ref(false);
  
  // Custom content example
  const customContentTrigger = useTemplateRef("customContentTrigger");
  const customContentDialog = ref(false);
  const formData = reactive({
    name: '',
    email: '',
    subscribe: false
  });
  
  const onCustomDialogSubmit = () => {
    customContentDialog.value = false;
    // Process form submission
    console.log('Form submitted:', formData);
  };
  
  // Contextual dialog examples
  const alertTrigger = useTemplateRef("alertTrigger");
  const alertDialog = ref(false);
  
  const confirmationTrigger = useTemplateRef("confirmationTrigger");
  const confirmationDialog = ref(false);
  
  const infoTrigger = useTemplateRef("infoTrigger");
  const infoDialog = ref(false);
</script>