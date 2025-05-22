<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Card Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Card component is a versatile container for displaying content and actions in a
        consistent format. Cards can contain text, links, and custom content, making them suitable
        for a wide range of UI patterns.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="max-w-md">
          <Card
            headline="Card Headline"
            subhead="Card Subhead"
            text="Cards can display content and actions about a single subject. They are useful for presenting similar objects whose size, actions, or supported content vary."
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Card
  headline="Card Headline"
  subhead="Card Subhead"
  text="Cards can display content and actions about a single subject. They are useful for presenting similar objects whose size, actions, or supported content vary."
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>headline</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The main heading text</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>subhead</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Secondary heading text</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Body text content</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>variant</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"outlined"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Visual style of the card. Options: elevated, filled, outlined</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"secondary"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Semantic type for action styling. Options: primary, secondary, success, info, warning, danger</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the action button</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for link cards. When provided, the entire card becomes clickable</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for link cards</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for link cards</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Card content. Replaces the <code>text</code> prop when provided</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>footer</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Footer content with action buttons or additional information</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <p class="mb-4">The Card component supports three visual variants to suit different UI needs.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div>
          <h3 class="text-lg font-medium mb-3">Outlined (Default)</h3>
          <Card
            headline="Outlined Card"
            subhead="Default variant"
            variant="outlined"
          >
            This card has a border outline and transparent background.
          </Card>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-3">Filled</h3>
          <Card
            headline="Filled Card"
            subhead="Filled variant"
            variant="filled"
          >
            This card has a subtle background color with no borders.
          </Card>
        </div>

        <div>
          <h3 class="text-lg font-medium mb-3">Elevated</h3>
          <Card
            headline="Elevated Card"
            subhead="Elevated variant"
            variant="elevated"
          >
            This card has a shadow to create a raised appearance.
          </Card>
        </div>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Card
  headline="Outlined Card"
  subhead="Default variant"
  variant="outlined"
&gt;
  This card has a border outline and transparent background.
&lt;/Card&gt;

&lt;Card
  headline="Filled Card"
  subhead="Filled variant"
  variant="filled"
&gt;
  This card has a subtle background color with no borders.
&lt;/Card&gt;

&lt;Card
  headline="Elevated Card"
  subhead="Elevated variant"
  variant="elevated"
&gt;
  This card has a shadow to create a raised appearance.
&lt;/Card&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Interactive Cards</h2>
      <p class="mb-4">Cards can be made interactive by providing an <code>href</code> property, which makes the entire card clickable.</p>
      
      <div class="max-w-md mb-4">
        <Card
          headline="Interactive Card"
          subhead="Click anywhere on this card"
          href="https://example.com"
          target="_blank"
          action-label="Learn More"
          kind="primary"
          variant="elevated"
        >
          When an href is provided, the entire card becomes clickable. Hover over the card to see the interactive effect.
        </Card>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Card
  headline="Interactive Card"
  subhead="Click anywhere on this card"
  href="https://example.com"
  target="_blank"
  action-label="Learn More"
  kind="primary"
  variant="elevated"
&gt;
  When an href is provided, the entire card becomes clickable.
  Hover over the card to see the interactive effect.
&lt;/Card&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Content</h2>
      <p class="mb-4">Cards can contain custom content using slots for more complex layouts.</p>
      
      <div class="max-w-md mb-4">
        <Card
          headline="Custom Content"
          subhead="Using default and footer slots"
        >
          <div class="flex items-center gap-4 py-2">
            <div class="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center">
              <span class="text-primary-600 dark:text-primary-300 text-2xl">🎉</span>
            </div>
            <div>
              <p>This card demonstrates how to use the default slot for custom content.</p>
            </div>
          </div>
          <template #footer>
            <div class="mt-6 flex gap-2 justify-end">
              <Action label="Cancel" variant="ghost" />
              <Action label="Confirm" kind="primary" />
            </div>
          </template>
        </Card>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Card
  headline="Custom Content"
  subhead="Using default and footer slots"
&gt;
  &lt;div class="flex items-center gap-4 py-2"&gt;
    &lt;div class="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center"&gt;
      &lt;span class="text-primary-600 dark:text-primary-300 text-2xl"&gt;🎉&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;p&gt;This card demonstrates how to use the default slot for custom content.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;template #footer&gt;
    &lt;div class="mt-6 flex gap-2 justify-end"&gt;
      &lt;Action label="Cancel" variant="ghost" /&gt;
      &lt;Action label="Confirm" kind="primary" /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/Card&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Use cards to group related information and actions</li>
        <li>Choose the appropriate variant based on information hierarchy (elevated for more important content)</li>
        <li>Keep card content concise and focused on a single topic</li>
        <li>Use consistent card styles throughout your application</li>
        <li>For interactive cards, make sure the action label clearly describes what happens when clicked</li>
        <li>When using cards in a grid or list, maintain consistent sizing</li>
        <li>Consider using the <code>kind</code> prop to match the semantic meaning of the card's action</li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Cards in a Grid Layout</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <Card
          headline="First Card"
          subhead="Product Feature"
          variant="outlined"
          href="https://example.com"
          target="_blank"
          action-label="Learn More"
        >
          Discover the amazing features of our product.
        </Card>
        <Card
          headline="Second Card"
          subhead="Getting Started"
          variant="filled"
          href="https://example.com"
          target="_blank"
          action-label="Get Started"
          kind="primary"
        >
          Follow our getting started guide to begin your journey.
        </Card>
        <Card
          headline="Third Card"
          subhead="Community Support"
          variant="elevated"
          href="https://example.com"
          target="_blank"
          action-label="Join Now"
          kind="success"
        >
          Join our community for support and discussions.
        </Card>
        <Card
          headline="Fourth Card"
          subhead="Documentation"
          variant="outlined"
          href="https://example.com"
          target="_blank"
          action-label="Read Docs"
          kind="info"
        >
          Browse our comprehensive documentation for detailed information.
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  // No additional logic needed for this documentation page
</script>