// Entry point for the component library
import './style.css';

// Export all components
export { default as Action } from './components/Action.vue';
export { default as Avatar } from './components/Avatar.vue';
export { default as Badge } from './components/Badge.vue';
export { default as Card } from './components/Card.vue';
export { default as Carousel } from './components/Carousel.vue';
export { default as Checkbox } from './components/Checkbox.vue';
export { default as CheckboxGroup } from './components/CheckboxGroup.vue';
export { default as Chip } from './components/Chip.vue';
export { default as Datepicker } from './components/Datepicker.vue';
export { default as Dialog } from './components/Dialog.vue';
export { default as DocsLayout } from './components/DocsLayout.vue';
export { default as FloatingUi } from './components/FloatingUi.vue';
export { default as Menu } from './components/Menu.vue';
export { default as MenuContent } from './components/MenuContent.vue';
export { default as MenuDivider } from './components/MenuDivider.vue';
export { default as MenuHeader } from './components/MenuHeader.vue';
export { default as MenuItem } from './components/MenuItem.vue';
export { default as Paginator } from './components/Paginator.vue';
export { default as Progress } from './components/Progress.vue';
export { default as Prose } from './components/Prose.vue';
export { default as Radio } from './components/Radio.vue';
export { default as RadioGroup } from './components/RadioGroup.vue';
export { default as RichTextEditor } from './components/RichTextEditor.vue';
export { default as Scrollspy } from './components/Scrollspy.vue';
export { default as Select } from './components/Select.vue';
export { default as Sheet } from './components/Sheet.vue';
export { default as Slider } from './components/Slider.vue';
export { default as Snackbar } from './components/Snackbar.vue';
export { default as Switch } from './components/Switch.vue';
export { default as TabPanel } from './components/TabPanel.vue';
export { default as Table } from './components/Table.vue';
export { default as Tabs } from './components/Tabs.vue';
export { default as TextEditor } from './components/TextEditor.vue';
export { default as TextField } from './components/TextField.vue';
export { default as Tooltip } from './components/Tooltip.vue';
export { default as Tree } from './components/Tree.vue';
export { default as TreeItem } from './components/TreeItem.vue';

// Export composables
export { useMenu, closeAllMenus, getOpenMenus } from './composables/useMenu';
export { useSnackbar, provideSnackbar } from './composables/useSnackbar';

// Export composable types
export type { MenuState } from './composables/useMenu';
export type { SnackbarOptions, SnackbarKind, SnackbarPosition } from './composables/useSnackbar';
