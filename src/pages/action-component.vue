<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Action Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Action component is a versatile interactive element that can
        function as either a button or a link. It supports various styles,
        sizes, and states to accommodate different UI contexts and user
        interactions.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex items-center gap-2 mb-6">
          <Action
            kind="primary"
            label="Submit"
            icon="ic:baseline-check"
          />
          <Action
            kind="secondary"
            label="Save Draft"
          />
          <Action label="Cancel" />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Action
  kind="primary"
  label="Submit"
/&gt;

&lt;Action
  kind="secondary"
  label="Save Draft"
/&gt;

&lt;Action
  label="Cancel"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Type
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Default
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>label</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Text label for the action
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>href</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              URL for link actions. When provided, renders as an anchor tag
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>target</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Target attribute for anchor tags
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>rel</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Rel attribute for anchor tags
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>disabled</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the action is disabled
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>active</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether the action is in active state
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>type</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "button"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Button type attribute
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>variant</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Visual style variant. Options: solid, outline, ghost, link
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>kind</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              undefined
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Semantic type. Options: primary, secondary, success, info,
              warning, danger
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>activeKind</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "primary"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Kind to use when in active state
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>size</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              "md"
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Size of the action. Options: xs, sm, md, lg, xl
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>square</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              false
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Whether to use equal padding on all sides
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Parameters
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>click</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              (event: MouseEvent)
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when the action is clicked
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants and Kinds</h2>
      <p class="mb-4">
        The Action component supports multiple visual variants and semantic
        kinds that can be combined.
      </p>

      <h3 class="text-lg font-medium mt-6 mb-3">Primary Kind</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Solid"
            variant="solid"
            kind="primary"
          />
          <Action
            label="Outline"
            variant="outline"
            kind="primary"
          />
          <Action
            label="Ghost"
            variant="ghost"
            kind="primary"
          />
          <Action
            label="Link"
            variant="link"
            kind="primary"
          />
        </div>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Secondary Kind</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Solid"
            variant="solid"
            kind="secondary"
          />
          <Action
            label="Outline"
            variant="outline"
            kind="secondary"
          />
          <Action
            label="Ghost"
            variant="ghost"
            kind="secondary"
          />
          <Action
            label="Link"
            variant="link"
            kind="secondary"
          />
        </div>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Contextual Kinds</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Success"
            variant="solid"
            kind="success"
          />
          <Action
            label="Info"
            variant="solid"
            kind="info"
          />
          <Action
            label="Warning"
            variant="solid"
            kind="warning"
          />
          <Action
            label="Danger"
            variant="solid"
            kind="danger"
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <p class="mb-4">
        The Action component is available in multiple sizes to fit different UI
        contexts.
      </p>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Extra Small"
            kind="primary"
            size="xs"
          />
          <Action
            label="Small"
            kind="primary"
            size="sm"
          />
          <Action
            label="Medium"
            kind="primary"
            size="md"
          />
          <Action
            label="Large"
            kind="primary"
            size="lg"
          />
          <Action
            label="Extra Large"
            kind="primary"
            size="xl"
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>

      <h3 class="text-lg font-medium mt-6 mb-3">Disabled State</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Disabled"
            kind="primary"
            disabled
          />
          <Action
            label="Disabled"
            kind="secondary"
            disabled
          />
          <Action
            label="Disabled"
            kind="danger"
            disabled
          />
        </div>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-3">Active State</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="Active"
            kind="primary"
            active
          />
          <Action
            label="Active"
            kind="secondary"
            active
          />
          <Action
            label="Active"
            kind="danger"
            active
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Link Mode</h2>
      <p class="mb-4">
        When a <code>href</code> prop is provided, the Action renders as an
        anchor tag.
      </p>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action
            label="External Link"
            kind="primary"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Action
  label="External Link"
  kind="primary"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Content</h2>
      <p class="mb-4">
        The Action component supports slots for custom content.
      </p>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Action kind="primary">
            <template #default>
              <span>Custom Content</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </template>
          </Action>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Action kind="primary"&gt;
  &lt;template #default&gt;
    &lt;span&gt;Custom Content&lt;/span&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"&gt;
      &lt;path d="m9 18 6-6-6-6"/&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/Action&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          Use the appropriate <code>kind</code> prop to match the semantic
          meaning of the action (primary for main actions, danger for
          destructive actions, etc.)
        </li>
        <li>
          Maintain consistent styling for similar actions throughout your
          application
        </li>
        <li>
          Use <code>ghost</code> or <code>link</code> variants for less
          important or secondary actions
        </li>
        <li>
          Always provide a clear, concise label that describes what the action
          does
        </li>
        <li>
          When using as a link, include appropriate <code>target</code> and
          <code>rel</code> attributes for external links
        </li>
        <li>Group related actions together with consistent styling</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
