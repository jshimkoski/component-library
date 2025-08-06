# RichTextEditor

## Overview

The RichTextEditor component provides a WYSIWYG (What You See Is What You Get) text editing interface with support for rich formatting including headers, bold, italic, emphasis, and other inline formatting options. It's built on contenteditable functionality and provides a clean, semantic HTML output while preventing nested inline elements and maintaining proper document structure.

## Basic Usage

```vue
<template>
  <RichTextEditor v-model="content" />
</template>

<script setup>
const content = ref('');
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | String | `""` | HTML content of the editor (v-model). |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `(html: string)` | Emitted when editor content changes. |

## Features

### Block-Level Formatting

The editor supports the following block-level elements:

- **Paragraph** (`<p>`) - Default text formatting
- **Heading 1** (`<h1>`) - Main headings
- **Heading 2** (`<h2>`) - Section headings  
- **Heading 3** (`<h3>`) - Subsection headings
- **Preformatted** (`<pre>`) - Code blocks and preformatted text

### Inline Formatting

The editor supports the following inline formatting options:

- **Bold** (`<b>`) - Bold text formatting
- **Italic** (`<i>`) - Italic text formatting
- **Emphasis** (`<em>`) - Semantic emphasis
- **Strong** (`<strong>`) - Strong importance
- **Span** (`<span>`) - Generic inline container

## Usage Examples

### Basic Rich Text Editing

```vue
<template>
  <div>
    <RichTextEditor v-model="content" />
    <div class="mt-4">
      <h4 class="font-semibold mb-2">Raw HTML Output:</h4>
      <div class="bg-base-100 dark:bg-base-800 p-3 rounded text-sm font-mono">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
const content = ref('');
</script>
```

### Form Integration

```vue
<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label class="block font-semibold mb-2">Article Title</label>
      <TextField v-model="formData.title" placeholder="Enter article title" />
    </div>
    
    <div>
      <label class="block font-semibold mb-2">Article Content</label>
      <RichTextEditor v-model="formData.content" />
    </div>
    
    <Action type="submit" kind="primary">Save Article</Action>
  </form>
</template>

<script setup>
const formData = reactive({
  title: '',
  content: ''
});

function handleSubmit() {
  console.log('Form data:', formData);
  // Handle form submission
}
</script>
```

### Pre-populated Content

```vue
<template>
  <RichTextEditor v-model="content" />
</template>

<script setup>
const content = ref(`
  <h1>Welcome to the Rich Text Editor</h1>
  <p>This is a paragraph with <b>bold text</b> and <i>italic text</i>.</p>
  <h2>Features</h2>
  <p>The editor supports:</p>
  <p>• <strong>Strong importance</strong></p>
  <p>• <em>Emphasis</em></p>
  <p>• Multiple heading levels</p>
  <pre>Code blocks for technical content</pre>
`);
</script>
```

## Keyboard Shortcuts

The RichTextEditor supports standard keyboard shortcuts for common formatting operations:

- **Ctrl/Cmd + B** - Toggle bold formatting
- **Ctrl/Cmd + I** - Toggle italic formatting
- **Enter** - Create new paragraph
- **Shift + Enter** - Line break within current block

## Advanced Features

### Intelligent Nesting Prevention

The editor automatically prevents problematic nesting scenarios:

- Prevents nesting of identical inline elements (e.g., `<b>` inside `<b>`)
- Automatically converts conflicting formats to generic `<span>` elements
- Maintains semantic structure and clean HTML output

### Automatic Content Merging

The editor merges consecutive inline elements of the same type to keep the DOM clean and prevent fragmentation.

### Semantic HTML Output

The editor produces clean, semantic HTML that:

- Uses appropriate block-level elements for structure
- Maintains proper nesting relationships
- Avoids unnecessary wrapper elements
- Follows web standards for accessibility

## Best Practices

- Use appropriate heading levels (H1 → H2 → H3) for document structure
- Use `<strong>` and `<em>` for semantic meaning, `<b>` and `<i>` for visual styling
- Keep preformatted blocks for code snippets and formatted text that should preserve spacing
- Avoid excessive inline formatting that could make content hard to read
- Test the HTML output in your target rendering environment
- Consider implementing server-side HTML sanitization for user-generated content

## Technical Notes

- The editor uses `contenteditable` for direct text manipulation
- HTML output is automatically cleaned and optimized
- Inline element nesting is intelligently managed to prevent DOM issues
- The component integrates with the Prose component for consistent typography
- All formatting operations maintain semantic meaning where possible

## Accessibility

- The editor maintains proper focus management
- Semantic HTML elements are used for screen reader compatibility
- Keyboard shortcuts follow standard conventions
- Proper heading structure is maintained for document outline

## Examples

```vue
<template>
  <RichTextEditor
    v-model="content"
    placeholder="Start typing your content here..."
  />
</template>
```
