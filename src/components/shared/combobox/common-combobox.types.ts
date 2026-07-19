import type { ReactNode, Ref } from "react";

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
export type OptionList<TValue extends string = string> = ReadonlyArray<
  OptionItem<TValue>
>;
export type GroupedList<TGroup extends string = string> = ReadonlyArray<
  GroupItem<TGroup>
>;

export type AnyList = SimpleList | OptionList | GroupedList;

interface BaseComboboxProps {
  placeholder?: string;
  fallback?: string;
  label?: string;
  icon?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  showClear?: boolean;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  chipClassName?: string;
  ref?: Ref<HTMLInputElement>;
}

export type DefaultVariantProps = BaseComboboxProps & {
  variant?: "default";
  options: SimpleList | OptionList;
  value?: string;
  onChange?: (value: string) => void;
};

export type MultipleVariantProps = BaseComboboxProps & {
  variant: "multiple";
  options: SimpleList | OptionList;
  value?: string[];
  onChange?: (values: string[]) => void;
};

export type GroupedVariantProps = BaseComboboxProps & {
  variant: "grouped";
  options: GroupedList;
  value?: string;
  onChange?: (value: string) => void;
};

export type CommonComboboxProps =
  | DefaultVariantProps
  | MultipleVariantProps
  | GroupedVariantProps;

export type DefaultComboboxProps = Omit<DefaultVariantProps, "variant"> & {
  id: string;
};

export type MultipleComboboxProps = Omit<MultipleVariantProps, "variant"> & {
  id: string;
};

export type GroupedComboboxProps = Omit<GroupedVariantProps, "variant"> & {
  id: string;
};
