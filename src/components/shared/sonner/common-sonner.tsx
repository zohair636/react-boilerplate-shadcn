import { toast } from "sonner";
import type { CommonSonnerProps, ToastFn } from "./common-sonner.types";

const createSonner =
  (fn: ToastFn) =>
  ({
    message,
    description,
    position = "top-right",
    action,
  }: CommonSonnerProps) =>
    fn(message, {
      description: description,
      position: position,
      action: action
        ? {
            label: action?.label,
            onClick: () => action?.onClick?.(),
          }
        : undefined,
    });

export const showDefaultSonner = createSonner(toast);
export const showSuccessSonner = createSonner(toast.success);
export const showInfoSonner = createSonner(toast.info);
export const showWarningSonner = createSonner(toast.warning);
export const showErrorSonner = createSonner(toast.error);
