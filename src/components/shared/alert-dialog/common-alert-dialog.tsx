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
  cancel,
  confirm,
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
          <AlertDialogCancel>{cancel?.label ?? 'Cancel'}</AlertDialogCancel>
          <AlertDialogAction variant={confirm?.variant} onClick={confirm?.onClick}>
            {confirm?.label ?? 'Proceed'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CommonAlertDialog;
