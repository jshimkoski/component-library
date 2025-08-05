# RichTextEditor

## Overview

The RichTextEditor component provides a WYSIWYG (What You See Is What You Get) text editing interface with support for rich formatting including headers, bold, italic, emphasis, and other inline formatting options. It's built on contenteditable functionality and provides a clean, semantic HTML output while preventing nested inline elements and maintaining proper document structure.

## Basic Usage

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RichTextEditor v-model="basicContent" />
</div>

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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <div class="space-y-4">
    <RichTextEditor v-model="exampleContent" />
    
    <div class="mt-4">
      <h4 class="font-semibold mb-2">Raw HTML Output:</h4>
      <div class="bg-base-100 dark:bg-base-800 p-3 rounded text-sm font-mono">
        {{ exampleContent || '<p><br /></p>' }}
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div class="space-y-4">
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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
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
</div>

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

<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
  <RichTextEditor v-model="prefilledContent" />
</div>

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

## Examples

### Blog Post Editor

```vue
<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6">Create New Blog Post</h1>
      
      <form @submit.prevent="publishPost" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField 
            v-model="post.title"
            label="Post Title"
            placeholder="Enter your blog post title"
            required
          />
          
          <Select
            v-model="post.category"
            label="Category"
            :options="categoryOptions"
            required
          />
        </div>
        
        <div>
          <TextField 
            v-model="post.excerpt"
            label="Excerpt"
            placeholder="Brief description of your post"
            rows="2"
          />
        </div>
        
        <div>
          <label class="block font-semibold mb-2">Post Content</label>
          <RichTextEditor v-model="post.content" />
        </div>
        
        <div class="flex items-center gap-4">
          <Switch v-model="post.published" label="Publish immediately" />
          <Switch v-model="post.featuredPost" label="Featured post" />
        </div>
        
        <div class="flex gap-4">
          <Action type="submit" kind="primary" size="lg">
            {{ post.published ? 'Publish Post' : 'Save Draft' }}
          </Action>
          <Action @click="previewPost" variant="outline" size="lg">
            Preview
          </Action>
        </div>
      </form>
    </div>
    
    <!-- Preview Modal -->
    <Dialog v-model:open="showPreview" title="Post Preview">
      <div class="max-w-none">
        <h2 class="text-2xl font-bold mb-4">{{ post.title }}</h2>
        <div class="prose max-w-none" v-html="post.content"></div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
const post = reactive({
  title: '',
  category: '',
  excerpt: '',
  content: '',
  published: false,
  featuredPost: false
});

const showPreview = ref(false);

const categoryOptions = [
  { label: 'Technology', value: 'tech' },
  { label: 'Design', value: 'design' },
  { label: 'Business', value: 'business' },
  { label: 'Tutorial', value: 'tutorial' }
];

function publishPost() {
  console.log('Publishing post:', post);
  // Handle post publication
}

function previewPost() {
  showPreview.value = true;
}
</script>
```

### Documentation Editor

```vue
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen">
    <!-- Editor Panel -->
    <div class="flex flex-col">
      <div class="bg-base-100 dark:bg-base-800 p-4 border-b">
        <h2 class="text-lg font-semibold">Document Editor</h2>
        <div class="flex gap-2 mt-2">
          <Action @click="insertTemplate('header')" size="sm" variant="outline">
            Add Header
          </Action>
          <Action @click="insertTemplate('section')" size="sm" variant="outline">
            Add Section
          </Action>
          <Action @click="insertTemplate('code')" size="sm" variant="outline">
            Add Code Block
          </Action>
        </div>
      </div>
      
      <div class="flex-1 p-4">
        <RichTextEditor v-model="documentation" />
      </div>
      
      <div class="bg-base-100 dark:bg-base-800 p-4 border-t">
        <div class="flex justify-between items-center">
          <span class="text-sm text-base-600">
            {{ wordCount }} words • {{ characterCount }} characters
          </span>
          <div class="flex gap-2">
            <Action @click="saveDocument" kind="primary" size="sm">Save</Action>
            <Action @click="exportDocument" variant="outline" size="sm">Export</Action>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Preview Panel -->
    <div class="flex flex-col bg-base-50 dark:bg-base-900">
      <div class="bg-base-100 dark:bg-base-800 p-4 border-b">
        <h2 class="text-lg font-semibold">Live Preview</h2>
      </div>
      
      <div class="flex-1 p-4 overflow-auto">
        <div class="prose max-w-none" v-html="documentation || '<p>Start typing to see preview...</p>'"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const documentation = ref('');

const wordCount = computed(() => {
  const text = documentation.value.replace(/<[^>]*>/g, '');
  return text.trim() ? text.trim().split(/\s+/).length : 0;
});

const characterCount = computed(() => {
  return documentation.value.replace(/<[^>]*>/g, '').length;
});

function insertTemplate(type) {
  let template = '';
  
  switch (type) {
    case 'header':
      template = '<h1>New Section</h1><p>Section content goes here...</p>';
      break;
    case 'section':
      template = '<h2>Subsection</h2><p>Subsection content...</p>';
      break;
    case 'code':
      template = '<pre>// Code example\nfunction example() {\n  return "Hello, World!";\n}</pre>';
      break;
  }
  
  documentation.value += template;
}

function saveDocument() {
  console.log('Saving document:', documentation.value);
  // Implement save functionality
}

function exportDocument() {
  console.log('Exporting document:', documentation.value);
  // Implement export functionality
}
</script>
```

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
