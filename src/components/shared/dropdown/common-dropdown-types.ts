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
  options: CheckboxDropDownOptionLabel[];
};

export type CommonDropdownProps =
  | DefaultDropdownProps
  | CheckboxesDropdownProps;
