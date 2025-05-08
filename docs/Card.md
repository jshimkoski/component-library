# Card

## Overview

The Card component is a versatile container that displays content in a structured format with optional headline, subhead, content, and action elements. Cards are commonly used to present related information in a cohesive, visually distinct container.

## Basic Usage

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Card
    headline="Card Title"
    subhead="Supporting text"
    text="This is a basic card with headline, subhead, and text content."
  />
</div>

```vue
<Card
  headline="Card Title"
  subhead="Supporting text"
  text="This is a basic card with headline, subhead, and text content."
/>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | String | `undefined` | The main title of the card. |
| `subhead` | String | `undefined` | Secondary text displayed below the headline. |
| `text` | String | `undefined` | Body text content of the card. |
| `variant` | `"elevated" \| "filled" \| "outlined"` | `"outlined"` | Visual style variant of the card. |
| `kind` | `"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "danger"` | `"secondary"` | Color theme used for actions and accents. |
| `actionLabel` | String | `undefined` | Text for the action button (when used as a link). |
| `href` | String | `undefined` | URL for the card when it functions as a link. When provided, the card becomes clickable. |
| `target` | String | `undefined` | Target attribute for the link (e.g., "_blank"). |
| `rel` | String | `undefined` | Rel attribute for the link. |

## Slots

| Name | Description |
|------|-------------|
| `default` | Main content area. Falls back to the `text` prop if not provided. |
| `footer` | Footer content area. By default, contains an action button when `actionLabel` and `href` are provided. |

## Variants/Options

### Visual Variants

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4 md:grid-cols-3">
  <Card
    variant="outlined"
    headline="Outlined Card"
    subhead="Default variant"
    text="Cards with the outlined variant have a thin border."
  />
  <Card
    variant="filled"
    headline="Filled Card"
    subhead="Filled background"
    text="Filled cards have a subtle background color with no border."
  />
  <Card
    variant="elevated"
    headline="Elevated Card"
    subhead="With shadow"
    text="Elevated cards appear to float above the surface with a shadow effect."
  />
</div>

```vue
<Card
  variant="outlined"
  headline="Outlined Card"
  subhead="Default variant"
  text="Cards with the outlined variant have a thin border."
/>

<Card
  variant="filled"
  headline="Filled Card"
  subhead="Filled background"
  text="Filled cards have a subtle background color with no border."
/>

<Card
  variant="elevated"
  headline="Elevated Card"
  subhead="With shadow"
  text="Elevated cards appear to float above the surface with a shadow effect."
/>
```

### Clickable Cards (Link)

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Card
    headline="Clickable Card"
    subhead="Click anywhere to navigate"
    text="When a href prop is provided, the entire card becomes a clickable link."
    href="#"
    actionLabel="Learn More"
    kind="primary"
  />
</div>

```vue
<Card
  headline="Clickable Card"
  subhead="Click anywhere to navigate"
  text="When a href prop is provided, the entire card becomes a clickable link."
  href="#"
  actionLabel="Learn More"
  kind="primary"
/>
```

### Different Kinds

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4 md:grid-cols-3">
  <Card
    headline="Primary Action"
    subhead="Call to action"
    text="The primary kind is used for main actions."
    href="#"
    actionLabel="Continue"
    kind="primary"
  />
  <Card
    headline="Success Message"
    subhead="Confirmation"
    text="Success kind indicates completion or positive outcomes."
    href="#"
    actionLabel="View Details"
    kind="success"
  />
  <Card
    headline="Warning Alert"
    subhead="Attention required"
    text="Warning kind draws attention to potential issues."
    href="#"
    actionLabel="Review"
    kind="warning"
  />
</div>

```vue
<Card
  headline="Primary Action"
  subhead="Call to action"
  text="The primary kind is used for main actions."
  href="#"
  actionLabel="Continue"
  kind="primary"
/>

<Card
  headline="Success Message"
  subhead="Confirmation"
  text="Success kind indicates completion or positive outcomes."
  href="#"
  actionLabel="View Details"
  kind="success"
/>

<Card
  headline="Warning Alert"
  subhead="Attention required"
  text="Warning kind draws attention to potential issues."
  href="#"
  actionLabel="Review"
  kind="warning"
/>
```

