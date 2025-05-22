<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Scrollspy Component</h1>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Overview</h2>
      <p class="mb-4">
        The Scrollspy component tracks scroll position on a page and
        automatically highlights the corresponding navigation link as the user
        scrolls through different sections. It's especially useful for long-form
        content, documentation pages, or single-page applications with multiple
        sections.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Demo</h2>
      <p class="mb-4">
        Scroll down to see the Scrollspy in action. The navigation will
        highlight the current section as you scroll.
      </p>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Scrollspy Navigation -->
        <div class="w-full md:w-64 md:flex-shrink-0">
          <div
            class="sticky top-20 p-4 bg-base-50 dark:bg-base-900 rounded-lg mb-4"
          >
            <h3 class="font-semibold mb-4">Table of Contents</h3>
            <Scrollspy
              ref="demoScrollspy"
              nav-class="max-h-[calc(100vh-12rem)] overflow-y-auto pr-2"
              list-class="space-y-2"
              item-class="border-l-2 border-transparent pl-3 py-1 text-sm"
              active-item-class="border-l-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium"
              :offset="120"
              v-model:active-id="activeSection"
            >
              <!-- Scrollspy content -->
              <div class="space-y-16">
                <section
                  id="introduction"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Introduction
                  </h2>
                  <p class="mb-3">
                    Scrollspy is a navigation aid that provides visual feedback
                    about which section of content is currently in view. It
                    automatically updates the active state of navigation items
                    based on the scroll position.
                  </p>
                  <p class="mb-3">
                    This component is perfect for documentation sites, long-form
                    content pages, or any page where you want to help users
                    navigate through multiple sections of content.
                  </p>
                  <p>
                    The component tracks the positions of sections marked with
                    the <code>data-scrollspy</code> attribute and updates the
                    navigation accordingly when the user scrolls.
                  </p>
                </section>

                <section
                  id="features"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Features
                  </h2>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Automatically detects and tracks sections with
                      <code>data-scrollspy</code> attribute
                    </li>
                    <li>Highlights the current section in the navigation</li>
                    <li>Smooth scrolling when clicking navigation links</li>
                    <li>Configurable offset for early or late activation</li>
                    <li>Fully responsive design</li>
                    <li>Support for custom section definitions</li>
                    <li>Automatic position recalculation on resize</li>
                    <li>Customizable styling for all elements</li>
                  </ul>
                </section>

                <section
                  id="usage"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Usage
                  </h2>
                  <p class="mb-3">
                    To use the Scrollspy component, wrap your content with the
                    component and mark the sections you want to track with the
                    <code>data-scrollspy</code> attribute.
                  </p>
                  <p class="mb-3">
                    Each section should have a unique <code>id</code> attribute
                    that will be used for navigation. You can optionally add a
                    <code>data-scrollspy-title</code> attribute to an element
                    within the section to specify the title that should appear
                    in the navigation.
                  </p>
                </section>

                <section
                  id="api"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    API Reference
                  </h2>
                  <p class="mb-3">
                    The Scrollspy component provides a comprehensive API for
                    customization and control.
                  </p>
                  <h3 class="font-medium mb-2">Props</h3>
                  <ul class="list-disc pl-5 space-y-1 mb-3">
                    <li>
                      <code>selector</code>: CSS selector for identifying
                      sections (default: <code>[data-scrollspy]</code>)
                    </li>
                    <li>
                      <code>offset</code>: Offset in pixels to trigger active
                      state change
                    </li>
                    <li>
                      <code>autoDetect</code>: Whether to automatically detect
                      sections on mount
                    </li>
                    <li>
                      <code>sections</code>: Manual configuration of sections
                    </li>
                    <li>
                      <code>smooth</code>: Enable smooth scrolling when clicking
                      navigation links
                    </li>
                  </ul>
                  <h3 class="font-medium mb-2">Events</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      <code>change</code>: Emitted when the active section
                      changes
                    </li>
                    <li>
                      <code>update:activeId</code>: Emitted for v-model binding
                      of the active section ID
                    </li>
                  </ul>
                </section>

                <section
                  id="examples"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Examples
                  </h2>
                  <p class="mb-3">
                    Here are some common examples of how you might use the
                    Scrollspy component.
                  </p>
                  <h3 class="font-medium mb-2">Documentation Navigation</h3>
                  <p class="mb-3">
                    Scrollspy is perfect for documentation sites where you want
                    to help users navigate through detailed technical content.
                  </p>
                  <h3 class="font-medium mb-2">Product Page Sections</h3>
                  <p class="mb-3">
                    Use Scrollspy to create smooth navigation between different
                    sections of a product page, such as features,
                    specifications, reviews, etc.
                  </p>
                  <h3 class="font-medium mb-2">Long-Form Content</h3>
                  <p>
                    For articles, blogs, or other long-form content, Scrollspy
                    can help readers keep track of where they are in the
                    document.
                  </p>
                </section>

                <section
                  id="customization"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Customization
                  </h2>
                  <p class="mb-3">
                    The Scrollspy component is highly customizable to fit your
                    design needs.
                  </p>
                  <h3 class="font-medium mb-2">Styling Classes</h3>
                  <p class="mb-3">
                    You can customize the appearance of the navigation using the
                    following props:
                  </p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      <code>navClass</code>: Custom class for the navigation
                      container
                    </li>
                    <li>
                      <code>listClass</code>: Custom class for the list element
                    </li>
                    <li><code>itemClass</code>: Custom class for list items</li>
                    <li>
                      <code>activeItemClass</code>: Custom class for active list
                      item
                    </li>
                    <li>
                      <code>linkClass</code>: Custom class for navigation links
                    </li>
                    <li>
                      <code>contentClass</code>: Custom class for the content
                      container
                    </li>
                  </ul>
                </section>

                <section
                  id="best-practices"
                  data-scrollspy
                >
                  <h2
                    data-scrollspy-title
                    class="text-xl font-semibold mb-4"
                  >
                    Best Practices
                  </h2>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>Ensure each section has a unique ID</li>
                    <li>
                      Apply sufficient spacing between sections for clear
                      distinction
                    </li>
                    <li>
                      Use descriptive section titles for better navigation
                    </li>
                    <li>
                      For longer pages, consider using a sticky position for the
                      navigation
                    </li>
                    <li>
                      Set an appropriate offset based on your header height and
                      layout
                    </li>
                    <li>
                      Ensure the component works with keyboard navigation for
                      accessibility
                    </li>
                    <li>
                      Consider different viewport sizes in your implementation
                    </li>
                  </ul>
                </section>
              </div>
            </Scrollspy>
          </div>
        </div>

        <!-- Description of how this example works -->
        <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg">
          <h3 class="font-semibold mb-4">How This Example Works</h3>
          <p class="mb-3">
            This demo shows a practical implementation of the Scrollspy
            component. The code structure is as follows:
          </p>
          <div class="bg-base-200 dark:bg-base-800 p-4 rounded-lg mb-4">
            <pre
              class="text-sm overflow-x-auto"
            ><code>&lt;Scrollspy :offset="120" v-model:active-id="activeSection"&gt;
  &lt;section id="section1" data-scrollspy&gt;
    &lt;h2 data-scrollspy-title&gt;Section 1&lt;/h2&gt;
    &lt;!-- Content --&gt;
  &lt;/section&gt;

  &lt;section id="section2" data-scrollspy&gt;
    &lt;h2 data-scrollspy-title&gt;Section 2&lt;/h2&gt;
    &lt;!-- Content --&gt;
  &lt;/section&gt;

  &lt;!-- More sections... --&gt;
