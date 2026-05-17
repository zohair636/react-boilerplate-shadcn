import type { ReactNode } from "react";

export interface CommonAlertProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "destructive";
  action?: ReactNode;
}
