import type { ReactNode } from "react";

export type SimpleItem = string;

export type OptionItem<TValue extends string = string> = {
  label: string;
  value: TValue;
};

export type GroupItem<TGroup extends string = string> = {
  value: TGroup;
  items: readonly string[];
};

export type SelectableItem = SimpleItem | OptionItem;

export type SimpleList = SimpleItem[];

export type OptionList<TValue extends string = string> = ReadonlyArray<OptionItem<TValue>>;

export type GroupedList<TGroup extends string = string> = ReadonlyArray<GroupItem<TGroup>>;

export type AnyList = SimpleList | OptionList | GroupedList;

export interface CommonComboboxProps {
  options: AnyList;
  variant?: "default" | "multiple" | "grouped";
  placeholder?: string;
  fallback?: string;
  label?: string;
  icon?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  showClear?: boolean;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  chipClassName?: string;
}