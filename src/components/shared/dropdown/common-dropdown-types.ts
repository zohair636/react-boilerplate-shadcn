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
  "onClick" | "variant" | "subOptions"
>;

interface DefaultDropDownOptionLabel {
  label?: string;
  items?: DropDownListItem[];
}

interface CheckboxDropDownOptionLabel {
  label?: string;
  items?: CheckboxDropDownListItem[];
}

interface RadioGroupDropDownOptionLabel {
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

export type CommonDropdownProps =
  | DefaultDropdownProps
  | CheckboxesDropdownProps
  | RadioGroupDropdownProps;
