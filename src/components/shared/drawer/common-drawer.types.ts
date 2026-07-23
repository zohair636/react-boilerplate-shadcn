import type { ReactElement, ReactNode } from "react";
import type { CommonButtonProps } from "../button";

export interface CommonDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactElement;
  title?: string;
  description?: string;
  children: ReactNode;
  nested?: ReactNode;
  direction?: "up" | "right" | "down" | "left";
  modal?: boolean;
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
