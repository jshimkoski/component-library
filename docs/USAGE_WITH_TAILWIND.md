# Using @jasonshimmy/components with Tailwind CSS

To use this component library with Tailwind CSS in your project, follow these steps:

## 1. Install Peer Dependencies

This library expects you to have Tailwind CSS installed and configured in your project. If you haven't already, install Tailwind CSS:

```sh
npm install tailwindcss @tailwindcss/vite
```

## 2. Import the Library's Styles

This will include the base styles and any custom CSS used by the components.

If the library uses custom colors, radii, or prose styles, update your entry CSS file to include our source. For example:

```css
@import "tailwindcss";
@import "@jasonshimmy/components/style.css";
@source "../node_modules/@jasonshimmy/components";
```

Refer to the library documentation for any required theme extensions.

---

For more details, see the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation) and the library's documentation.