&lt;/Scrollspy&gt;</code></pre>
          </div>
          <p class="mb-3">
            The active section ID is:
            <Badge
              :label="activeSection || 'None'"
              kind="primary"
            />
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('introduction')"
              >Introduction</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('features')"
              >Features</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('usage')"
              >Usage</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('api')"
              >API</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('examples')"
              >Examples</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('customization')"
              >Customization</Action
            >
            <Action
              kind="secondary"
              size="sm"
              @click="scrollToSection('best-practices')"
              >Best Practices</Action
            >
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Implementation Examples</h2>

      <h3 class="text-lg font-medium mt-6 mb-4">Basic Implementation</h3>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy&gt;
    &lt;!-- Content with sections --&gt;
    &lt;div&gt;
      &lt;section id="section1" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 1&lt;/h2&gt;
        &lt;p&gt;Content for section 1...&lt;/p&gt;
      &lt;/section&gt;

      &lt;section id="section2" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 2&lt;/h2&gt;
        &lt;p&gt;Content for section 2...&lt;/p&gt;
      &lt;/section&gt;

      &lt;section id="section3" data-scrollspy&gt;
        &lt;h2 data-scrollspy-title&gt;Section 3&lt;/h2&gt;
        &lt;p&gt;Content for section 3...&lt;/p&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-4">With Custom Icons</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <div class="max-w-2xl">
          <Scrollspy
            :sections="customIconSections"
            :auto-detect="false"
            list-class="space-y-2"
            content-class="pt-6"
          >
            <template #icon="{ section, active }">
              <component
                :is="section.icon"
                :class="active ? 'text-primary-500' : 'text-base-400'"
                class="w-5 h-5 mr-2"
              />
            </template>

            <section
              id="home-section"
              class="min-h-[200px]"
            >
              <h2 class="text-lg font-medium mb-3">Home Section</h2>
              <p>This section would contain home page content.</p>
            </section>

            <section
              id="settings-section"
              class="min-h-[200px]"
            >
              <h2 class="text-lg font-medium mb-3">Settings Section</h2>
              <p>This section would contain settings.</p>
            </section>

            <section
              id="about-section"
              class="min-h-[200px]"
            >
              <h2 class="text-lg font-medium mb-3">About Section</h2>
              <p>This section would contain about information.</p>
            </section>
          </Scrollspy>
        </div>
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Scrollspy :sections="sections" :auto-detect="false"&gt;
    &lt;template #icon="{ section, active }"&gt;
      &lt;component
        :is="section.icon"
        :class="active ? 'text-primary-500' : 'text-base-400'"
        class="w-5 h-5 mr-2"
      /&gt;
    &lt;/template&gt;

    &lt;!-- Content sections --&gt;
    &lt;section id="home-section"&gt;
      &lt;h2&gt;Home Section&lt;/h2&gt;
      &lt;p&gt;Content...&lt;/p&gt;
    &lt;/section&gt;

    &lt;section id="settings-section"&gt;
      &lt;h2&gt;Settings Section&lt;/h2&gt;
      &lt;p&gt;Content...&lt;/p&gt;
    &lt;/section&gt;

    &lt;section id="about-section"&gt;
      &lt;h2&gt;About Section&lt;/h2&gt;
      &lt;p&gt;Content...&lt;/p&gt;
    &lt;/section&gt;
  &lt;/Scrollspy&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { IconMdiHome, IconMdiCog, IconMdiInformation } from '@iconify/vue';

