<template>
  <div class="content">
    <Prose>
      <h1>Rich Text Editor</h1>
      <h2>Overview</h2>
      <p>The RichTextEditor component provides a WYSIWYG (What You See Is What You Get) text editing interface with support for rich formatting including headers, bold, italic, emphasis, and other inline formatting options. It's built on contenteditable functionality and provides a clean, semantic HTML output while preventing nested inline elements and maintaining proper document structure.</p>
      <h2>Basic Usage</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RichTextEditor v-model="content" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const content = ref('');
&lt;/script&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&quot;&quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">HTML content of the editor (v-model).</td>
          </tr>
        </tbody>
      </table>
      <h2>Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Name</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Parameters</th>
            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>update:modelValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>(html: string)</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when editor content changes.</td>
          </tr>
        </tbody>
      </table>
      <h2>Features</h2>
      <h3>Block-Level Formatting</h3>
      <p>The editor supports the following block-level elements:</p>
      <ul>
        <li>**Paragraph** (<code>&lt;p&gt;</code>) - Default text formatting</li>
        <li>**Heading 1** (<code>&lt;h1&gt;</code>) - Main headings</li>
        <li>**Heading 2** (<code>&lt;h2&gt;</code>) - Section headings</li>
        <li>**Heading 3** (<code>&lt;h3&gt;</code>) - Subsection headings</li>
        <li>**Preformatted** (<code>&lt;pre&gt;</code>) - Code blocks and preformatted text</li>
      </ul>
      <h3>Inline Formatting</h3>
      <p>The editor supports the following inline formatting options:</p>
      <ul>
        <li>**Bold** (<code>&lt;b&gt;</code>) - Bold text formatting</li>
        <li>**Italic** (<code>&lt;i&gt;</code>) - Italic text formatting</li>
        <li>**Emphasis** (<code>&lt;em&gt;</code>) - Semantic emphasis</li>
        <li>**Strong** (<code>&lt;strong&gt;</code>) - Strong importance</li>
        <li>**Span** (<code>&lt;span&gt;</code>) - Generic inline container</li>
      </ul>
      <h2>Usage Examples</h2>
      <h3>Basic Rich Text Editing</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;RichTextEditor v-model="content" /&gt;
    &lt;div class="mt-4"&gt;
      &lt;h4 class="font-semibold mb-2"&gt;Raw HTML Output:&lt;/h4&gt;
      &lt;div class="bg-base-100 dark:bg-base-800 p-3 rounded text-sm font-mono"&gt;
        &#123;&#123; content &#125;&#125;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const content = ref('');
&lt;/script&gt;</code></pre>
      <h3>Form Integration</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit" class="space-y-4"&gt;
    &lt;div&gt;
      &lt;label class="block font-semibold mb-2"&gt;Article Title&lt;/label&gt;
      &lt;TextField v-model="formData.title" placeholder="Enter article title" /&gt;
    &lt;/div&gt;
    
    &lt;div&gt;
      &lt;label class="block font-semibold mb-2"&gt;Article Content&lt;/label&gt;
      &lt;RichTextEditor v-model="formData.content" /&gt;
    &lt;/div&gt;
    
    &lt;Action type="submit" kind="primary"&gt;Save Article&lt;/Action&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
const formData = reactive({
  title: '',
  content: ''
});

function handleSubmit() {
  console.log('Form data:', formData);
  // Handle form submission
}
&lt;/script&gt;</code></pre>
      <h3>Pre-populated Content</h3>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RichTextEditor v-model="content" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const content = ref(`
  &lt;h1&gt;Welcome to the Rich Text Editor&lt;/h1&gt;
  &lt;p&gt;This is a paragraph with &lt;b&gt;bold text&lt;/b&gt; and &lt;i&gt;italic text&lt;/i&gt;.&lt;/p&gt;
  &lt;h2&gt;Features&lt;/h2&gt;
  &lt;p&gt;The editor supports:&lt;/p&gt;
  &lt;p&gt;• &lt;strong&gt;Strong importance&lt;/strong&gt;&lt;/p&gt;
  &lt;p&gt;• &lt;em&gt;Emphasis&lt;/em&gt;&lt;/p&gt;
  &lt;p&gt;• Multiple heading levels&lt;/p&gt;
  &lt;pre&gt;Code blocks for technical content&lt;/pre&gt;
`);
&lt;/script&gt;</code></pre>
      <h2>Keyboard Shortcuts</h2>
      <p>The RichTextEditor supports standard keyboard shortcuts for common formatting operations:</p>
      <ul>
        <li>**Ctrl/Cmd + B** - Toggle bold formatting</li>
        <li>**Ctrl/Cmd + I** - Toggle italic formatting</li>
        <li>**Enter** - Create new paragraph</li>
        <li>**Shift + Enter** - Line break within current block</li>
      </ul>
      <h2>Advanced Features</h2>
      <h3>Intelligent Nesting Prevention</h3>
      <p>The editor automatically prevents problematic nesting scenarios:</p>
      <ul>
        <li>Prevents nesting of identical inline elements (e.g., <code>&lt;b&gt;</code> inside <code>&lt;b&gt;</code>)</li>
        <li>Automatically converts conflicting formats to generic <code>&lt;span&gt;</code> elements</li>
        <li>Maintains semantic structure and clean HTML output</li>
      </ul>
      <h3>Automatic Content Merging</h3>
      <p>The editor merges consecutive inline elements of the same type to keep the DOM clean and prevent fragmentation.</p>
      <h3>Semantic HTML Output</h3>
      <p>The editor produces clean, semantic HTML that:</p>
      <ul>
        <li>Uses appropriate block-level elements for structure</li>
        <li>Maintains proper nesting relationships</li>
        <li>Avoids unnecessary wrapper elements</li>
        <li>Follows web standards for accessibility</li>
      </ul>
      <h2>Best Practices</h2>
      <ul>
        <li>Use appropriate heading levels (H1 → H2 → H3) for document structure</li>
        <li>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for semantic meaning, <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> for visual styling</li>
        <li>Keep preformatted blocks for code snippets and formatted text that should preserve spacing</li>
        <li>Avoid excessive inline formatting that could make content hard to read</li>
        <li>Test the HTML output in your target rendering environment</li>
        <li>Consider implementing server-side HTML sanitization for user-generated content</li>
      </ul>
      <h2>Technical Notes</h2>
      <ul>
        <li>The editor uses <code>contenteditable</code> for direct text manipulation</li>
        <li>HTML output is automatically cleaned and optimized</li>
        <li>Inline element nesting is intelligently managed to prevent DOM issues</li>
        <li>The component integrates with the Prose component for consistent typography</li>
        <li>All formatting operations maintain semantic meaning where possible</li>
      </ul>
      <h2>Accessibility</h2>
      <ul>
        <li>The editor maintains proper focus management</li>
        <li>Semantic HTML elements are used for screen reader compatibility</li>
        <li>Keyboard shortcuts follow standard conventions</li>
        <li>Proper heading structure is maintained for document outline</li>
      </ul>
      <h2>Examples</h2>
      <pre><code class="language-vue">&lt;template&gt;
  &lt;RichTextEditor
    v-model="content"
    placeholder="Start typing your content here..."
  /&gt;
&lt;/template&gt;</code></pre>
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>