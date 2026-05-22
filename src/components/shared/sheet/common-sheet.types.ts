import type { ReactNode } from "react";

export interface CommonSheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  title?: string;
  description?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}