const sections = [
  { id: 'home-section', title: 'Home', icon: IconMdiHome },
  { id: 'settings-section', title: 'Settings', icon: IconMdiCog },
  { id: 'about-section', title: 'About', icon: IconMdiInformation }
];
&lt;/script&gt;</code></pre>
      </div>

      <h3 class="text-lg font-medium mt-6 mb-4">Documentation Page Layout</h3>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;div class="flex"&gt;
    &lt;!-- Sticky sidebar with Scrollspy --&gt;
    &lt;Scrollspy
      nav-class="sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto pr-6 w-64"
      active-item-class="border-l-2 border-primary-500 text-primary-600 font-medium"
    &gt;
      &lt;div class="prose max-w-3xl mx-auto py-8"&gt;
        &lt;h1&gt;Documentation&lt;/h1&gt;

        &lt;section id="getting-started" data-scrollspy&gt;
          &lt;h2 data-scrollspy-title&gt;Getting Started&lt;/h2&gt;
          &lt;p&gt;This guide will help you get started with our library...&lt;/p&gt;
          &lt;!-- More content --&gt;
        &lt;/section&gt;

        &lt;section id="installation" data-scrollspy&gt;
          &lt;h2 data-scrollspy-title&gt;Installation&lt;/h2&gt;
          &lt;p&gt;You can install our library using npm or yarn...&lt;/p&gt;
          &lt;!-- More content --&gt;
        &lt;/section&gt;

        &lt;section id="configuration" data-scrollspy&gt;
          &lt;h2 data-scrollspy-title&gt;Configuration&lt;/h2&gt;
          &lt;p&gt;Configure the library to suit your needs...&lt;/p&gt;
          &lt;!-- More content --&gt;
        &lt;/section&gt;

        &lt;section id="api-reference" data-scrollspy&gt;
          &lt;h2 data-scrollspy-title&gt;API Reference&lt;/h2&gt;
          &lt;p&gt;Detailed API documentation...&lt;/p&gt;
          &lt;!-- More content --&gt;
        &lt;/section&gt;
      &lt;/div&gt;
    &lt;/Scrollspy&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Props</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Type
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Default
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>selector</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>[data-scrollspy]</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              CSS selector for identifying sections
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>offset</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Number
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              100
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Offset in pixels to trigger active state change
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>autoDetect</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              true
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Automatically detect sections on mount
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>sections</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Array
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              []
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Manual configuration of sections
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>smooth</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Boolean
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              true
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Enable smooth scrolling when clicking navigation links
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>throttleInterval</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Number
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              100
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Throttle interval for scroll event handling
            </td>
          </tr>
          <!-- Add additional styling props -->
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>navClass</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              See source
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom class for the navigation container
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>listClass</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>space-y-1</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom class for the list element
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>itemClass</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              See source
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom class for list items
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>activeItemClass</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              String
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              See source
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom class for active list item
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Parameters
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>change</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              (id: string, index: number)
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when the active section changes
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>update:activeId</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              (id: string)
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Emitted when the active section ID changes (for v-model binding)
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Slots</h2>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Name
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Props
            </th>
            <th
              class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>default</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              -
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Content area containing the sections to spy on
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>icon</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              { section, active }
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom icon for navigation items
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              <code>title</code>
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              { section, active }
            </td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">
              Custom title for navigation items
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Ensure each section has a unique ID</li>
        <li>Apply sufficient spacing between sections for clear distinction</li>
        <li>Use descriptive section titles for better navigation</li>
        <li>
          For longer pages, consider using a sticky position for the navigation
        </li>
        <li>
          Set an appropriate offset based on your header height and layout
        </li>
        <li>
          Ensure the component works with keyboard navigation for accessibility
        </li>
        <li>Consider different viewport sizes in your implementation</li>
        <li>For very long pages, consider categorizing sections into groups</li>
        <li>Use icons when appropriate to enhance visual navigation</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  // Define type for the Scrollspy component instance
  interface ScrollspyInstance {
    scrollToSection: (id: string) => void;
    sections: any[];
    activeIndex: number;
    recalculatePositions: () => void;
    initializeSections: () => void;
  }

  // Demo example
  const demoScrollspy = ref<ScrollspyInstance | null>(null);
  const activeSection = ref("introduction");

  const scrollToSection = (id: string) => {
    demoScrollspy.value?.scrollToSection(id);
  };

  const customIconSections = [
    { id: "home-section", title: "Home", icon: 'mdi:home' },
    { id: "settings-section", title: "Settings", icon: 'mdi:cog' },
    { id: "about-section", title: "About", icon: 'mdi:bell' },
  ];
</script>
