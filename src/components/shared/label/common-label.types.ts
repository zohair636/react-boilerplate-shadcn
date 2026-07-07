import type { LabelHTMLAttributes, ReactNode, Ref } from "react";

export interface CommonLabelProps extends Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "htmlFor" | "required"
> {
  htmlFor?: string;
  label: ReactNode;
  required?: boolean;
  helper?: ReactNode;
  ref?: Ref<HTMLLabelElement>;
}

export type CommonFieldLabelProps = Omit<CommonLabelProps, "helper">;
