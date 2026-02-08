import type { ReactNode } from "react";

export interface PasswordAuthenticatorProps {
  trigger: ReactNode;
  password: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
