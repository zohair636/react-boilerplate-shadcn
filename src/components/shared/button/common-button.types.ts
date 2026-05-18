import type { ButtonProps } from "@base-ui/react";
import type { ReactNode, Ref } from "react";

export interface CommonButtonProps extends Omit<ButtonProps, "children"> {
  label?: string | ReactNode;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  tooltip?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
  isLoading?: boolean;
  ref?: Ref<HTMLButtonElement>;
}
