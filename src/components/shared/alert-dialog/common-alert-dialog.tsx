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
import { RenderIcon } from "@/utils/icon-utils";

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
      <AlertDialogTrigger render={trigger} />
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          {icon && (
            <AlertDialogMedia>
              <RenderIcon src={icon} alt={title} />
            </AlertDialogMedia>
          )}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel?.label ?? "Cancel"}</AlertDialogCancel>
          <AlertDialogAction {...confirm} variant={confirm?.variant}>
            {confirm?.label ?? "Proceed"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CommonAlertDialog;
