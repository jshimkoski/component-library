<template>
  <div class="space-y-8">
    <section class="space-y-4">
      <h2 class="text-xl font-bold">Basic Usage</h2>
      <p class="text-base-600 dark:text-base-400">
        Snackbars provide brief messages about app processes at the bottom or
        top of the screen.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Show Basic Snackbar"
          kind="primary"
          @click="showBasicSnackbar = true"
        />
        <Snackbar
          v-model="showBasicSnackbar"
          message="This is a basic snackbar message"
        />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Kinds</h2>
      <p class="text-base-600 dark:text-base-400">
        Snackbars come in different kinds to represent different types of
        information.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Primary"
          kind="primary"
          @click="showSnackbar('primary')"
        />
        <Action
          label="Success"
          kind="success"
          @click="showSnackbar('success')"
        />
        <Action
          label="Info"
          kind="info"
          @click="showSnackbar('info')"
        />
        <Action
          label="Warning"
          kind="warning"
          @click="showSnackbar('warning')"
        />
        <Action
          label="Danger"
          kind="danger"
          @click="showSnackbar('danger')"
        />
        <Action
          label="Secondary"
          kind="secondary"
          @click="showSnackbar('secondary')"
        />
      </div>

      <Snackbar
        v-model="showPrimarySnackbar"
        kind="primary"
        message="This is a primary snackbar"
      />
      <Snackbar
        v-model="showSuccessSnackbar"
        kind="success"
        message="Operation completed successfully"
      />
      <Snackbar
        v-model="showInfoSnackbar"
        kind="info"
        message="Here's some information for you"
      />
      <Snackbar
        v-model="showWarningSnackbar"
        kind="warning"
        message="Warning: This action has consequences"
      />
      <Snackbar
        v-model="showDangerSnackbar"
        kind="danger"
        message="Error! Something went wrong"
      />
      <Snackbar
        v-model="showSecondarySnackbar"
        kind="secondary"
        message="This is a secondary message"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Positions</h2>
      <p class="text-base-600 dark:text-base-400">
        Snackbars can be positioned at different locations on the screen.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Bottom (Default)"
          @click="showPositionSnackbar('bottom')"
        />
        <Action
          label="Top"
          @click="showPositionSnackbar('top')"
        />
        <Action
          label="Top Left"
          @click="showPositionSnackbar('top-left')"
        />
        <Action
          label="Top Right"
          @click="showPositionSnackbar('top-right')"
        />
        <Action
          label="Bottom Left"
          @click="showPositionSnackbar('bottom-left')"
        />
        <Action
          label="Bottom Right"
          @click="showPositionSnackbar('bottom-right')"
        />
      </div>

      <Snackbar
        v-if="positionSnackbar === 'bottom'"
        v-model="showPositionedSnackbar"
        position="bottom"
        message="This snackbar appears at the bottom"
      />
      <Snackbar
        v-if="positionSnackbar === 'top'"
        v-model="showPositionedSnackbar"
        position="top"
        message="This snackbar appears at the top"
      />
      <Snackbar
        v-if="positionSnackbar === 'top-left'"
        v-model="showPositionedSnackbar"
        position="top-left"
        message="This snackbar appears at the top-left"
      />
      <Snackbar
        v-if="positionSnackbar === 'top-right'"
        v-model="showPositionedSnackbar"
        position="top-right"
        message="This snackbar appears at the top-right"
      />
      <Snackbar
        v-if="positionSnackbar === 'bottom-left'"
        v-model="showPositionedSnackbar"
        position="bottom-left"
        message="This snackbar appears at the bottom-left"
      />
      <Snackbar
        v-if="positionSnackbar === 'bottom-right'"
        v-model="showPositionedSnackbar"
        position="bottom-right"
        message="This snackbar appears at the bottom-right"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">With Action</h2>
      <p class="text-base-600 dark:text-base-400">
        Snackbars can include an action button to provide a quick action related
        to the message.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Show Snackbar with Action"
          @click="showActionSnackbar = true"
        />
      </div>

      <Snackbar
        v-model="showActionSnackbar"
        message="Your file has been deleted"
        action-label="Undo"
        @action="handleUndo"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">With Title</h2>
      <p class="text-base-600 dark:text-base-400">
        For more complex messages, you can add a title to your snackbar.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Show Snackbar with Title"
          @click="showTitleSnackbar = true"
        />
      </div>

      <Snackbar
        v-model="showTitleSnackbar"
        title="Success!"
        message="Your profile has been updated successfully"
        kind="success"
      />
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold">Auto-close Duration</h2>
      <p class="text-base-600 dark:text-base-400">
        You can customize how long a snackbar stays visible before auto-closing.
      </p>
      <div class="flex flex-wrap gap-4">
        <Action
          label="Quick (2s)"
          @click="showDurationSnackbar(2000)"
        />
        <Action
          label="Default (5s)"
          @click="showDurationSnackbar(5000)"
        />
        <Action
          label="Long (10s)"
          @click="showDurationSnackbar(10000)"
        />
        <Action
          label="No Auto-close"
          @click="showPersistentSnackbar"
        />
      </div>

      <Snackbar
        v-model="showQuickSnackbar"
        message="This will close in 2 seconds"
        :duration="2000"
      />
      <Snackbar
        v-model="showDefaultDurationSnackbar"
        message="This will close in 5 seconds (default)"
        :duration="5000"
      />
      <Snackbar
        v-model="showLongSnackbar"
        message="This will close in 10 seconds"
        :duration="10000"
      />
      <Snackbar
        v-model="showNoAutoCloseSnackbar"
        message="This won't close automatically"
        :auto-close="false"
      />
    </section>

    <Prose class="mt-8">
      <h2>Component Usage</h2>
      <pre><code>&lt;!-- Basic usage --&gt;
