<template>
  <!-- This component is just a wrapper that registers with parent Tabs -->
  <!-- It doesn't render anything directly, content is rendered by parent -->
  <div
    v-if="false"
    style="display: none"
  >
    <!-- These slots are never rendered directly but are accessed by the parent -->
    <slot></slot>
    <slot name="icon"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: undefined,
    },
    badgeKind: {
      type: String as PropType<
        "primary" | "secondary" | "success" | "info" | "warning" | "danger"
      >,
      default: "primary",
    },
    icon: {
      type: null, // Accept any type for icon
      default: undefined,
    },
    id: {
      type: [String, Number],
      default: undefined,
    },
  });

  const registerTabPanel = inject<(panel: any) => number>(
    "registerTabPanel",
    () => -1,
  );
  const unregisterTabPanel = inject<(id: number) => void>(
    "unregisterTabPanel",
    () => {},
  );
  const activeTabId = inject<Ref<number>>("activeTabId", ref(-1));

  const tabId = ref(-1);
  const isRegistered = ref(false);
  const instance = getCurrentInstance();

  // If this is the active tab
  const isActive = computed(() => {
    return activeTabId.value === tabId.value;
  });

  // Register this panel with the parent Tabs component
  onMounted(() => {
    // Get direct references to the slots
    const defaultSlot = instance?.slots?.default;
    const iconSlot = instance?.slots?.icon;

    tabId.value = registerTabPanel({
      label: props.label,
      disabled: props.disabled,
      badge: props.badge,
      badgeKind: props.badgeKind,
      icon: props.icon,
      id: props.id,
      // Pass slot functions explicitly
      slot: defaultSlot,
      iconSlot: iconSlot,
    });
    isRegistered.value = true;
  });

  // Update the parent if props change
  watch(
    () => ({
      label: props.label,
      disabled: props.disabled,
      badge: props.badge,
      badgeKind: props.badgeKind,
      icon: props.icon,
      id: props.id,
    }),
    (newProps) => {
      if (tabId.value >= 0) {
        // Get fresh references to slots on each update
        const defaultSlot = instance?.slots?.default;
        const iconSlot = instance?.slots?.icon;

        registerTabPanel({
          ...newProps,
          _id: tabId.value, // Pass internal ID to update instead of register new
          slot: defaultSlot,
          iconSlot: iconSlot,
        });
      }
    },
    { deep: true },
  );

  // Unregister when component is destroyed
  onBeforeUnmount(() => {
    if (tabId.value >= 0) {
      unregisterTabPanel(tabId.value);
    }
  });

  defineExpose({
    isActive,
    tabId,
  });
</script>
