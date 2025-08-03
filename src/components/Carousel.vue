<template>
  <div
    ref="carouselRef"
    class="relative"
    :class="[containerClass]"
    tabindex="0"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
    role="region"
    :aria-label="ariaLabel"
  >

    <!-- Progress bar at top of carousel -->
    <div v-if="autoPlay && showProgress" class="absolute top-0 left-0 w-full z-10">
      <Progress
        :model-value="progress"
        :max="interval"
        size="xs"
      />
    </div>

    <!-- Slides (cross-dissolve fade) -->
    <div>
      <transition-group
        tag="div"
        enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500 absolute inset-0"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-for="idx in uniqueValidIndices"
          :key="idx"
          :style="{ zIndex: idx === current ? 2 : 1 }"
        >
          <slot name="slide" :item="items[idx]" :index="idx">
            <img
              v-if="items[idx] && items[idx].src"
              :src="items[idx].src"
              :alt="items[idx].alt || ''"
              class="w-full object-cover"
              :ref="idx === current ? 'activeImg' : undefined"
              @load="onImageLoad"
            />
          </slot>
        </div>
      </transition-group>
    </div>

    <!-- Prev/Next Arrows -->
    <Action
      v-if="showArrows && items.length > 1"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10"
      :aria-label="prevLabel"
      :disabled="!loop && current === 0"
      variant="ghost"
      size="md"
      square
      @click="prev"
    >
      <Icon icon="material-symbols:chevron-left" class="text-2xl" />
    </Action>
    <Action
      v-if="showArrows && items.length > 1"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10"
      :aria-label="nextLabel"
      :disabled="!loop && current === items.length - 1"
      variant="ghost"
      size="md"
      square
      @click="next"
    >
      <Icon icon="material-symbols:chevron-right" class="text-2xl" />
    </Action>

    <!-- Indicators -->
    <div v-if="showIndicators && items.length > 1" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(item, idx) in items"
        :key="itemKey(item, idx) + '-indicator'"
        class="w-3 h-3 rounded-full cursor-pointer border-2 border-primary-500 dark:border-primary-300 focus:outline-none"
        :class="{
          'bg-white/80 dark:bg-base-900/80': current !== idx,
          'bg-primary-500 dark:bg-primary-300': current === idx
        }"
        @click="goTo(idx)"
        :aria-label="indicatorLabel(idx)"
        :aria-current="current === idx ? 'true' : undefined"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const modelValue = defineModel({
  type: Number,
  default: 0,
});

const props = defineProps({
  items: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
  showProgress: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 5000,
  },
  showArrows: {
    type: Boolean,
    default: true,
  },
  showIndicators: {
    type: Boolean,
    default: true,
  },
  containerClass: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: 'carousel',
  },
  prevLabel: {
    type: String,
    default: 'Previous slide',
  },
  nextLabel: {
    type: String,
    default: 'Next slide',
  },
  indicatorLabel: {
    type: Function as PropType<(idx: number) => string>,
    default: (idx: number) => `Go to slide ${idx + 1}`,
  },
  itemKey: {
    type: Function as PropType<(item: any, idx: number) => string | number>,
    default: (_: any, idx: number) => idx,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'change',
  'slide',
]);

// Refs for dynamic height
const carouselRef = ref<HTMLElement | null>(null);
const instance = getCurrentInstance();

const setCarouselHeight = () => {
  nextTick(() => {
    const carousel = carouselRef.value;
    const img = instance?.proxy?.$refs.activeImg as HTMLImageElement | undefined;
    if (carousel) {
      if (img && img.complete && img.naturalHeight) {
        carousel.style.height = img.naturalHeight + 'px';
      } else {
        carousel.style.height = '';
      }
    }
  });
}

const onImageLoad = () => {
  setCarouselHeight();
}

const current = ref(modelValue.value);
const prevIndex = ref(modelValue.value);
let timer: ReturnType<typeof setInterval> | null = null;
const progress = ref(0); // ms elapsed for current slide

// Only render unique, valid indices for cross-fade
const uniqueValidIndices = computed(() => {
  const indices = [prevIndex.value, current.value];
  const valid = Array.from(new Set(indices)).filter(idx => idx >= 0 && idx < props.items.length);
  return valid.length ? valid : [current.value];
});

const goTo = (idx: number) => {
  if (idx < 0 || idx >= props.items.length) return;
  prevIndex.value = current.value;
  current.value = idx;
  progress.value = 0;
  emit('update:modelValue', idx);
  emit('change', idx);
  emit('slide', idx);
}

const prev = () => {
  if (current.value === 0) {
    if (props.loop) goTo(props.items.length - 1);
  } else {
    goTo(current.value - 1);
  }
}

const next = () => {
  if (current.value === props.items.length - 1) {
    if (props.loop) goTo(0);
  } else {
    goTo(current.value + 1);
  }
}

// Auto play

const startAutoPlay = () => {
  stopAutoPlay();
  if (props.autoPlay && props.items.length > 1) {
    progress.value = 0;
    timer = setInterval(() => {
      progress.value += 100;
      if (progress.value >= props.interval) {
        progress.value = 0;
        next();
      }
    }, 100);
  }
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  progress.value = 0;
}

watch(modelValue, (val) => {
  prevIndex.value = current.value;
  current.value = val;
  progress.value = 0;
});

watch(current, (val) => {
  emit('update:modelValue', val);
  progress.value = 0;
  setCarouselHeight();
});

watch(() => props.autoPlay, (val) => {
  if (val) startAutoPlay();
  else stopAutoPlay();
});


onMounted(() => {
  if (props.autoPlay) startAutoPlay();
  setCarouselHeight();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>
