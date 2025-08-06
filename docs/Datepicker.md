# Datepicker

## Overview

The Datepicker component provides a user-friendly interface for selecting dates or date ranges. It features a calendar-based picker with intuitive navigation, making it easy for users to select specific dates or date ranges.

## Basic Usage

```vue
<script setup>
const selectedDate = ref(null);
</script>

<template>
  <Datepicker 
    v-model="selectedDate"
    label="Select Date"
    placeholder="Choose a date"
  />
</template>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Date \| [Date, Date] \| null` | `null` | The selected date(s). Can be a single Date object or an array of two dates for range selection. |
| `mode` | `"single" \| "range"` | `"single"` | Determines whether to allow selecting a single date or a date range. |
| `minDate` | `Date` | `undefined` | The earliest date that can be selected. |
| `maxDate` | `Date` | `undefined` | The latest date that can be selected. |
| `label` | `String` | `undefined` | Text label for the datepicker. |
| `description` | `String` | `undefined` | Descriptive text that appears below the datepicker. |
| `placeholder` | `String` | `"Select date"` | Placeholder text shown when no date is selected. |
| `disabled` | `Boolean` | `false` | When true, the datepicker is disabled and cannot be interacted with. |
| `required` | `Boolean` | `false` | When true, indicates that a selection is required. |
| `showMarker` | `Boolean` | `true` | When true and required is true, displays an asterisk (*) next to the label. |
| `showTwoMonths` | `Boolean` | `true` | When true and in range mode, displays two months side-by-side for easier range selection. |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `update:modelValue` | `Date \| [Date, Date] \| null` | Emitted when the selected date(s) change. |

## Slots

| Name | Description |
|------|-------------|
| `label` | Custom content for the label. Falls back to the `label` prop if not provided. |

## Single Date Selection

```vue
<script setup>
const eventDate = ref(null);
</script>

<template>
  <Datepicker 
    v-model="eventDate"
    mode="single"
    label="Event Date"
    placeholder="Select event date"
  />
</template>
```

## Date Range Selection

```vue
<script setup>
const bookingRange = ref(null);
</script>

<template>
  <Datepicker 
    v-model="bookingRange"
    mode="range"
    label="Booking Period"
    placeholder="Select check-in and check-out dates"
  />
</template>
```

## With Min and Max Date Constraints

```vue
<script setup>
const meetingDate = ref(null);
const minDate = new Date(2023, 0, 1);  // January 1, 2023
const maxDate = new Date(2023, 11, 31); // December 31, 2023
</script>

<template>
  <Datepicker 
    v-model="meetingDate"
    label="Schedule Meeting"
    placeholder="Select a date"
    :min-date="minDate"
    :max-date="maxDate"
  />
</template>
```

## With Description

```vue
<script setup>
const deliveryDate = ref(null);
</script>

<template>
  <Datepicker 
    v-model="deliveryDate"
    label="Delivery Date"
    placeholder="Select preferred delivery date"
    description="We typically deliver between 9 AM and 5 PM"
  />
</template>
```

## States

### Disabled

```vue
<Datepicker 
  v-model="unavailableDates"
  label="Unavailable Dates"
  placeholder="This calendar is disabled"
  disabled
/>
```

### Required

```vue
<template>
  <Datepicker 
    v-model="requiredDate"
    label="Required Date"
    placeholder="Please select a date"
    required
    showMarker
  />
</template>
```

## Best Practices

- Use clear, concise labels that describe what date(s) the user should select
- Include a description when additional context about the date selection is needed
- Set appropriate minimum and maximum dates to prevent invalid selections
- For date ranges, use the `showTwoMonths` prop to make range selection more intuitive
- Consider using the single date mode for specific events and range mode for periods
- Provide placeholder text that indicates the expected date format or selection type
- When dates are unavailable or in the past, use min/max dates to prevent selection rather than just disabling

## Accessibility Considerations

- The component manages focus appropriately when opening and closing the calendar
- Keyboard navigation is supported (Tab, Escape)
- ARIA attributes are properly applied
- Required state is properly communicated
- The calendar uses semantic markup to improve screen reader support

## Examples

### Appointment Scheduling

```vue
<script setup>
const form = reactive({
  name: '',
  email: '',
  appointmentDate: null
});

const today = new Date();

function submitForm() {
  // Form submission logic
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <TextField v-model="form.name" label="Your Name" required showMarker />
    <TextField v-model="form.email" label="Email" type="email" required showMarker />
    <Datepicker 
      v-model="form.appointmentDate"
      label="Appointment Date"
      placeholder="Select a date"
      required
      showMarker
      description="Appointments available Monday through Friday"
      :min-date="today"
    />
    <Action kind="primary" type="submit">Schedule Appointment</Action>
  </form>
</template>
```

### Hotel Booking

```vue
<script setup>
const stayDates = ref(null);
const guests = ref('2');
const roomType = ref('standard');

function checkAvailability() {
  // Availability checking logic
}
</script>

<template>
  <h3 class="text-lg font-semibold">Book Your Stay</h3>
    <Datepicker 
      v-model="stayDates"
      mode="range"
      label="Stay Dates"
      placeholder="Select check-in and check-out dates"
      :min-date="new Date()"
      required
      showMarker
    />

    <div class="w-1/2">
        <Select
          v-model="guests"
          label="Guests"
          placeholder="Select number of guests"
          :options="[
            { value: '1', label: '1 Guest' },
            { value: '2', label: '2 Guests' },
            { value: '3', label: '3 Guests' },
            { value: '4', label: '4 Guests' },
          ]"
        />
    </div>

    <div class="w-1/2">
      <Select
        v-model="roomType"
        label="Room Type"
        placeholder="Select room type"
        :options="[
          { value: 'standard', label: 'Standard Room' },
          { value: 'deluxe', label: 'Deluxe Room' },
          { value: 'suite', label: 'Suite' },
        ]"
      />
    </div>
    <Action kind="primary" @click="checkAvailability">Check Availability</Action>
  </div>
</template>
```
