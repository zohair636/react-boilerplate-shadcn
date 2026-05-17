import type { ReactNode } from "react";

export interface CommonAlertDialogProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  icon?: ReactNode;
  size?: "default" | "sm";
  cancelLabel?: string;
  onCancel?: () => void;
  confirmLabel?: string;
  onConfirm: () => void;
  variant?: "default" | "destructive";
}
