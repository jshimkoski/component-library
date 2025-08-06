<template>
  <div class="content">
    <Prose>
      <h1>useSnackbar</h1>
      <h2>Overview</h2>
      <p>The <code>useSnackbar</code> composable provides a powerful and flexible way to display toast notifications in your Vue 3 application. It offers programmatic control over snackbar creation, positioning, styling, and lifecycle management with support for actions, auto-dismissal, and multiple notification types.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h2>Setup</h2>
      <h3>Global Provider Setup</h3>
      <p>For optimal functionality, set up the snackbar provider in your root component:</p>
      <pre><code class="language-typescript">// main.ts or App.vue
import { provideSnackbar } from '@jasonshimmy/components';

// In your root component setup
const app = createApp(App);

// Or in App.vue &lt;script setup&gt;
provideSnackbar();</code></pre>
      <h2>API Reference</h2>
      <h3>SnackbarOptions Interface</h3>
      <pre><code class="language-typescript">interface SnackbarOptions {
  message: string;                    // Required: The notification message
  title?: string;                     // Optional: Title/header text
  kind?: SnackbarKind;               // Optional: Visual style variant
  position?: SnackbarPosition;       // Optional: Screen position
  duration?: number;                 // Optional: Auto-close duration (ms)
  actionLabel?: string;              // Optional: Action button text
  showIcon?: boolean;                // Optional: Show/hide icon
  dismissible?: boolean;             // Optional: Show close button
  autoClose?: boolean;               // Optional: Auto-close behavior
  onAction?: () =&gt; void;             // Optional: Action button callback
  onDismiss?: () =&gt; void;            // Optional: Dismiss callback
  onClose?: () =&gt; void;              // Optional: Close callback
}</code></pre>
      <h3>SnackbarKind Types</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Kind</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;primary&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Default blue styling</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;success&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Green styling for success messages</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;info&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Blue styling for informational messages</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;warning&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Yellow/orange styling for warnings</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;danger&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Red styling for errors</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;secondary&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Gray styling for secondary messages</td>
          </tr>
        </tbody>
      </table>
      <h3>SnackbarPosition Types</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Position</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;top&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Center top of screen</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;bottom&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Center bottom of screen</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;top-left&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Top left corner</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;top-right&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Top right corner</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;bottom-left&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Bottom left corner</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;bottom-right&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Bottom right corner (default)</td>
          </tr>
        </tbody>
      </table>
      <h2>Methods</h2>
      <h3>show(options: SnackbarOptions): string</h3>
      <p>Creates and displays a custom snackbar with full control over all options.</p>
      <pre><code class="language-typescript">const id = snackbar.show({
  message: 'Custom notification',
  title: 'Information',
  kind: 'info',
  position: 'top-right',
  duration: 5000,
  actionLabel: 'Undo',
  onAction: () =&gt; console.log('Action clicked'),
  onClose: () =&gt; console.log('Snackbar closed')
});</code></pre>
      <h3>success(message: string, options?: Partial&lt;SnackbarOptions&gt;): string</h3>
      <p>Creates a success-styled snackbar.</p>
      <pre><code class="language-typescript">snackbar.success('Profile updated successfully!', {
  duration: 3000,
  actionLabel: 'View Profile'
});</code></pre>
      <h3>info(message: string, options?: Partial&lt;SnackbarOptions&gt;): string</h3>
      <p>Creates an info-styled snackbar.</p>
      <pre><code class="language-typescript">snackbar.info('New features available', {
  actionLabel: 'Learn More',
  onAction: () =&gt; router.push('/features')
});</code></pre>
      <h3>warning(message: string, options?: Partial&lt;SnackbarOptions&gt;): string</h3>
      <p>Creates a warning-styled snackbar.</p>
      <pre><code class="language-typescript">snackbar.warning('Your session will expire soon', {
  duration: 10000,
  actionLabel: 'Extend Session'
});</code></pre>
      <h3>error(message: string, options?: Partial&lt;SnackbarOptions&gt;): string</h3>
      <p>Creates an error-styled snackbar.</p>
      <pre><code class="language-typescript">snackbar.error('Failed to save changes', {
  actionLabel: 'Retry',
  onAction: () =&gt; retryOperation()
});</code></pre>
      <h3>close(id: string): void</h3>
      <p>Programmatically closes a specific snackbar by its ID.</p>
      <pre><code class="language-typescript">const id = snackbar.show({ message: 'Loading...' });

