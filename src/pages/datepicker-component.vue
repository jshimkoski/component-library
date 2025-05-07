<template>
  <div class="not-prose space-y-16">
    <section>
      <h2 class="text-xl font-semibold mb-4">Basic Single Date Picker</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="w-full">
          <p class="mb-4">Select a single date:</p>
          <div class="max-w-xs">
            <Datepicker
              v-model="singleDate"
              label="Choose a date"
              description="Pick any date in the calendar"
            />
          </div>
          <p class="mt-2">
            Selected date: {{ singleDate ? formatDate(singleDate) : "None" }}
          </p>
        </div>
        <div>
          <pre><code>{{ singleDateCode }}</code></pre>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">Date Range Picker</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="w-full">
          <p class="mb-4">Select a date range:</p>
          <div class="max-w-xs">
            <Datepicker
              v-model="dateRange"
              mode="range"
              label="Choose a date range"
              description="Select start and end dates"
            />
          </div>
          <p class="mt-2">
            Selected range:
            <span v-if="dateRange && dateRange[0] && dateRange[1]">
              {{ formatDate(dateRange[0]) }} to {{ formatDate(dateRange[1]) }}
            </span>
            <span v-else-if="dateRange && dateRange[0]">
              Start: {{ formatDate(dateRange[0]) }}
            </span>
            <span v-else>None</span>
          </p>
        </div>
        <div>
          <pre><code>{{ dateRangeCode }}</code></pre>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">With Min and Max Dates</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="w-full">
          <p class="mb-4">Select a date within constraints:</p>
          <div class="max-w-xs">
            <Datepicker
              v-model="constrainedDate"
              label="Limited date selection"
              description="Only select dates between min and max"
              :min-date="minDate"
              :max-date="maxDate"
            />
          </div>
          <p class="mt-2">
            Selected date:
            {{ constrainedDate ? formatDate(constrainedDate) : "None" }}
          </p>
          <p class="text-sm text-base-500">
            Min date: {{ formatDate(minDate) }} | Max date:
            {{ formatDate(maxDate) }}
          </p>
        </div>
        <div>
          <pre><code>{{ constrainedDateCode }}</code></pre>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">Single Calendar Range Picker</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="w-full">
          <p class="mb-4">Select a date range with single calendar view:</p>
          <div class="max-w-xs">
            <Datepicker
              v-model="singleCalendarRange"
              mode="range"
              label="Single calendar view"
              description="More compact view for smaller screens"
              :show-two-months="false"
            />
          </div>
        </div>
        <div>
          <pre><code>{{ singleCalendarRangeCode }}</code></pre>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">Props</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-base-300 dark:border-base-700">
              <th class="py-2 px-4 text-left">Prop</th>
              <th class="py-2 px-4 text-left">Type</th>
              <th class="py-2 px-4 text-left">Default</th>
              <th class="py-2 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">modelValue</td>
              <td class="py-2 px-4"><code>Date | [Date, Date] | null</code></td>
              <td class="py-2 px-4"><code>null</code></td>
              <td class="py-2 px-4">The selected date or date range</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">mode</td>
              <td class="py-2 px-4"><code>'single' | 'range'</code></td>
              <td class="py-2 px-4"><code>'single'</code></td>
              <td class="py-2 px-4">
                Single date or date range selection mode
              </td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">minDate</td>
              <td class="py-2 px-4"><code>Date</code></td>
              <td class="py-2 px-4"><code>undefined</code></td>
              <td class="py-2 px-4">Minimum selectable date</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">maxDate</td>
              <td class="py-2 px-4"><code>Date</code></td>
              <td class="py-2 px-4"><code>undefined</code></td>
              <td class="py-2 px-4">Maximum selectable date</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">label</td>
              <td class="py-2 px-4"><code>string</code></td>
              <td class="py-2 px-4"><code>undefined</code></td>
              <td class="py-2 px-4">Label text for the datepicker</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">description</td>
              <td class="py-2 px-4"><code>string</code></td>
              <td class="py-2 px-4"><code>undefined</code></td>
              <td class="py-2 px-4">Help text displayed below the input</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">placeholder</td>
              <td class="py-2 px-4"><code>string</code></td>
              <td class="py-2 px-4"><code>'Select date'</code></td>
              <td class="py-2 px-4">
                Placeholder text when no date is selected
              </td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">disabled</td>
              <td class="py-2 px-4"><code>boolean</code></td>
              <td class="py-2 px-4"><code>false</code></td>
              <td class="py-2 px-4">Whether the datepicker is disabled</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">required</td>
              <td class="py-2 px-4"><code>boolean</code></td>
              <td class="py-2 px-4"><code>false</code></td>
              <td class="py-2 px-4">Whether the field is required</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">showMarker</td>
              <td class="py-2 px-4"><code>boolean</code></td>
              <td class="py-2 px-4"><code>true</code></td>
              <td class="py-2 px-4">Whether to show the required marker (*)</td>
            </tr>
            <tr class="border-b border-base-300 dark:border-base-700">
              <td class="py-2 px-4 font-medium">showTwoMonths</td>
              <td class="py-2 px-4"><code>boolean</code></td>
              <td class="py-2 px-4"><code>true</code></td>
              <td class="py-2 px-4">
                Show two months side by side in range mode
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive Behavior</h2>
      <p class="mb-4">The datepicker features intuitive interactions:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Click outside the calendar to close it</li>
        <li>Press the Escape key to dismiss the calendar</li>
        <li>Material Design-inspired ripple effects on buttons</li>
        <li>Animated transitions for improved user experience</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  const singleDate = ref<Date | null>(null);
  const dateRange = ref<[Date | null, Date | null] | null>([null, null]);
  const constrainedDate = ref<Date | null>(null);
  const singleCalendarRange = ref<[Date | null, Date | null] | null>([
    null,
    null,
  ]);

  // Set min and max dates
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 5);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);

  function formatDate(date: Date | null): string {
    if (!date) return "None";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const singleDateCode = `<Datepicker
  v-model="singleDate"
  label="Choose a date"
  description="Pick any date in the calendar"
/>`;

  const dateRangeCode = `<Datepicker
  v-model="dateRange"
  mode="range"
  label="Choose a date range"
  description="Select start and end dates"
/>`;

  const constrainedDateCode = `<Datepicker
  v-model="constrainedDate"
  label="Limited date selection"
  description="Only select dates between min and max"
  :min-date="minDate"
  :max-date="maxDate"
/>`;

  const singleCalendarRangeCode = `<Datepicker
  v-model="singleCalendarRange"
  mode="range"
  label="Single calendar view"
  description="More compact view for smaller screens"
  :show-two-months="false"
/>`;
</script>
