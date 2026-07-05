import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type {
  CollapsibleBasicModeConfig,
  CollapsibleComposedModeConfig,
  CommonCollapsibleProps,
} from "./common-collapsible.types";

const BasicCollapsible = ({
  trigger,
  triggerClassName,
  keepMounted,
  contentClassName,
  children,
}: CollapsibleBasicModeConfig) => {
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
};

const ComposedCollapsible = ({
  beforeTrigger,
  afterTrigger,
  trigger,
  triggerClassName,
  keepMounted,
  contentClassName,
  children,
}: CollapsibleComposedModeConfig) => {
  return (
    <>
      <CollapsibleTrigger className={triggerClassName}>
        {beforeTrigger}
        {trigger}
        {afterTrigger}
      </CollapsibleTrigger>
      <CollapsibleContent
        keepMounted={keepMounted}
        className={contentClassName}
      >
        {children}
      </CollapsibleContent>
    </>
  );
};

const CommonCollapsible = (props: CommonCollapsibleProps) => {
  const { open, onOpenChange, defaultOpen, disabled, className, mode } = props;
  return (
    <Collapsible
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      disabled={disabled}
      className={className}
    >
      {mode === "basic" ? (
        <BasicCollapsible {...props} />
      ) : (
        <ComposedCollapsible {...props} />
      )}
    </Collapsible>
  );
};

export default CommonCollapsible;
