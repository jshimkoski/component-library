<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">useSnackbar</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The `useSnackbar` composable provides a powerful and flexible way to display toast notifications in your Vue 3 application. It offers programmatic control over snackbar creation, positioning, styling, and lifecycle management with support for actions, auto-dismissal, and multiple notification types.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div>
        <button @click="showNotification">Show Notification</button>
        <button @click="showSuccess">Show Success</button>
        <button @click="showError">Show Error</button>
        </div>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="showNotification"&gt;Show Notification&lt;/button&gt;
    &lt;button @click="showSuccess"&gt;Show Success&lt;/button&gt;
    &lt;button @click="showError"&gt;Show Error&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const showNotification = () =&gt; {
  snackbar.show({
    message: 'This is a basic notification',
  });
};

const showSuccess = () =&gt; {
  snackbar.success('Operation completed successfully!');
};

const showError = () =&gt; {
  snackbar.error('Something went wrong!');
};
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Setup</h2>
      
      <Prose>
        <p>For optimal functionality, set up the snackbar provider in your root component:</p>
        <p>// main.ts or App.vue</p>
        <p>import { provideSnackbar } from '@jasonshimmy/components';</p>
        <p>// In your root component setup</p>
        <p>const app = createApp(App);</p>
        <p>// Or in App.vue <script setup></p>
        <p>provideSnackbar();</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">API Reference</h2>
      
      <Prose>
        <p>interface SnackbarOptions {</p>
        <p>message: string;                    // Required: The notification message</p>
        <p>title?: string;                     // Optional: Title/header text</p>
        <p>kind?: SnackbarKind;               // Optional: Visual style variant</p>
        <p>position?: SnackbarPosition;       // Optional: Screen position</p>
        <p>duration?: number;                 // Optional: Auto-close duration (ms)</p>
        <p>actionLabel?: string;              // Optional: Action button text</p>
        <p>showIcon?: boolean;                // Optional: Show/hide icon</p>
        <p>dismissible?: boolean;             // Optional: Show close button</p>
        <p>autoClose?: boolean;               // Optional: Auto-close behavior</p>
        <p>onAction?: () => void;             // Optional: Action button callback</p>
        <p>onDismiss?: () => void;            // Optional: Dismiss callback</p>
        <p>onClose?: () => void;              // Optional: Close callback</p>
        <p>}</p>
        <p>| Kind | Description |</p>
        <p>|------|-------------|</p>
        <p>| <code>"primary"</code> | Default blue styling |</p>
        <p>| <code>"success"</code> | Green styling for success messages |</p>
        <p>| <code>"info"</code> | Blue styling for informational messages |</p>
        <p>| <code>"warning"</code> | Yellow/orange styling for warnings |</p>
        <p>| <code>"danger"</code> | Red styling for errors |</p>
        <p>| <code>"secondary"</code> | Gray styling for secondary messages |</p>
        <p>| Position | Description |</p>
        <p>|----------|-------------|</p>
        <p>| <code>"top"</code> | Center top of screen |</p>
        <p>| <code>"bottom"</code> | Center bottom of screen |</p>
        <p>| <code>"top-left"</code> | Top left corner |</p>
        <p>| <code>"top-right"</code> | Top right corner |</p>
        <p>| <code>"bottom-left"</code> | Bottom left corner |</p>
        <p>| <code>"bottom-right"</code> | Bottom right corner (default) |</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Methods</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        ### success(message: string, options?: Partial<SnackbarOptions>): string
        Creates a success-styled snackbar.
      </div>
      <Prose>
        <p>Creates and displays a custom snackbar with full control over all options.</p>
        <p>Creates a success-styled snackbar.</p>
        <p>Creates an info-styled snackbar.</p>
        <p>Creates a warning-styled snackbar.</p>
        <p>Creates an error-styled snackbar.</p>
        <p>Programmatically closes a specific snackbar by its ID.</p>
        <p>Closes all currently visible snackbars.</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>### success(message: string, options?: Partial&lt;SnackbarOptions&gt;): string

