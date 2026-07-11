import type { ReactNode } from "react";

interface DropDownListItem {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  shortcut?: string;
  icon?: ReactNode;
  variant?: "default" | "destructive";
  subOptions?: DropDownListItem[];
  subMenu?: {
    id: string;
    label: string;
    icon?: ReactNode;
    items: DropDownListItem[];
  }[];
}

interface CheckboxDropDownListItem {
  label: string;
  value: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  shortcut?: string;
  icon?: ReactNode;
}

type RadioGroupDropDownListItem = Omit<
  DropDownListItem,
  "onClick" | "variant" | "subOptions" | "subMenu" | "disabled" | "shortcut"
>;

interface DefaultDropDownOptionLabel {
  id: string;
  label?: string;
  items?: DropDownListItem[];
}

interface CheckboxDropDownOptionLabel {
  id: string;
  label?: string;
  items?: CheckboxDropDownListItem[];
}

interface RadioGroupDropDownOptionLabel {
  id: string;
  label?: string;
  items?: RadioGroupDropDownListItem[];
}

type BaseDropdownProps = {
  trigger: ReactNode;
  className?: string;
  itemClassName?: string;
};

type DefaultDropdownProps = BaseDropdownProps & {
  mode: "default";
  options: DefaultDropDownOptionLabel[];
};

type CheckboxesDropdownProps = BaseDropdownProps & {
  mode: "checkboxes";
  options: CheckboxDropDownOptionLabel[];
};

type RadioGroupDropdownProps = BaseDropdownProps & {
  mode: "radio-groups";
  options: RadioGroupDropDownOptionLabel[];
  value: string;
  onValueChange: (value: string) => void;
};

export type DefaultDropdownModeProps = Pick<
  DefaultDropdownProps,
  "options" | "itemClassName" | "className"
>;

export type CheckboxesDropdownModeProps = Pick<
  CheckboxesDropdownProps,
  "options" | "itemClassName"
>;
export type RadioGroupDropdownModeProps = Pick<
  RadioGroupDropdownProps,
  "options" | "value" | "onValueChange" | "itemClassName"
>;

export type CommonDropdownProps =
  | DefaultDropdownProps
  | CheckboxesDropdownProps
  | RadioGroupDropdownProps;
