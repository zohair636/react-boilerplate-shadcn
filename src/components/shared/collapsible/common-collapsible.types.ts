import type { ReactNode } from "react";

interface CollapsibleBasicModeConfig extends CollapsibleBasicProps {
  mode: "basic";
}

interface CollapsibleComposedModeConfig extends CollapsibleBasicProps {
  mode: "composed";
  beforeTrigger?: ReactNode;
  afterTrigger?: ReactNode;
}

type CollapsibleBasicProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  keepMounted?: boolean;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
};

export type CommonCollapsibleProps =
  | CollapsibleBasicModeConfig
  | CollapsibleComposedModeConfig;
