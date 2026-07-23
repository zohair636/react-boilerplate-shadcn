import type { AccordionRootProps } from "@base-ui/react";
import type { ReactElement, ReactNode } from "react";

export interface AccordionOption {
  value: string;
  trigger: ReactElement;
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
