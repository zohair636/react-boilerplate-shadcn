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
      <TooltipTrigger render={trigger} className={triggerClassName} />
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
