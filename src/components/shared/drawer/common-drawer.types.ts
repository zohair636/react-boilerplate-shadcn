import type { ReactNode } from "react";
import type { CommonButtonProps } from "../button";

export interface CommonDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
  direction?: "top" | "right" | "bottom" | "left";
  className?: string;
  contentClassName?: string;
  confirm?: Partial<CommonButtonProps> & {
    label: string;
    onClick: () => void;
  };
  cancel?: Partial<CommonButtonProps> & {
    label: string;
    onClick?: () => void;
  };
}
