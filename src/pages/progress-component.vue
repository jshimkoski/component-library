<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Progress</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Progress component displays the completion progress of a task or operation using a horizontal progress bar. It supports various sizes, colors, and optional labels to provide clear visual feedback to users about ongoing processes or completion status.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Progress v-model="progress" :max="100" />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress v-model="progress" :max="100" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const progress = ref(65);
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>0</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current progress value (v-model).</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>max</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>100</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Maximum value for progress calculation.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Optional label text displayed above the progress bar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the progress bar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showValue</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to display the percentage value.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>kind</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot; | &amp;quot;secondary&amp;quot; | &amp;quot;success&amp;quot; | &amp;quot;info&amp;quot; | &amp;quot;warning&amp;quot; | &amp;quot;danger&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;primary&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Color theme of the progress bar.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>size</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;xs&amp;quot; | &amp;quot;sm&amp;quot; | &amp;quot;md&amp;quot; | &amp;quot;lg&amp;quot; | &amp;quot;xl&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;md&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Size of the progress bar.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to display as the label. Overrides the label prop.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Progress v-model="progress" size="xs" label="Extra Small" />
        <Progress v-model="progress" size="sm" label="Small" />
        <Progress v-model="progress" size="md" label="Medium" />
        <Progress v-model="progress" size="lg" label="Large" />
        <Progress v-model="progress" size="xl" label="Extra Large" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress v-model="progress" size="xs" label="Extra Small" /&gt;
  &lt;Progress v-model="progress" size="sm" label="Small" /&gt;
  &lt;Progress v-model="progress" size="md" label="Medium" /&gt;
  &lt;Progress v-model="progress" size="lg" label="Large" /&gt;
  &lt;Progress v-model="progress" size="xl" label="Extra Large" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Color Variants (Kind)</h2>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress v-model="progress" kind="primary" label="Primary" /&gt;
  &lt;Progress v-model="progress" kind="secondary" label="Secondary" /&gt;
  &lt;Progress v-model="progress" kind="success" label="Success" /&gt;
  &lt;Progress v-model="progress" kind="info" label="Info" /&gt;
  &lt;Progress v-model="progress" kind="warning" label="Warning" /&gt;
  &lt;Progress v-model="progress" kind="danger" label="Danger" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Value Display</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Progress v-model="downloadProgress" label="Download Progress" show-value />
        <Progress v-model="uploadProgress" label="Upload Progress" show-value kind="success" />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress v-model="downloadProgress" label="Download Progress" show-value /&gt;
  &lt;Progress v-model="uploadProgress" label="Upload Progress" show-value kind="success" /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Progress
        v-model="processProgress"
        label="File Processing"
        description="Processing your files, please wait..."
        show-value
        />
        <Progress
        v-model="installProgress"
        label="Installation"
        description="Installing dependencies and setting up your project."
        show-value
        kind="info"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress 
    v-model="processProgress" 
    label="File Processing" 
    description="Processing your files, please wait..."
    show-value 
  /&gt;

  &lt;Progress 
    v-model="installProgress" 
    label="Installation" 
    description="Installing dependencies and setting up your project."
    show-value
    kind="info"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Label Content</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Progress v-model="uploadProgress" show-value>
        <Icon icon="material-symbols:cloud-upload" />
        <span>Uploading to Cloud Storage</span>
        </Progress>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress v-model="uploadProgress" show-value&gt;
    &lt;Icon icon="material-symbols:cloud-upload" /&gt;
    &lt;span&gt;Uploading to Cloud Storage&lt;/span&gt;
  &lt;/Progress&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Different Progress States</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;!-- Different states --&gt;
  &lt;Progress :model-value="0" label="Not Started" description="Waiting to begin..." /&gt;
  &lt;Progress :model-value="25" label="In Progress" description="Working on it..." kind="info" show-value /&gt;
  &lt;Progress :model-value="100" label="Completed" description="Task finished successfully!" kind="success" show-value /&gt;
  &lt;Progress :model-value="75" label="Warning State" description="Proceeding with caution" kind="warning" show-value /&gt;
  &lt;Progress :model-value="45" label="Error State" description="Issues encountered during processing" kind="danger" show-value /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use appropriate colors (kind) to convey meaning - success for completed tasks, warning for issues, danger for errors</li>
          <li>Include labels when the context isn't immediately obvious</li>
          <li>Show percentage values for long-running operations where users benefit from specific progress information</li>
          <li>Use appropriate sizes based on the importance and context of the progress indicator</li>
          <li>Provide meaningful descriptions to explain what's happening during the process</li>
          <li>Consider using intermediate progress states rather than jumping from 0 to 100</li>
          <li>For file uploads/downloads, consider showing additional context like transfer speed or remaining time</li>
          <li>Use consistent progress indicators throughout your application</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">File Upload Progress</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Progress 
    v-model="uploadProgress" 
    label="Uploading Files" 
    :description="uploadStatus"
    show-value
    kind="info"
  /&gt;

  &lt;Action @click="startUpload" :disabled="isUploading"&gt;
    Start Upload
  &lt;/Action&gt;
  &lt;Action @click="cancelUpload" variant="outline" :disabled="!isUploading"&gt;
    Cancel
  &lt;/Action&gt;
&lt;/template&gt;

&lt;script setup&gt;
const uploadProgress = ref(0);
const isUploading = ref(false);

const uploadStatus = computed(() =&gt; {
  if (uploadProgress.value === 0) return 'Ready to upload';
  if (uploadProgress.value === 100) return 'Upload complete!';
  return `Uploading... ${Math.round(uploadProgress.value)}% complete`;
});

function startUpload() {
  isUploading.value = true;
  // Simulate upload progress
  const interval = setInterval(() =&gt; {
    uploadProgress.value += 10;
    if (uploadProgress.value &gt;= 100) {
      clearInterval(interval);
      isUploading.value = false;
    }
  }, 500);
}
&lt;/script&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Dashboard Statistics</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Card&gt;
    &lt;template #header&gt;
      &lt;h4 class="font-semibold"&gt;Monthly Goals&lt;/h4&gt;
    &lt;/template&gt;

    &lt;Progress 
      :model-value="salesGoal" 
      :max="salesTarget"
      label="Sales Target"
      kind="success"
      show-value
    /&gt;

    &lt;Progress 
      :model-value="leadGoal" 
      :max="leadTarget"
      label="Lead Generation"
      kind="info"
      show-value
    /&gt;

    &lt;Progress 
      :model-value="customerGoal" 
      :max="customerTarget"
      label="Customer Satisfaction"
      kind="warning"
      show-value
    /&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const progress = ref(65);
</script>