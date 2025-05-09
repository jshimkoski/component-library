# Navigation Components

The Navigation component suite provides a comprehensive system for creating responsive navigation menus, supporting both standard dropdown menus and grid-based mega menus. These components work together to create flexible, accessible navigation experiences that adapt to different screen sizes and user needs.

## Navigation Component

The `Navigation` component serves as the main container for your navigation elements, handling responsive behavior and styling.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "subtle"` | `"primary"` | Visual style of the navigation bar |
| `responsive` | `Boolean` | `true` | Whether the navigation adapts to different screen sizes |
| `position` | `"static" \| "sticky" \| "fixed"` | `"static"` | Positioning strategy of the navigation bar |
| `itemsSpacing` | `"normal" \| "wide" \| "compact"` | `"normal"` | Spacing between navigation items |
| `itemsAlignment` | `"left" \| "center" \| "right" \| "space-between" \| "space-around"` | `"left"` | Horizontal alignment of navigation items |

### Slots

| Name | Description |
|------|-------------|
| `default` | Main content area for navigation items |
| `logo` | Area for branding or logo |
| `right` | Area for right-aligned content like action buttons |

### Example

```vue
<Navigation variant="secondary" position="sticky">
  <template #logo>
    <div class="text-xl font-bold">Logo</div>
  </template>
  
  <NavigationItem label="Home" href="#" active />
  <NavigationItem label="About" href="#" />
  <NavigationItem label="Services" :hasChildren="true">
    <template #dropdown>
      <MenuItem label="Web Design" />
      <MenuItem label="App Development" />
      <MenuDivider />
      <MenuItem label="View All Services" />
    </template>
  </NavigationItem>
  
  <template #right>
    <Action variant="ghost" size="sm">Login</Action>
    <Action kind="primary" size="sm">Sign Up</Action>
  </template>
</Navigation>
```

## NavigationItem Component

The `NavigationItem` component represents an individual navigation link or dropdown trigger within the navigation bar.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `String` | `""` | Text label for the navigation item |
| `href` | `String` | `undefined` | URL for the navigation item link |
| `target` | `String` | `""` | Target attribute for the link |
| `rel` | `String` | `""` | Rel attribute for the link |
| `active` | `Boolean` | `false` | Whether the navigation item is currently active |
| `disabled` | `Boolean` | `false` | Whether the navigation item is disabled |
| `hasChildren` | `Boolean` | `false` | Whether the navigation item has a dropdown menu |
| `activeIndicator` | `"none" \| "underline" \| "background"` | `"underline"` | Style of the active indicator |
| `placement` | `Placement` | `"bottom-start"` | Placement of the dropdown menu |

### Slots

| Name | Description |
|------|-------------|
| `default` | Content of the navigation item (replaces label) |
| `dropdown` | Content of the dropdown menu |

### Example

```vue
<!-- Simple navigation item -->
<NavigationItem label="Home" href="/" active />

<!-- Navigation item with dropdown -->
<NavigationItem label="Resources" :hasChildren="true">
  <template #dropdown>
    <MenuItem label="Documentation" />
    <MenuItem label="Tutorials" />
    <MenuItem label="Blog" />
  </template>
</NavigationItem>
```

## MegaMenu Component

The `MegaMenu` component provides a grid-based dropdown menu with support for multiple columns and footer content, designed for complex navigation structures.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `String` | `""` | Text label for the mega menu trigger |
| `disabled` | `Boolean` | `false` | Whether the mega menu is disabled |
| `columns` | `Number \| String` | `2` | Number of columns in the mega menu (1-4) |
| `width` | `"auto" \| "md" \| "lg" \| "xl" \| "full"` | `"lg"` | Width of the mega menu |
| `placement` | `Placement` | `"bottom-start"` | Placement of the mega menu |

### Slots

| Name | Description |
|------|-------------|
| `default` | Main content area for the mega menu (columns) |
| `trigger` | Custom content for mega menu trigger |
| `footer` | Footer area of the mega menu |

### Events

| Name | Description |
|------|-------------|
| `open` | Emitted when the mega menu is opened |
| `close` | Emitted when the mega menu is closed |

### Example

```vue
<MegaMenu label="Solutions" columns="3" width="lg">
  <div>
    <h3 class="font-bold mb-2">Development</h3>
    <ul class="space-y-2">
      <li><a href="#" class="hover:underline">Web Development</a></li>
      <li><a href="#" class="hover:underline">Mobile Development</a></li>
      <li><a href="#" class="hover:underline">Backend Services</a></li>
    </ul>
  </div>
  <div>
    <h3 class="font-bold mb-2">Design</h3>
    <ul class="space-y-2">
      <li><a href="#" class="hover:underline">UI/UX Design</a></li>
      <li><a href="#" class="hover:underline">Brand Identity</a></li>
      <li><a href="#" class="hover:underline">Prototyping</a></li>
    </ul>
  </div>
  <div>
    <h3 class="font-bold mb-2">Consulting</h3>
    <ul class="space-y-2">
      <li><a href="#" class="hover:underline">Digital Strategy</a></li>
      <li><a href="#" class="hover:underline">Technology Audit</a></li>
      <li><a href="#" class="hover:underline">Process Optimization</a></li>
    </ul>
  </div>
  <template #footer>
    <div class="flex justify-between items-center">
      <p class="text-sm">Explore our comprehensive solution catalog</p>
      <Action kind="primary" size="sm">View All Solutions</Action>
    </div>
  </template>
</MegaMenu>
```

## Responsive Behavior

The Navigation components are fully responsive by default:

- On larger screens, navigation items appear in a horizontal row with dropdowns and mega menus appearing on hover/click.
- On smaller screens (mobile), the navigation collapses into a hamburger menu that expands to show a vertical list of items.
- Dropdowns and mega menus adapt their layout to the available screen space, with columns stacking on smaller screens.

## Best Practices

1. **Hierarchy**: Place the most important navigation items first or most prominently.
2. **Simplicity**: Use standard NavigationItems for simple links and MegaMenu only when you need to categorize many options.
3. **Labels**: Keep labels concise and clear; avoid jargon or ambiguous terms.
4. **Active State**: Always indicate the current page by setting the `active` prop on the appropriate NavigationItem.
5. **Accessibility**: Ensure dropdown menus are accessible via keyboard navigation.

## Usage with Menu Components

The Navigation components integrate with the Menu system, utilizing FloatingUI for positioning. When creating custom navigation solutions:

- `NavigationItem` uses the Menu component when `hasChildren` is true
- `MegaMenu` extends the Menu functionality for grid-based layouts
- Both components use slots to organize their content

## Implementation Notes

- The Navigation system uses a mobile-first approach with responsive classes.
- Dark mode is fully supported with appropriate color variations.
- The components automatically handle keyboard interactions and focus management.
- Z-index management is handled automatically to ensure proper stacking of dropdown menus.