<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">TextField Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The TextField component provides a standardized input control for collecting text input from users.
        It includes support for labels, descriptions, validation indicators, and various input types.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="max-w-md">
          <TextField
            v-model="basicText"
            label="Full Name"
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="fullName"
  label="Full Name"
  placeholder="Enter your full name"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">""</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Current value of the input (v-model)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the input field</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Helper text displayed below the input</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>type</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"text"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Input type (text, number, email, password, tel, url)</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>name</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Name attribute for the input field</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the input is disabled</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether the input is required</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placeholder</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Placeholder text for the input</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Boolean</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">undefined</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Whether to show an asterisk (*) marker for required fields</td>
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
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>suffix</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Content to be displayed at the end of the input field (e.g., icons)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Input Types</h2>
      <p class="mb-4">The TextField component supports various input types for different data collection needs.</p>
      
      <div class="grid gap-4 max-w-md mb-4">
        <TextField
          v-model="textExample"
          label="Text Input"
          type="text"
          placeholder="Standard text input"
        />
        
        <TextField
          v-model="emailExample"
          label="Email Input"
          type="email"
          placeholder="email@example.com"
        />
        
        <TextField
          v-model="passwordExample"
          label="Password Input"
          type="password"
          placeholder="Enter your password"
        />
        
        <TextField
          v-model="numberExample"
          label="Number Input"
          type="number"
          placeholder="Enter a number"
        />
        
        <TextField
          v-model="telExample"
          label="Telephone Input"
          type="tel"
          placeholder="(123) 456-7890"
        />
        
        <TextField
          v-model="urlExample"
          label="URL Input"
          type="url"
          placeholder="https://example.com"
        />
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="textValue"
  label="Text Input"
  type="text"
  placeholder="Standard text input"
/&gt;

&lt;TextField
  v-model="emailValue"
  label="Email Input"
  type="email"
  placeholder="email@example.com"
/&gt;

&lt;TextField
  v-model="passwordValue"
  label="Password Input"
  type="password"
  placeholder="Enter your password"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Validation States</h2>
      <p class="mb-4">The TextField component supports validation indication through the required prop and showMarker option.</p>
      
      <div class="grid gap-4 max-w-md mb-4">
        <TextField
          v-model="requiredField"
          label="Required Field"
          required
          showMarker
          placeholder="This field is required"
        />
        
        <TextField
          v-model="requiredField"
          label="Required (no marker)"
          required
          placeholder="Required but no visual marker"
        />
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="requiredValue"
  label="Required Field"
  required
  showMarker
  placeholder="This field is required"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <p class="mb-4">Add helper text below the input field to provide additional context or instructions.</p>
      
      <div class="max-w-md mb-4">
        <TextField
          v-model="passwordWithDesc"
          label="Password"
          type="password"
          description="Password must be at least 8 characters long and include a number and a special character."
          placeholder="Enter a strong password"
        />
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="password"
  label="Password"
  type="password"
  description="Password must be at least 8 characters long and include a number and a special character."
  placeholder="Enter a strong password"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Suffix</h2>
      <p class="mb-4">Use the suffix slot to add icons or additional elements at the end of the input field.</p>
      
      <div class="max-w-md mb-4">
        <TextField
          v-model="searchText"
          label="Search"
          placeholder="Search..."
        >
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-base-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </template>
        </TextField>
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="searchText"
  label="Search"
  placeholder="Search..."
&gt;
  &lt;template #suffix&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-base-500"&gt;
      &lt;path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/TextField&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Disabled State</h2>
      <p class="mb-4">Use the disabled prop to indicate that an input field is not available for interaction.</p>
      
      <div class="max-w-md mb-4">
        <TextField
          v-model="disabledInput"
          label="Disabled Input"
          disabled
          placeholder="This field is disabled"
        />
      </div>

      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;TextField
  v-model="disabledValue"
  label="Disabled Input"
  disabled
  placeholder="This field is disabled"
/&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Form Example</h2>
      <p class="mb-4">Example of TextField components used in a form context.</p>
      
      <div class="max-w-md p-6 border border-base-200 dark:border-base-800 rounded-lg mb-4">
        <h3 class="text-lg font-medium mb-4">Contact Information</h3>
        <form class="grid gap-4">
          <TextField
            v-model="formName"
            label="Full Name"
            required
            showMarker
            placeholder="John Doe"
          />
          
          <TextField
            v-model="formEmail"
            label="Email Address"
            type="email"
            required
            showMarker
            placeholder="john.doe@example.com"
          />
          
          <TextField
            v-model="formPhone"
            label="Phone Number"
            type="tel"
            placeholder="(123) 456-7890"
            description="We'll only use this to contact you about your order"
          />
          
          <div class="mt-4">
            <Action label="Submit" kind="primary" />
          </div>
        </form>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Always provide clear, concise labels for each input field</li>
        <li>Use the appropriate input type for the data being collected (email, password, etc.)</li>
        <li>Include descriptive placeholder text that helps users understand the expected format</li>
        <li>Clearly indicate which fields are required using the <code>required</code> and <code>showMarker</code> props</li>
        <li>Use the description prop to provide additional guidance or requirements</li>
        <li>Keep forms as simple as possible, only asking for information that's truly needed</li>
        <li>Group related fields together logically</li>
        <li>Consider the tab order of your form fields for keyboard navigation</li>
        <li>Provide appropriate validation feedback to users when they submit forms</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Sample data for examples
  const basicText = ref("");
  const textExample = ref("");
  const emailExample = ref("");
  const passwordExample = ref("");
  const numberExample = ref("");
  const telExample = ref("");
  const urlExample = ref("");
  const requiredField = ref("");
  const passwordWithDesc = ref("");
  const searchText = ref("");
  const disabledInput = ref("This input cannot be edited");

  // Form example data
  const formName = ref("");
  const formEmail = ref("");
  const formPhone = ref("");
</script>