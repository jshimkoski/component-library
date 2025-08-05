# useSnackbar

## Overview

The `useSnackbar` composable provides a powerful and flexible way to display toast notifications in your Vue 3 application. It offers programmatic control over snackbar creation, positioning, styling, and lifecycle management with support for actions, auto-dismissal, and multiple notification types.

## Basic Usage

```vue
<template>
  <div>
    <button @click="showNotification">Show Notification</button>
    <button @click="showSuccess">Show Success</button>
    <button @click="showError">Show Error</button>
  </div>
</template>

<script setup>
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const showNotification = () => {
  snackbar.show({
    message: 'This is a basic notification',
  });
};

const showSuccess = () => {
  snackbar.success('Operation completed successfully!');
};

const showError = () => {
  snackbar.error('Something went wrong!');
};
</script>
```

## Setup

### Global Provider Setup

For optimal functionality, set up the snackbar provider in your root component:

```typescript
// main.ts or App.vue
import { provideSnackbar } from '@jasonshimmy/components';

// In your root component setup
const app = createApp(App);

// Or in App.vue <script setup>
provideSnackbar();
```

## API Reference

### SnackbarOptions Interface

```typescript
interface SnackbarOptions {
  message: string;                    // Required: The notification message
  title?: string;                     // Optional: Title/header text
  kind?: SnackbarKind;               // Optional: Visual style variant
  position?: SnackbarPosition;       // Optional: Screen position
  duration?: number;                 // Optional: Auto-close duration (ms)
  actionLabel?: string;              // Optional: Action button text
  showIcon?: boolean;                // Optional: Show/hide icon
  dismissible?: boolean;             // Optional: Show close button
  autoClose?: boolean;               // Optional: Auto-close behavior
  onAction?: () => void;             // Optional: Action button callback
  onDismiss?: () => void;            // Optional: Dismiss callback
  onClose?: () => void;              // Optional: Close callback
}
```

### SnackbarKind Types

| Kind | Description |
|------|-------------|
| `"primary"` | Default blue styling |
| `"success"` | Green styling for success messages |
| `"info"` | Blue styling for informational messages |
| `"warning"` | Yellow/orange styling for warnings |
| `"danger"` | Red styling for errors |
| `"secondary"` | Gray styling for secondary messages |

### SnackbarPosition Types

| Position | Description |
|----------|-------------|
| `"top"` | Center top of screen |
| `"bottom"` | Center bottom of screen |
| `"top-left"` | Top left corner |
| `"top-right"` | Top right corner |
| `"bottom-left"` | Bottom left corner |
| `"bottom-right"` | Bottom right corner (default) |

## Methods

### show(options: SnackbarOptions): string

Creates and displays a custom snackbar with full control over all options.

```typescript
const id = snackbar.show({
  message: 'Custom notification',
  title: 'Information',
  kind: 'info',
  position: 'top-right',
  duration: 5000,
  actionLabel: 'Undo',
  onAction: () => console.log('Action clicked'),
  onClose: () => console.log('Snackbar closed')
});
```

### success(message: string, options?: Partial<SnackbarOptions>): string

Creates a success-styled snackbar.

```typescript
snackbar.success('Profile updated successfully!', {
  duration: 3000,
  actionLabel: 'View Profile'
});
```

### info(message: string, options?: Partial<SnackbarOptions>): string

Creates an info-styled snackbar.

```typescript
snackbar.info('New features available', {
  actionLabel: 'Learn More',
  onAction: () => router.push('/features')
});
```

### warning(message: string, options?: Partial<SnackbarOptions>): string

Creates a warning-styled snackbar.

```typescript
snackbar.warning('Your session will expire soon', {
  duration: 10000,
  actionLabel: 'Extend Session'
});
```

### error(message: string, options?: Partial<SnackbarOptions>): string

Creates an error-styled snackbar.

```typescript
snackbar.error('Failed to save changes', {
  actionLabel: 'Retry',
  onAction: () => retryOperation()
});
```

### close(id: string): void

Programmatically closes a specific snackbar by its ID.

```typescript
const id = snackbar.show({ message: 'Loading...' });

// Later, close the specific snackbar
setTimeout(() => {
  snackbar.close(id);
}, 2000);
```

### closeAll(): void

Closes all currently visible snackbars.

```typescript
snackbar.closeAll();
```

## Advanced Usage

### Action Buttons

Snackbars can include action buttons for user interaction:

```vue
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
```

### Loading States

Use snackbars for loading feedback with manual control:

```vue
<script setup>
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const saveData = async () => {
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
      onAction: () => saveData()
    });
  }
};
</script>
```

### Multiple Notifications

Manage multiple snackbars with different positions:

```vue
<script setup>
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const showMultipleNotifications = () => {
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
</script>
```

### Error Handling with Retry

```vue
<script setup>
import { useSnackbar } from '@jasonshimmy/components';

const snackbar = useSnackbar();

const performAction = async () => {
  try {
    await riskyOperation();
    snackbar.success('Operation completed!');
  } catch (error) {
    snackbar.error(error.message, {
      title: 'Operation Failed',
      actionLabel: 'Retry',
      duration: 0, // Don't auto-close
      onAction: () => performAction() // Recursive retry
    });
  }
};
</script>
```

## TypeScript Support

Full TypeScript support with proper type inference:

```typescript
import { 
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
  onAction: () => {
    // Fully typed callback
    console.log('Action performed');
  }
};

snackbar.show(options);
```

## Integration Examples

### With Form Validation

```vue
<template>
  <form @submit="handleSubmit">
    <input v-model="email" type="email" required />
    <button type="submit">Subscribe</button>
  </form>
</template>

<script setup>
import { useSnackbar } from '@jasonshimmy/components';
import { ref } from 'vue';

const snackbar = useSnackbar();
const email = ref('');

const handleSubmit = async (event) => {
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
</script>
```

### With Router Navigation

```vue
<script setup>
import { useSnackbar } from '@jasonshimmy/components';
import { useRouter } from 'vue-router';

const snackbar = useSnackbar();
const router = useRouter();

const logout = async () => {
  try {
    await authService.logout();
    snackbar.success('Logged out successfully', {
      actionLabel: 'Go to Login',
      onAction: () => router.push('/login')
    });
  } catch (error) {
    snackbar.error('Logout failed');
  }
};
</script>
```

## Best Practices

- Use appropriate `kind` values to convey message importance
- Keep messages concise and actionable
- Use action buttons for undoable operations
- Set reasonable duration values (3-5 seconds for info, longer for warnings)
- Position notifications based on their context and importance
- Always handle action callbacks and error states
- Use `provideSnackbar()` at the application root for consistent behavior

## Accessibility Considerations

- Snackbars automatically include proper ARIA attributes
- Messages are announced to screen readers
- Action buttons are keyboard accessible
- Color coding is supplemented with icons for color-blind users
- Dismiss buttons provide clear exit mechanisms
