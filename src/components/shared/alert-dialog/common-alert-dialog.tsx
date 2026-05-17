import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { CommonAlertDialogProps } from "./common-alert-dialog.types";
import { renderIcon } from "@/utils/icon-utils";

const CommonAlertDialog = ({
  trigger,
  title,
  description,
  icon,
  size = "default",
  cancelLabel = "Cancel",
  onCancel,
  confirmLabel = "Yes, I confirm",
  onConfirm,
  variant = "default",
}: CommonAlertDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          {icon && <AlertDialogMedia>{renderIcon(icon)}</AlertDialogMedia>}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction variant={variant} onClick={onConfirm}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CommonAlertDialog;
