import type { ReactNode } from "react";

export interface CommonCardProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  size?: "default" | "sm";
  footer?: ReactNode;
  className?: string;
}
