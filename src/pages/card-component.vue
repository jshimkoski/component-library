<template>
  <div class="content">
    <Prose>
      <h1>Card</h1>
      <h2>Overview</h2>
      <p>The Card component is a versatile container that displays content in a structured format with optional headline, subhead, content, and action elements. Cards are commonly used to present related information in a cohesive, visually distinct container.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    headline="Card Title"
    subhead="Supporting text"
    text="This is a basic card with headline, subhead, and text content."
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The main title of the card.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>subhead</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Secondary text displayed below the headline.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>text</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Body text content of the card.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>actionLabel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text for the action button (when used as a link).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>href</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL for the card when it functions as a link. When provided, the card becomes clickable.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>target</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Target attribute for the link (e.g., &quot;_blank&quot;).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>rel</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Rel attribute for the link.</td>
          </tr>
        </tbody>
      </table>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Main content area. Falls back to the <code>text</code> prop if not provided.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>footer</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Footer content area. By default, contains an action button when <code>actionLabel</code> and <code>href</code> are provided.</td>
          </tr>
        </tbody>
      </table>
      <h2>Visual Variants</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    variant="outlined"
    headline="Outlined Card"
    subhead="Default variant"
    text="Cards with the outlined variant have a thin border."
  /&gt;

  &lt;Card
    variant="outlined"
    headline="Outlined Card"
    subhead="Default variant"
    text="Cards with the outlined variant have a thin border."
  /&gt;

  &lt;Card
    variant="filled"
    headline="Filled Card"
    subhead="Filled background"
    text="Filled cards have a subtle background color with no border."
  /&gt;

  &lt;Card
    variant="elevated"
    headline="Elevated Card"
    subhead="With shadow"
    text="Elevated cards appear to float above the surface with a shadow effect."
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Clickable Cards (Link)</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    headline="Clickable Card"
    subhead="Click anywhere to navigate"
    text="When a href prop is provided, the entire card becomes a clickable link."
    href="#"
    actionLabel="Learn More"
    kind="primary"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Different Kinds</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    headline="Primary Action"
    subhead="Call to action"
    text="The primary kind is used for main actions."
    href="#"
    actionLabel="Continue"
    kind="primary"
  /&gt;

  &lt;Card
    headline="Success Message"
    subhead="Confirmation"
    text="Success kind indicates completion or positive outcomes."
    href="#"
    actionLabel="View Details"
    kind="success"
  /&gt;

  &lt;Card
    headline="Warning Alert"
    subhead="Attention required"
    text="Warning kind draws attention to potential issues."
    href="#"
    actionLabel="Review"
    kind="warning"
  /&gt;
&lt;/template&gt;</code></pre>
      <h2>Custom Content</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    headline="Custom Content Example"
    subhead="With slot contents"
  &gt;
    &lt;p&gt;Cards can contain any content, including lists, images, and interactive elements.&lt;/p&gt;
    &lt;template #footer&gt;
      &lt;span&gt;Last updated: Today&lt;/span&gt;
      &lt;Action kind="primary"&gt;View Details&lt;/Action&gt;
    &lt;/template&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
      <h2>Best Practices</h2>
      <ul>
        <li>Use consistent card variants within the same view for visual coherence</li>
        <li>Include clear, concise headlines that describe the card's content</li>
        <li>Limit text content to avoid overcrowding; cards work best with focused information</li>
        <li>For clickable cards:</li>
        <li>Include a clear action label to indicate the result of clicking</li>
        <li>Consider adding hover effects to reinforce interactivity</li>
        <li>Choose the appropriate variant based on information hierarchy:</li>
        <li>Elevated cards for primary content</li>
        <li>Filled cards for secondary information</li>
        <li>Outlined cards for tertiary or supporting content</li>
      </ul>
      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Cards with interactive elements should have appropriate focus indicators</li>
        <li>When using cards as links, ensure that the clickable area includes appropriate ARIA attributes</li>
        <li>Maintain appropriate color contrast between text and background for all variants</li>
        <li>Organizing content with semantic headings helps screen reader users understand the content hierarchy</li>
      </ul>
      <h2>Examples</h2>
      <h3>Product Card</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card variant="elevated"&gt;
    &lt;h3&gt;Premium Headphones&lt;/h3&gt;
    &lt;p&gt;Wireless Noise Cancelling&lt;/p&gt;
    &lt;p&gt;$129.99&lt;/p&gt;
    &lt;p&gt;⭐⭐⭐⭐☆ 4.0 (128 reviews)&lt;/p&gt;
    &lt;template #footer&gt;
      &lt;Action kind="primary"&gt;Add to Cart&lt;/Action&gt;
    &lt;/template&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
      <h3>Dashboard Stats Card</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;Card
    variant="filled"
    headline="Total Revenue"
    text="$24,345"
  &gt;
    &lt;p&gt;📈 12% increase&lt;/p&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>