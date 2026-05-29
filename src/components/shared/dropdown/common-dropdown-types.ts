import type { ReactNode } from "react";

interface DropDownListItem {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  shortcut?: string | undefined;
  icon?: ReactNode | undefined;
  variant?: "default" | "destructive";
  subOptions?: DropDownListItem[];
}

interface CheckboxDropDownListItem {
  label: string;
  value: string;
  disabled?: boolean;
  shortcut?: string | undefined;
  icon?: ReactNode | undefined;
}

interface DefaultDropDownOptionLabel {
  label?: string | undefined;
  items?: DropDownListItem[];
}

interface CheckboxDropDownOptionLabel {
  label?: string | undefined;
  items?: CheckboxDropDownListItem[];
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
  checked?: boolean | undefined;
  onCheckedChange?: (checked: boolean) => void;
  options: CheckboxDropDownOptionLabel[];
};

export type CommonDropdownProps =
  | DefaultDropdownProps
  | CheckboxesDropdownProps;