// Later, close the specific snackbar
setTimeout(() =&gt; {
  snackbar.close(id);
}, 2000);</code></pre>
      <h3>closeAll(): void</h3>
      <p>Closes all currently visible snackbars.</p>
      <pre><code class="language-typescript">snackbar.closeAll();</code></pre>
      <h2>Advanced Usage</h2>
      <h3>Action Buttons</h3>
      <p>Snackbars can include action buttons for user interaction:</p>
      <pre><code class="language-vue">&lt;script setup&gt;
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
      <h3>Loading States</h3>
      <p>Use snackbars for loading feedback with manual control:</p>
      <pre><code class="language-vue">&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const saveData = async () =&gt; {
  const loadingId = snackbar.info('Saving changes...', {
    autoClose: false,
    dismissible: false
  });
  
  try {
    await api.saveData();
    snackbar.close(loadingId);
    snackbar.success('Changes saved successfully!');
  } catch (error) {
    snackbar.close(loadingId);
    snackbar.error('Failed to save changes', {
      actionLabel: 'Retry',
      onAction: () =&gt; saveData()
    });
  }
};
&lt;/script&gt;</code></pre>
      <h3>Multiple Notifications</h3>
      <p>Manage multiple snackbars with different positions:</p>
      <pre><code class="language-vue">&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const showMultipleNotifications = () =&gt; {
  // System status at top
  snackbar.info('System maintenance scheduled', {
    position: 'top',
    duration: 8000
  });
  
  // User action feedback at bottom-right
  snackbar.success('Profile updated', {
    position: 'bottom-right',
    duration: 3000
  });
  
  // Warning at bottom-left
  snackbar.warning('Low storage space', {
    position: 'bottom-left',
    actionLabel: 'Manage Storage'
  });
};
&lt;/script&gt;</code></pre>
      <h3>Error Handling with Retry</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const performAction = async () =&gt; {
  try {
    await riskyOperation();
    snackbar.success('Operation completed!');
  } catch (error) {
    snackbar.error(error.message, {
      title: 'Operation Failed',
      actionLabel: 'Retry',
      duration: 0, // Don't auto-close
      onAction: () =&gt; performAction() // Recursive retry
    });
  }
};
&lt;/script&gt;</code></pre>
      <h2>TypeScript Support</h2>
      <p>Full TypeScript support with proper type inference:</p>
      <pre><code class="language-typescript">import { 
  useSnackbar, 
  provideSnackbar,
  type SnackbarOptions, 
  type SnackbarKind,
  type SnackbarPosition 
} from '@jasonshimmy/components';

const snackbar = useSnackbar();

// Type-safe options object
const options: SnackbarOptions = {
  message: 'Typed notification',
  kind: 'success', // TypeScript ensures valid kind
  position: 'top-right', // TypeScript ensures valid position
  onAction: () =&gt; {
    // Fully typed callback
    console.log('Action performed');
  }
};

snackbar.show(options);</code></pre>
      <h2>Integration Examples</h2>
      <h3>With Form Validation</h3>
      <pre><code class="language-vue">&lt;template&gt;
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
      <h3>With Router Navigation</h3>
      <pre><code class="language-vue">&lt;script setup&gt;
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
      <h2>Best Practices</h2>
      <ul>
        <li>Use appropriate <code>kind</code> values to convey message importance</li>
        <li>Keep messages concise and actionable</li>
        <li>Use action buttons for undoable operations</li>
        <li>Set reasonable duration values (3-5 seconds for info, longer for warnings)</li>
        <li>Position notifications based on their context and importance</li>
        <li>Always handle action callbacks and error states</li>
        <li>Use <code>provideSnackbar()</code> at the application root for consistent behavior</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Snackbars automatically include proper ARIA attributes</li>
        <li>Messages are announced to screen readers</li>
        <li>Action buttons are keyboard accessible</li>
        <li>Color coding is supplemented with icons for color-blind users</li>
        <li>Dismiss buttons provide clear exit mechanisms</li>
      </ul>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>