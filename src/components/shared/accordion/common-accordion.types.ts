import type { AccordionRootProps } from "@base-ui/react";
import type { ReactNode } from "react";

export interface AccordionOption {
  value: string;
  trigger: ReactNode;
  content: ReactNode;
}

type AccordionBaseProps = Omit<
  AccordionRootProps,
  "value" | "onValueChange" | "multiple"
> & {
  options: AccordionOption[];
  className?: string;
};

type SingleAccordionProps = {
  multiple?: false;
  value?: string;
  onValueChange?: (value: string) => void;
};

type MultipleAccordionProps = {
  multiple: true;
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

export type CommonAccordionProps = AccordionBaseProps &
  (SingleAccordionProps | MultipleAccordionProps);