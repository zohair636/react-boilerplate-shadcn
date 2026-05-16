import type { ReactNode } from "react";

export interface CommonPopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "end" | "center";
  side?: "top" | "bottom" | "inline-end" | "inline-start" | "left" | "right";
  className?: string;
}
