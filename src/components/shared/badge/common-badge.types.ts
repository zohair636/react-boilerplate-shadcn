import type { ReactElement, ReactNode } from "react";

export interface CommonBadgeProps {
  label: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  renderLink?: () => ReactElement;
  isLoading?: boolean;
}
