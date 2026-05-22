import type { TextareaHTMLAttributes } from "react";

export interface CommonTextAreaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
> {
  label: string;
  description?: string;
  error?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  value?: string;
  onChange?: (value: string) => void;
}
