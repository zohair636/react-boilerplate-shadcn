import { toast } from "sonner";

interface actionConfig {
  label?: string;
  onClick: () => void;
}

export interface CommonSonnerProps {
  message: string;
  description?: string;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  action?: actionConfig;
}

export type ToastFn =
  | typeof toast
  | typeof toast.success
  | typeof toast.info
  | typeof toast.warning
  | typeof toast.error;
