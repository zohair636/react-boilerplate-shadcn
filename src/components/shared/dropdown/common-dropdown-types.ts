import type { ReactNode } from "react";

interface DropDownListItem {
  label: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean | undefined;
  shortcut?: string | undefined;
  icon?: ReactNode | undefined;
  variant?: "default" | "destructive";
  subOptions?: DropDownListItem[];
}

interface DropDownOptionLabel {
  label?: string | undefined;
  items?: DropDownListItem[];
}

export interface CommonDropdownProps {
  trigger: ReactNode;
  options: DropDownOptionLabel[];
  className?: string;
  itemClassName?: string;
}
