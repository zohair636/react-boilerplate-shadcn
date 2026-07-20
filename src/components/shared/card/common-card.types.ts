import { Card } from "@/components/ui/card";
import type { ComponentProps, ReactNode } from "react";

export interface CommonCardProps extends Omit<
  ComponentProps<typeof Card>,
  "className"
> {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  size?: "default" | "sm";
  footer?: ReactNode;
  className?: string;
}
