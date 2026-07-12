import type { HTMLInputTypeAttribute, ReactNode } from "react";

export interface CommonInputGroupProps {
  id?: string;
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  startAlign?: "block-end" | "block-start" | "inline-end" | "inline-start";
  endAlign?: "block-end" | "block-start" | "inline-end" | "inline-start";
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
  className?: string;
  mode?: "input" | "textarea";
}

export type SharedFieldProps = Pick<
  CommonInputGroupProps,
  | "placeholder"
  | "startAlign"
  | "endAlign"
  | "required"
  | "disabled"
  | "value"
  | "onChange"
  | "error"
> & {
  fieldId: string;
  errorId?: string;
};

export type InputGroupInputFieldProps = SharedFieldProps & {
  type?: HTMLInputTypeAttribute;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
};
