export type Kind = "primary" | "secondary" | "success" | "info" | "warning" | "danger";
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type ActionType = "button" | "submit" | "reset";
export type ActionVariant = "solid" | "outline" | "ghost" | "link";

export type DateValue = Date | null;
export type RangeValue = [Date | null, Date | null] | null;
export type DatePickerValue = DateValue | RangeValue;
export type DatePickerMode = "single" | "range";

export interface TableField {
  key: string;
  label: string;
  sortable?: boolean;
  type?: "text" | "number" | "date" | "boolean";
  visible?: boolean;
  class?: string;
  // Function to extract the value from an item (useful for nested properties)
  getValue?: (item: any) => any;
}

export interface TableProps {
  fields: TableField[];
  items: any[];
  selectable?: boolean;
  expandable?: boolean;
  sortable?: boolean;
  idField?: string;
  modelValue?: any[];
  loadingItems?: boolean;
}

export interface TabItem {
  label: string;
  content?: string;
  badge?: string;
  badgeKind?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";
  icon?: Component | string;
  disabled?: boolean;
  slot?: string;
  component?: Component;
  props?: Record<string, any>;
  id?: string | number;
  meta?: any;
  tabPanelId?: number; // ID for TabPanel integration
}

export interface TreeItem {
  id: string | number;
  label: string;
  children?: TreeItem[];
  to?: string;
  action?: Function;
  href?: string;
  onClick?: Function;
}

export type PaginatorMode = 'buttons' | 'input';

export interface ScrollspySection {
  id: string;
  title: string;
  icon?: Component;
}