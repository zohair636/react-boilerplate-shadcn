import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CommonDialogProps } from "./common-dialog.types";
import CommonButton from "../button";
import { cn } from "@/lib/utils";

const CommonDialog = ({
  trigger,
  title,
  description,
  cancel,
  confirm,
  children,
  contentClassName,
  footerClassName,
  showCloseControls,
  open,
  onOpenChange,
}: CommonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent showCloseButton={showCloseControls}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className={cn("py-4", contentClassName)}>{children}</div>
        {!!showCloseControls && (
          <DialogFooter className={footerClassName}>
            <DialogClose
              render={
                <CommonButton
                  label={cancel?.label ?? "Cancel"}
                  {...cancel}
                  variant="outline"
                />
              }
            />
            {confirm && <CommonButton variant="default" {...confirm} />}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
