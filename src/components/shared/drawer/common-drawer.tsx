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
  nested,
  direction = "right",
  modal = true,
  className,
  contentClassName,
  confirm,
  cancel,
}: CommonDrawerProps) => {
  const confirmLabel = confirm?.label || "Submit";
  const cancelLabel = cancel?.label || "Cancel";
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection={direction}
      showSwipeHandle={direction === "down" ? true : false}
      modal={modal}
    >
      <DrawerTrigger render={trigger} />
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
          {nested}
          {confirm && (
            <CommonButton
              {...confirm}
              label={confirmLabel}
              onClick={confirm.onClick}
            />
          )}
          <DrawerClose
            render={
              <CommonButton {...cancel} label={cancelLabel} variant="outline" />
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonDrawer;
