# Avatar

## Overview

The Avatar component displays a user or entity's profile image with flexible sizing and styling options. It's commonly used in user interfaces for representing people, accounts, or other entities with a visual identity.

## Basic Usage

```vue
<template>
  <Avatar 
    src="https://i.pravatar.cc/300" 
    alt="User Avatar" 
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `src` | String | Required | URL of the avatar image. |
| `alt` | String | `"Avatar"` | Alternative text for the image for accessibility. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl" \| "8xl"` | `"md"` | Size of the avatar. |
| `shape` | `"circle" \| "square"` | `"circle"` | Shape of the avatar. |

## Sizes

```vue
<template>
  <Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" />
</template>
```

## Shapes

```vue
<template>
  <Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" />
  <Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" />
</template>
```

## Error Handling

The Avatar component automatically displays a fallback image if the provided image URL fails to load.

```vue
<template>
  <Avatar 
    src="https://invalid-url-that-will-fail.com/image.jpg" 
    alt="Fallback Example" 
  />
</template>
```

## Best Practices

- Always provide a meaningful `alt` attribute for accessibility
- Choose an appropriate size based on the context where the avatar is displayed
- Use consistent avatar sizes for similar contexts (e.g., same size for all avatars in a user list)
- Consider using the circle shape for user avatars and square shape for organization or entity avatars
- Ensure the source image has an appropriate aspect ratio (preferably 1:1) to avoid distortion

## Accessibility Considerations

- The component uses the `alt` attribute to provide an accessible name for the image
- Screen readers will announce the image using the `alt` text
- Ensure the `alt` text is descriptive but concise (e.g., "Profile picture of John Doe")
- For decorative avatars, consider passing an empty string as the `alt` attribute

## Examples

### User Profile Header

```vue
<template>
  <Avatar 
    src="https://i.pravatar.cc/300" 
    size="xl"
    alt="Jane Doe's profile picture"
  />

  <div>
    <h3>Jane Doe</h3>
    <p>Product Designer</p>
  </div>
</template>
```

### User List

```vue
<template>
  <div v-for="user in users" :key="user.id">
    <Avatar :src="user.avatarUrl" size="sm" :alt="`${user.name}'s avatar`" />
    {{ user.name }}
  </div>
</template>
```
