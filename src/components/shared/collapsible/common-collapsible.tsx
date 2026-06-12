import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { CommonCollapsibleProps } from "./common-collapsible.types";

const CommonCollapsible = (props: CommonCollapsibleProps) => {
  const {
    open,
    onOpenChange,
    trigger,
    defaultOpen = false,
    disabled = false,
    keepMounted = true,
    children,
    mode,
    className,
    contentClassName,
    triggerClassName,
  } = props;

  const renderItems = () => {
    if (mode === "basic") {
      return (
        <>
          <CollapsibleTrigger className={triggerClassName}>
            {trigger}
          </CollapsibleTrigger>
          <CollapsibleContent
            keepMounted={keepMounted}
            className={contentClassName}
          >
            {children}
          </CollapsibleContent>
        </>
      );
    }
    if (mode === "composed") {
      const { beforeTrigger, afterTrigger } = props;
      return (
        <>
          {beforeTrigger}
          <CollapsibleTrigger className={triggerClassName}>
            {trigger}
          </CollapsibleTrigger>
          {afterTrigger}
          <CollapsibleContent
            keepMounted={keepMounted}
            className={contentClassName}
          >
            {children}
          </CollapsibleContent>
        </>
      );
    }
  };
  return (
    <Collapsible
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      disabled={disabled}
      className={className}
    >
      {renderItems()}
    </Collapsible>
  );
};

export default CommonCollapsible;
