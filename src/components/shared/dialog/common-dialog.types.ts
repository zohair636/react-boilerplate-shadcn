import type { ReactNode } from "react";
import type { CommonButtonProps } from "../button/types";

export interface CommonDialogProps {
  trigger: ReactNode;
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
