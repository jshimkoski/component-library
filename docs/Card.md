# Card

## Overview

The Card component is a versatile container that displays content in a structured format with optional headline, subhead, content, and action elements. Cards are commonly used to present related information in a cohesive, visually distinct container.

## Basic Usage

```vue
<template>
  <Card
    headline="Card Title"
    subhead="Supporting text"
    text="This is a basic card with headline, subhead, and text content."
  />
</template>
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

## Visual Variants

```vue
<template>
  <Card
    variant="outlined"
    headline="Outlined Card"
    subhead="Default variant"
    text="Cards with the outlined variant have a thin border."
  />

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
</template>
```

## Clickable Cards (Link)

```vue
<template>
  <Card
    headline="Clickable Card"
    subhead="Click anywhere to navigate"
    text="When a href prop is provided, the entire card becomes a clickable link."
    href="#"
    actionLabel="Learn More"
    kind="primary"
  />
</template>
```

## Different Kinds

```vue
<template>
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
</template>
```

## Custom Content

```vue
<template>
  <Card
    headline="Custom Content Example"
    subhead="With slot contents"
  >
    <p>Cards can contain any content, including lists, images, and interactive elements.</p>
    <template #footer>
      <span>Last updated: Today</span>
      <Action kind="primary">View Details</Action>
    </template>
  </Card>
</template>
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

```vue
<template>
  <Card variant="elevated">
    <h3>Premium Headphones</h3>
    <p>Wireless Noise Cancelling</p>
    <p>$129.99</p>
    <p>⭐⭐⭐⭐☆ 4.0 (128 reviews)</p>
    <template #footer>
      <Action kind="primary">Add to Cart</Action>
    </template>
  </Card>
</template>
```

### Dashboard Stats Card

```vue
<template>
  <Card
    variant="filled"
    headline="Total Revenue"
    text="$24,345"
  >
    <p>📈 12% increase</p>
  </Card>
</template>
```
