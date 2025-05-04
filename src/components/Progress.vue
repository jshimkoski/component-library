<template>
  <div class="grid items-center gap-1">
    <label
      :for="id"
      class="cursor-pointer block font-semibold"
    >
      <slot>{{ label }}</slot>
    </label>
    <progress
      ref="field"
      :id="id"
      :value="model"
      :max="max"
      class="mt-1.5"
    >
      {{ percentComplete }}
    </progress>
    <p
      v-if="description"
      class="text-sm text-base-600 dark:text-base-400"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: { type: String, default: undefined },
    description: { type: String, default: undefined },
    max: { type: Number, default: undefined },
  });

  const model = defineModel({
    type: Number,
    default: undefined,
  });

  const id = useId();

  const percentComplete = computed(() => {
    if (!model.value || !props.max) return "0%";
    return `${(model.value / props.max) * 100}%`;
  });
</script>
