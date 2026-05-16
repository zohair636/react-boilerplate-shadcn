import type { CommonPopoverProps } from "./common-popover.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CommonPopover = ({
  trigger,
  children,
  open,
  onOpenChange,
  align = "center",
  side = "bottom",
  className,
}: CommonPopoverProps) => {
  if (!trigger || !children) return null;
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent align={align} side={side} className={className}>
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default CommonPopover;
