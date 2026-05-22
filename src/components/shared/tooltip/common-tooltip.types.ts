import type { ReactNode } from "react";

export interface CommonTooltipProps {
  trigger: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  sideOffset?: number;
  triggerClassName?: string;
  contentClassName?: string;
}
