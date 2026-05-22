import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { CommonTooltipProps } from "./common-tooltip.types";

const CommonToolTip = ({
  trigger,
  children,
  side,
  open,
  onOpenChange,
  sideOffset,
  contentClassName,
  triggerClassName
}: CommonTooltipProps) => {
  return (
    <Tooltip open={open} onOpenChange={onOpenChange}>
      <TooltipTrigger className={triggerClassName}>{trigger}</TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        className={contentClassName}
      >
        {children}
      </TooltipContent>
    </Tooltip>
  );
};

export default CommonToolTip;
