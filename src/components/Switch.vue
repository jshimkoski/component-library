<template>
  <div
    class="inline-flex items-start gap-2"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
  >
    <input
      v-model="model"
      :id="id"
      type="checkbox"
      role="switch"
      :name="name"
      :required="required"
      :disabled="disabled"
      class="appearance-none relative inline-block w-9 h-5 border rounded-full align-bottom m-auto text-white cursor-pointer bg-neutral-300 border-neutral-300 before:shadow-sm checked:bg-green-500 checked:border-green-500 transition-all before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0.25 before:w-4 before:h-4 before:bg-current before:rounded-full checked:before:left-4.25 mt-1.5"
    />
    <div class="relative">
      <label
        :for="id"
        class="cursor-pointer"
        :class="[
          required && showMarker
            ? `after:text-red-500 after:content-['*'] after:ml-1`
            : '',
        ]"
      >
        <slot>{{ label }}</slot>
        <span class="absolute inset-0"></span>
      </label>
      <p
        v-if="description"
        class="text-sm text-neutral-500"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: undefined,
    },
    showMarker: {
      type: Boolean,
      default: undefined,
    },
  });

  const model = defineModel({
    type: Boolean,
  });

  const id = useId();
</script>
