# Avatar

## Overview

The Avatar component displays a user or entity's profile image with flexible sizing and styling options. It's commonly used in user interfaces for representing people, accounts, or other entities with a visual identity.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Avatar 
    src="https://i.pravatar.cc/300" 
    alt="User Avatar" 
  />
</div>

```vue
<Avatar 
  src="https://i.pravatar.cc/300" 
  alt="User Avatar" 
/>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `src` | String | Required | URL of the avatar image. |
| `alt` | String | `"Avatar"` | Alternative text for the image for accessibility. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl" \| "8xl"` | `"md"` | Size of the avatar. |
| `shape` | `"circle" \| "square"` | `"circle"` | Shape of the avatar. |

## Variants/Options

### Sizes

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex items-end gap-4 flex-wrap">
  <Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" />
  <Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" />
</div>

```vue
<Avatar src="https://i.pravatar.cc/300" size="xs" alt="Extra Small Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="sm" alt="Small Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="md" alt="Medium Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="lg" alt="Large Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="xl" alt="Extra Large Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="2xl" alt="2XL Avatar" />
<Avatar src="https://i.pravatar.cc/300" size="3xl" alt="3XL Avatar" />
```

### Shapes

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4 flex gap-4">
  <Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" />
  <Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" />
</div>

```vue
<Avatar src="https://i.pravatar.cc/300" shape="circle" alt="Circle Avatar" />
<Avatar src="https://i.pravatar.cc/300" shape="square" alt="Square Avatar" />
```

## Error Handling

The Avatar component automatically displays a fallback image if the provided image URL fails to load.

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <Avatar 
    src="https://invalid-url-that-will-fail.com/image.jpg" 
    alt="Fallback Example" 
  />
</div>

```vue
<Avatar 
  src="https://invalid-url-that-will-fail.com/image.jpg" 
  alt="Fallback Example" 
/>
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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="flex items-center gap-4">
    <Avatar 
      src="https://i.pravatar.cc/300" 
      size="xl"
      alt="Jane Doe's profile picture"
    />
    <div>
      <h3 class="text-xl font-bold">Jane Doe</h3>
      <p class="text-base-600 dark:text-base-400">Product Designer</p>
    </div>
  </div>
</div>

```vue
<div class="flex items-center gap-4">
  <Avatar 
    src="https://i.pravatar.cc/300" 
    size="xl"
    alt="Jane Doe's profile picture"
  />
  <div>
    <h3 class="text-xl font-bold">Jane Doe</h3>
    <p class="text-base-600 dark:text-base-400">Product Designer</p>
  </div>
</div>
```

### User List

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <ul class="space-y-3">
    <li class="flex items-center gap-3">
      <Avatar src="https://i.pravatar.cc/300?u=1" size="sm" alt="User 1" />
      <span>Alex Johnson</span>
    </li>
    <li class="flex items-center gap-3">
      <Avatar src="https://i.pravatar.cc/300?u=2" size="sm" alt="User 2" />
      <span>Sam Taylor</span>
    </li>
    <li class="flex items-center gap-3">
      <Avatar src="https://i.pravatar.cc/300?u=3" size="sm" alt="User 3" />
      <span>Jordan Smith</span>
    </li>
  </ul>
</div>

```vue
<ul class="space-y-3">
  <li v-for="user in users" :key="user.id" class="flex items-center gap-3">
    <Avatar :src="user.avatarUrl" size="sm" :alt="`${user.name}'s avatar`" />
    <span>{{ user.name }}</span>
  </li>
</ul>
```