## Custom Content

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Card
    headline="Custom Content Example"
    subhead="With slot contents"
  >
    <div class="space-y-4">
      <p>Cards can contain any content, including:</p>
      <ul class="list-disc pl-5">
        <li>Lists of information</li>
        <li>Images and media</li>
        <li>Interactive elements</li>
      </ul>
      <img src="https://placeholder.pics/svg/300x150" alt="Placeholder" class="rounded w-full" />
    </div>
    <template #footer>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-sm text-base-500">Last updated: Today</span>
        <Action kind="primary">View Details</Action>
      </div>
    </template>
  </Card>
</div>

```vue
<Card
  headline="Custom Content Example"
  subhead="With slot contents"
>
  <div class="space-y-4">
    <p>Cards can contain any content, including:</p>
    <ul class="list-disc pl-5">
      <li>Lists of information</li>
      <li>Images and media</li>
      <li>Interactive elements</li>
    </ul>
    <img src="/path/to/image.jpg" alt="Example image" class="rounded w-full" />
  </div>
  <template #footer>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-sm text-base-500">Last updated: Today</span>
      <Action kind="primary">View Details</Action>
    </div>
  </template>
</Card>
```

## Best Practices

- Use consistent card variants within the same view for visual coherence
- Include clear, concise headlines that describe the card's content
- Limit text content to avoid overcrowding; cards work best with focused information
- For clickable cards:
  - Include a clear action label to indicate the result of clicking
  - Consider adding hover effects to reinforce interactivity
- Choose the appropriate variant based on information hierarchy:
  - Elevated cards for primary content
  - Filled cards for secondary information
  - Outlined cards for tertiary or supporting content

## Accessibility Considerations

- Cards with interactive elements should have appropriate focus indicators
- When using cards as links, ensure that the clickable area includes appropriate ARIA attributes
- Maintain appropriate color contrast between text and background for all variants
- Organizing content with semantic headings helps screen reader users understand the content hierarchy

## Examples

### Product Card

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Card variant="elevated">
    <img src="https://placeholder.pics/svg/300x200" alt="Product" class="rounded w-full mb-4" />
    <h3 class="text-xl font-bold">Premium Headphones</h3>
    <p class="text-base-600 dark:text-base-400 mt-1">Wireless Noise Cancelling</p>
    <p class="mt-4 text-lg font-semibold">$129.99</p>
    <div class="flex items-center mt-2">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-warning-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-warning-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-warning-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-warning-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-base-300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
      <span class="text-sm text-base-500 ml-2">4.0 (128 reviews)</span>
    </div>
    <template #footer>
      <div class="mt-4 flex justify-end">
        <Action kind="primary">Add to Cart</Action>
      </div>
    </template>
  </Card>
</div>

```vue
<Card variant="elevated">
  <img src="/products/headphones.jpg" alt="Product" class="rounded w-full mb-4" />
  <h3 class="text-xl font-bold">Premium Headphones</h3>
  <p class="text-base-600 dark:text-base-400 mt-1">Wireless Noise Cancelling</p>
  <p class="mt-4 text-lg font-semibold">$129.99</p>
  <div class="flex items-center mt-2">
    <div class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-warning-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      <!-- Repeat for all stars -->
    </div>
    <span class="text-sm text-base-500 ml-2">4.0 (128 reviews)</span>
  </div>
  <template #footer>
    <div class="mt-4 flex justify-end">
      <Action kind="primary">Add to Cart</Action>
    </div>
  </template>
</Card>
```

### Dashboard Stats Card

<div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4 grid gap-4 md:grid-cols-3">
  <Card variant="filled">
    <div class="flex justify-between items-start">
      <div>
        <p class="text-base-500 dark:text-base-400 text-sm">Total Revenue</p>
        <p class="text-2xl font-bold mt-1">$24,345</p>
        <p class="text-success-600 dark:text-success-400 text-sm flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><polyline points="18 15 12 9 6 15"></polyline></svg>
          12% increase
        </p>
      </div>
      <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-600 dark:text-primary-400"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      </div>
    </div>
  </Card>
</div>

```vue
<Card variant="filled">
  <div class="flex justify-between items-start">
    <div>
      <p class="text-base-500 dark:text-base-400 text-sm">Total Revenue</p>
      <p class="text-2xl font-bold mt-1">$24,345</p>
      <p class="text-success-600 dark:text-success-400 text-sm flex items-center mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><polyline points="18 15 12 9 6 15"></polyline></svg>
        12% increase
      </p>
    </div>
    <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-600 dark:text-primary-400"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    </div>
  </div>
</Card>
```