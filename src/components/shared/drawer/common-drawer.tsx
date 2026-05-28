import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { CommonDrawerProps } from "./common-drawer.types";
import { cn } from "@/lib/utils";
import { CommonButton } from "../button";

const CommonDrawer = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  direction = "right",
  className,
  contentClassName,
  confirm,
  cancel,
}: CommonDrawerProps) => {
  const confirmLabel = confirm?.label || "Submit";
  const cancelLabel = cancel?.label || "Cancel";
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction={direction}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className={className}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div
          className={cn("no scrollbar overflow-y-auto px-4", contentClassName)}
        >
          {children}
        </div>
        <DrawerFooter>
          {confirm && (
            <CommonButton
              {...confirm}
              label={confirmLabel}
              onClick={confirm.onClick}
            />
          )}
          <DrawerClose asChild>
            <CommonButton {...cancel} label={cancelLabel} variant="outline" />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonDrawer;
