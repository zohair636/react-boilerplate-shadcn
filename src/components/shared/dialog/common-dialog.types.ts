import type { ReactElement, ReactNode } from "react";
import type { CommonButtonProps } from "../button";

export interface CommonDialogProps {
  trigger: ReactElement;
  title: string;
  description?: string;
  cancel?: Partial<CommonButtonProps> & { label: string };
  confirm?: Partial<CommonButtonProps> & { label: string };
  children: ReactNode;
  contentClassName?: string;
  footerClassName?: string;
  showCloseControls?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
