<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Avatar Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Avatar component displays a user's profile image with various size and shape options.
        It provides a fallback image when the primary image fails to load.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex gap-4 items-center mb-6">
          <Avatar
            src="/jason.jpg"
            alt="Jason Shimmy"
            size="md"
          />
          <Avatar
            src="/jason.jpg"
            alt="Jason Shimmy"
            size="md"
            shape="square"
          />
        </div>
      </div>
      <div class="bg-base-100 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;Avatar
  src="/path/to/image.jpg"
  alt="User Name"
  size="md"
/&gt;

&lt;Avatar
  src="/path/to/image.jpg"
  alt="User Name"
  size="md"
  shape="square"
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>src</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Required</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">URL of the avatar image</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>alt</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"Avatar"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Alternative text for the image</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>size</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"md"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Size of the avatar. Options: xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>shape</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">String</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">"circle"</td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Shape of the avatar. Options: circle, square</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Size Variants</h2>
      <p class="mb-4">The Avatar component supports multiple size variants from extra small (xs) to 8xl.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-4 items-end">
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="xs" />
            <span class="text-xs">xs</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="sm" />
            <span class="text-xs">sm</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="md" />
            <span class="text-xs">md</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="lg" />
            <span class="text-xs">lg</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="xl" />
            <span class="text-xs">xl</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="2xl" />
            <span class="text-xs">2xl</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="3xl" />
            <span class="text-xs">3xl</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Shape Variants</h2>
      <p class="mb-4">The Avatar component supports two shapes: circle (default) and square.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-8 items-center">
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="xl" shape="circle" />
            <span class="text-sm">circle</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Avatar src="/jason.jpg" alt="Jason Shimmy" size="xl" shape="square" />
            <span class="text-sm">square</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Fallback Behavior</h2>
      <p class="mb-4">When an image fails to load, the Avatar component automatically displays a fallback image.</p>
      <div class="bg-base-100 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="flex flex-wrap gap-8 items-center">
          <div class="flex flex-col items-center gap-2">
            <Avatar src="invalid-url.jpg" alt="Fallback Example" size="xl" />
            <span class="text-sm">Fallback image</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Always provide a meaningful <code>alt</code> text for accessibility.</li>
        <li>Choose an appropriate size based on the context where the avatar is displayed.</li>
        <li>Use square avatars when displaying non-human entities (like companies or products).</li>
        <li>Ensure image paths are valid to avoid unnecessary fallbacks.</li>
      </ul>
    </section>
  </div>
</template>