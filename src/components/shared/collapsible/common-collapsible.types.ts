import type { ReactElement, ReactNode } from "react";

type CollapsibleBasicProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: ReactElement;
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  keepMounted?: boolean;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
};

export interface CollapsibleBasicModeConfig extends CollapsibleBasicProps {
  mode: "basic";
}

export interface CollapsibleComposedModeConfig extends CollapsibleBasicProps {
  mode: "composed";
  beforeTrigger?: ReactNode;
  afterTrigger?: ReactNode;
}

export type CommonCollapsibleProps =
  | CollapsibleBasicModeConfig
  | CollapsibleComposedModeConfig;