Creates a success-styled snackbar.</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Advanced Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <script setup>
        import { useSnackbar } from '@jasonshimmy/components';
        import { ref } from 'vue';
        const snackbar = useSnackbar();
        const items = ref(['Item 1', 'Item 2', 'Item 3']);
        const deleteItem = (index: number) => {
        const deletedItem = items.value[index];
        items.value.splice(index, 1);
        snackbar.show({
        message: `Deleted "${deletedItem}"`,
        kind: 'success',
        actionLabel: 'Undo',
        duration: 5000,
        onAction: () => {
        // Restore the deleted item
        items.value.splice(index, 0, deletedItem);
        snackbar.success('Item restored');
        }
        });
        };
        </script>
      </div>
      <Prose>
        <p>Snackbars can include action buttons for user interaction:</p>
        <p>Use snackbars for loading feedback with manual control:</p>
        <p>Manage multiple snackbars with different positions:</p>
      </Prose>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';
import { ref } from 'vue';

const snackbar = useSnackbar();
const items = ref(['Item 1', 'Item 2', 'Item 3']);

const deleteItem = (index: number) =&gt; {
  const deletedItem = items.value[index];
  items.value.splice(index, 1);
  
  snackbar.show({
    message: `Deleted "${deletedItem}"`,
    kind: 'success',
    actionLabel: 'Undo',
    duration: 5000,
    onAction: () =&gt; {
      // Restore the deleted item
      items.value.splice(index, 0, deletedItem);
      snackbar.success('Item restored');
    }
  });
};
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">TypeScript Support</h2>
      
      <Prose>
        <p>Full TypeScript support with proper type inference:</p>
        <p>import {</p>
        <p>useSnackbar,</p>
        <p>provideSnackbar,</p>
        <p>type SnackbarOptions,</p>
        <p>type SnackbarKind,</p>
        <p>type SnackbarPosition</p>
        <p>} from '@jasonshimmy/components';</p>
        <p>const snackbar = useSnackbar();</p>
        <p>// Type-safe options object</p>
        <p>const options: SnackbarOptions = {</p>
        <p>message: 'Typed notification',</p>
        <p>kind: 'success', // TypeScript ensures valid kind</p>
        <p>position: 'top-right', // TypeScript ensures valid position</p>
        <p>onAction: () => {</p>
        <p>// Fully typed callback</p>
        <p>console.log('Action performed');</p>
        <p>}</p>
        <p>};</p>
        <p>snackbar.show(options);</p>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Integration Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">With Form Validation</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;form @submit="handleSubmit"&gt;
    &lt;input v-model="email" type="email" required /&gt;
    &lt;button type="submit"&gt;Subscribe&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';
import { ref } from 'vue';

const snackbar = useSnackbar();
const email = ref('');

const handleSubmit = async (event) =&gt; {
  event.preventDefault();
  
  if (!email.value) {
    snackbar.warning('Please enter your email address');
    return;
  }
  
  try {
    await subscribeToNewsletter(email.value);
    snackbar.success('Successfully subscribed to newsletter!');
    email.value = '';
  } catch (error) {
    snackbar.error('Subscription failed. Please try again.');
  }
};
&lt;/script&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">With Router Navigation</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';
import { useRouter } from 'vue-router';

const snackbar = useSnackbar();
const router = useRouter();

const logout = async () =&gt; {
  try {
    await authService.logout();
    snackbar.success('Logged out successfully', {
      actionLabel: 'Go to Login',
      onAction: () =&gt; router.push('/login')
    });
  } catch (error) {
    snackbar.error('Logout failed');
  }
};
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use appropriate <code>kind</code> values to convey message importance</li>
          <li>Keep messages concise and actionable</li>
          <li>Use action buttons for undoable operations</li>
          <li>Set reasonable duration values (3-5 seconds for info, longer for warnings)</li>
          <li>Position notifications based on their context and importance</li>
          <li>Always handle action callbacks and error states</li>
          <li>Use <code>provideSnackbar()</code> at the application root for consistent behavior</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>Snackbars automatically include proper ARIA attributes</li>
          <li>Messages are announced to screen readers</li>
          <li>Action buttons are keyboard accessible</li>
          <li>Color coding is supplemented with icons for color-blind users</li>
          <li>Dismiss buttons provide clear exit mechanisms</li>
        </ul>
      </Prose>
    </section>
  </div>
</template>

<script setup lang="ts">
import SnackbarOptions from '../components/SnackbarOptions.vue';

</script>