import type { SwitchRootProps } from "@base-ui/react";

export interface CommonSwitchProps extends Omit<
  SwitchRootProps,
  "id" | "checked" | "onCheckedChange" | "disabled" | "required" | "size"
> {
  id?: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  containerClassName?: string;
  className?: string;
  labelClassName?: string;
  size?: "default" | "sm";
  required?: boolean;
  invalid?: boolean;
}
