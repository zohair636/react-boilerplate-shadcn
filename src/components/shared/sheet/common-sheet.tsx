import type { CommonSheetProps } from "./common-sheet.types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CommonSheet = ({
  open,
  onOpenChange,
  trigger,
  side = "right",
  title,
  description,
  children,
  showCloseButton,
  className,
}: CommonSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger>{trigger}</SheetTrigger>}
      <SheetContent
        side={side}
        showCloseButton={showCloseButton}
        className={className}
      >
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default CommonSheet;
