<template>
  <div class="content">
    <h1 class="text-3xl font-bold mb-6">Datepicker</h1>

    <Prose>
      <h2>Overview</h2>
      <p>The Datepicker component provides a user-friendly interface for selecting dates or date ranges. It features a calendar-based picker with intuitive navigation, making it easy for users to select specific dates or date ranges.</p>
    </Prose>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Basic Usage</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Datepicker
        v-model="selectedDate"
        label="Select Date"
        placeholder="Choose a date"
        />
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const selectedDate = ref(null);
&lt;/script&gt;

&lt;template&gt;
  &lt;Datepicker 
    v-model="selectedDate"
    label="Select Date"
    placeholder="Choose a date"
  /&gt;
&lt;/template&gt;</code></pre>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Date | [Date, Date] | null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The selected date(s). Can be a single Date object or an array of two dates for range selection.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>mode</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;single&amp;quot; | &amp;quot;range&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;single&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Determines whether to allow selecting a single date or a date range.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>minDate</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Date</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The earliest date that can be selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>maxDate</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Date</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">The latest date that can be selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Text label for the datepicker.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>description</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>undefined</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Descriptive text that appears below the datepicker.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>placeholder</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>String</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>&amp;quot;Select date&amp;quot;</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Placeholder text shown when no date is selected.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>disabled</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, the datepicker is disabled and cannot be interacted with.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>required</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>false</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true, indicates that a selection is required.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showMarker</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and required is true, displays an asterisk (*) next to the label.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>showTwoMonths</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Boolean</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>true</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">When true and in range mode, displays two months side-by-side for easier range selection.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Events</h2>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>Date | [Date, Date] | null</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Emitted when the selected date(s) change.</td>
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
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800"><code>label</code></td>
            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">Custom content for the label. Falls back to the <code>label</code> prop if not provided.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Single Date Selection</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Datepicker
        v-model="eventDate"
        mode="single"
        label="Event Date"
        placeholder="Select event date"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const eventDate = ref(null);
&lt;/script&gt;

&lt;template&gt;
  &lt;Datepicker 
    v-model="eventDate"
    mode="single"
    label="Event Date"
    placeholder="Select event date"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Date Range Selection</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Datepicker
        v-model="bookingRange"
        mode="range"
        label="Booking Period"
        placeholder="Select check-in and check-out dates"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const bookingRange = ref(null);
&lt;/script&gt;

&lt;template&gt;
  &lt;Datepicker 
    v-model="bookingRange"
    mode="range"
    label="Booking Period"
    placeholder="Select check-in and check-out dates"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Min and Max Date Constraints</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Datepicker
        v-model="meetingDate"
        label="Schedule Meeting"
        placeholder="Select a date"
        :min-date="minDate"
        :max-date="maxDate"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const meetingDate = ref(null);
const minDate = new Date(2023, 0, 1);  // January 1, 2023
const maxDate = new Date(2023, 11, 31); // December 31, 2023
&lt;/script&gt;

&lt;template&gt;
  &lt;Datepicker 
    v-model="meetingDate"
    label="Schedule Meeting"
    placeholder="Select a date"
    :min-date="minDate"
    :max-date="maxDate"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">With Description</h2>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <Datepicker
        v-model="deliveryDate"
        label="Delivery Date"
        placeholder="Select preferred delivery date"
        description="We typically deliver between 9 AM and 5 PM"
        />
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const deliveryDate = ref(null);
&lt;/script&gt;

&lt;template&gt;
  &lt;Datepicker 
    v-model="deliveryDate"
    label="Delivery Date"
    placeholder="Select preferred delivery date"
    description="We typically deliver between 9 AM and 5 PM"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">States</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Disabled</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;Datepicker 
  v-model="unavailableDates"
  label="Unavailable Dates"
  placeholder="This calendar is disabled"
  disabled
/&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Required</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Datepicker 
    v-model="requiredDate"
    label="Required Date"
    placeholder="Please select a date"
    required
    showMarker
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Best Practices</h2>
      
      <Prose>
        <ul>
          <li>Use clear, concise labels that describe what date(s) the user should select</li>
          <li>Include a description when additional context about the date selection is needed</li>
          <li>Set appropriate minimum and maximum dates to prevent invalid selections</li>
          <li>For date ranges, use the <code>showTwoMonths</code> prop to make range selection more intuitive</li>
          <li>Consider using the single date mode for specific events and range mode for periods</li>
          <li>Provide placeholder text that indicates the expected date format or selection type</li>
          <li>When dates are unavailable or in the past, use min/max dates to prevent selection rather than just disabling</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Accessibility Considerations</h2>
      
      <Prose>
        <ul>
          <li>The component manages focus appropriately when opening and closing the calendar</li>
          <li>Keyboard navigation is supported (Tab, Escape)</li>
          <li>ARIA attributes are properly applied</li>
          <li>Required state is properly communicated</li>
          <li>The calendar uses semantic markup to improve screen reader support</li>
        </ul>
      </Prose>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">Examples</h2>
      <h3 class="text-lg font-medium mt-6 mb-3">Appointment Scheduling</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const form = reactive({
  name: '',
  email: '',
  appointmentDate: null
});

const today = new Date();

function submitForm() {
  // Form submission logic
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="submitForm" class="space-y-4"&gt;
    &lt;TextField v-model="form.name" label="Your Name" required showMarker /&gt;
    &lt;TextField v-model="form.email" label="Email" type="email" required showMarker /&gt;
    &lt;Datepicker 
      v-model="form.appointmentDate"
      label="Appointment Date"
      placeholder="Select a date"
      required
      showMarker
      description="Appointments available Monday through Friday"
      :min-date="today"
    /&gt;
    &lt;Action kind="primary" type="submit"&gt;Schedule Appointment&lt;/Action&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
      </div>
      <h3 class="text-lg font-medium mt-6 mb-3">Hotel Booking</h3>
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        <!-- Add interactive example here -->
      </div>
      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
const stayDates = ref(null);
const guests = ref('2');
const roomType = ref('standard');

function checkAvailability() {
  // Availability checking logic
}
&lt;/script&gt;

&lt;template&gt;
  &lt;h3 class="text-lg font-semibold"&gt;Book Your Stay&lt;/h3&gt;
    &lt;Datepicker 
      v-model="stayDates"
      mode="range"
      label="Stay Dates"
      placeholder="Select check-in and check-out dates"
      :min-date="new Date()"
      required
      showMarker
    /&gt;

    &lt;div class="w-1/2"&gt;
        &lt;Select
          v-model="guests"
          label="Guests"
          placeholder="Select number of guests"
          :options="[
            { value: '1', label: '1 Guest' },
            { value: '2', label: '2 Guests' },
            { value: '3', label: '3 Guests' },
            { value: '4', label: '4 Guests' },
          ]"
        /&gt;
    &lt;/div&gt;

    &lt;div class="w-1/2"&gt;
      &lt;Select
        v-model="roomType"
        label="Room Type"
        placeholder="Select room type"
        :options="[
          { value: 'standard', label: 'Standard Room' },
          { value: 'deluxe', label: 'Deluxe Room' },
          { value: 'suite', label: 'Suite' },
        ]"
      /&gt;
    &lt;/div&gt;
    &lt;Action kind="primary" @click="checkAvailability"&gt;Check Availability&lt;/Action&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedDate = ref(null);
</script>