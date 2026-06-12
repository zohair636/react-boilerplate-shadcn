import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { CommonCollapsibleProps } from "./common-collapsible.types";

const CommonCollapsible = ({
  open,
  onOpenChange,
  trigger,
  children,
  className,
  contentClassName,
}: CommonCollapsibleProps) => {
  return (
    <Collapsible open={open} onOpenChange={onOpenChange} className={className}>
      <CollapsibleTrigger>{trigger}</CollapsibleTrigger>
      <CollapsibleContent className={contentClassName}>
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CommonCollapsible;
