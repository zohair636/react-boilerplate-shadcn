import type { ReactNode } from "react";

export interface CommonCollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}