&lt;Snackbar
  v-model="show"
  message="This is a snackbar message"
/&gt;

&lt;!-- With different kind --&gt;
&lt;Snackbar
  v-model="show"
  kind="success"
  message="Operation completed successfully"
/&gt;

&lt;!-- With title and custom position --&gt;
&lt;Snackbar
  v-model="show"
  title="Error"
  message="Failed to save changes"
  kind="danger"
  position="top-right"
/&gt;

&lt;!-- With action button --&gt;
&lt;Snackbar
  v-model="show"
  message="Item deleted"
  action-label="Undo"
  @action="handleUndo"
/&gt;

&lt;!-- Custom duration or persistent --&gt;
&lt;Snackbar
  v-model="show"
  message="This stays for 10 seconds"
  :duration="10000"
/&gt;

&lt;Snackbar
  v-model="show"
  message="This won't auto-close"
  :auto-close="false"
/&gt;</code></pre>
    </Prose>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Props</h2>
      <Table
        :fields="propFields"
        :items="propItems"
        sortable
        expandable
      >
        <template #cell-name="{ value }">
          <code>{{ value }}</code>
        </template>
        <template #cell-type="{ value }">
          <span class="font-mono text-sm">{{ value }}</span>
        </template>
        <template #expanded-content="{ item }">
          <div
            class="p-4 space-y-3"
            v-if="item.example"
          >
            <h3 class="font-medium">Example:</h3>
            <pre
              class="bg-base-200 dark:bg-base-700 p-2 rounded-base radius-xl:rounded-xl overflow-x-auto"
            ><code>{{ item.example }}</code></pre>
          </div>
        </template>
      </Table>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Events</h2>
      <Table
        :fields="eventFields"
        :items="eventItems"
        sortable
      >
        <template #cell-name="{ value }">
          <code>{{ value }}</code>
        </template>
      </Table>
    </div>

    <Prose class="mt-8">
      <h2 class="text-xl font-bold mb-4">Global Snackbar Service</h2>
      <p class="mb-4 text-base-600 dark:text-base-400">
        For convenience, you can use the global snackbar service to show
        snackbars from anywhere in your application:
      </p>
      <div class="flex flex-wrap gap-4 mb-6">
        <Action
          label="Show Global Snackbar"
          @click="showGlobalSnackbar"
        />
      </div>
      <pre><code>// In your component
import { useSnackbar } from '@/composables/useSnackbar'

const snackbar = useSnackbar()

// Show a simple message
snackbar.show('Your message here')

// Show with options
snackbar.show({
  message: 'Operation successful',
  kind: 'success',
  duration: 3000,
  position: 'bottom-right',
  actionLabel: 'View',
  onAction: () => {
    // Handle action click
  }
})

// Show success message
snackbar.success('Operation completed successfully')

// Show danger message
snackbar.danger('Something went wrong')

// Show info message
snackbar.info('Here is some information')

