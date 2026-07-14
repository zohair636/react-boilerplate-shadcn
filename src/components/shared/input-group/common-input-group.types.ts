import type { HTMLInputTypeAttribute, ReactNode } from "react";

type AlignTypes = "block-end" | "block-start" | "inline-end" | "inline-start";

type BaseProps = {
  id?: string;
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
  startAlign?: AlignTypes;
  endAlign?: AlignTypes;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
  inputContainerClassName?: string;
  inputClassName?: string;
  className?: string;
  mode?: "input" | "textarea";
};

export type SharedFieldProps = Pick<
  BaseProps,
  | "placeholder"
  | "startAlign"
  | "endAlign"
  | "required"
  | "disabled"
  | "value"
  | "onChange"
  | "error"
  | "addonStart"
  | "addonEnd"
  | "inputClassName"
> & {
  fieldId: string;
  errorId?: string;
};

export type InputGroupInputFieldProps = SharedFieldProps & {
  type?: HTMLInputTypeAttribute;
};

export type InputGroupTextareaFieldProps = SharedFieldProps;

export type CommonInputGroupProps =
  | (BaseProps & { mode?: "input"; type?: HTMLInputTypeAttribute })
  | (BaseProps & { mode: "textarea" });
