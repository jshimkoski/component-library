<template>
  <div class="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
    <!-- Sticky Top Nav -->
    <header class="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <slot name="header" />
    </header>

    <!-- Main Layout -->
    <div class="flex flex-1 w-full max-w-7xl mx-auto">
      <!-- Sidebar -->
      <aside
        class="hidden lg:block w-64 border-r bg-white sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto p-6"
      >
        <slot name="left-bar" />
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 px-6 py-10 prose prose-green max-w-none">
        <slot name="content" />
      </main>

      <!-- Table of Contents (Scrollspy) -->
      <div
        class="hidden xl:block w-64 border-l bg-white sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto p-6"
      >
        <slot name="right-bar" />
      </div>
    </div>

    <!-- Footer -->
    <footer class="w-full bg-gray-100 text-center py-6 mt-auto border-t">
      <slot name="footer" />
    </footer>
  </div>
</template>