// Show warning message
snackbar.warning('Be careful with this action')</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
  import type { TableField } from "../components/Table.vue";

  // State for basic example
  const showBasicSnackbar = ref(false);

  // State for kind examples
  const showPrimarySnackbar = ref(false);
  const showSuccessSnackbar = ref(false);
  const showInfoSnackbar = ref(false);
  const showWarningSnackbar = ref(false);
  const showDangerSnackbar = ref(false);
  const showSecondarySnackbar = ref(false);

  function showSnackbar(kind: string) {
    switch (kind) {
      case "primary":
        showPrimarySnackbar.value = true;
        break;
      case "success":
        showSuccessSnackbar.value = true;
        break;
      case "info":
        showInfoSnackbar.value = true;
        break;
      case "warning":
        showWarningSnackbar.value = true;
        break;
      case "danger":
        showDangerSnackbar.value = true;
        break;
      case "secondary":
        showSecondarySnackbar.value = true;
        break;
    }
  }

  // State for position examples
  const showPositionedSnackbar = ref(false);
  const positionSnackbar = ref("bottom");

  function showPositionSnackbar(position: string) {
    positionSnackbar.value = position;
    showPositionedSnackbar.value = false;

    // Use nextTick to ensure the snackbar is remounted with new position
    nextTick(() => {
      showPositionedSnackbar.value = true;
    });
  }

  // State for action example
  const showActionSnackbar = ref(false);

  function handleUndo() {
    // Simulating undo action
    setTimeout(() => {
      showInfoSnackbar.value = true;
    }, 500);
  }

  // State for title example
  const showTitleSnackbar = ref(false);

  // State for duration examples
  const showQuickSnackbar = ref(false);
  const showDefaultDurationSnackbar = ref(false);
  const showLongSnackbar = ref(false);
  const showNoAutoCloseSnackbar = ref(false);

  function showDurationSnackbar(duration: number) {
    if (duration === 2000) {
      showQuickSnackbar.value = true;
    } else if (duration === 5000) {
      showDefaultDurationSnackbar.value = true;
    } else if (duration === 10000) {
      showLongSnackbar.value = true;
    }
  }

  function showPersistentSnackbar() {
    showNoAutoCloseSnackbar.value = true;
  }

  // Global snackbar example
  function showGlobalSnackbar() {
    // In a real implementation, this would use the useSnackbar composable
    showSuccessSnackbar.value = true;
    setTimeout(() => {
      showInfoSnackbar.value = true;
    }, 1000);
  }

  // Props documentation
  const propFields: TableField[] = [
    { key: "name", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];

  const propItems = [
    {
      name: "message",
      type: "String",
      default: "undefined",
      description: "The message text shown in the snackbar",
      example: '<Snackbar message="Your message here" />',
    },
    {
      name: "title",
      type: "String",
      default: "undefined",
      description: "Optional title displayed above the message",
      example: '<Snackbar title="Success" message="Operation completed" />',
    },
    {
      name: "kind",
      type: "'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary'",
      default: "'primary'",
      description: "The type of snackbar to display, affects color and icon",
      example: '<Snackbar kind="success" message="Well done!" />',
    },
    {
      name: "position",
      type: "'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
      default: "'bottom'",
      description: "Where the snackbar will appear on screen",
      example: '<Snackbar position="top-right" message="New notification" />',
    },
    {
      name: "showIcon",
      type: "Boolean",
      default: "true",
      description: "Whether to show the icon based on kind",
      example: '<Snackbar :showIcon="false" message="No icon here" />',
    },
    {
      name: "dismissible",
      type: "Boolean",
      default: "true",
      description: "Whether to show a close button",
      example:
        '<Snackbar :dismissible="false" message="Cannot dismiss this" />',
    },
    {
      name: "autoClose",
      type: "Boolean",
      default: "true",
      description:
        "Whether the snackbar should close automatically after duration",
      example:
        '<Snackbar :autoClose="false" message="Will stay until dismissed" />',
    },
    {
      name: "duration",
      type: "Number",
      default: "5000",
      description:
        "Time in milliseconds before auto-closing (if autoClose is true)",
      example: '<Snackbar :duration="10000" message="Stays for 10 seconds" />',
    },
    {
      name: "actionLabel",
      type: "String",
      default: "undefined",
      description:
        "Label for the action button, displays action button if provided",
      example:
        '<Snackbar actionLabel="Undo" message="Item deleted" @action="handleUndo" />',
    },
  ];

  // Events documentation
  const eventFields: TableField[] = [
    { key: "name", label: "Event", sortable: true },
    { key: "payload", label: "Payload", sortable: false },
    { key: "description", label: "Description" },
  ];

  const eventItems = [
    {
      name: "update:modelValue",
      payload: "Boolean",
      description: "Emitted when the snackbar visibility changes",
    },
    {
      name: "action",
      payload: "Event",
      description: "Emitted when the action button is clicked",
    },
    {
      name: "dismiss",
      payload: "Event",
      description:
        "Emitted when the snackbar is dismissed (via close button or programmatically)",
    },
    {
      name: "close",
      payload: "void",
      description:
        "Emitted when the snackbar automatically closes after the duration",
    },
  ];
</script>
