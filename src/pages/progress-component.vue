<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Progress Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Progress component displays a visual indication of progress toward the completion of a task or process.
        It provides users with feedback about the current state of an operation, especially for operations that take time.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="max-w-md">
          <Progress
            v-model="basicProgress"
            :max="100"
            label="File Upload"
          />
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Progress
  v-model="progressValue"
  :max="100"
  label="File Upload"
/&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current progress value (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>max</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Number</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Maximum value of the progress bar</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the progress bar</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the progress bar</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom label content. Replaces the <code>label</code> prop when provided</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Progress States</h2>
      <p class="mb-4">Examples of progress bars at different states of completion.</p>
      
      <div class="grid gap-6 max-w-md mb-4">
        <div>
          <h3 class="text-base font-medium mb-2">Just Started (10%)</h3>
          <Progress
            v-model="progressStates.start"
            :max="100"
            label="Just Starting"
          />
        </div>
        
        <div>
          <h3 class="text-base font-medium mb-2">In Progress (33%)</h3>
          <Progress
            v-model="progressStates.inProgress"
            :max="100"
            label="In Progress"
          />
        </div>
        
        <div>
          <h3 class="text-base font-medium mb-2">Halfway (50%)</h3>
          <Progress
            v-model="progressStates.halfway"
            :max="100"
            label="Halfway"
          />
        </div>
        
        <div>
          <h3 class="text-base font-medium mb-2">Almost Complete (85%)</h3>
          <Progress
            v-model="progressStates.almostComplete"
            :max="100"
            label="Almost Complete"
          />
        </div>
        
        <div>
          <h3 class="text-base font-medium mb-2">Complete (100%)</h3>
          <Progress
            v-model="progressStates.complete"
            :max="100"
            label="Complete"
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <p class="mb-4">Add descriptive text below the progress bar to provide additional context.</p>
      
      <div class="max-w-md mb-4">
        <Progress
          v-model="descriptionProgress"
          :max="100"
          label="Downloading Files"
          description="3 of 5 files downloaded (450KB of 1.2MB)"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Progress
  v-model="downloadProgress"
  :max="100"
  label="Downloading Files"
  description="3 of 5 files downloaded (450KB of 1.2MB)"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Custom Label</h2>
      <p class="mb-4">Use the default slot to provide custom content for the progress label.</p>
      
      <div class="max-w-md mb-4">
        <Progress
          v-model="customLabelProgress"
          :max="100"
        >
          <div class="flex justify-between items-center">
            <span>Installation Progress</span>
            <span class="text-primary-600 dark:text-primary-400">{{ customLabelProgress }}%</span>
          </div>
        </Progress>
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Progress
  v-model="progressValue"
  :max="100"
&gt;
  &lt;div class="flex justify-between items-center"&gt;
    &lt;span&gt;Installation Progress&lt;/span&gt;
    &lt;span class="text-primary-600 dark:text-primary-400"&gt;{ { progressValue } }%&lt;/span&gt;
  &lt;/div&gt;
&lt;/Progress&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Interactive Example</h2>
      <p class="mb-4">This example demonstrates a progress bar that updates based on user interaction.</p>
      
      <div class="max-w-md mb-4">
        <Progress
          v-model="interactiveProgress"
          :max="100"
          label="Progress Control"
        />
        
        <div class="mt-4 flex items-center gap-4">
          <Action kind="primary" size="sm" @click="decreaseProgress">Decrease</Action>
          <span class="min-w-10 text-center">{{ interactiveProgress }}%</span>
          <Action kind="primary" size="sm" @click="increaseProgress">Increase</Action>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Use Case Examples</h2>
      
      <h3 class="text-lg font-medium mt-6 mb-3">File Upload</h3>
      <div class="max-w-md p-6 border border-base-200 dark:border-base-800 rounded-lg mb-6">
        <div class="mb-4 flex justify-between items-center">
          <h4 class="font-medium">Uploading image.jpg</h4>
          <span>{{ uploadProgress }}%</span>
        </div>
        <Progress
          v-model="uploadProgress"
          :max="100"
        />
        <p class="mt-2 text-sm text-base-600 dark:text-base-400">
          {{ uploadProgress < 100 ? 'Uploading...' : 'Upload complete!' }}
        </p>
      </div>
      
      <h3 class="text-lg font-medium mt-6 mb-3">Multi-Step Process</h3>
      <div class="max-w-md p-6 border border-base-200 dark:border-base-800 rounded-lg mb-6">
        <div class="mb-4">
          <h4 class="font-medium">Account Setup Progress</h4>
        </div>
        <Progress
          v-model="setupProgress"
          :max="4"
          :description="setupStepText"
        />
        <div class="mt-4 flex justify-end">
          <Action 
            kind="primary" 
            size="sm" 
            :label="setupProgress < 4 ? 'Next Step' : 'Complete'"
            @click="nextSetupStep"
          />
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Always provide a clear label that describes what the progress bar represents</li>
        <li>Use descriptive text to provide additional context when appropriate</li>
        <li>For long-running operations, consider including time estimates when possible</li>
        <li>Ensure the progress bar accurately reflects the actual progress of the operation</li>
        <li>Consider using animations for indeterminate progress states when exact progress cannot be calculated</li>
        <li>Use consistent progress indicators throughout your application</li>
        <li>For multi-step processes, clearly indicate which step is active and how many steps remain</li>
        <li>Ensure sufficient color contrast between the progress bar and its background for accessibility</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Sample data for examples
  const basicProgress = ref(65);
  
  const progressStates = reactive({
    start: 10,
    inProgress: 33,
    halfway: 50,
    almostComplete: 85,
    complete: 100
  });
  
  const descriptionProgress = ref(45);
  const customLabelProgress = ref(75);
  const interactiveProgress = ref(50);
  
  // Interactive example methods
  const decreaseProgress = () => {
    interactiveProgress.value = Math.max(0, interactiveProgress.value - 10);
  };
  
  const increaseProgress = () => {
    interactiveProgress.value = Math.min(100, interactiveProgress.value + 10);
  };
  
  // File upload example
  const uploadProgress = ref(80);
  
  // Multi-step process example
  const setupProgress = ref(2);
  
  const setupStepText = computed(() => {
    const steps = [
      "Step 1: Personal Information",
      "Step 2: Contact Details",
      "Step 3: Account Preferences",
      "Step 4: Verification"
    ];
    
    return steps[setupProgress.value - 1] || "Complete!";
  });
  
  const nextSetupStep = () => {
    if (setupProgress.value < 4) {
      setupProgress.value++;
    }
  };
</script>