import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface CommonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  isLoading?: boolean;
}
